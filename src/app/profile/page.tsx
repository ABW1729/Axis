import { getServerSession } from 'next-auth';
import { authOptions } from "@/lib/auth";
import Profile from "./Profile"
export default async function Page() {
    let completeProfile,User,Events,Error=false;
    const isDataComplete = (obj: any) => {
        for (const key in obj) {
          if (obj.hasOwnProperty(key) && !obj[key] && obj[key] !== 0) {
            return false;
          }
        }
        return true;
      };
  const session=await getServerSession(authOptions);
  try {

if (session) {
        const res = await fetch("https://axis-3.vercel.app/api/getProfile", {
          method: "GET",
          headers:{
            "email":session?.user?.email ?? "",
            "name":session?.user?.name ?? ""
          }
        });

        if (res.status === 201) {
         completeProfile=1;
        } else if (res.status === 200) {
          const data = await res.json();
           User = data.user;
          Events=User.events;
          if (isDataComplete(User)) {
           completeProfile=1;
          } else {
            completeProfile=2;
          }
        }
      }
      else{
        Error=true;
      }
    }
  catch (error) {
   Error=true;
  } 

  return <Profile user={User} Events={Events} cp={completeProfile ?? 1} error={Error}/>
}

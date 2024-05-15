import Events from "./Events"
// export const dynamic='force-dynamic'
import { getServerSession } from 'next-auth';
import { authOptions } from "@/lib/auth";
export default async function Page() {
  const userId=await getServerSession(authOptions);

   let Event;
    try {
      const response = await fetch('https://axis-3.vercel.app/api/getEvents', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'event-type':1
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      
      const events = await response.json();
       Event= events && events.events;
    } catch (error) {
      console.log('Error fetching events:', error);
    }

    let User;
  if(userId){
   try {
        const res = await fetch("https://axis-3.vercel.app/api/checkprofile", {
          method: "GET",
          headers:{
                "email":userId?.user.email
          }
        });

        if (res.status === 200) {
          const data = await res.json();
         User = data.user;
          
        }
      } catch (error) {
        console.log("Error ", error);
      }
    }
    else{
      User={};
    }
      
      return(
        <Events Events={Event} dbUser={User}/>
      )

  }

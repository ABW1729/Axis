import Workshop from "./Workshop"
import { getServerSession } from 'next-auth';
import { authOptions } from "@/lib/auth";

// export const dynamic='force-dynamic'

export default async function Page() {
  const userId=await getServerSession(authOptions);

   let workshop={};
    try {
      const response = await fetch('https://axis-3.vercel.app/api/getEvents', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'event-type':2
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      
      const events = await response.json();
      workshop= events && events.events;
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
        <Workshop Events={workshop} dbUser={User}/>
      )

  }

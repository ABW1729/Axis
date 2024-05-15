
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from 'uuid';

const newPassword = Math.random().toString().slice(-6);


const changePassword=async(Email:String)=>{
    const hashed_password = await hash(newPassword, 12);
    const email=Email;
    const token=hashed_password;
    const data={email,token};
    try {   
        const res=await fetch("https://axis-3.vercel.app/api/change-password", {
                method: "POST",
                body: JSON.stringify(data),
              });
      
      } catch (error) {
            console.log("Error ", error);
          }
}

const handleSubmit =async  (Email:String) => {
const email=Email;
const text=  `<p>Here is your newly generated password.Use it to login</p>
<p><h1><strong>${newPassword}</strong></h1></p>
`
const subject=   'Reset Password-AXIS VNIT';

const maildata={subject,email,text};


  try {   
    const res=await fetch("https://axis-3.vercel.app/api/mail-service", {
            method: "POST",
            body: JSON.stringify(maildata),
          });
  
  } catch (error) {
        console.log("Cant send mail ", error);
      }
};


export async function POST(req: Request) {
  try {
    const client=new MongoClient(process.env.MONGODB_URI ?? ' ' 
);
 await client.connect();
 const db=client.db("users");

 const {email} = (await req.json()) as {
   
    email: string;
  };

  

 const User = await db.collection('users').findOne({ email:email });

 if (!User) {
      
       return NextResponse.json({message:"Cant find User.Please Sign-up"},{status:400});
}
else if(User && !User.isActive){
          return NextResponse.json({
            message:"Please confirm your account first"
          },{
            status:202,
          })
}

else{
 await changePassword(email);
 await handleSubmit(email);
return NextResponse.json({
        message:"Password Reset Successfully"
    }, {
    status: 200,
    });
}
  }
catch (error: any) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}

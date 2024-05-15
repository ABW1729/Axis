
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from 'uuid';

const generateVerificationToken = () => {
  // Generate a unique verification token using UUID v4
  return uuidv4();
};
const token = generateVerificationToken();


const handleSubmit =async  (Email:String) => {
const email=Email;
const text=  `<p>Please click the following link to verify your email:</p>
<p><a href="https://axis-3.vercel.app/verify?token=${token}">Verify Email</a></p>
`
const subject=   'Email Verfication-AXIS VNIT';

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

 const { name, email, password } = (await req.json()) as {
    name: string;
    email: string;
    password: string;
  };

  const hashed_password = await hash(password, 12);
  const user =  {
      name,
      email: email.toLowerCase(),
      password: hashed_password,
    }

 const User = await db.collection('users').findOne({ email:user.email });

 if (!User) {
       await db.collection("users").insertOne({email:user.email,Name:user.name,password:user.password,phone:"", address:"", state:"",city:"", yearOfStudy:"" ,events:[],isActive:false,Token:token});
       await handleSubmit(user.email)
       return NextResponse.json({message:"User Registered Succesfully.Check your Email"},{status:200});
}
else if(User && !User.isActive){
          return NextResponse.json({
            message:"Please confirm your account"
          },{
            status:202,
          })
}
 
return NextResponse.json({
        message:"User Already Registered.Please Sign-in"
    }, {
    status: 201,
    });
}
catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    );
  }
}

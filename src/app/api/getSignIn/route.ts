import { authOptions } from "@/lib/auth";
import { MongoClient } from 'mongodb'
import {headers} from "next/headers"
import { type NextRequest } from "next/server";
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { Session } from "@clerk/nextjs/server";

export async function GET(req:Request) {
  try{

const headersList = headers()
const Email = headersList.get('email');



//   const user = userId ? await clerkClient.users.getUser(userId) : null;
// const email=user?.emailAddresses[0];
// const Email=email?.emailAddress;
// const fn=user?.firstName ?? "";
// const ln=user?.lastName ?? "";
// console.log(user);
const client=new MongoClient(process.env.MONGODB_URI ?? ' ' 
);
 await client.connect();
 const db=client.db("users");

 const User = await db.collection('users').findOne({ email:Email });

 if (!User) {
       return NextResponse.json({},{status:201});
}
 
return NextResponse.json({
        user :User
    }, {
    status: 200,
    });
}

catch (error) {
  return NextResponse.json(
    { message:"Server Error" },
    { status: 500 }
  );
}
}

import { authOptions } from "@/lib/auth";
import { MongoClient } from 'mongodb'
import {headers} from "next/headers"
import { type NextRequest } from "next/server";
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';


export async function GET(req:NextRequest,res:NextResponse) {
  try{
const userId1=await getServerSession(authOptions);

const headersList = headers()
const Email = headersList.get('email') ?? (userId1 && userId1.user && userId1.user.email);
const Name = headersList.get('name') ?? (userId1 && userId1.user && userId1.user.name);


const client=new MongoClient(process.env.MONGODB_URI ?? ' ' 
);
 await client.connect();
 const db=client.db("users");

 const User = await db.collection('users').findOne({ email:Email });

 if (!User) {
      
       return NextResponse.json({message:"Bad Request"},{status:400});
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

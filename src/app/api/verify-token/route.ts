import { authOptions } from "@/lib/auth";
import { MongoClient } from 'mongodb'
import {headers} from "next/headers"
import { type NextRequest } from "next/server";
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { Session } from "@clerk/nextjs/server";

export async function GET(req:NextRequest,res:NextResponse) {
  try{


const headersList = headers()
const token = headersList.get('token') 

const client=new MongoClient(process.env.MONGODB_URI ?? ' ' 
);
 await client.connect();
 const db=client.db("users");
 const filter = {Token:token};
 const updateDoc = {
    $set: {
    isActive:true,
    }
};
 const User = await db.collection('users').findOne({ Token:token });

 if (!User) {
       return NextResponse.json({message:"Bad Request"},{status:400});
}
else{
    await db.collection("users").findOneAndUpdate(filter, updateDoc);
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

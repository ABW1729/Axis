import { NextResponse } from "next/server";
import { MongoClient } from 'mongodb'
import {headers} from "next/headers"
export async function GET(req:Request) {
    try {
        const client=new MongoClient(process.env.MONGODB_URI ?? ' ' 
        );
         await client.connect();
     const db=client.db("users");

     const headersList = headers()
     const Email = headersList.get('email')
  console.log(Email);

      let events;
    const  user= await db.collection('users').findOne({ email:Email});
    events=user?.events ?? [];
    
      return NextResponse.json({events }, { status: 200 });
    } catch (error) {
     
      return NextResponse.json(
        { message:error },
        { status: 500 }
      );
    }
  }
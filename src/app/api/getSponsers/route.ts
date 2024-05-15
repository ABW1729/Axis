import { NextResponse } from "next/server";
import { MongoClient } from 'mongodb'
export const revalidate = 0;
export async function GET(req:Request) {
    try {
        const client=new MongoClient(process.env.MONGODB_URI ?? ' ' 
        );
         await client.connect();
     const db=client.db("sponsors");
     const events = await db.collection('sponsors').find().toArray();

    return  NextResponse.json(
        {events },
        { status: 200 }
      );
    } catch (error) {

      return NextResponse.json(
        { message:error },
        { status: 500 }
      );
    }
  }

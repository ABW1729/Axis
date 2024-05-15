import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from 'mongodb'
import {headers} from "next/headers"

export async function GET(req:Request) {
    try {
        const client=new MongoClient(process.env.MONGODB_URI ?? ' ' 
        );
     await client.connect();
     const db=client.db("events");

     const headersList = headers()
     const eventid = headersList.get('event-id')
     if (!eventid) {
        return  NextResponse.json({ message: "Bad Request" }, { status: 400 });
      }
    
      const objectId = new ObjectId(eventid);
      const event = await db.collection('events').findOne({ _id: objectId });
  
    if (!event) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }
     
  
      return NextResponse.json({users:event.userIds }, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message:"Server Error" },
        { status: 500 }
      );
    }
  }
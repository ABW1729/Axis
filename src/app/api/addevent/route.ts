import { NextResponse } from "next/server";
import { MongoClient } from 'mongodb'


export async function POST(req:Request) {
  try {
    const {date,desp,price,evename,url,img1,img2,img3,category,pdf,isteam,event_wor,participantcount}= await req.json();
    // const newData = new Events(req.json());
   const client=new MongoClient(process.env.MONGODB_URI ?? '');
   await client.connect();
   const db=client.db("events");
   const userIds=[];
   if(category!="Workshop"){
   await db.collection("events").insertOne({date,desp,evename,url,img1,img2,img3,category,pdf,isteam,event_wor,participantcount,showFlag:true,userIds:[]});
   }else{
    await db.collection("events").insertOne({date,desp,price,evename,url,img1,img2,img3,category,pdf,isteam,event_wor,participantcount,showFlag:true,userIds:[]});

   }

    return NextResponse.json({ message: "Event Added." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Event addition failed" },
      { status: 500 }
    );
  }
}
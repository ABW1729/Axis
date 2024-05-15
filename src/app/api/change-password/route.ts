import { NextResponse } from "next/server";
import { MongoClient } from 'mongodb'


export async function POST(req:Request) {
  try {
    const {email,token}= await req.json();
    // const newData = new Events(req.json());
   const client=new MongoClient(process.env.MONGODB_URI ?? '');
   await client.connect();
   const db=client.db("users");
  
   const filter = { email };
   const updateDoc = {
    $set: {
     password:token
    }
  };
  await db.collection("users").findOneAndUpdate(filter, updateDoc);
   

    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid Request" },
      { status: 500 }
    );
  }
}

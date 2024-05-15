import { NextResponse } from "next/server";
import { MongoClient } from 'mongodb'


export async function POST(req:Request) {
  try {
    const { Name, number, email, address, state,city, yearOfStudy}= await req.json();

   const client=new MongoClient(process.env.MONGODB_URI ?? '');
   await client.connect();
   const db=client.db("users");
   const userIds=[];
   const filter = { email };
   const updateDoc = {
    $set: {
      Name:Name,
      phone: number,
      address: address,
      state:state,
      city:city,
      yearOfStudy: yearOfStudy
    }
  };
  await db.collection("users").findOneAndUpdate(filter, updateDoc);

    return NextResponse.json({ message: "" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "" },
      { status: 500 }
    );
  }
}
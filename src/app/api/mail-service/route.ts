import { sendMail } from "../../../service/mailservice";
import { NextResponse } from 'next/server';
export async function POST(req:Request) {
  try {
    const {subject,email,text}=await req.json();

     const res=  await sendMail(
        subject,email,text

              );
    console.log(res.message)
       return NextResponse.json( { message:"SUCCESS" },{status:200})
     
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message:error },
      { status: 500 }
    );
  }
};


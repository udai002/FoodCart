import mongoose from "mongoose";
import { connectionUrl } from "@/lib/db";
import { NextResponse } from "next/server";

export async function  GET(){
    await mongoose.connect(connectionUrl)
    
    return NextResponse.json({result:true})
}
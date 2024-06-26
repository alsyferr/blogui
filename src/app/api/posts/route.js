
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"

// FETCH ALL PRODUCTS

export const GET = async () => {




    try {   
    const posts = await prisma.post.findMany()

    return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }), 
        {status: 500}
        );
    }
};
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"


export async function GET (request, {params} )  {
    const id = params.id;

    try {
       const post = await prisma.post.findUnique({
        where: {
          id: parseInt(id)
        }
      });
        return new NextResponse(
            JSON.stringify(post), 
        {status: 200} 
        );
        
    } catch (err) {
      
        return new NextResponse(JSON.stringify({message:"Something went wrong!"}), 
        {status: 500} 
        );
    }
};

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { MemberRole } from "@prisma/client";
import { NextResponse } from "next/server";

export async function DELETE(req:Request,{params}:{params:{serverId:string}}){
    try {
        const profile=await currentProfile();
        const {searchParams}=new URL(req.url);
        const serverId=searchParams.get("serverId");
        if(!profile){
            return new Response('Unauthorized', {status:401});
        }
        if(!serverId){
            return new Response("Server ID is required", { status: 400 });
        }
        const server=await db.server.update({
            where:{
                id:serverId,
                members:{
                    some:{
                        role:{
                            in:[MemberRole.GUEST],
                        }
                    }
                },
            },data:{
                members:{
                    delete:{
                        id:profile.id,
                        profileId:{
                            not:profile.id
                        }
                    }
                }
            }
        })
        return NextResponse.json(server);
    } catch (error) {
        console.log("[SERVER_ID_PATCH_LEAVE]",error);
        return new NextResponse("Internal Error",)
    }
}
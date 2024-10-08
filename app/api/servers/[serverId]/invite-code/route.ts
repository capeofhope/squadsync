import {v4 as uuidv4} from "uuid"
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(req:Request,{params}:{params:{serverId:string}}) {
    try {
        const profile=await currentProfile();
        if(!profile){
            return new NextResponse("Unauthorized",{status:401});
        }
        if(!params.serverId){
            return new NextResponse("Server ID is missing.",{status:400});
        }
        const server=await db.server.update({
            where:{id:params.serverId,
                profileId:profile.id,
            },
            data:{
                invitecode:uuidv4()
            }
        })
        return NextResponse.json(server);
    } catch (error) {
        console.log("[SERVER_ID_INVITE_CODE]",error);
        return new NextResponse("Internal Error",{status:500})
    }
}
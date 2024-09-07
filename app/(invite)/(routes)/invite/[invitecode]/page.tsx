import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface InviteCodePageProps {
  params: {
    invitecode: string;
  };
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
  const profile = await currentProfile();
  if (!profile) {
    return auth().redirectToSignIn();
  }
  if (!params.invitecode) {
    return redirect("/");
  }
  const exisitingServer = await db.server.findFirst({
    where: {
      invitecode: params.invitecode,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  if (exisitingServer) {
    return redirect(`/servers/${exisitingServer.id}`);
  }
  const server = await db.server.update({
    where: {
      invitecode: params.invitecode,
    },
    data: {
      members: {
        create: [
          {
            profileId: profile.id,
          },
        ],
      },
    },
  });
  if(server){
    return redirect(`/servers/${server.id}`)
  }
  return <div>InviteCodePage</div>;
};

export default InviteCodePage;

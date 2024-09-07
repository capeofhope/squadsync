import { InitialModal } from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { intialProfile } from "@/lib/intial-profile";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const SetupPage = async () => {
  const profile = await intialProfile();
  if(!profile){
    return auth().redirectToSignIn();
  }
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });
  if (server) {
    return redirect(`/servers/${server.id}`);
  }
  return <InitialModal/>;
};

export default SetupPage;

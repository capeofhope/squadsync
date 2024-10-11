import ChatHeader from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { MediaRoom } from "@/components/media-room";
import { getOrCreateConversation } from "@/lib/conversation";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

interface MemberIdPageProps {
  params: {
    memberId: string;
    serverId: string;
  };
  searchParams: {
    video?: boolean;
  };
}
const MemberIdPage = async ({ params,searchParams }: MemberIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return auth().redirectToSignIn();
  }

  const currentMember = await db.member.findFirst({
    where: {
      serverId: params.serverId,
      profileId: profile.id,
    },
    include: {
      profile: true,
    },
  });

  if (!currentMember) {
    return redirect("/");
  }

  const conversation = await getOrCreateConversation(
    currentMember.id,
    params.memberId
  );

  if (!conversation) {
    return redirect(`/servers/${params.serverId}`);
  }
  const { memberOne, memberTwo } = conversation;
  const otherMember =
    memberOne.profileId === profile.id ? memberTwo : memberOne;
  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        serverTd={params.serverId}
        type="conversation"
        name={otherMember.profile.name}
        imageUrl={otherMember.profile.imageUrl}
      />
      {searchParams.video && (
        <MediaRoom chatId={conversation.id} audio={true} video={true} />
      )}
      {!searchParams.video && (
        <>
        <ChatMessages
        member={currentMember}
        name={otherMember.profile.name}
        chatId={conversation.id}
        apiUrl={"/api/direct-messages"}
        socketUrl={"/api/socket/direct-messages"}
        socketQuery={{ conversationId: conversation.id }}
        paramKey={"conversationId"}
        paramValue={conversation.id}
        type={"conversation"}
      />
      <ChatInput
        name={otherMember.profile.name}
        apiUrl="/api/socket/direct-messages"
        query={{
          conversationId: conversation.id,
        }}
        type="conversation"
      />
        </>
      )}
    </div>
  );
};
export default MemberIdPage;

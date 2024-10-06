import { Hash} from "lucide-react";
import { MobileToggle } from "../mobile-toggle";

interface ChatHeaderProps {
  serverTd: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}
const ChatHeader = ({ serverTd, name, type, imageUrl }: ChatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverTd}/>
      {type === "channel" && (
        <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />
      )}
      <p className="font-semibold text-md text-black dark:text-white">{name}</p>
    </div>
  );
};
export default ChatHeader;

"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import qs from "query-string"
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "../ui/button";
import { useOrigin } from "@/hooks/use-origin";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export const LeaveServerModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { server } = data;
  const router = useRouter();
  const origin = useOrigin();
  const isModalOpen = isOpen && type === "leaveServer";
  const [isLoading, setIsLoading] = useState(false);
  const onClick = async () => {
    try {
      setIsLoading(true);
      const url = qs.stringifyUrl({
        url: `/api/servers/${server?.id}/leave`,
        query: {
          serverId: server?.id,
        },
      });
      await axios.delete(url);
      onClose();
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Leave Server
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Are you sure you want to leave{" "}
            <span className="font-semibold text-indigo-500">
              {server?.name}
            </span>
            ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="bg-gray-100 px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <Button disabled={isLoading} onClick={onClose} variant="ghost">
              Cancel
            </Button>
            <Button disabled={isLoading} onClick={onClick} variant={"primary"}>
              Confirm
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

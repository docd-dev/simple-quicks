import AutoResizeTextarea from "@/components/AutoResizeTextarea";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Close } from "@/lib/icon-library";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/stores/app.stores";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MessageFooter() {
  const { chatRoom, replyId, setReplyId } = useAppStore();
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log(replyId);
  }, [replyId]);

  return (
    <div className="p-5 pt-6">
      {chatRoom?.isSupport && (
        <div className="mb-2.5 flex items-center p-2.5 bg-[#E9F3FF] rounded-[5px]">
          <Image
            src="/images/loading-blue.png"
            alt="loading"
            width={34.41}
            height={34.41}
            quality={100}
            loading="eager"
            className="animate-spin"
          />
          <p className="ml-2.5 text-[#4F4F4F] font-bold">
            Please wait while we connect you with one of our team ...
          </p>
        </div>
      )}

      <div className="flex items-end gap-3.5">
        <div className="flex flex-col flex-1">
          {replyId && (
            <div className="bg-[#F2F2F2] px-4 py-3 border border-[#828282] rounded-t-md relative">
              <div
                className="absolute right-4 top-3 cursor-pointer"
                onClick={() => {
                  setReplyId(null);
                }}
              >
                <Close fill="currentColor" className="size-3 text-[#4F4F4F]" />
              </div>
              <div className="flex flex-col">
                <h6 className="text-sm text-[#4F4F4F] font-bold">
                  Replying to {replyId.sender.name}
                </h6>
                <p className="text-[#4F4F4F] mt-2">{replyId.message}</p>
              </div>
            </div>
          )}
          <AutoResizeTextarea
            id="messageInput"
            value={message}
            onChange={setMessage}
            className={cn("ml-0 px-4 py-3 border-[#828282] border", {
              "rounded-t-none border-t-0": replyId,
            })}
            rows={1}
            placeholder="Type a new message"
          />
        </div>
        <Button size={"lg"} className="min-h-[3.125rem] font-bold text-base">
          Send
        </Button>
      </div>
    </div>
  );
}

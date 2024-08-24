import AutoResizeTextarea from "@/components/AutoResizeTextarea";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAppStore } from "@/stores/app.stores";
import Image from "next/image";
import { useState } from "react";

export default function MessageFooter() {
  const { chatRoom } = useAppStore();
  const [message, setMessage] = useState("");

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
        <AutoResizeTextarea
          id="messageInput"
          value={message}
          onChange={setMessage}
          className="ml-0 px-4 py-3 border-[#828282] border"
          rows={1}
          placeholder="Type a new message"
        />
        <Button size={"lg"} className="min-h-[3.125rem] font-bold text-base">
          Send
        </Button>
      </div>
    </div>
  );
}

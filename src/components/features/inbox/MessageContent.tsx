import { MESSAGE_LIST } from "@/app/constants/message-list";
import MessageDetailCard from "./MessageDetailCard";
import { userId } from "@/lib/utils";
import { DateDivider, NewMessageDivider } from "./Divider";
import { Fragment, useRef, useState } from "react";
import { DateTime } from "luxon";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import MessageHeader from "./MessageHeader";
import useScrollPosition from "@/hooks/useScrollPosition";

export default function MessageContent() {
  const chatRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  let tempDate = "";
  const setTempDate = (date: string) => {
    const format = DateTime.fromSQL(date).toFormat("dd LLLL yyyy");
    tempDate = format;

    return null;
  };

  const scrollToBottom = (
    item: HTMLDivElement | null,
    smooth?: ScrollBehavior
  ) => {
    item?.scrollTo({
      top: item.scrollHeight,
      behavior: smooth,
    });
  };

  // HOOK FOR SCROLL EVENT
  useScrollPosition(
    chatRef,
    () => {
      // if scroll on the bottom
      setIsAtBottom(true);
    },
    () => {
      // if scroll on the top
    },
    () => {
      // if scroll not on the top or bottom
      setIsAtBottom(false);
    }
  );

  return (
    <div className="flex flex-col flex-1 h-full">
      {/* chat header */}
      <MessageHeader />
      <div className="flex-1 px-5 pt-3.5 overflow-hidden relative">
        {/* chat container */}
        <div
          ref={chatRef}
          className="h-full overflow-y-auto px-2 flex flex-col custom-scroll"
        >
          {MESSAGE_LIST.map((item, key) => (
            <Fragment key={key}>
              {tempDate !==
                DateTime.fromSQL(item.date).toFormat("dd LLLL yyyy") && (
                <DateDivider date={item.date} />
              )}
              {setTempDate(item.date)}
              {item.isNew && <NewMessageDivider />}
              <MessageDetailCard
                item={item}
                isUser={item.sender.id === userId}
              />
            </Fragment>
          ))}
        </div>

        {/* scroll to new message and dissapper after reach bottom */}
        {!isAtBottom && (
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 px-3 py-2 rounded-[0.313rem] bg-[#E9F3FF] text-[#2F80ED] font-bold cursor-pointer hover:bg-blue-100 duration-150"
            onClick={() => scrollToBottom(chatRef.current, "smooth")}
          >
            New Message
          </div>
        )}
      </div>
      {/* chat footer and input new message */}
      <div className="p-5 pt-6 flex items-end gap-3.5">
        <Textarea
          placeholder="Type a new message"
          className="text-base focus-visible:ring-0 focus-visible:outline-none focus-visible:ring-offset-0 border-[#828282] rounded-md placeholder:text-[#333333] px-4 py-3 min-h-10 resize-none"
          rows={1}
        />

        <Button size={"lg"} className="min-h-[3.125rem] font-bold text-base">
          Send
        </Button>
      </div>
    </div>
  );
}

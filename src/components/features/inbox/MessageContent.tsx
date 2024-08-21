import {
  MESSAGE_LIST,
  MESSAGE_SUPPORT_LIST,
} from "@/app/constants/message-list";
import MessageDetailCard from "./MessageDetailCard";
import { userId } from "@/lib/utils";
import { DateDivider, NewMessageDivider } from "./Divider";
import { Fragment, useRef, useState } from "react";
import { DateTime } from "luxon";
import MessageHeader from "./MessageHeader";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useAppStore } from "@/stores/app.stores";
import MessageFooter from "./MessageFooter";

export default function MessageContent() {
  const chatRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const { chatRoom } = useAppStore();

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
    <section className="flex flex-col flex-1 h-full">
      {/* chat header */}
      <MessageHeader />
      <div className="flex-1 px-5 pt-3.5 overflow-hidden relative">
        {/* chat container */}
        <div
          ref={chatRef}
          className="h-full overflow-y-auto px-2 flex flex-col custom-scroll"
        >
          {(chatRoom?.isSupport ? MESSAGE_SUPPORT_LIST : MESSAGE_LIST).map(
            (item, key) => (
              <Fragment key={key}>
                {tempDate !==
                  DateTime.fromSQL(item.date).toFormat("dd LLLL yyyy") &&
                  key !== 0 && <DateDivider date={item.date} />}
                {setTempDate(item.date)}
                {item.isNew && <NewMessageDivider />}
                <MessageDetailCard
                  item={item}
                  isUser={item.sender.id === userId}
                />
              </Fragment>
            )
          )}
        </div>

        {/* scroll to new message and dissapper after reach bottom */}
        {!isAtBottom && !chatRoom?.isSupport && (
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 px-3 py-2 rounded-[0.313rem] bg-[#E9F3FF] text-[#2F80ED] font-bold cursor-pointer hover:bg-blue-100 duration-150"
            onClick={() => scrollToBottom(chatRef.current, "smooth")}
          >
            New Message
          </div>
        )}
      </div>
      {/* chat footer and input new message */}
      <MessageFooter />
    </section>
  );
}

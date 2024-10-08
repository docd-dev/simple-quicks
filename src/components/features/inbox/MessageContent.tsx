import { Message } from "@/app/constants/message-list";
import MessageDetailCard from "./MessageDetailCard";
import { sleep, userId } from "@/lib/utils";
import { DateDivider, NewMessageDivider } from "./Divider";
import { Fragment, useEffect, useRef, useState } from "react";
import { DateTime } from "luxon";
import MessageHeader from "./MessageHeader";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useAppStore } from "@/stores/app.stores";
import MessageFooter from "./MessageFooter";
import useMounted from "@/hooks/useMounted";
import { useQuery } from "@tanstack/react-query";
import ContentLoading from "../ContentLoading";

interface MessageContentProps {}

const fetchData = async (roomId: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/messages`);

    const res: Message[] = await response.json();
    return res.filter((item) => item.room_id === roomId);
  } catch (error) {
    return [];
  }
};

export default function MessageContent({}: MessageContentProps) {
  const mounted = useMounted();
  const chatRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const { chatRoom } = useAppStore();

  const { data: chat, isLoading } = useQuery({
    queryKey: ["chatList", chatRoom?.id],
    queryFn: () => fetchData(chatRoom?.id!),
    enabled: mounted && !!chatRoom?.id,
  });

  const [items, setItems] = useState<Message[]>([]);

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

  const readAll = async (list: Message[]) => {
    if (!chat) return;
    await sleep(500);
    const filterItems = list.map((item) => ({
      ...item,
      isNew: false,
    }));

    setItems(filterItems);
  };

  useEffect(() => {
    if (!mounted) return;
    scrollToBottom(chatRef.current);
    setItems(chat || []);
    readAll(chat!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, chat]);

  // HOOK FOR SCROLL EVENT
  useScrollPosition(
    chatRef,
    () => {
      // if scroll on the bottom
      setIsAtBottom(true);
    },
    () => {
      // if scroll on the top
      setIsAtBottom(false);
    },
    () => {
      // if scroll not on the top or bottom
      setIsAtBottom(false);
    }
  );

  return (
    <section className="flex flex-col flex-1 h-full">
      {isLoading ? (
        <ContentLoading text="Loading Chat List ..." />
      ) : (
        <>
          {/* chat header */}
          <MessageHeader />
          <div className="flex-1 px-5 pt-3.5 overflow-hidden relative">
            {/* chat container */}
            <div
              ref={chatRef}
              className="h-full overflow-y-auto px-2 flex flex-col custom-scroll"
            >
              {items.map((item, key) => (
                <Fragment key={key}>
                  {tempDate !==
                    DateTime.fromSQL(item.date).toFormat("dd LLLL yyyy") &&
                    key !== 0 && <DateDivider date={item.date} />}
                  {setTempDate(item.date)}
                  {item.isNew && <NewMessageDivider />}
                  <MessageDetailCard
                    item={item}
                    isUser={item.sender.id === userId}
                    list={items}
                  />
                </Fragment>
              ))}
            </div>

            {/* scroll to new message and dissapper after reach bottom */}
            {!isAtBottom &&
              !chatRoom?.isSupport &&
              items.filter((item) => item.isNew).length > 0 && (
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
        </>
      )}
    </section>
  );
}

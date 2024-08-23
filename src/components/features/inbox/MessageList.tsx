import ContentLoading from "../ContentLoading";
import SearchInbox from "./Search";
import { INBOX_LIST, InboxItem } from "@/app/constants/inbox-list";
import MessageCard from "./MessageCard";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import useMounted from "@/hooks/useMounted";

export type MessageListProps = {
  loading?: boolean;
  onClick?: (chat: InboxItem) => void;
};

const fetchData = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/inbox`);

    const res: InboxItem[] = await response.json();
    return res;
  } catch (error) {
    return [];
  }
};

export default function MessageList({
  loading = true,
  onClick,
}: MessageListProps) {
  const mounted = useMounted();
  const { data: inbox, isLoading } = useQuery({
    queryKey: ["inbox"],
    queryFn: () => fetchData(),
    enabled: mounted,
  });

  return (
    <>
      <SearchInbox />
      {loading || isLoading ? (
        <ContentLoading text="Loading Chats ..." />
      ) : (
        <div className="grid grid-cols-1">
          {(inbox || []).map((item, key) => (
            <MessageCard
              key={item.id}
              metadata={item}
              className={cn({
                "border-transparent": key === INBOX_LIST.length - 1,
              })}
              onClick={() => onClick?.(item)}
            />
          ))}
        </div>
      )}
    </>
  );
}

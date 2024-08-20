import ContentLoading from "../ContentLoading";
import SearchInbox from "./Search";
import { INBOX_LIST } from "@/app/constants/inbox-list";
import MessageCard from "./MessageCard";
import { cn } from "@/lib/utils";

export type MessageListProps = {
  loading?: boolean;
  onClick?: (id: string) => void;
};

export default function MessageList({
  loading = true,
  onClick,
}: MessageListProps) {
  return (
    <>
      <SearchInbox />
      {loading ? (
        <ContentLoading text="Loading Chats ..." />
      ) : (
        <div className="grid grid-cols-1">
          {INBOX_LIST.map((item, key) => (
            <MessageCard
              key={item.id}
              metadata={item}
              className={cn({
                "border-transparent": key === INBOX_LIST.length - 1,
              })}
              onClick={() => onClick?.(item.id)}
            />
          ))}
        </div>
      )}
    </>
  );
}

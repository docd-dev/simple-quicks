import { MESSAGE_LIST } from "@/app/constants/message-list";
import { ArrowBack, Close } from "@/lib/icon-library";
import MessageDetailCard from "./MessageDetailCard";
import { userId } from "@/lib/utils";
import { DateDivider, NewMessageDivider } from "./Divider";
import { Fragment } from "react";
import { DateTime } from "luxon";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAppStore } from "@/stores/app.stores";
import MessageHeader from "./MessageHeader";

export default function MessageContent() {
  const { setMsgId, clear } = useAppStore();

  let tempDate = "";
  const setTempDate = (date: string) => {
    const format = DateTime.fromSQL(date).toFormat("dd LLLL yyyy");
    tempDate = format;

    return null;
  };
  return (
    <div className="flex flex-col flex-1 h-full">
      <MessageHeader />
      <div className="flex-1 px-5 pt-3.5 overflow-hidden">
        <div className="h-full overflow-y-auto px-2 flex flex-col custom-scroll">
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
      </div>
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

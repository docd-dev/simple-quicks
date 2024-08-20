import { Message, MESSAGE_LIST } from "@/app/constants/message-list";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { formatTime } from "@/lib/datetime";
import { MoreHorizontal } from "@/lib/icon-library";
import { cn, userId } from "@/lib/utils";
import { useMemo } from "react";

export type MessageDetailCardProps = {
  item: Message;
  isUser?: boolean;
};

const COLORS = [
  ["bg-[#FCEED3]", "text-[#E5A443]"],
  ["bg-[#D2F2EA]", "text-[#43B78D]"],
  ["bg-green-100", "text-green-700"],
  ["bg-red-100", "text-red-700"],
  ["bg-indigo-100", "text-indigo-700"],
  ["bg-pink-100", "text-pink-700"],
];

export default function MessageDetailCard({
  item,
  isUser,
}: MessageDetailCardProps) {
  const colorMap = useMemo(() => {
    const map: { [key: string]: string[] } = {};
    let colorIndex = 0;

    MESSAGE_LIST.forEach((msg) => {
      if (!map[msg.sender.id] && msg.sender.id !== userId) {
        map[msg.sender.id] = COLORS[colorIndex % COLORS.length];
        colorIndex++;
      }
    });

    return map;
  }, []);

  const [bgColor, textColor] = isUser
    ? ["bg-[#EEDCFF]", "text-[#9B51E0]"]
    : colorMap[item.sender.id];

  return (
    <div
      id={`msg-${item.room_id}[${item.id}]`}
      className={cn("flex flex-col mb-2.5 items-start", {
        "items-end": isUser,
      })}
    >
      <span className={cn("text-sm font-bold", textColor)}>
        {item.sender.id === userId ? "You" : item.sender.name}
      </span>
      <div
        className={cn("flex items-start w-full justify-start gap-2", {
          "flex-row-reverse": isUser,
        })}
      >
        <div
          className={cn("mt-1.5 flex justify-start min-w-[50%] max-w-[75%]", {
            "justify-end": isUser,
          })}
        >
          <div className={cn("p-2.5 rounded-lg text-[#4F4F4F]", bgColor)}>
            <p className="text-sm">{item.message}</p>
            <p className="text-xs mt-3">{formatTime(item.date)}</p>
          </div>
        </div>

        <Popover>
          <PopoverTrigger>
            <div className="mt-1.5 cursor-pointer">
              <MoreHorizontal
                fill="currentColor"
                className="text-[#4F4F4F] size-4 "
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-32 rounded-md p-0">
            <div className="grid divide-y text-base/none">
              <div className="px-[1.125rem] py-3 text-[#2F80ED] hover:bg-neutral-100 cursor-pointer duration-150">
                Edit
              </div>
              <div className="px-[1.125rem] py-3 text-[#EB5757] hover:bg-neutral-100 cursor-pointer duration-150">
                Delete
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

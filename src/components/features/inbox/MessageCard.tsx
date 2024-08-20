import { InboxItem } from "@/app/constants/inbox-list";
import AvatarOverlay from "./AvatarOverlay";
import { cn } from "@/lib/utils";

export type MessageCardProps = {
  metadata?: InboxItem;
  className?: string;
  onClick?: () => void;
};

export default function MessageCard({
  metadata,
  className,
  onClick,
}: MessageCardProps) {
  const getFirstLetter = (name: string): string => {
    return name.charAt(0).toUpperCase();
  };

  const initial = getFirstLetter(metadata?.lastMessage?.name!);

  return (
    <div
      className={cn(
        "flex items-start border-b border-[#828282] py-[1.375rem]",
        className
      )}
    >
      {!metadata?.isSupport ? (
        <AvatarOverlay />
      ) : (
        <div className="w-[3.188rem] flex items-center justify-center">
          <div className="flex items-start justify-center size-[2.125rem] rounded-full bg-[#2F80ED] text-white font-bold">
            {initial}
          </div>
        </div>
      )}
      <div
        className={cn("flex flex-1 flex-col gap-2 ml-[1.063rem]", {
          "gap-0": metadata?.isSupport,
        })}
      >
        <div className="flex items-start gap-4 text-base">
          <h2
            className="font-bold text-[#2F80ED] cursor-pointer hover:text-blue-600 duration-150"
            onClick={onClick}
          >
            {metadata?.title}
          </h2>
          <span className="text-[#4F4F4F] min-w-max">{metadata?.date}</span>
        </div>
        <div className="flex flex-col gap-1 text-[#4F4F4F]">
          {!metadata?.isSupport && (
            <h6 className="font-bold text-sm/none ">
              {metadata?.lastMessage?.name}
            </h6>
          )}
          <div className="flex items-center justify-between">
            <p className="text-sm line-clamp-1">
              {metadata?.lastMessage?.message}
            </p>
            {metadata?.new && (
              <div className="size-[0.625rem] bg-[#EB5757] rounded-full"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

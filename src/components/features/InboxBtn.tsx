import { QuestionAnswer } from "@/lib/icon-library";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/stores/app.stores";
import Image from "next/image";

export type InboxBtnProps = {
  className?: string;
  onClick?: () => void;
};

export default function InboxBtn({ className, onClick }: InboxBtnProps) {
  const { mode } = useAppStore();

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3.5 translate-x-[150%] -z-[1] opacity-0",
        className
      )}
    >
      {!mode && (
        <Image
          src="/images/inbox.png"
          alt="task"
          width={38.88}
          height={12.01}
          quality={100}
          loading="eager"
          className="select-none"
        />
      )}
      <div
        className="bg-white hover:bg-neutral-100 size-[3.75rem] flex items-center justify-center rounded-full cursor-pointer"
        onClick={onClick}
      >
        <QuestionAnswer
          className="size-[1.667rem] text-[#8885FF]"
          fill="currentColor"
        />
      </div>
    </div>
  );
}

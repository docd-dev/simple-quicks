import { ChromeReader } from "@/lib/icon-library";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/stores/app.stores";
import Image from "next/image";

export type TaskBtnProps = {
  className?: string;
  onClick?: () => void;
};

export default function TaskBtn({ className, onClick }: TaskBtnProps) {
  const { mode } = useAppStore();
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3.5 translate-x-[295%] -z-[1] opacity-0",
        className
      )}
    >
      {!mode && (
        <Image
          src="/images/task.png"
          alt="task"
          width={31.39}
          height={12.02}
          quality={100}
          loading="eager"
          className="select-none"
        />
      )}
      <div
        className={cn(
          "bg-white hover:bg-neutral-100 size-[3.75rem] flex items-center justify-center rounded-full cursor-pointer"
        )}
        onClick={onClick}
      >
        <ChromeReader
          className="size-[1.667rem] text-[#F8B76B]"
          fill="currentColor"
        />
      </div>
    </div>
  );
}

import { ChromeReader, QuestionAnswer } from "@/lib/icon-library";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/stores/app.stores";

type ActiveBtnProps = {
  onClick?: () => void;
};

export default function ActiveBtn({ onClick }: ActiveBtnProps) {
  const { mode: activeMode } = useAppStore();

  return (
    <>
      <div
        className="fixed bottom-7 right-[3.15rem] -z-[1] size-[4.25rem] flex items-center justify-center rounded-full bg-[#4F4F4F]"
        onClick={onClick}
      ></div>
      <div
        className={cn(
          "size-[4.25rem] flex items-center justify-center rounded-full !cursor-default",
          {
            "bg-[#F8B76B]": activeMode === "task",
            "bg-[#8785FF] ": activeMode === "inbox",
          }
        )}
      >
        {activeMode === "task" ? (
          <ChromeReader className="text-white" fill="currentColor" />
        ) : (
          <QuestionAnswer
            className="size-[1.889rem] text-white"
            fill="currentColor"
          />
        )}
      </div>
    </>
  );
}

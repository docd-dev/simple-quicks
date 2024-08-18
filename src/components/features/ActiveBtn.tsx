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
      <div className="fixed bottom-7 right-[3.15rem] -z-[1] size-[4.25rem] flex items-center justify-center rounded-full bg-[#4F4F4F]"></div>
      <div
        className={cn(
          "size-[4.25rem] flex items-center justify-center rounded-full",
          {
            "bg-[#F8B76B] hover:bg-yellow-600": activeMode === "task",
            "bg-[#8785FF] hover:bg-indigo-600": activeMode === "inbox",
          }
        )}
        onClick={onClick}
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

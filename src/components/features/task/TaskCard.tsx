import AutoResizeTextarea from "@/components/AutoResizeTextarea";
import { Datepicker } from "@/components/datepicker";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import {
  EditIcon,
  ExpandMore,
  MoreHorizontal,
  Schedule,
} from "@/lib/icon-library";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function TaskCard() {
  const [openTab, setOpenTab] = useState(false);
  const [isDone, setIsDone] = useState<boolean | "indeterminate">(false);
  const [date, setDate] = useState<Date>();
  const [note, setNote] = useState<string>("");

  return (
    <div className="py-[1.375rem] border-b border-[#828282] flex flex-col">
      {/* tab */}
      <div className="flex items-start justify-between">
        {/* title & checkbox */}
        <div className="flex items-start gap-[1.375rem]">
          <Checkbox
            className="mt-1"
            onCheckedChange={(checked) => {
              setIsDone(checked);
            }}
            checked={isDone}
          />
          <p
            className={cn("text-base font-bold text-[#4F4F4F] max-w-[22rem]", {
              "line-through text-[#828282]": isDone,
            })}
          >
            Set up documentation report for several Cases : Case 145443, Case
            192829 and Case 182203
          </p>
        </div>
        <div className="flex items-center justify-end text-[#4F4F4F] min-w-max text-base/none -mt-1">
          {!isDone && <span className="text-[#EB5757]">2 Days Left</span>}
          <span className="ml-5">12/06/2021</span>
          <div
            className="cursor-pointer ml-2.5"
            onClick={() => {
              setOpenTab(!openTab);
            }}
          >
            <ExpandMore
              className={cn("size-6 transition-all duration-150", {
                "rotate-180": openTab,
              })}
              fill="currentColor"
            />
          </div>

          <Popover>
            <PopoverTrigger>
              <div className="cursor-pointer ml-3.5">
                <MoreHorizontal
                  fill="currentColor"
                  className="text-[#828282]"
                />
              </div>
            </PopoverTrigger>
            <PopoverContent
              className="w-32 rounded-md p-0 border-[#828282] border"
              align="end"
            >
              <div className="px-[1.125rem] py-3 text-[#EB5757] hover:bg-neutral-100 cursor-pointer duration-150 rounded-md">
                Delete
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* konten */}
      <div
        className={cn(
          "flex gap-[1.375rem] transition-all duration-150 h-0 opacity-0",
          {
            "h-auto opacity-100 mt-4 ease-out": openTab,
          }
        )}
      >
        <div className="size-4">
          <span className="sr-only">empty</span>
        </div>
        {/* content */}
        <div className="flex flex-col flex-1">
          <div className="flex items-center gap-[1.125rem]">
            <Schedule
              fill="currentColor"
              className={cn("size-5 text-[#4F4F4F] transition-all", {
                "text-[#2F80ED]": date,
              })}
            />
            <Datepicker onChange={setDate} />
          </div>
          <div className="flex items-start gap-[1.125rem] mt-3.5 ">
            <EditIcon
              fill="currentColor"
              className={cn(
                "size-5 text-[#4F4F4F] transition-all cursor-pointer",
                {
                  "text-[#2F80ED]": note,
                }
              )}
              onClick={() => {
                const textArea = document.getElementById("note");
                if (textArea) {
                  textArea.focus();
                }
              }}
            />
            <AutoResizeTextarea
              id="note"
              onChange={(text) => {
                setNote(text);
              }}
              value={note}
            />
          </div>
        </div>
        <div className="size-4">
          <span className="sr-only">empty</span>
        </div>
      </div>
    </div>
  );
}

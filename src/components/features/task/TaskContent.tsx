import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ExpandMore } from "@/lib/icon-library";
import { useRef, useState } from "react";
import ContentLoading from "../ContentLoading";
import TaskCard from "./TaskCard";
import { TASK_LIST } from "@/app/constants/task-list";
import TaskCreate from "./TaskCreate";

export type TaskContentProps = {
  loading?: boolean;
};

export default function TaskContent({ loading = true }: TaskContentProps) {
  const taskRef = useRef<HTMLDivElement>(null);
  const [createItem, setCreateItem] = useState<Array<number>>([]);

  return (
    <section className="flex flex-col flex-1 h-full">
      <div className="flex items-center justify-between">
        <Popover>
          <PopoverTrigger asChild>
            <div className="w-1/3 flex items-center justify-center">
              <Button
                type="button"
                size={"lg"}
                variant={"outline"}
                className="min-h-10 font-bold text-base px-4 border-[#828282]"
              >
                My Task
                <ExpandMore
                  fill="currentColor"
                  className="text-[#4F4F4F] ml-1.5"
                />
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="PopoverContent rounded-md p-0 border-[#828282] border"
            sideOffset={5}
          >
            <div className="grid divide-y  divide-[#828282] text-sm/none text-[#4F4F4F] font-bold">
              <div className="px-[1.125rem] py-3 hover:bg-neutral-100 cursor-pointer duration-150 rounded-t-md">
                Personal Errands
              </div>
              <div className="px-[1.125rem] rounded-b-md py-3 hover:bg-neutral-100 cursor-pointer duration-150">
                Urgent To-Do
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Button
          type="button"
          size={"lg"}
          className="min-h-10 font-bold text-base px-4"
          onClick={() => setCreateItem((createItem) => [...createItem, 1])}
        >
          New Task
        </Button>
      </div>
      {loading ? (
        <ContentLoading text="Loading Task List ..." />
      ) : (
        <div className="flex-1 overflow-hidden relative">
          <div
            ref={taskRef}
            className="h-full overflow-y-auto flex flex-col custom-scroll pb-6"
          >
            {TASK_LIST.map((task, key) => (
              <TaskCard key={key} item={task} />
            ))}

            {createItem.map((item, key) => (
              <TaskCreate
                key={key}
                id={`create_${key}`}
                onDelete={() =>
                  setCreateItem((createItem) =>
                    createItem.filter((_, i) => i !== key)
                  )
                }
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

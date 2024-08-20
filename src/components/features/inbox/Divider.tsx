import { formatDate } from "@/lib/datetime";

interface DateDividerProps {
  date: string;
}

export function DateDivider({ date }: DateDividerProps) {
  return (
    <div className="flex items-center my-4">
      <div className="flex-grow border-t border-[#4F4F4F]"></div>
      <span className="px-6 text-[#4F4F4F] text-base font-bold">
        {formatDate(date)}
      </span>
      <div className="flex-grow border-t border-[#4F4F4F]"></div>
    </div>
  );
}

export function NewMessageDivider() {
  return (
    <div className="flex items-center my-4">
      <div className="flex-grow border-t border-[#EB5757]"></div>
      <span className="px-6 text-[#EB5757] text-base font-bold">
        New Message
      </span>
      <div className="flex-grow border-t border-[#EB5757]"></div>
    </div>
  );
}

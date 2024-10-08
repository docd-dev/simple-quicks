import { Input } from "@/components/ui/input";
import { Search } from "@/lib/icon-library";
import { ChangeEventHandler } from "react";

interface SearchInboxProps {
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function SearchInbox({ onChange }: SearchInboxProps) {
  return (
    <div className="py-[0.628rem] px-[3.676rem] border border-[#828282] rounded-[0.313rem] flex items-center gap-1.5 ">
      <Input
        className="focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:outline-none p-0 border-transparent h-auto placeholder:text-[#333333] text-base/none"
        placeholder="Search"
        onChange={onChange}
      />
      <Search className="size-3 text-[#333333]" fill="currentColor" />
    </div>
  );
}

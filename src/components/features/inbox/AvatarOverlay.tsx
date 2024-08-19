import { Person } from "@/lib/icon-library";

export default function AvatarOverlay() {
  return (
    <div className="relative w-[3.188rem] h-[2.125rem] ">
      {/* Background avatar */}
      <div className="absolute left-0 top-0 size-[2.125rem] bg-[#E0E0E0] rounded-full flex items-center justify-center">
        <Person
          fill="currentColor"
          className="text-[#4F4F4F] size-[1.125rem]"
        />
      </div>
      {/* Overlay avatar */}
      <div className="absolute right-0 bottom-0 size-[2.125rem] bg-[#2F80ED] rounded-full flex items-center justify-center">
        <Person fill="currentColor" className="text-white size-[1.125rem]" />
      </div>
    </div>
  );
}

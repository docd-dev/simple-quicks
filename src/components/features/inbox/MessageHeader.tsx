import { ArrowBack, Close } from "@/lib/icon-library";
import { useAppStore } from "@/stores/app.stores";

export default function MessageHeader() {
  const { setChatRoom, clear } = useAppStore();
  return (
    <div className="h-[4.594rem] border-b border-[#BDBDBD] flex items-center justify-between px-[1.313rem]">
      <div className="flex flex-1 items-center">
        <ArrowBack
          fill="currentColor"
          className="text-[#333333] size-6 ml-1 cursor-pointer"
          onClick={() => {
            setChatRoom(null);
          }}
        />
        <div className="flex flex-col ml-4">
          <h2 className="text-base font-bold text-[#2F80ED]">
            109220-Naturalization
          </h2>
          <p className="text-[#333333] text-sm">3 Participants</p>
        </div>
      </div>
      <Close
        fill="currentColor"
        className="text-[#333333] size-3.5 cursor-pointer"
        onClick={() => {
          clear();
        }}
      />
    </div>
  );
}

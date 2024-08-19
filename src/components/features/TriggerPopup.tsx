import { FeatherIcon } from "@/lib/icon-library";

type TriggerPopupProps = {
  onClick: () => void;
};

export default function TriggerPopup({ onClick }: TriggerPopupProps) {
  return (
    <div
      className="bg-[#2F80ED] size-[4.25rem] hover:bg-blue-600 flex items-center justify-center rounded-full cursor-pointer"
      onClick={onClick}
    >
      <FeatherIcon />
    </div>
  );
}

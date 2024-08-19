import Image from "next/image";

export type ContentLoadingProps = {
  text?: string;
};

export default function ContentLoading({ text }: ContentLoadingProps) {
  return (
    <div className="flex-1 flex-col flex items-center justify-center text-[#4F4F4F] font-bold text-base">
      <Image
        src="/images/loading.png"
        alt="loading"
        width={85.41}
        height={85.41}
        quality={100}
        loading="eager"
        className="animate-spin"
      />
      <span className="mt-3">{text || "Loading Chats ..."}</span>
    </div>
  );
}

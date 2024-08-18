import { FeatherIcon, Search } from "@/lib/icon-library";

export default function Home() {
  return (
    <main className="flex min-h-screen text-white">
      <aside className="w-1/5 border-r border-white"></aside>
      <section className="relative flex-1">
        <nav className="h-[3.625rem] bg-[#4F4F4F] flex items-center">
          <Search className="size-4 ml-7" />
        </nav>
        <div className="fixed bottom-7 right-[2.125rem] bg-[#2F80ED] size-[4.25rem] flex items-center justify-center rounded-full cursor-pointer hover:bg-[#2F80ED]/80 duration-150">
          <FeatherIcon />
        </div>
      </section>
    </main>
  );
}

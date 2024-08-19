import { Search } from "@/lib/icon-library";
import AppContent from "./app-content";

export default function Home() {
  return (
    <main className="flex min-h-screen text-white">
      <aside className="w-1/5 border-r border-white"></aside>
      <section className="relative flex-1">
        <nav className="h-[3.625rem] bg-[#4F4F4F] flex items-center">
          <Search className="size-4 ml-7 text-white" fill="currentColor" />
        </nav>
        <AppContent />
      </section>
    </main>
  );
}

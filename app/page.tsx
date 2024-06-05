import Sidebar from "@/components/Sidebar";
import Main from "../components/Main";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center relative overflow-hidden mx-auto">
      <div className="flex items-center justify-between w-full">
        <Sidebar />
        <Main />
      </div>
    </main>
  );
}

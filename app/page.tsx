import Sidebar from "@/components/Sidebar";
import Main from "../components/Main";

export default function Home() {
  return (
    <main className="flex items-center justify-center relative bg-black-100 overflow-hidden mx-auto sm:px-10 px-5">
      <div className="flex items-center justify-between max-w-7xl w-full">
        <Sidebar />
        <Main />
      </div>
    </main>
  );
}

import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import { useTasks } from "../context/TaskContext";

const Layout = ({ children }) => {
  const router = useRouter();
  const { tasks } = useTasks();

  return (
    <div className="h-screen bg-gray-900 text-white">
      <header className="flex items-center bg-gray-700">
        <Link href="/">
          <a>
            <h1 className="font-black text-lg text-white px-28 py-5">
              Task APP
            </h1>
          </a>
        </Link>
        <span className="ml-2 text-gray-400 font-bold">{tasks.length} Task</span>
        <div className="flex-grow text-right">
          <button
            className="bg-green-500 hover:bg-green-400 text-white px-5 py-2 text-gray font-bold rounded-sm inline-flex items-center"
            onClick={() => router.push("/new")}
          >
            <AiOutlinePlus className="mr-2" />
            Add Task
          </button>
        </div>
      </header>

      <main className="px-28 py-10">{children}</main>
    </div>
  );
};

export default Layout;
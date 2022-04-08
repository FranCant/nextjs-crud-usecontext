import Link from "next/link";
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
        <span className="ml-2 text-gray-400 font-bold">
          {tasks.length} Task
        </span>
        <div className="flex-grow text-right">
          <button
            className="bg-green-500 hover:bg-green-400 text-white px-5 py-2 text-gray font-bold rounded-sm inline-flex items-center"
            onClick={() => router.push("/new")}
          >
            <svg
              className="mr-3"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
            </svg>
            Add Task
          </button>
        </div>
      </header>

      <main className="px-28 py-10">{children}</main>
    </div>
  );
};

export default Layout;

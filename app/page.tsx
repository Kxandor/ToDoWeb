import Image from "next/image";
import Header from "./Components/Header";
import AllTasks from "./Components/AllTasks";
export default function Home() {
  return (
    <main className="w-full h-screen p-4 px-14 shadow-3xl ">
      <Header
        title="Your tasks"
        subtitle="Manage your tasks easily and comforatbely"
        canCreateTask={true}
      />
      <AllTasks />
    </main>
  );
}

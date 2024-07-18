import Image from "next/image";
import Header from "./Components/Header";
import AllTasks from "./Components/AllTasks";
import Content from "./Components/Content";
export default function Home() {
  return (
    <main className="w-full h-screen p-4 px-14 shadow-3xl ">
      <Content />
    </main>
  );
}

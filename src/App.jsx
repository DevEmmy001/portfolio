import React from "react";
import "./index.css";
import WorkCard from "./components/WorkCard";
import { ArrowBigLeftDashIcon } from "lucide-react";

function App() {
  return (
    <main className="bg-blue-700 font-PS h-full ">
      <div className=" text-xs p-4 md:flex w-full justify-center">
        {" "}
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
      <a href="">
        <button className="bg-yellow-400 w-full flex items-center justify-center text-sm py-3 px-4 hover:text-white sticky top-0 bottom-0 shadow-md">
          <ArrowBigLeftDashIcon strokeWidth={1} width={25} /> Go Back{" "}
        </button>
      </a>
    </main>
  );
}

export default App;

import React from "react";
import "./index.css";
import WorkCard from "./components/WorkCard";

function App() {
  return (
    <main className="bg-blue-700 text-xs p-4 md:flex">
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
      <WorkCard />
    </main>
  );
}

export default App;

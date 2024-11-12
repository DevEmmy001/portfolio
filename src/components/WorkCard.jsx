import React from "react";
import { Link, GithubIcon } from "lucide-react";
import imgage from "../images/testimg.jpg";
const WorkCard = () => {
  return (
    <main className="font-PS">
      <div className="bg-white p-4 md:p-6 md:w-60  md:my-0 m-4">
        <div className="pb-4">
          <img src={imgage} alt="" />
        </div>
        <h1 className="text-base">Project Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quos
          velit excepturi, natus ab praesentium obcaecati beatae voluptatum
          recusandae nobis.
        </p>
        <div className="flex pt-4 gap-4">
          {/* live link button */}
          <a href="">
            <span className="flex gap-1 bg-slate-100 px-4 py-2 w-fit hover:bg-yellow-400 hover:text-white items-center">
              <Link strokeWidth={1} width={15} />
              View
            </span>
          </a>
          {/* git hub repo button */}
          <a href="">
            <span className="flex gap-1 bg-slate-100 px-4 py-2  hover:bg-blue-700 hover:text-white items-center">
              <GithubIcon strokeWidth={1} width={15} />
              Github
            </span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default WorkCard;

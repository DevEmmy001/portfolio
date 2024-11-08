import React from "react";

const Header = () => {
  return (
    <main className="h-screen w-screen flex items-center p-10">
      <div className="flex-col">
        <h1 className="md:text-3xl text-2xl font-bold text-black ">Hi👋,</h1>
        <h1 className="md:text-3xl text-2xl font-bold text-black">
          my name is
        </h1>
        <h1 className="md:text-4xl text-3xl font-bold bg-gradient-to-br from-blue-700 to-blue-400 bg-clip-text text-transparent">
          Emeka Victor
        </h1>
        <h1 className="md:text-3xl text-2xl font-bold text-black">
          I build things for the web
        </h1>
      </div>
    </main>
  );
};

export default Header;

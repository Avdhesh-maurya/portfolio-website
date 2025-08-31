import React from "react";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex flex-col md:flex-row w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-2xl md:text-6xl font-bold flex leading-tight tracking-tighter mb-4">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight mb-6">
          Aspiring <strong>Full-Stack Developer</strong> with a focus on learning
          <strong> Django</strong> and modern frontend technologies. Passionate about
          building clean, functional web applications and growing through
          hands-on projects.
        </p>
        <div className="flex gap-4">
          <a href="#Footer">
            <button className="text-white text-sm md:text-lg py-2 px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Contact Me
            </button>
          </a>
          <a
            href="https://drive.google.com/file/d/1zRIBV61GEJe-bk7oUssujx-UylJa4RqY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="text-white text-sm md:text-lg py-2 px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
              Request Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;

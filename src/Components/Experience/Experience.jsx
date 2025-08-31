import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis, SiMysql } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>

          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiDjango color="#092E20" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaPython color="#3776AB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FiDatabase color="#4479A1" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#4479A1" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaPython color="#3776AB" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Python Developer Intern, Softpro India</h2>
              <p className="text-sm leading-tight font-thin">
                July 10, 2025 - Aug 25, 2025
              </p>
              <ul className="text-sm p-2">
                <li>-Built web applications using Django backend</li>
                <li>- Supported backend development and database management</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <FaHtml5 color="#E34F26" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Front-End Web Development Intern, Edunet Foundation</h2>
              <p className="text-sm leading-tight font-thin">
                Aug 22, 2025 - Oct 3, 2025
              </p>
              <ul className="text-sm p-2">
                <li>- Completed a 6-week internship under IBM SkillsBuild program</li>
                <li>- Built a front-end project while attending mentor-led sessions</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

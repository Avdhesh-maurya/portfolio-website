import React from "react";
import myImg from "../../assets/avdhesh.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl ms-20 font-bold mb-6 text-center md:text-left">
          About Me
        </h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center gap-40">

          {/* Profile Image */}
          <img
            className="md:h-80 h-48 w-48 md:w-80 rounded-full object-cover border-4 border-gray-700 shadow-lg"
            src={myImg}
            alt="Profile"
          />

          {/* About Text */}
          <ul className="flex-1">
            <div className="flex gap-3 py-4 items-start">
              <IoArrowForward size={30} className="mt-1 text-blue-400" />
              <div className="w-full md:w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Python Developer
                </h1>
                <p className="text-sm md:text-md leading-tight text-gray-300">
                  Enthusiastic <strong>Python Developer</strong> with hands-on experience in
                  <strong> Django backend</strong> development and
                  <strong> REST API</strong> integration.
                  Passionate about learning new technologies, writing
                  <strong> clean, maintainable code</strong>, and building
                  efficient web applications through academic projects and internships.
                </p>
              </div>
            </div>
            <div className="flex gap-3 py-4 items-start">
              <IoArrowForward size={30} className="mt-1 text-blue-400" />
              <div className="w-full md:w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Skills
                </h1>
                <p className="text-sm md:text-md leading-tight text-gray-300">
                  Proficient in <strong>HTML5</strong>, <strong>CSS</strong>,
                  <strong> JavaScript </strong>, and <strong>React.js</strong>,
                  with experience in <strong>Bootstrap</strong> and
                  to create responsive, user-friendly, and
                  visually appealing web interfaces.
                </p>
              </div>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1 text-blue-400" />
              <span className="w-full md:w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Growth Mindset
                </h1>
                <p className="text-sm md:text-md leading-tight text-gray-300">
                  Currently interning as a <strong>Python Developer</strong> and
                  learning <strong>Front-End Development</strong> through
                  IBM SkillsBuild. Constantly exploring new tech to
                  become a well-rounded <strong>Full Stack Developer</strong>.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

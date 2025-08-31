import React from "react";
import ProjectCard from "./ProjectCard";
import BookStoreImg from "../../assets/BookStore.png";
import weatherImg from "../../assets/weather.png";
import colorGImg from "../../assets/color generator.png";
import spotifyImg from "../../assets/avdhesh-maurya.github.io_Spotify_.png";


const Projects = () => {
  const projects = [
    {
      title: "Online Book Store",
      main: "A full-stack online bookstore built with Django for the backend and a modern frontend. Features include user authentication, book search and categorization, a shopping cart, and secure checkout. Designed with scalability and user experience in mind.",
      codeLink: "https://github.com/Avdhesh-maurya/Online-Book-Store",
      demoLink: "https://avdhesh-maurya.github.io/Online-Book-Store/",
      bannerImg: BookStoreImg,
    },
    
    {
      title: "Weather App",
      main: "A real-time weather app built with Django and a weather API. Users can check temperature, weather status, and humidity. Includes error handling for invalid city names and a clean, simple UI.",
      codeLink: "https://github.com/Avdhesh-maurya/Weather-App",
      demoLink: "https://avdhesh-maurya.github.io/Weather-App/",
      bannerImg: weatherImg,
    },
    {
      title: "Color Generator",
      main: "A web tool to generate random colors and palettes with HEX and RGB values. Built with Django and a simple frontend, useful for designers and developers to quickly copy color codes.",
      codeLink: "https://github.com/Avdhesh-maurya/Colour_generator.git",
      demoLink: "https://avdhesh-maurya.github.io/Colour_generator/",
      bannerImg: colorGImg,
    },
    {
      title: "Spotify Clone",
      main: "A full-stack music streaming platform inspired by Spotify. Built with Django and React, featuring authentication, playlist creation, music playback, and a sleek, responsive UI.",
      codeLink: "https://github.com/Avdhesh-maurya/Spotify.git",
      demoLink: "https://avdhesh-maurya.github.io/Spotify/",
      bannerImg: spotifyImg,
    },
  ];

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold">Projects</h1>
      <div className="py-12 px-8 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.main}
            codeLink={project.codeLink}
            demoLink={project.demoLink}
            bannerImg={project.bannerImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
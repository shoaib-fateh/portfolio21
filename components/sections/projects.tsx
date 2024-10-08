"use client";
import ProjectCard from "@/components/ProjectCard";
import { projectDetails } from "@/data/Project";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="z-[99999] relative">
      <div className="p-20 mx-auto " id="projects">
        <h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
        <div className="gap-20">
          <Slider {...settings}>
            {projectDetails.map((project, index) => (
              <ProjectCard
                key={index}
                src={project.image}
                title={project.name}
                description={project.description[0]}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  year: string;
  location: string;
  status: string;
  size: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onProjectClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Floating animation for cards
    gsap.to(".floating-card", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  // Predefined positions for cards (relative to the center)
  const cardPositions = [
    { x: -600, y: 100, zIndex: 1 },
    { x: 200, y: -150, zIndex: 2 },
    { x: -150, y: 200, zIndex: 3 },
    { x: 300, y: 100, zIndex: 1 },
    { x: -250, y: -250, zIndex: 2 },
    { x: 150, y: 250, zIndex: 3 },
    { x: -100, y: -300, zIndex: 1 },
    { x: 200, y: 300, zIndex: 2 },
    { x: 0, y: 200, zIndex: 3 },
    { x: 0, y: -200, zIndex: 1 },
  ];

  return (
    <div
      ref={containerRef}
      className="relative flex justify-center items-center w-screen h-screen bg-black overflow-hidden"
    >
      {/* Central Heading */}
      <div className="absolute text-center z-10">
        <h1 className="text-5xl font-bold text-white mb-4">
          Collaborate and Conquer
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          See how brands, agencies, and production teams worldwide use Frame.io
          to accelerate their workflow and empower collaboration.
        </p>
      </div>

      {/* Project Cards */}
      {projects.slice(0, 10).map((project, index) => {
        const position = cardPositions[index];
        return (
          <div
            key={project.id}
            className={`absolute floating-card`}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: position.zIndex,
            }}
          >
            <ProjectCard
              project={project}
              onClick={() => onProjectClick(project)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectShowcase;

import "./App.css";
import Projects from "./Projects";
import portfolioImage from "./assets/images/portfolio-maxim-berg-3E2xgrlNXq4-unsplash.jpg";
import plantAppImage from "./assets/images/plantapp-surf-boliviainteligente--uxO-NqszGE-unsplash.jpg";
import readmeImage from "./assets/images/readme-calc-boliviainteligente-Ze0Acs_Z-1M-unsplash.jpg";
import employeeAppImage from "./assets/images/employeetracker-led-boliviainteligente-JHPI4yQWYSY-unsplash.jpg";

const projectData = [
  {
    projectImage: portfolioImage,
    projectName: "React Portfolio",
    projectDescription: "A portfolio website built with React",
    githubLink: "https://github.com/Mjoel54/react-portfolio",
    deployedLink: "https://mklein.netlify.app/",
  },
  {
    projectImage: plantAppImage,
    projectName: "Plant App",
    projectDescription: "JavaScript, Bootstrap CSS",
    githubLink: "https://github.com/Mjoel54/plant-app",
    deployedLink: "https://mjoel54.github.io/plant-app/",
  },
  {
    projectImage: readmeImage,
    projectName: "Readme Generator",
    projectDescription: "Node JS",
    githubLink: "https://github.com/Mjoel54/readme-generator",
    deployedLink: "",
  },
  {
    projectImage: employeeAppImage,
    projectName: "Employee Tracker",
    projectDescription: "Node JS, TypeScript",
    githubLink: "https://github.com/Mjoel54/employee-tracker",
    deployedLink: "",
  },
];

export default function Portfolio() {
  return (
    <main className="container-fluid p-5">
      <h2 className="text-center my-5">Projects</h2>
      <div className="container justify-content-center">
        <div className="row">
          {projectData.map((project, index) => (
            <Projects
              key={index}
              projectImage={project.projectImage}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
            />
          ))}{" "}
        </div>
      </div>
      <div style={{height: "4rem"}}></div>
    </main>
  );
}

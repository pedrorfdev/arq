import { useContext, useEffect, useState } from "react";
//ASSETS
import LikedFilled from "../../assets/like-filled.svg";
import LikeOutline from "../../assets/like.svg";
import "./ProjectsList.css";

//COMPONENTS
import Button from "../Button/Button";

//UTILS
import { AppContext } from "../../contexts/AppContext";
import { getApiData } from "../../services/apiServices";

function ProjectsList() {
  const [projects, setProjects] = useState();
  const [favProjects, setFavProject] = useState([]);
  const appContext = useContext(AppContext);

  const handleSavedProjects = (id) => {
    setFavProject((prevFavProjects) => {
      if (prevFavProjects.includes(id)) {
        const filterArray = prevFavProjects.filter(
          (projectId) => projectId !== id
        );
        sessionStorage.setItem("favProjects", JSON.stringify(filterArray));
        return prevFavProjects.filter((projectId) => projectId !== id);
      } else {
        sessionStorage.setItem(
          "favProjects",
          JSON.stringify([...prevFavProjects, id])
        );
        return [...prevFavProjects, id];
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData("projects");
        setProjects(projectsResponse);
      } catch (error) {
        console.error("Catch error: ", error);
        setProjects([]);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const savedFavProjects = JSON.parse(sessionStorage.getItem("favProjects"));
    if (savedFavProjects) {
      setFavProject(savedFavProjects);
    }
  }, []);

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>{appContext.languages[appContext.language].projects.subtitle}</p>
      </div>

      <div className="projects-grid">
        {projects
          ? projects.map((project) => (
              <div
                className="project-card d-flex fd-column jc-center al-center"
                key={project.id}
              >
                <div
                  className="thumb tertiary-background"
                  style={{ backgroundImage: `url(${project.thumb})` }}
                ></div>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <Button
                  buttonStyle="unstyled"
                  onClick={() => handleSavedProjects(project.id)}
                >
                  <img
                    src={
                      favProjects.includes(project.id)
                        ? LikedFilled
                        : LikeOutline
                    }
                    height="20px"
                  />
                </Button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ProjectsList;

import { useContext } from "react";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProjectsList from "../components/ProjectsList/ProjectsList";
import { AppContext } from "../contexts/AppContext";

function Projects() {
  const appContext = useContext(AppContext);

  return (
    <>
      <Header />
      <Banner
        title={appContext.languages[appContext.language].menu.projects}
        image="projects.jpg"
      />
      <div className="container">
        <ProjectsList />
      </div>
      <Footer />
    </>
  );
}
export default Projects;

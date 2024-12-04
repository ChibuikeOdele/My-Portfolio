import styles from "./ProjectsStyle.module.css";
import stopwatch from "../../assets/pexels-yahya-hasan-23776433-6676154.jpg";
import todolist from "../../assets/pexels-cottonbro-3832031.jpg";
import weather from "../../assets/pexels-toniferreiraphotos-3576683.jpg";
import car from "../../assets/pexels-avinashpatel-445399.jpg";
import ProjectCard from "../../common/ProjectCard";

function Project() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={stopwatch}
          link="https://chibuikeodele.github.io/mystopwatch/"
          h3="Stop Watch"
          p="Stop Watch"
        />
        <ProjectCard
          src={todolist}
          link="https://chibuikeodele.github.io/my-todo-list/"
          h3="To-do list"
          p="To-do list "
        />
        <ProjectCard
          src={weather}
          link="https://ChibuikeOdele.github.io/Weather-App/"
          h3="Weather App"
          p="Weather "
        />
        <ProjectCard
          src={car}
          link="https://chibuikeodele.github.io/realemezycar/"
          h3="RealEmezy Cars"
          p="Car Shop "
        />
      </div>
    </section>
  );
}

export default Project;

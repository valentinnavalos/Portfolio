import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodApp from "../../Assets/Projects/foodApp.png";
import cindie from "../../Assets/Projects/cindie.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodApp}
              isBlog={false}
              title="Food App"
              description="A Single Page Application where you can search, read the detail, create, delete, sort and filter recipes. It gets the data from an API and a database. I used JavaScript, React, Redux, NodeJs, ExpressJs, and PostgreSQL as database."
              link="https://github.com/valentinnavalos/Food-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cindie}
              isBlog={false}
              title="Cindie App"
              description="A platform where filmographic content is hosted. Whoever visits the platform can consume the content. But if you decide to upload a project you must hire a premium plan.
              It was developed with 7 other teammates. Frontend: React, Redux, Material UI, Auth0 and Sweet Alert2. Backend: Node, Express and Sequelize. Database: PostgreSQL."
              link="https://github.com/valentinnavalos/Cindie-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import aws from "../../Assets/Projects/AWS.png";
import ad from "../../Assets/Projects/Autodep.png";
import NAE from "../../Assets/Projects/naedev.png";

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
              imgPath={ad}
              isBlog={false}
              title="Automate Deployment"
              description="This project aims to simplify and automate the deployment process for developers. By using this script, you can save time and effort in deploying your applications, allowing you to focus more on coding and less on manual deployment tasks."
              ghLink="https://github.com/vermayesh123456/Automate_Deploymentgit.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NAE}
              isBlog={false}
              title="Nature Adaptation Ecology"
              description="This website is the result of step I took towards advertising and presenting my club in an attractive fastion to the public ."
              ghLink="https://github.com/vermayesh123456/naedev.git"
              demoLink="https://vermayesh123456.github.io/naedev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aws}
              isBlog={false}
              title="AWS Resource Tracker for Linux"
              description="Automate the tracking of your AWS resources with this powerful shell script! Set it up to run every 30 or 20 minutes, and get detailed emails with the latest resource status. Use crontab to schedule your script and implement a mail transfer agent to get regular reports of our AWS server"
              ghLink="https://github.com/vermayesh123456/AWS-Resource-Tracker-Shell-Script.git"             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

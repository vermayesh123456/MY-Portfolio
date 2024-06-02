import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiLinux,
  SiShell,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiShell />
        <p style={{ fontSize: '40px' }}>Linux Shell</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: '40px' }}>Visual Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{ fontSize: '40px' }}>Git & Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p style={{ fontSize: '40px' }}>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{ fontSize: '40px' }}>Linux OS</p>
      </Col>
    </Row>
  );
}

export default Toolstack;

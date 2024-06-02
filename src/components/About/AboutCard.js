import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yash Verma </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />
            I am currently pursuing B. Tech.from VIT Chennai
            <br />
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing with Gargets
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The best part about falling is you get another chance to rise up!"{" "}
          </p>
          <footer style={{fontFamily:"cursive"}} className="blockquote-footer">Yash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Valentín Avalos </span>
            from <span className="purple"> Buenos Aires, Argentina.</span>
            <br />I am a Full Stack dev, who wants to learn new things and
            become a Blockchain Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The content of a book holds the power of education and it is this power that we can shape our future and change lives."{" "}
          </p>
          <footer className="blockquote-footer">Malala Yousafzai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

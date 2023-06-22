import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {/* Hi Everyone, I am <span className="purple">Alka Sah </span>
            from <span className="purple"> Seattle, Washington.</span> */}
            <br />  Passionate Full Stack web developer with certification in full stack web development from University of Washingtion and graduated with 
            Master's in Computer Science from RGPV University, India. Effective at combining logical thinking and problem solving to develop user-friendly applications. Proactive in learning new skills and knowledge with core competency in full stack web development such as Javascript, jQuery, HTML, CSS, MERN Stack, SQL, REST API’s.
            <br />
            Life-long dedication to learning and in self development. Quick-learner, very organized, ability to work under pressure, collaborative communicator. 
            I look forward to bringing my skills and passion for software development to build user focused applications.
            <br />
            <br />
            </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Alka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
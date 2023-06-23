import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import team from "../../Assets/Projects/Team Profile.png"
import workday from "../../Assets/Projects/workdayscheduler.gif";
import socialnetwork from "../../Assets/Projects/Demo.gif"
import weather from "../../Assets/Projects/Weather Dashboard.gif";
import password from "../../Assets/Projects/Password Generator.gif"
function Projects() {
  return (
    <Container fluid className="project-section">
      
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
              imgPath={workday}
              
              title="WorkdayScheduler"
              description="This application uses third-party API and JavaScript to create a calendar-style scheduler allowing users to save events for each hour of the day."
              ghLink="https://github.com/alka485/Work-Day-Scheduler.git"
              demoLink="https://alka485.github.io/Work-Day-Scheduler/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={team}
              
              title="Team Profile Generator"
              description="This app was created using Object-Oriented Programming concepts, namely using classes and constructors to create 'team member' objects based on information entered by the user. The app is run using Node.js, and uses the 'Inquirer'. Files for different objects are also stored in separate .js files and passed among one another using module.exports and require."
              ghLink="https://github.com/alka485/Team-profile-generator.git"
              demoLink="https://drive.google.com/file/d/1TvBBSUkoVXuiXFJ0jmRc_vydUA5lAS2U/view"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialnetwork}
              
              title="Social-Network-API"
              description="This is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, the Mongoose ODM, and Moment.js to format timestamps. The seed data is created using Insomnia.
              "
              ghLink="https://github.com/alka485/Social-Network-API.git"
              demoLink="https://drive.google.com/file/d/1lxJUWoTgDk3jhLlJq3c6_XCIWDs2uNQW/view"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              
              title="Weather Dashboard"
              description="This ia an app that uses the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities that are searched for by user. Uses `localStorage` to store any cities that have been searched for prior and allows user to call them up quickly."
              ghLink="https://github.com/alka485/Weather-Dashboard.git"
              demoLink="https://drive.google.com/file/d/1kCzJ58dxW25PRblytbQcy-1qVUT6dbEl/view"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              
              title="Password Generator"
              description="This is an app that an employee can use to generate a random password based on criteria they've selected."
              ghLink="https://github.com/alka485/Password-Generator.git"
              demoLink="https://drive.google.com/file/d/12TPIzX1npT8Jmmu7UPJOQl-e7vlyK82A/view"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
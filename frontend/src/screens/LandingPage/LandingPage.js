import React from "react";
import { Button, Container } from "react-bootstrap";
import "./LandingStyle.css";
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <row>
          <div className="intro-text">
            <div>
              <h2 className="title">Welcome to Notes Bucket</h2>
              <p className="subtitle">One Safe place for all your notes</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button
                  size="lg"
                  className="landing-btn"
                  variant="outline-primary"
                >
                  Login
                </Button>
              </a>
              <a href="/login">
                <Button
                  size="lg"
                  className="landing-btn1"
                  variant="outline-primary"
                >
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </row>
      </Container>
    </div>
  );
};

export default LandingPage;

import React from "react";
import { Container, Row } from "react-bootstrap";
import "./mainScreen.css";
const mainScreen = ({ title, children }) => {
  return (
    <div className="mainBackground">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default mainScreen;

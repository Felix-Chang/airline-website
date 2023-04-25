import React from "react";
import "../Styles/Auteurs.css";
import AuteursText from "./AuteurText";
import logo from "../Images/air-canada-2-logo-png-transparent.jpg";
import { auteur_text } from "./auteur_text";
import { Col, Container, Row } from "react-bootstrap";
const Authors = () => {
  return (
    <div>
      <div>
        <div className="auteurs">
          <h1>Auteurs</h1>
        </div>
        <div className="auteurs-description">
          <Container>
            <Row>
              <Col md={4} className="">
                <AuteursText img={logo} text={auteur_text.first.value} />
              </Col>
              <Col className="" md={4}>
                <AuteursText img={logo} text={auteur_text.second.value} />
              </Col>
              <Col className="" md={4}>
                <AuteursText img={logo} text={auteur_text.third.value} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Authors;

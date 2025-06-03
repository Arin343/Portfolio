// src/components/About.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" style={{
      background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="display-4 fw-bold mb-5">Data Analyst</h2>
            <p className="lead mb-5" style={{ lineHeight: '1.8' }}>
              I am a highly motivated final-year B.Tech Computer Science student at VIT Vellore with a deep interest in the financial markets and a strong appreciation for the strategic problem-solving that defines the consulting world. As a passionate data analyst, I bring robust technical skills in SQL, Python, Power BI, Tableau, R, and DAX, combined with an analytical mindset and a drive for continuous learning. I thrive at the intersection of data, business, and technology, and am eager to contribute to impactful, data-driven decision-making in fast-paced environments.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
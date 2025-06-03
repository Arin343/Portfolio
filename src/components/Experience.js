// src/components/Experience.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ExperienceItem = ({ title, company, period, location, description }) => {
  return (
    <div className="experience-item mb-5" style={{
      position: 'relative',
      paddingLeft: '30px',
      borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
    }}>
      {/* Timeline dot */}
      <div style={{
        position: 'absolute',
        left: '-10px',
        top: '0',
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #4ade80 0%, #60a5fa 100%)',
      }}></div>
      
      <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: '600' }}>{title}</h3>
      <div className="d-flex justify-content-between mb-2">
        <p style={{ color: '#60a5fa', fontWeight: '500', margin: 0 }}>{company}</p>
        <p style={{ color: 'rgba(255, 255, 255, 0.6)', margin: 0 }}>{period}</p>
      </div>
      <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontStyle: 'italic', marginBottom: '10px' }}>{location}</p>
      <p style={{ color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.6' }}>{description}</p>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Saafe-Account Aggregator",
      period: " Sep 2023 – Dec 2023",
      location: "On-site",
      description: "Arin Dwivedi gained valuable experience as a Data Analyst Intern at Saafe Account Aggregator in Chennai, Tamil Nadu, from September to December 2023. In this role, Arin significantly improved efficiency by streamlining data collection and reporting procedures, which reduced processing time by 20%. Arin also conducted thorough business analyses to evaluate current user flows and proposed enhancements that boosted usability and user satisfaction. This involved identifying opportunities for new features and optimizing existing processes to create a more user-friendly application. Arin's contributions also included conducting in-depth market research and analysis, which led to the identification of over 10 key trends and insights that informed strategic decision-making. Furthermore, Arin developed and integrated new chart types and data visualizations into the company dashboard using Power BI, enhancing data analysis and reporting efficiency while providing critical support during internal audits. Arin engineered a financial statement analyzer that automatically categorizes user expenditures (e.g., food, groceries, fashion) and presents data through intuitive visualizations. This included integrating tracking for the National Pension System (NPS), credit scores, loans, stocks, and equity balances. Arin also implemented an overall asset calculation system by aggregating multiple bank balances, stock and equity values, NPS contributions, and factoring in loan liabilities."
    }
  ];

  return (
    <section id="experience" style={{
      background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
      minHeight: '100vh',
      color: 'white',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container>
        <div className="position-relative" style={{ zIndex: 1 }}>
          <h2 className="display-4 fw-bold mb-5">Professional Journey</h2>
          <Row>
            <Col lg={8}>
              {experiences.map((exp, index) => (
                <ExperienceItem key={index} {...exp} />
              ))}
            </Col>
          </Row>
        </div>
        
        {/* Decorative background elements - different positions and colors from Projects */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-150px',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
          opacity: '0.1',
          zIndex: 0
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '50px',
          left: '-150px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f472b6 0%, #4ade80 100%)',
          opacity: '0.1',
          zIndex: 0
        }}></div>
      </Container>
    </section>
  );
};

export default Experience;
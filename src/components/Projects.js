// src/components/Projects.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectCard = ({ title, technologies, description, color }) => {
  return (
    <div className="project-card mb-4" style={{
      background: '#121212',
      borderRadius: '12px',
      padding: '25px',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      border: `1px solid rgba(255, 255, 255, 0.1)`,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    }}>
      {/* Gradient accent at top */}
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '100px',
        height: '4px',
        background: color,
        borderRadius: '0 12px 0 0',
      }}></div>
      
      <div style={{ marginBottom: '25px' }}>
        <span style={{
          fontSize: '0.75rem',
          color: color,
          backgroundColor: `${color}22`,
          padding: '4px 10px',
          borderRadius: '4px',
          fontWeight: '500',
        }}>
          {technologies}
        </span>
      </div>
      
      <h3 className="mb-3" style={{ 
        color: 'white', 
        fontSize: '1.5rem', 
        fontWeight: '600' 
      }}>
        {title}
      </h3>
      
      <p style={{ 
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '0.95rem',
        lineHeight: '1.6',
        marginBottom: '30px'
      }}>
        {description}
      </p>
      
      <a href="#" className="d-inline-flex align-items-center" style={{
        color: 'white',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '500',
      }}>
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
        </svg>
      </a>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Enhanced Transfer Learning and CNN Approach For Brain Tumor Detection:",
      technologies: "Python & Machine Learning, Selenium",
      description: "This project involved developing a machine learning pipeline to classify brain tumors from MRI scan images into four categories: no tumor, pituitary, meningioma, and glioma. The model achieved an accuracy of 98% and was published at the International Conference on Business and Technology (ICBDT 24)..",
      color: "#4ade80" // Green
    },
    {
      title: "Voter ID Data Extraction and Automation Application:",
      technologies: "Python, pytesseract, numpy, SQL, OCR",
      description: "his system automated the retrieval and extraction of voter ID information from Indian government portals using Tesseract OCR for precise text recognition. The project improved accuracy through advanced preprocessing methods and systematically organized the extracted data in a database.",
      color: "#f472b6" // Pink
    },
    {
      title: "Predicts F1 qualifying times using FastF1 data, regression model, and performance factors.",
      technologies: "Pandas, Numpy, Matplotlib, Seaborn, Scikit-learn, LinearRegression",
      description: "This project predicts Formula 1 Q3 qualifying lap times using FastF1 data, regression modeling, and performance factors. It fetches race data, cleans and processes lap times, trains a linear regression model, and simulates future race predictions using team and driver adjustments.",
      color: "#60a5fa" // Blue
    },
    {
      title: " Financial-Models-Numerical-Methods.",
      technologies: "Python, Jupyter Notebooks, pandas, NumPy, SciPy, matplotlib, seaborn, scipy.sparse",
      description: "This project offers a hands-on approach to understanding and implementing financial models. It covers a wide range of topics in quantitative finance, providing interactive Python code to illustrate complex concepts. The notebooks are designed to help users grasp the mathematical foundations and computational techniques used in financial modeling.",
      color: "#a78bfa" // Purple
    },
    {
      title: " Financial Health Dashboard: Analyzing Company Financial Statements.",
      technologies: "SQL, Excel, Power BI",
      description: "This project aims to build an interactive Financial Health Dashboard that provides insights into a company's financial performance over time. By extracting and analyzing balance sheets, income statements, and cash flow statements, the project enables users to assess key financial metrics such as profitability, liquidity, and solvency.The project uses SQL to query and clean financial data from a relational database, Excel for pre-processing and calculating financial ratios, and Power BI to visualize the results in an interactive and user-friendly dashboard.",
      color: "#a78bfa" // Blue
    },
    {
      title: " Stock Portfolio Performance Tracker and Risk Analyzer.",
      technologies: "SQL, Excel, R language, Tableau",
      description: "This project aims to build a dynamic portfolio tracker and risk analysis tool for retail investors or fund managers. The system helps monitor investment performance, analyze portfolio diversification, and assess risk-adjusted returns using historical stock data.",
      color: "#a78bfa" // Pink
    },
  ];

  return (
    <section id="projects" style={{
      background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
      minHeight: '100vh',
      color: 'white',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container>
        <div className="position-relative" style={{ zIndex: 1 }}>
          <h2 className="display-4 fw-bold mb-5">My Projects</h2>
          <Row>
            {projects.map((project, index) => (
              <Col key={index} md={6} className="mb-4">
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
        </div>
        
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: '50px',
          right: '-150px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f472b6 0%, #a78bfa 100%)',
          opacity: '0.1',
          zIndex: 0
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4ade80 0%, #60a5fa 100%)',
          opacity: '0.1',
          zIndex: 0
        }}></div>
      </Container>
    </section>
  );
};

export default Projects;
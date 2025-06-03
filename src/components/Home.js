// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <section id="home" style={{
      background: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Text content - positioned to take only 45% of width */}
      <div style={{
        width: '45%',
        paddingLeft: '5%',
        zIndex: 1
      }}>
        <h1 className="display-3 fw-bold mb-3">Hi, I'm <span className="text-primary">Arin Dwivedi</span></h1>
        <p className="lead">Data Analyst & Buisness Analyst</p>

        {/* Social media links */}
        <div className="d-flex gap-3 mb-4">
            <a href="https://github.com/Arin343/Arin-.git" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '2rem' }}>
                <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arin-dwivedi-89b08a276/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '2rem' }}>
                <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://drive.google.com/file/d/1bw1DJIcRRocGhoXkXse5NevGD6IHVSvg/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '2rem' }}>
                <i className="bi bi-file-earmark-text"></i>
            </a>
        </div>
      </div>
      
      {/* Image - positioned to take 55% of width and overlap slightly */}
      <div style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '60%',
        height: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      }}>
        <img 
          src="/character.png" 
          alt="Arin Dwivedi" 
          style={{
            maxHeight: '90vh',
            maxWidth: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom right'
          }} 
        />
      </div>
    </section>
  );
};

export default Home;
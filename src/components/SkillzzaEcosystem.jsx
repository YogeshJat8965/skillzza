import React from 'react';

const SkillzzaEcosystem = () => {
  return (
    <section
      className="w-full py-16 lg:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F3EBF9 35%, #E8D8F0 55%, #F3EBF9 80%, #FFFFFF 100%)',
        position: 'relative',
      }}
    >
      {/* Gradient Overlays from Right and Bottom */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to left, rgba(223, 195, 235, 0.8) 0%, transparent 30%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to top, rgba(223, 195, 235, 0.8) 0%, transparent 30%)',
          pointerEvents: 'none',
        }}
      />
      {/* Section Header */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 text-center mb-10 lg:mb-14" style={{ position: 'relative', zIndex: 1 }}>
        <h2
          className="mb-3"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 700,
            lineHeight: 1.2,
            color: '#0F1114',
          }}
        >
          Skillzza Ecosystem
        </h2>
        <p
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontWeight: 400,
            lineHeight: 1.6,
            color: '#71717B',
            fontStyle: 'italic',
          }}
        >
          Empowering Every Learner, Every Step of the Way
        </p>
      </div>

      {/* Ecosystem Diagram - Using the actual design SVG */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12" style={{ position: 'relative', zIndex: 1 }}>
        <img
          src="/img/Group 37832.svg"
          alt="Skillzza Ecosystem diagram showing five interconnected platforms: The Potential Meter (AI Skill Engine), Xperience Platform (Immersive Learning Labs), Talent Transformation (Career Mobility Pipeline), AI HackNex (Talent Marketplace), and Hirenest (Career Mobility Pipeline). Bottom process flow shows Assessment, Mentoring, Simulations, Project Showcase, and Get Hired."
          className="w-full h-auto"
          style={{
            maxWidth: '100%',
          }}
        />
      </div>
    </section>
  );
};

export default SkillzzaEcosystem;

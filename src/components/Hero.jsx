import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle scroll for vanishing effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger entrance animation
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(1deg); }
          66% { transform: translateY(-25px) rotate(-1deg); }
        }
        
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(20px) rotate(-0.5deg); }
          66% { transform: translateY(10px) rotate(0.5deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.85) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes gentleRotate {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        
        @keyframes scrollLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .scroll-container {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .scroll-content {
          display: flex;
          animation: scrollLeft 30s linear infinite;
          animation-delay: -15s;
        }
        
        .scroll-content:hover {
          animation-play-state: paused;
        }
        
        .animate-float {

          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: floatReverse 10s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-fade-in-scale {
          animation: fadeInScale 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .parallax-layer {
          transition: transform 0.05s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>
      
      <section 
        className="w-full relative"
        style={{
          backgroundImage: 'url(/img/Group%2037827.png)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          minHeight: '907px',
          opacity: Math.max(1 - scrollY * 0.0015, 0),
          transition: 'opacity 0.1s ease-out',
        }}
      >
      <div 
        className="max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32 pt-0 relative z-10 "
        style={{ paddingBottom: '200px' }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12   ">
          {/* Left Side - Content */}
          <div 
            className="flex-1 max-w-2xl ml-[40px] "
          >
            {/* Main Heading */}
            <h1 
              className={`mb-6 ${isLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '70px',
                fontWeight: 700,
                lineHeight: '1.2',
                
                color: '#0F1114',
                animationDelay: '0.2s',
                marginTop: '-194px',
                
              }}
            >
              The AI-Powered Career Engine for Tomorrow's Talent
            </h1>

            {/* Subheading */}
            <p 
              className={`mb-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '24px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#71717B',
                animationDelay: '0.4s',
              }}
            >
              From Learning to Hiring – One Seamless Journey of Skill Discovery, Simulation & Transformation
            </p>

            {/* Buttons */}
            <div className={`flex flex-wrap gap-4 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              {/* Start Your Journey Button */}
              <button
                className="hover-lift"
                style={{
                  background: 'linear-gradient(90deg, #CF2C2E 0%, #C72C2E 54.7%, #FBA93E 100%)',
                  borderRadius: '8px',
                  padding: '18px 40px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                Start Your Journey
              </button>

              {/* How It Works Button */}
              <button
                className="hover-lift"
                style={{
                  background: '#ffffff',
                  borderRadius: '8px',
                  padding: '18px 40px',
                  border: '1px solid #CC2B2E',
                  cursor: 'pointer',
                  fontFamily: "'Lato', sans-serif",
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#CA2C2E',
                }}
              >
                How It Works
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div 
            className={`flex-1 relative flex justify-center lg:justify-end ${isLoaded ? 'animate-fade-in-scale' : 'opacity-0'}`}
            style={{ 
              zIndex: 20,
              animationDelay: '0.3s',
            }}
          >
            <div 
              style={{
                background: 'transparent url(/img/02.png) 0% 0% no-repeat padding-box',
                width: '918px',
                height: '918px',
                opacity: 1,
                backgroundSize: 'contain',
                zIndex: 20,
                animation: 'gentleRotate 6s ease-in-out infinite',
              }}
            >
            </div>
          </div>
        </div>

        {/* Scrolling Strips Section - Full Width */}
        <div className="scroll-container" style={{ position: 'relative', zIndex: 30, width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginTop: '-220px' }}>
          <div className="scroll-content">
            {/* First set of strips */}
            <div style={{ display: 'flex', gap: '24px', paddingRight: '24px' }}>
              {/* Strip 1 - Assessments */}
              <div style={{ 
                width: '606px', 
                height: '82px', 
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src="/img/Group 37828.svg" 
                  alt="Assessments" 
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    flexShrink: 0
                  }} 
                />
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#6B7280',
                  lineHeight: '1.4'
                }}>
                  Discover your strengths through smart assessments
                </span>
              </div>

              {/* Strip 2 - Simulations */}
              <div style={{ 
                width: '606px', 
                height: '82px', 
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src="/img/Group 37829.svg" 
                  alt="Simulations" 
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    flexShrink: 0
                  }} 
                />
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#6B7280',
                  lineHeight: '1.4'
                }}>
                  Simulate real-world roles to sharpen your edge
                </span>
              </div>

              {/* Strip 3 - Portfolio */}
              <div style={{ 
                width: '606px', 
                height: '82px', 
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src="/img/Group 37830.svg" 
                  alt="Portfolio" 
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    flexShrink: 0
                  }} 
                />
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#6B7280',
                  lineHeight: '1.4'
                }}>
                  Build a portfolio that proves your potential
                </span>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div style={{ display: 'flex', gap: '24px', paddingRight: '24px' }}>
              {/* Strip 1 - Assessments */}
              <div style={{ 
                width: '606px', 
                height: '82px', 
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src="/img/Group 37828.svg" 
                  alt="Assessments" 
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    flexShrink: 0
                  }} 
                />
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#6B7280',
                  lineHeight: '1.4'
                }}>
                  Discover your strengths through smart assessments
                </span>
              </div>

              {/* Strip 2 - Simulations */}
              <div style={{ 
                width: '606px', 
                height: '82px', 
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src="/img/Group 37829.svg" 
                  alt="Simulations" 
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    flexShrink: 0
                  }} 
                />
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#6B7280',
                  lineHeight: '1.4'
                }}>
                  Simulate real-world roles to sharpen your edge
                </span>
              </div>

              {/* Strip 3 - Portfolio */}
              <div style={{ 
                width: '606px', 
                height: '82px', 
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src="/img/Group 37830.svg" 
                  alt="Portfolio" 
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    flexShrink: 0
                  }} 
                />
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#6B7280',
                  lineHeight: '1.4'
                }}>
                  Build a portfolio that proves your potential
                </span>
              </div>
            </div>

            {/* Third set for seamless loop */}
            <div style={{ display: 'flex', gap: '24px', paddingRight: '24px' }}>
              {/* Strip 1 - Assessments */}
              <div style={{ 
                width: '606px', 
                height: '82px', 
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src="/img/Group 37828.svg" 
                  alt="Assessments" 
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    flexShrink: 0
                  }} 
                />
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#6B7280',
                  lineHeight: '1.4'
                }}>
                  Discover your strengths through smart assessments
                </span>
              </div>

              {/* Strip 2 - Simulations */}
              <div style={{ 
                width: '606px', 
                height: '82px', 
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src="/img/Group 37829.svg" 
                  alt="Simulations" 
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    flexShrink: 0
                  }} 
                />
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#6B7280',
                  lineHeight: '1.4'
                }}>
                  Simulate real-world roles to sharpen your edge
                </span>
              </div>

              {/* Strip 3 - Portfolio */}
              <div style={{ 
                width: '606px', 
                height: '82px', 
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src="/img/Group 37830.svg" 
                  alt="Portfolio" 
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    flexShrink: 0
                  }} 
                />
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#6B7280',
                  lineHeight: '1.4'
                }}>
                  Build a portfolio that proves your potential
                </span>
              </div>
            </div>

            {/* Fourth set for seamless loop */}
            <div style={{ display: 'flex', gap: '24px', paddingRight: '24px' }}>
              {/* Strip 1 - Assessments */}
              <div style={{ 
                width: '606px', 
                height: '82px', 
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src="/img/Group 37828.svg" 
                  alt="Assessments" 
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    flexShrink: 0
                  }} 
                />
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#6B7280',
                  lineHeight: '1.4'
                }}>
                  Discover your strengths through smart assessments
                </span>
              </div>

              {/* Strip 2 - Simulations */}
              <div style={{ 
                width: '606px', 
                height: '82px', 
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src="/img/Group 37829.svg" 
                  alt="Simulations" 
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    flexShrink: 0
                  }} 
                />
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#6B7280',
                  lineHeight: '1.4'
                }}>
                  Simulate real-world roles to sharpen your edge
                </span>
              </div>

              {/* Strip 3 - Portfolio */}
              <div style={{ 
                width: '606px', 
                height: '82px', 
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                padding: '16px 24px',
                gap: '16px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
              }}>
                <img 
                  src="/img/Group 37830.svg" 
                  alt="Portfolio" 
                  style={{ 
                    width: '50px', 
                    height: '50px',
                    flexShrink: 0
                  }} 
                />
                <span style={{ 
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#6B7280',
                  lineHeight: '1.4'
                }}>
                  Build a portfolio that proves your potential
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;

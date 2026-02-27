import React, { useState, useEffect, useRef } from 'react';

const SchoolOfTechnology = () => {
  const [isVisible, setIsVisible] = useState({
    image: false,
    heading: false,
    subheading: false,
    description: false,
    expertiseHeading: false,
    tags: false,
  });
  
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const expertiseHeadingRef = useRef(null);
  const tagsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        const elementType = entry.target.dataset.elementType;
        // Toggle visibility - animations run every time element enters viewport
        setIsVisible(prev => ({ ...prev, [elementType]: entry.isIntersecting }));
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const refs = [
      { ref: imageRef, type: 'image' },
      { ref: headingRef, type: 'heading' },
      { ref: subheadingRef, type: 'subheading' },
      { ref: descriptionRef, type: 'description' },
      { ref: expertiseHeadingRef, type: 'expertiseHeading' },
      { ref: tagsRef, type: 'tags' },
    ];

    refs.forEach(({ ref, type }) => {
      if (ref.current) {
        ref.current.dataset.elementType = type;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
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
        
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-pop-in {
          animation: popIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
    <section className="w-full bg-white pt-0 pb-16 lg:pb-20">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex items-center gap-12">
          {/* Left Side - Image */}
          <div 
            ref={imageRef}
            className={isVisible.image ? 'animate-slide-in-left' : 'opacity-0'}
            style={{
              left: '0px',
              width: '650px',
              height: '665px',
              background: 'transparent url(/img/Group%2037833.png) 0% 0% no-repeat padding-box',
              backgroundSize: 'contain',
              opacity: 1,
            }}
          >
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 px-12 lg:px-24 xl:px-32">
            {/* Main Heading */}
            <h2 
              ref={headingRef}
              className={`mb-4 ${isVisible.heading ? 'animate-fade-in-right' : 'opacity-0'}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: '1.2',
                color: '#0F1114',
              }}
            >
              School of Technology
            </h2>

            {/* Subheading */}
            <h3 
              ref={subheadingRef}
              className={`mb-6 ${isVisible.subheading ? 'animate-fade-in-right delay-100' : 'opacity-0'}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '1.2',
                color: '#71717B',
              }}
            >
              Elevate Your Expertise with Future-Ready Skills
            </h3>

            {/* Description */}
            <p 
              ref={descriptionRef}
              className={`mb-12 ${isVisible.description ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.6',
                color: '#71717B',
              }}
            >
              Experience the perfect blend of theoretical knowledge and practical application. Our programs don't just teach you to adapt to change, they position you to lead transformation in your field.
            </p>

            {/* Areas of Expertise */}
            <h4 
              ref={expertiseHeadingRef}
              className={`mb-6 ${isVisible.expertiseHeading ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: '1.2',
                color: '#0F1114',
              }}
            >
              Areas of Expertise
            </h4>

            {/* Tags/Pills */}
            <div 
              ref={tagsRef}
              className={`flex flex-wrap gap-4 ${isVisible.tags ? 'animate-pop-in delay-400' : 'opacity-0'}`}
            >
              <div 
                style={{
                  background: '#D4EDFA',
                  borderRadius: '25px',
                  padding: '12px 24px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#0F1114',
                }}
              >
                AI & Quantum
              </div>
              <div 
                style={{
                  background: '#D4EDFA',
                  borderRadius: '25px',
                  padding: '12px 24px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#0F1114',
                }}
              >
                Sustainability & Climate Action
              </div>
              <div 
                style={{
                  background: '#D4EDFA',
                  borderRadius: '25px',
                  padding: '12px 24px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#0F1114',
                }}
              >
                Aerial Intelligence
              </div>
              <div 
                style={{
                  background: '#D4EDFA',
                  borderRadius: '25px',
                  padding: '12px 24px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#0F1114',
                }}
              >
                Design Thinking
              </div>
              <div 
                style={{
                  background: '#D4EDFA',
                  borderRadius: '25px',
                  padding: '12px 24px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '16px',
                  fontWeight: 500,
                  color: '#0F1114',
                }}
              >
                EV & E-Mobility
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default SchoolOfTechnology;

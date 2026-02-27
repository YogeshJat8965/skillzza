import React, { useState, useEffect, useRef } from 'react';

const SolutionSkillStudio = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [scaledButton, setScaledButton] = useState(0);
    const [isVisible, setIsVisible] = useState({
        title: false,
        tabs: false,
        content: false,
    });
    
    const titleRef = useRef(null);
    const tabsRef = useRef(null);
    const contentRef = useRef(null);

    // Auto-scale buttons one by one
    useEffect(() => {
        const interval = setInterval(() => {
            setScaledButton((prev) => (prev + 1) % 5);
        }, 1500); // Change button every 1.5 seconds

        return () => clearInterval(interval);
    }, []);

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
            { ref: titleRef, type: 'title' },
            { ref: tabsRef, type: 'tabs' },
            { ref: contentRef, type: 'content' },
        ];

        refs.forEach(({ ref, type }) => {
            if (ref.current) {
                ref.current.dataset.elementType = type;
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, []);

    const tabs = [
        {
            label: 'The potential Meter',
            title: 'The Potential Meter',
            subtitle: 'From Learning to Hiring – One Seamless Journey of Skill Discovery, Simulation & Transformation',
            bullets: [
                'Intelligent assessments of cognitive, technical, and behavioral skills.',
                'Simulation-driven evaluation of workplace attitudes and responses.',
                'Personalized career pathway recommendations.',
                'Data-driven mentoring insights powered by our proprietary 4M framework.',
            ],
            cta1: 'Discover Your Potential',
            cta2: 'Get Your Skill Report',
            image: '/img/Mask Group 90.png',
        },
        {
            label: 'Xperience platform',
            title: 'Xperience Platform',
            subtitle: 'Real-World Simulations That Bridge the Gap Between Learning and Employment',
            bullets: [
                'Challenge-based learning journeys mapped to industry roles.',
                'Real-world job simulations across domains.',
                'Digital, verifiable portfolios for every learner.',
                'Applied learning pathways designed for job readiness.',
            ],
            cta1: 'Start Your Journey',
            cta2: 'Explore Simulations',
            image: '/img/Group 37833.png',
        },
        {
            label: 'Talent Transformation',
            title: 'Talent Transformation',
            subtitle: 'Empowering Organizations to Upskill, Reskill and Future-Proof Their Workforce',
            bullets: [
                'Workforce skill mapping & gap analysis.',
                'Role-specific upskilling programs.',
                'Succession & talent planning analytics.',
                'Behavioral matching for team performance.',
            ],
            cta1: 'Transform Your Team',
            cta2: 'View Programs',
            image: '/img/Mask Group 98.png',
        },
        {
            label: 'AI HackNex',
            title: 'AI HackNex',
            subtitle: 'Global AI Challenges That Spark Innovation and Showcase Real Talent',
            bullets: [
                'Global AI challenges & innovation sprints.',
                'Real-world enterprise problem-solving.',
                'Recognition from industry leaders.',
                'Skill showcase on top platforms.',
            ],
            cta1: 'Join a Challenge',
            cta2: 'View Past Hackathons',
            image: '/img/Mask Group 96.png',
        },
        {
            label: 'Hirenest',
            title: 'Hirenest',
            subtitle: 'AI-Powered Talent Marketplace Connecting Verified Skills with the Right Roles',
            bullets: [
                'AI-matched, skill-verified talent pools.',
                'Live portfolios & performance metrics.',
                'Reduced hiring time, better retention.',
                'Seamless enterprise integration.',
            ],
            cta1: 'Find Talent',
            cta2: 'Post a Role',
            image: '/img/Mask Group 112.png',
        },
    ];

    const activeData = tabs[activeTab];

    // Tab background colors (inactive state)
    const tabBgColors = [
        '#F4E4CD',  // warm beige
        '#F4E4CD',  // warm beige
        '#D8D6D6',  // light gray
        '#F7C9C9',  // light pink
        '#B6DFF5',  // light blue
    ];

    // Active tab color
    const activeTabColor = '#713593';

    return (
        <section className="w-full pt-24 lg:pt-32 pb-15" style={{ background: '#FFFFFF' }}>
            {/* Hover style for tab buttons */}
            <style>{`                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes scaleInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes buttonScale {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.15);
                    }
                }
                
                .animate-fade-in-down {
                    animation: fadeInDown 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                
                .animate-scale-in-up {
                    animation: scaleInUp 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                
                .animate-slide-in-up {
                    animation: slideInUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }
                
                .tab-btn {
                    position: relative;
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                                box-shadow 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .tab-btn-scaled {
                    animation: buttonScale 1.5s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 12px 28px rgba(113, 53, 147, 0.25), 
                                0 6px 12px rgba(113, 53, 147, 0.15);
                }
                
                .tab-btn-active {
                    box-shadow: 0 8px 16px rgba(113, 53, 147, 0.25),
                                0 4px 8px rgba(113, 53, 147, 0.15);
                }
            `}</style>
            {/* Section Title */}
            <div 
                ref={titleRef}
                className={`w-[1580px] mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 text-center mb-12 lg:mb-16 ${isVisible.title ? 'animate-fade-in-down' : 'opacity-0'}`}
            >
                <h2
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        fontWeight: 700,
                        lineHeight: 1.2,
                        color: '#0F1114',
                    }}
                >
                    The Solution–Skill Studio
                </h2>
            </div>

            {/* Tabs Bar - Box 1 */}
            <div
                ref={tabsRef}
                className={`max-w-[1580px] mx-auto px-4 sm:px-8 lg:px-[173px] ${isVisible.tabs ? 'animate-scale-in-up' : 'opacity-0'}`}
            >
                <div
                    className="flex flex-wrap justify-center gap-5 sm:gap-6 py-4 px-4 sm:px-6"
                    style={{
                        background: '#F4F4F5',
                        mixBlendMode: 'multiply',
                        borderRadius: '8px',
                    }}
                >
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`tab-btn transition-all duration-300 ${activeTab === index ? 'tab-btn-active' : ''} ${scaledButton === index ? 'tab-btn-scaled' : ''}`}
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 'clamp(13px, 1.5vw, 16px)',
                                fontWeight: 600,
                                padding: '10px 20px',
                                borderRadius: '8px',
                                border: 'none',
                                background: activeTab === index ? activeTabColor : tabBgColors[index],
                                color: activeTab === index ? '#FFFFFF' : '#4B5563',
                                cursor: 'default',
                                whiteSpace: 'nowrap',
                                letterSpacing: '-0.025em',
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content - Box 2 */}
            <div
                ref={contentRef}
                className={`max-w-[1580px] mx-auto px-4 sm:px-8 lg:px-[173px] mt-8 ${isVisible.content ? 'animate-slide-in-up' : 'opacity-0'}`}
            >
                <div
                    className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-12 sm:p-16 lg:p-20"
                    style={{
                        background: '#F4F4F5',
                        mixBlendMode: 'multiply',
                        borderRadius: '8px',
                    }}
                >
                    {/* Left Content */}
                    <div className="flex-1 min-w-0">
                        <h3
                            className="mb-3"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 'clamp(28px, 3.5vw, 40px)',
                                fontWeight: 700,
                                lineHeight: 1.2,
                                color: '#5B2D8E',
                                letterSpacing: '-0.025em',
                            }}
                        >
                            {activeData.title}
                        </h3>

                        <p
                            className="mb-6"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 'clamp(14px, 1.6vw, 17px)',
                                fontWeight: 600,
                                lineHeight: 1.5,
                                color: '#374151',
                            }}
                        >
                            {activeData.subtitle}
                        </p>

                        <ul className="mb-8" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {activeData.bullets.map((bullet, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 mb-4"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: 'clamp(14px, 1.5vw, 16px)',
                                        fontWeight: 600,
                                        lineHeight: 1.6,
                                        color: '#4B5563',
                                    }}
                                >
                                    <span
                                        className="flex-shrink-0 mt-2"
                                        style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: '#5B2D8E',
                                            display: 'inline-block',
                                        }}
                                    />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button
                                className="transition-all duration-300 hover:opacity-90"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    padding: '12px 28px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: '#713593',
                                    color: '#FFFFFF',
                                    cursor: 'pointer',
                                    letterSpacing: '-0.025em',
                                }}
                            >
                                {activeData.cta1}
                            </button>
                            <button
                                className="transition-all duration-300 hover:bg-purple-50"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    padding: '12px 28px',
                                    borderRadius: '8px',
                                    border: '2px solid #713593',
                                    background: 'transparent',
                                    color: '#713593',
                                    cursor: 'pointer',
                                    letterSpacing: '-0.025em',
                                }}
                            >
                                {activeData.cta2}
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center items-center min-w-0">
                        <img
                            src={activeData.image}
                            alt={activeData.title}
                            className="w-full h-auto"
                            style={{
                                maxWidth: '560px',
                                borderRadius: '16px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSkillStudio;

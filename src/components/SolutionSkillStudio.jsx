import React, { useState } from 'react';

const SolutionSkillStudio = () => {
    const [activeTab, setActiveTab] = useState(0);

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
        <section className="w-full py-16 lg:py-24" style={{ background: '#FFFFFF' }}>
            {/* Hover style for tab buttons */}
            <style>{`
                .tab-btn {
                    transition: all 0.3s ease;
                }
                .tab-btn:hover {
                    box-shadow: 0 6px 24px #EFEFF0, 0 0 0 3px #EFEFF0;
                    transform: translateY(-2px) scale(1.03);
                }
            `}</style>
            {/* Section Title */}
            <div className="max-w-[1920px] mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 text-center mb-10 lg:mb-14">
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
                className="max-w-[1580px] mx-auto px-4 sm:px-8 lg:px-[173px]"
            >
                <div
                    className="flex flex-wrap justify-center gap-3 sm:gap-4 py-4 px-4 sm:px-6"
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
                            className="tab-btn transition-all duration-300"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 'clamp(13px, 1.5vw, 16px)',
                                fontWeight: 600,
                                padding: '10px 20px',
                                borderRadius: '8px',
                                border: 'none',
                                background: activeTab === index ? activeTabColor : tabBgColors[index],
                                color: activeTab === index ? '#FFFFFF' : '#4B5563',
                                cursor: 'pointer',
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
                className="max-w-[1580px] mx-auto px-4 sm:px-8 lg:px-[173px] mt-6"
            >
                <div
                    className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-8 sm:p-10 lg:p-14"
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

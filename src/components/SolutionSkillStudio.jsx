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

    const tabBgColors = ['#F4E4CD', '#F4E4CD', '#D8D6D6', '#F7C9C9', '#B6DFF5'];
    const activeTabColor = '#713593';

    return (
        <section className="w-full py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
            {/* Hover style */}
            <style>{`
                .tab-btn { transition: all 0.3s ease; }
                .tab-btn:hover { box-shadow: 0 6px 24px #EFEFF0, 0 0 0 3px #EFEFF0; transform: translateY(-2px) scale(1.03); }
            `}</style>

            {/* Section Title */}
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 text-center mb-8 sm:mb-10 lg:mb-14">
                <h2 className="font-[DM_Sans] text-[#0F1114] font-bold leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
                    The Solution–Skill Studio
                </h2>
            </div>

            {/* Tabs Bar */}
            <div className="max-w-[1580px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-[173px]">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 py-3 sm:py-4 px-3 sm:px-4 lg:px-6 bg-[#F4F4F5] rounded-lg" style={{ mixBlendMode: 'multiply' }}>
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className="tab-btn font-[DM_Sans] text-xs sm:text-[13px] md:text-sm lg:text-base font-semibold py-2 sm:py-2.5 px-3 sm:px-4 lg:px-5 rounded-lg border-none cursor-pointer whitespace-nowrap tracking-tight"
                            style={{
                                background: activeTab === index ? activeTabColor : tabBgColors[index],
                                color: activeTab === index ? '#FFFFFF' : '#4B5563',
                            }}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-[1580px] mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-[173px] mt-4 sm:mt-6">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 xl:gap-16 p-5 sm:p-7 md:p-8 lg:p-10 xl:p-14 bg-[#F4F4F5] rounded-lg" style={{ mixBlendMode: 'multiply' }}>
                    {/* Left Content */}
                    <div className="flex-1 min-w-0">
                        <h3 className="mb-3 font-[DM_Sans] text-[#5B2D8E] font-bold leading-tight tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                            {activeData.title}
                        </h3>

                        <p className="mb-4 sm:mb-6 font-[DM_Sans] text-[#374151] font-semibold leading-normal text-sm sm:text-[15px] md:text-base lg:text-[17px]">
                            {activeData.subtitle}
                        </p>

                        <ul className="mb-6 sm:mb-8 list-none p-0 m-0">
                            {activeData.bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3 mb-3 sm:mb-4 font-[DM_Sans] text-[#4B5563] font-semibold leading-relaxed text-sm sm:text-[15px] lg:text-base">
                                    <span className="flex-shrink-0 mt-2 w-2 h-2 rounded-full bg-[#5B2D8E] inline-block" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Buttons */}
                        <div className="flex flex-nowrap gap-2 sm:gap-3 lg:gap-4">
                            <button className="font-[DM_Sans] text-xs sm:text-sm lg:text-[15px] font-semibold py-2 sm:py-2.5 lg:py-3 px-3 sm:px-5 lg:px-7 rounded-lg border-none bg-[#713593] text-white cursor-pointer hover:opacity-90 transition-all tracking-tight whitespace-nowrap">
                                {activeData.cta1}
                            </button>
                            <button className="font-[DM_Sans] text-xs sm:text-sm lg:text-[15px] font-semibold py-2 sm:py-2.5 lg:py-3 px-3 sm:px-5 lg:px-7 rounded-lg border-2 border-[#713593] bg-transparent text-[#713593] cursor-pointer hover:bg-purple-50 transition-all tracking-tight whitespace-nowrap">
                                {activeData.cta2}
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 flex justify-center items-center min-w-0 w-full">
                        <img
                            src={activeData.image}
                            alt={activeData.title}
                            className="w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px] xl:max-w-[560px] h-auto object-contain rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSkillStudio;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function OurPathwayPage() {
  const [activeTab, setActiveTab] = useState('individuals')

  const tabOptions = [
    { id: 'individuals', label: 'For Individuals' },
    { id: 'organizations', label: 'For Organizations' },
    { id: 'communities', label: 'For Communities' },
  ]

  const tabContent = {
    individuals: {
      heading: 'For Individuals',
      image: '/Company/Get Started TodayIndividuals.png',
      bullets: [
        'Complete our SDG Skills Assessment',
        'Get personalized pathway recommendations',
        'Enroll in your chosen program',
        'Start your transformation journey',
      ],
    },
    organizations: {
      heading: 'For Organizations',
      image: '/Company/Get Started TodayOrganizations.png',
      bullets: [
        'Diagnose workforce gaps with our SDG Skills Index',
        'Co-create tailored capability pathways for every team',
        'Track progress with transparent impact dashboards',
        'Start your transformation journey',
      ],
    },
    communities: {
      heading: 'For Communities',
      image: '/Company/Get Started TodayCommunities.png',
      bullets: [
        'Partner with us for employee development',
        'Create custom corporate programs',
        'Support community development initiatives',
        'Measure and report SDG impact',
      ],
    },
  }

  const activeTabContent = tabContent[activeTab]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');
      `}</style>

      {/* ── Hero Section ── */}
      <section className="w-full" style={{ backgroundColor: '#F8F8F8' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '1320px',
            margin: '0 auto',
            padding: '40px 24px 32px',
          }}
        >
          {/* Text Content — Centered */}
          <div className="flex flex-col items-center text-center">
            {/* Main Heading */}
            <h1
              className="pathway-hero-heading"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 500,
                fontSize: '56px',
                lineHeight: '1',
                letterSpacing: '0%',
                color: '#E11313',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                width: '100%',
                maxWidth: '1100px',
                margin: '0 auto',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              Transforming Lives Through
              <br />
              SDG-Aligned Skills Development
            </h1>

            {/* Subheading */}
            <p
              className="pathway-hero-subheading"
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 400,
                fontSize: '36px',
                lineHeight: '1',
                letterSpacing: '0%',
                color: '#0F1114',
                marginTop: '16px',
                whiteSpace: 'nowrap',
              }}
            >
              Empowering Communities. Bridging Gaps.. Building Futures...
            </p>

            {/* Description */}
            <p
              className="pathway-hero-description"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '28px',
                lineHeight: '1.35',
                color: '#3F3F46',
                marginTop: '12px',
                maxWidth: '1100px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              Join thousands who have transformed their lives through our inclusive, impact-driven skill
              development programs aligned with UN Sustainable Development Goals.
            </p>

            {/* Buttons */}
            <div
              className="pathway-hero-buttons"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '26px',
                marginTop: '32px',
                marginBottom: '18px',
                position: 'relative',
                zIndex: 20,
                opacity: 1,
                transform: 'translateY(0)',
              }}
            >
              {[
                'Start Your Journey',
                'Explore Programs',
              ].map((label) => (
                <button
                  key={label}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    padding: '16px 52px',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    backgroundColor: '#E11313',
                    boxShadow: '0px 4px 4px 0px #00000040',
                    letterSpacing: '0.5px',
                    minWidth: '240px',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Puzzle Image — same width as content */}
          <div
            className="pathway-hero-image"
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '8px',
              position: 'relative',
              zIndex: 10,
            }}
          >
            <img
              src="/Company/25412d49d304b2df2e2cae48121b10e56bca89fb.png"
              alt="Skillzza and UN SDG partnership - people connecting puzzle pieces"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Our Commitment Section ── */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#F8F8F8',
          padding: '60px 24px 80px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1320px', margin: '0 auto' }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '1',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#0F0F0F',
                marginBottom: '12px',
              }}
            >
              Our Commitment
            </p>
            <h2
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '1.05',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#CF0C0C',
                textShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
                marginBottom: '16px',
              }}
            >
              Building a More Equitable World Through Skills
            </h2>
            <p
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '28px',
                lineHeight: '1',
                letterSpacing: '0%',
                textAlign: 'center',
                leadingTrim: 'none',
                color: '#3F3F46',
                width: '100%',
                maxWidth: '1280px',
                margin: '0 auto',
              }}
            >
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                At Skillzza, we believe that quality education and decent work opportunities are fundamental human rights.
              </span>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                Our SDG-aligned pathway is designed to create lasting impact across communities while
              </span>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                addressing critical global challenges.
              </span>
            </p>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(309px, 1fr))',
              gap: '28px',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            {[
              {
                image: '/Company/1image.png',
                sdg: 'SDG 04',
                title: 'Quality Education',
                description: 'Ensuring inclusive and equitable quality education',
                sdgColor: '#C78888',
                titleColor: '#8A0303',
                textColor: '#4A1A18',
                borderColor: '#D5A6A3',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FBEEEE 100%)',
              },
              {
                image: '/Company/2image.png',
                sdg: 'SDG 05',
                title: 'Gender Equality',
                description: 'Empowering women and girls through economic opportunities',
                sdgColor: '#BCA6CF',
                titleColor: '#7B1C6B',
                textColor: '#3C1141',
                borderColor: '#D9C4E4',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F6EFFB 100%)',
              },
              {
                image: '/Company/3image.png',
                sdg: 'SDG 08',
                title: 'Decent Work & Economic Growth',
                description: 'Promoting inclusive economic growth and decent work for all',
                sdgColor: '#E4CC94',
                titleColor: '#7C3B00',
                textColor: '#3C1F00',
                borderColor: '#E8D2AA',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #FDF5E9 100%)',
              },
              {
                image: '/Company/4image.png',
                sdg: 'SDG 10',
                title: 'Reduced Inequalities',
                description: 'Reducing inequality within and among countries',
                sdgColor: '#A9BEDF',
                titleColor: '#1F3F66',
                textColor: '#122338',
                borderColor: '#C4D5EA',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F3F6FB 100%)',
              },
            ].map((card, index) => (
              <div
                key={index}
                style={{
                  width: '309px',
                    height: '500px',
                  borderRadius: '22px',
                  border: `1.5px solid ${card.borderColor}`,
                  background: '#FEFAFA',
                  boxShadow: '0px 20px 30px rgba(15, 16, 18, 0.08)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                {/* Card Image */}
                <div
                  style={{
                    width: '100%',
                    height: '205px',
                    borderRadius: '15px 15px 0 0',
                    position: 'relative',
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '15px 15px 0 0',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Card Content */}
                <div
                  style={{
                    padding: '22px 24px 28px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      minHeight: '140px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'League Spartan, sans-serif',
                        fontWeight: '700',
                        fontSize: '48px',
                        lineHeight: '1',
                        color: card.sdgColor,
                        letterSpacing: '2px',
                        filter: 'drop-shadow(0px 3px 0px rgba(0, 0, 0, 0.25))',
                        margin: 0,
                        textAlign: 'left',
                      }}
                    >
                      {card.sdg}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontWeight: '700',
                        fontSize: '28px',
                        lineHeight: '1.25',
                        color: '#890404',
                        margin: 0,
                        textAlign: 'left',
                      }}
                    >
                      {card.title}
                    </p>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: '400',
                      fontSize: '22px',
                      lineHeight: '1.4',
                      marginTop: 0,
                      textAlign: 'left',
                      color: card.textColor,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pathway Difference Icons Section ── */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#F8F7F6',
          padding: '80px 24px 100px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1320px', margin: '0 auto' }}>
          {/* Section headings */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '1',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#0F0F0F',
                marginBottom: '14px',
              }}
            >
              The Skillzza Pathway Difference
            </p>
            <h2
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '1',
                color: '#CF0C0C',
                textShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              Building a More Equitable World Through Skills
            </h2>
          </div>

          {/* Icons highlight grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
              gap: '46px 56px',
              alignItems: 'start',
            }}
          >
            {[
              {
                icon: '/Company/1icon.png',
                title: 'Holistic Development Approach',
                description:
                  'We go beyond technical skills to nurture leadership, emotional intelligence, and sustainable mindsets.',
              },
              {
                icon: '/Company/2icon.png',
                title: 'Inclusive Access Framework',
                description:
                  'Designed to remove barriers and ensure everyone, regardless of background, has equal opportunity to succeed.',
              },
              {
                icon: '/Company/3icon.png',
                title: 'Impact-Driven Outcomes',
                description:
                  'Every program is measured against real-world SDG targets with transparent reporting and accountability.',
              },
              {
                icon: '/Company/4icon.png',
                title: 'Industry-Aligned Curriculum',
                description:
                  'Co-created with leading employers to ensure skills taught today meet the demands of tomorrow.',
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '56px',
                }}
              >
                <div
                  style={{
                    width: '75px',
                    height: '75px',
                    borderRadius: '10px',
                    background: '#D8D8D8',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    style={{ width: '36px', height: '36px', objectFit: 'contain' }}
                  />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'League Spartan, sans-serif',
                      fontWeight: 600,
                      fontSize: '30px',
                      lineHeight: '1.15',
                      color: '#0F0F0F',
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '1.45',
                      color: '#181818',
                      maxWidth: '420px',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve Section ── */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#F8F8F8',
          padding: '70px 24px 90px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '1',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#0F0F0F',
                marginBottom: '12px',
              }}
            >
              Who We Serve
            </p>
            <h2
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '1',
                color: '#CF0C0C',
                textShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            >
              Creating Opportunities for Everyone
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '32px',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            {[
              {
                image: '/Company/youth.png',
                icon: '/Company/Who We Serveicon1.png',
                title: 'Youth & Students',
              },
              {
                image: '/Company/working.png',
                icon: '/Company/Who We Serveicon2.png',
                title: 'Working Professionals',
              },
              {
                image: '/Company/women.png',
                icon: '/Company/Who We Serveicon3.png',
                title: 'Women Returning to Work',
              },
              {
                image: '/Company/underemployed.png',
                icon: '/Company/Who We Serveicon4.png',
                title: 'Underemployed Individuals',
              },
              {
                image: '/Company/rural.png',
                icon: '/Company/Who We Serveicon5.png',
                title: 'Rural Communities',
              },
              {
                image: '/Company/persons.png',
                icon: '/Company/Who We Serveicon6.png',
                title: 'Persons with Disabilities',
              },
            ].map((segment, index) => (
                <div
                  key={index}
                  style={{
                    width: '399px',
                    maxWidth: '100%',
                    height: '328px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    boxShadow: '0px 20px 35px rgba(0, 0, 0, 0.18)',
                    opacity: 0.9,
                  }}
                >
                  <img
                    src={segment.image}
                    alt={segment.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(9, 11, 19, 0.1) 15%, rgba(9, 11, 19, 0.78) 90%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '34px',
                      left: '28px',
                      right: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '12px',
                        background: '#D9D9D9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                          transform: 'translateY(-12px)',
                      }}
                    >
                      <img
                        src={segment.icon}
                        alt={`${segment.title} icon`}
                        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                      />
                    </div>
                    <div
                      style={{
                          color: '#FFFFFF',
                        fontFamily: 'League Spartan, sans-serif',
                        fontWeight: 600,
                        fontSize: '24px',
                        lineHeight: '1.2',
                        textShadow: '0px 4px 12px rgba(0, 0, 0, 0.45)',
                      }}
                    >
                      {segment.title}
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partnership Ecosystem Section ── */}
     

      <section
        style={{
          width: '100%',
          backgroundColor: '#F6F6F6',
          padding: '80px 24px 110px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1320px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 400,
                fontSize: '32px',
                lineHeight: '1',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#0F0F0F',
                marginBottom: '12px',
              }}
            >
              Get Started Today
            </p>
            <h2
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '1.05',
                color: '#CF0C0C',
                textShadow: '0px 4px 0px rgba(0, 0, 0, 0.25)',
                marginBottom: '18px',
              }}
            >
              Choose Your Path to Impact
            </h2>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              width: '100%',
              maxWidth: '957px',
              margin: '0 auto',
              minHeight: '96px',
              background: '#FFFFFF',
              borderRadius: '50px',
              padding: '12px 20px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderBottom: '4px solid #D9D9D9',
            }}
          >
            {tabOptions.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    width: '307px',
                    height: '72px',
                    textAlign: 'center',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: '32px',
                    color: isActive ? '#FFFFFF' : '#8A0303',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50px',
                    background: isActive ? '#890404' : 'transparent',
                    boxShadow: isActive ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '32px',
              boxShadow: '0px 20px 45px rgba(0, 0, 0, 0.08)',
              display: 'flex',
              flexWrap: 'wrap',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                flex: '1 1 460px',
                minHeight: '456px',
              }}
            >
              <img
                src={activeTabContent.image}
                alt={`${activeTabContent.heading} visual`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  borderTopLeftRadius: '25px',
                  borderBottomLeftRadius: '25px',
                }}
              />
            </div>
            <div
              style={{
                flex: '1 1 380px',
                padding: '56px 60px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'League Spartan, sans-serif',
                  fontWeight: 700,
                  fontSize: '30px',
                  color: '#8A0303',
                }}
              >
                {activeTabContent.heading}
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '20px',
                  color: '#181818',
                }}
              >
                {activeTabContent.bullets.map((text) => (
                  <li key={text} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '999px',
                        backgroundColor: '#CF0C0C',
                      }}
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          width: '100%',
          padding: '70px 24px 90px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1573px',
            margin: '0 auto',
            borderRadius: '0px',
            overflow: 'hidden',
            boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.18)',
            background: 'linear-gradient(0deg, #CF2C2E 0%, #B01111 100%)',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: "url('/Company/Ready to Transform Your LifeBacckgroundImage.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.1,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '360px',
              padding: '90px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '32px',
            }}
          >
            <h2
              style={{
                fontFamily: 'League Spartan, sans-serif',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '1',
                color: '#FBFAFA',
                textAlign: 'center',
                letterSpacing: '0%',
                margin: 0,
              }}
            >
              Ready to Transform Your Life?
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '24px',
                justifyContent: 'center',
              }}
            >
              {[
                "Apply Now - It's Free",
                'Schedule Counseling Call',
              ].map((label) => (
                <button
                  key={label}
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: '18px',
                    color: '#0F0F0F',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '999px',
                    border: 'none',
                    padding: '18px 42px',
                    minWidth: '240px',
                    cursor: 'pointer',
                    boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurPathwayPage

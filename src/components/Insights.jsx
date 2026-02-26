import React from 'react';

const Insights = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32">
        {/* Header - Stacked vertically, left aligned */}
        <div className="mb-12">
          <h2
            className="mb-4"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '1.2',
              color: '#0F1114',
            }}
          >
            Insights
          </h2>

          {/* View all resources button */}
          <button
            style={{
              height: '44px',
              padding: '0 24px',
              background: 'transparent',
              border: '1px solid #0F1114',
              borderRadius: '8px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontWeight: 500,
              color: '#0F1114',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#0F1114';
              e.target.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#0F1114';
            }}
          >
            View all the resources
          </button>
        </div>

        {/* Main Layout - flex row */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'stretch' }}>
          {/* Left Column - Tall Purple Card */}
          <div style={{ width: '25%', flexShrink: 0 }}>
            <div
              style={{
                background: '#F4F4FF',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Image */}
              <div style={{ width: '100%', height: '280px', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src="/img/Mask%20Group%2096.png"
                  alt="AI Assistant"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Icon */}
                <div style={{ marginBottom: '16px' }}>
                  <img
                    src="/img/Group%2034192.svg"
                    alt="Icon"
                    style={{
                      width: '48px',
                      height: '48px',
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '1.4',
                    color: '#0F1114',
                    marginBottom: '24px',
                    flex: 1,
                  }}
                >
                  Skill Gaps to Skill Maps: The Future of Adaptive Career Assessment with AI
                </h3>

                {/* Button - auto width */}
                <button
                  style={{
                    alignSelf: 'flex-start',
                    height: '44px',
                    padding: '0 24px',
                    background: 'transparent',
                    border: '1px solid #0F1114',
                    borderRadius: '8px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0F1114',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#0F1114';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#0F1114';
                  }}
                >
                  Read the Blog
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - 2 Cards on top, Podcast card below */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Top Row - 2 Cards */}
            <div style={{ display: 'flex', gap: '24px' }}>
              {/* Card 2 - AI Talent Report (Robot - Beige) */}
              <div
                style={{
                  flex: 1,
                  background: '#F4E3CC',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image */}
                <div style={{ width: '100%', height: '320px', overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src="/img/Mask%20Group%20112.png"
                    alt="AI Robot"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Tag */}
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                      padding: '6px 16px',
                      background: '#E87444',
                      borderRadius: '20px',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      marginBottom: '16px',
                    }}
                  >
                    Research & Insights
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '20px',
                      fontWeight: 600,
                      lineHeight: '1.3',
                      color: '#0F1114',
                      marginBottom: '20px',
                      flex: 1,
                    }}
                  >
                    2025 AI Talent & Salary Benchmark Report
                  </h3>

                  {/* Button - auto width */}
                  <button
                    style={{
                      alignSelf: 'flex-start',
                      height: '44px',
                      padding: '0 24px',
                      background: 'transparent',
                      border: '1px solid #0F1114',
                      borderRadius: '8px',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#0F1114',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#0F1114';
                      e.target.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#0F1114';
                    }}
                  >
                    Read the reports
                  </button>
                </div>
              </div>

              {/* Card 3 - Skill Blueprint (Digital Interface - Pink) */}
              <div
                style={{
                  flex: 1,
                  background: '#F7C9C9',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image */}
                <div style={{ width: '100%', height: '320px', overflow: 'hidden', flexShrink: 0 }}>
                  <img
                    src="/img/Mask%20Group%2098.png"
                    alt="Digital Interface"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Tag */}
                  <span
                    style={{
                      display: 'inline-block',
                      alignSelf: 'flex-start',
                      padding: '6px 16px',
                      background: '#D02C2F',
                      borderRadius: '20px',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#FFFFFF',
                      marginBottom: '16px',
                    }}
                  >
                    Research & Insights
                  </span>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '20px',
                      fontWeight: 600,
                      lineHeight: '1.3',
                      color: '#0F1114',
                      marginBottom: '20px',
                      flex: 1,
                    }}
                  >
                    The Skill Blueprint<br />
                    AI & The Future of Work
                  </h3>

                  {/* Button - auto width */}
                  <button
                    style={{
                      alignSelf: 'flex-start',
                      height: '44px',
                      padding: '0 24px',
                      background: 'transparent',
                      border: '1px solid #0F1114',
                      borderRadius: '8px',
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#0F1114',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#0F1114';
                      e.target.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#0F1114';
                    }}
                  >
                    Explore the Case studies
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom - Full Width Podcast Card */}
            <div
              style={{
                background: '#B6DFF5',
                borderRadius: '12px',
                padding: '32px 40px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* Left Content */}
              <div style={{ flex: 1 }}>
                {/* Tag */}
                <span
                  style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    background: '#4A9FD8',
                    borderRadius: '20px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#FFFFFF',
                    marginBottom: '16px',
                  }}
                >
                  Podcast
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '24px',
                    fontWeight: 600,
                    lineHeight: '1.3',
                    color: '#0F1114',
                    marginBottom: '16px',
                  }}
                >
                  Skills DECODED:<br />
                  Conversations that matter.
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    color: '#0F1114',
                    margin: 0,
                  }}
                >
                  Tune in to The Skillzza Talks podcast where leaders, innovators, and changemakers unpack the skills reshaping careers, industries, and societies. Practical, insightful, and future-ready.
                </p>
              </div>

              {/* Right - Icon + Listen Button */}
              <div style={{ width: '195px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <img
                  src="/img/Group%2034199.svg"
                  alt="Microphone"
                  style={{
                    width: '80px',
                    height: '112px',
                    objectFit: 'contain',
                  }}
                />
                <button
                  style={{
                    height: '44px',
                    padding: '0 24px',
                    background: 'transparent',
                    border: '1px solid #0F1114',
                    borderRadius: '8px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#0F1114',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#0F1114';
                    e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#0F1114';
                  }}
                >
                  Listen now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;

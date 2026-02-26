import React from 'react';

const Insights = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1920px] mx-auto px-12 lg:px-24 xl:px-32">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-12">
          {/* Heading */}
          <h2 
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
              width: '240px',
              height: '48px',
              background: 'transparent',
              border: '1px solid #0F1114',
              borderRadius: '8px',
              fontFamily: "'Lato', sans-serif",
              fontSize: '16px',
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

        {/* Main Layout - 2 Columns */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Purple Card */}
          <div className="col-span-3">
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
              <div style={{ width: '100%', height: '350px', overflow: 'hidden' }}>
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
              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                {/* Icon */}
                <div className="mb-6">
                  <img 
                    src="/img/Group%2034192.svg" 
                    alt="Icon"
                    style={{
                      width: '64px',
                      height: '64px',
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-auto"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '20px',
                    fontWeight: 600,
                    lineHeight: '1.4',
                    color: '#0F1114',
                    marginBottom: '24px',
                  }}
                >
                  Skill Gaps to Skill Maps: The Future of Adaptive Career Assessment with AI
                </h3>

                {/* Button */}
                <button
                  style={{
                    width: '100%',
                    height: '48px',
                    background: 'transparent',
                    border: '1px solid #0F1114',
                    borderRadius: '8px',
                    fontFamily: "'Lato', sans-serif",
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
                  Read the Blog
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - 2 Cards on top, Podcast card below */}
          <div className="col-span-9">
            {/* Top Row - 2 Cards */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Card 2 - AI Talent Report (Robot - Beige) */}
              <div
                style={{
                  background: '#F4E3CC',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image */}
                <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
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
                      fontFamily: "'Lato', sans-serif",
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
                    className="mb-auto"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '20px',
                      fontWeight: 600,
                      lineHeight: '1.3',
                      color: '#0F1114',
                      marginBottom: '20px',
                    }}
                  >
                    2025 AI Talent & Salary Benchmark Report
                  </h3>

                  {/* Button */}
                  <button
                    style={{
                      width: '100%',
                      height: '48px',
                      background: 'transparent',
                      border: '1px solid #0F1114',
                      borderRadius: '8px',
                      fontFamily: "'Lato', sans-serif",
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
                    Read the reports
                  </button>
                </div>
              </div>

              {/* Card 3 - Skill Blueprint (Digital Interface - Pink) */}
              <div
                style={{
                  background: '#F7C9C9',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image */}
                <div style={{ width: '100%', height: '300px', overflow: 'hidden' }}>
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
                      fontFamily: "'Lato', sans-serif",
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
                    className="mb-auto"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '20px',
                      fontWeight: 600,
                      lineHeight: '1.3',
                      color: '#0F1114',
                      marginBottom: '20px',
                    }}
                  >
                    The Skill Blueprint<br />
                    AI & The Future of Work
                  </h3>

                  {/* Button */}
                  <button
                    style={{
                      width: '100%',
                      height: '48px',
                      background: 'transparent',
                      border: '1px solid #0F1114',
                      borderRadius: '8px',
                      fontFamily: "'Lato', sans-serif",
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
                gap: '40px',
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
                    fontFamily: "'Lato', sans-serif",
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
                  className="mb-4"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '24px',
                    fontWeight: 600,
                    lineHeight: '1.3',
                    color: '#0F1114',
                  }}
                >
                  Skills DECODED:<br />
                  Conversations that matter.
                </h3>

                {/* Description */}
                <p
                  className="mb-6"
                  style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: '15px',
                    fontWeight: 400,
                    lineHeight: '1.6',
                    color: '#0F1114',
                  }}
                >
                  Tune in to The Skillzza Talks podcast where leaders, innovators, and changemakers unpack the skills reshaping careers, industries, and societies. Practical, insightful, and future-ready.
                </p>

                {/* Button */}
                <button
                  style={{
                    minWidth: '160px',
                    height: '44px',
                    padding: '0 24px',
                    background: 'transparent',
                    border: '1px solid #0F1114',
                    borderRadius: '8px',
                    fontFamily: "'Lato', sans-serif",
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
                  Listen now
                </button>
              </div>

              {/* Right Icon */}
              <div style={{ flexShrink: 0 }}>
                <img 
                  src="/img/Group%2034199.svg" 
                  alt="Microphone"
                  style={{
                    width: '120px',
                    height: '120px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;

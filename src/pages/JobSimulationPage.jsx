import React, { useState } from 'react'

const stats = [
  {
    number: '10X',
    label: 'more',
    description: 'likely to land\na job',
  },
  {
    number: '10',
    label: 'million',
    description: 'students expected to meet\ntheir career aspirations!',
  },
  {
    number: '70+',
    label: 'career program',
    description: '& Industry Fields to\nchoose from',
  },
  {
    number: '115+',
    label: 'years',
    description: 'of collective Industry\nExpertise',
    accent: true,
  },
]

const solutionCards = [
  {
    title: 'Empowering the students\nworldwide',
    desc: 'An AI-powered Platform that\nmakes you job-ready\nglobally'
  },
  {
    title: 'Global Experience',
    desc: 'Gain Worldwide Professional\nSkills and Practical Exposure\nthrough Authentic Virtual\nExperiences'
  },
  {
    title: 'Championing Equity In\nEducation',
    desc: 'Shattering barriers to Attain\nYour Dream Career with no\ngeographic and logistic\nconstraints'
  },
  {
    title: 'Expert Guidance & Support',
    desc: 'Our team of sherpas is\ndedicated to steering you\ntowards a successful career\npath'
  },
  {
    title: 'Hands-On Learning',
    desc: 'Collaborate remotely with our\nnetwork of forward-thinking\ncompanies actively seeking\naspiring talent'
  },
  {
    title: 'Learning Transformation',
    desc: 'Explore in-depth knowledge\nwith full flexibility through\nvirtual learning, offering a truly\nimmersive experience.'
  }
]

const simulationCards = [
  {
    image: 'https://skillzza.com/assets/img/ChatBOTDeveloper_logo.jpg',
    logo: 'https://skillzza.com/assets/img/ai_lifebot_logo.jpeg',
    company: 'AI LifeBOT',
    title: 'ChatBOT Developer',
    category: 'Technology',
    level: 'Intermediate',
    duration: '35 - 40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/SocialMediaAdvertising_card.png',
    logo: 'https://skillzza.com/assets/img/suflexmedia_logo.png',
    company: 'Suflex Media',
    title: 'Crack the code of Social Media',
    category: 'Marketing',
    level: 'Advanced',
    duration: '45-50 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/greengold_animation_tile.png',
    logo: 'https://skillzza.com/assets/img/greengold_logo.png',
    company: 'GreenGold Animation',
    title: '2D Animation and VFX',
    category: 'Design',
    level: 'Intermediate',
    duration: '40-45 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/edgespark_it_tile.jpg',
    logo: 'https://skillzza.com/assets/img/edgespark_logo.png',
    company: 'Edgespark IT Ventures',
    title: 'Building a Minimum Viable Product (MVP) for startups',
    category: 'Entrepreneurship',
    level: 'Beginner',
    duration: '12-15 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/developing_applications_tile.jpg',
    logo: 'https://skillzza.com/assets/img/mscopilot.PNG',
    company: 'Microsoft',
    title: 'Developing AI agents with MS Copilot studio',
    category: 'Technology',
    level: 'Advanced',
    duration: '90-100 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/appsolutely_ai_tile.jpg',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'Data Scientist',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '60 - 80 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/midland_tile.jpg',
    logo: 'https://skillzza.com/assets/img/MidlandMicroFinance_logo.png',
    company: 'Midland Microfinance',
    title: 'Socially Responsible Lending in Microfinance',
    category: 'Banking',
    level: 'Intermediate',
    duration: '25-30 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/TransformingdatawithPowerBI_tile_img.png',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'Gen AI Engineer',
    category: 'Technology',
    level: 'Intermediate',
    duration: '60 - 80 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/DataIntelligence_tile.png',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'Data Intelligence',
    category: 'Technology',
    level: 'Intermediate',
    duration: '60 - 80 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/TransformingdatawithPowerBI_tile_img.png',
    logo: 'https://skillzza.com/assets/img/opg_logo.png',
    company: 'OPG Mobility',
    title: 'Simulating EV Charging Cycles & Analyzing Fast Charging Technology',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '18-20 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/branding_and_Storytelling_tileImg.jpg',
    logo: 'https://skillzza.com/assets/img/fusionFlare_logo.svg',
    company: 'Fusionflare',
    title: 'Transform the brands with Stories',
    category: 'Marketing',
    level: 'Intermediate',
    duration: '45-50 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/ailifebot_tile.jpg',
    logo: 'https://skillzza.com/assets/img/ai_lifebot_logo.jpeg',
    company: 'AI LifeBOT',
    title: 'Building and Optimizing Intelligent Systems',
    category: 'Other',
    level: 'Intermediate',
    duration: '35 - 40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/CyberSecurityAnalyst.png',
    logo: 'https://skillzza.com/assets/img/SentinelLogo.png',
    company: 'Microsoft',
    title: 'Cyber Security Analyst',
    category: 'Security',
    level: 'Advanced',
    duration: '40-60 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/digital_journalism_tile.jpg',
    logo: 'https://skillzza.com/assets/img/cxo_techbot.png',
    company: 'CXO TechBot',
    title: 'Digital Journalism and Multimedia Storytelling',
    category: 'Other',
    level: 'Intermediate',
    duration: '18-20 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/avatar_in_brand_tile.jpg',
    logo: 'https://skillzza.com/assets/img/Ponpuregroup.png',
    company: 'Pon pure chemicals',
    title: 'Integrating AI Chatbots with CRM for Chemical Sales Automation',
    category: 'Technology',
    level: 'Intermediate',
    duration: '45-50 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/AIDataEngineergooglecloud.png',
    logo: 'https://skillzza.com/assets/img/goggle_logo.png',
    company: 'Google',
    title: 'Preparing and Optimizing Datasets for AI Models in Google Cloud',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '25-30 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/salse_chanel_manager_ico.png',
    logo: 'https://skillzza.com/assets/img/faber_logo.png',
    company: 'Faber',
    title: 'build multi AI agents for enhancing Customer service efficiency',
    category: 'Other',
    level: 'Intermediate',
    duration: '45-60 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/AIEthics&fairnessConsultant_tile.png',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'AI Ethics & fairness Consultant',
    category: 'Consulting',
    level: 'Intermediate',
    duration: '35 - 40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/builderai_tile.jpg',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'AI Environmental Scientist',
    category: 'Sustainability & Climate Action',
    level: 'Intermediate',
    duration: '35 - 40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/AIforEngineer_tileCard.png',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'AI for Engineer',
    category: 'Development',
    level: 'Intermediate',
    duration: '35 - 40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/SoftwareEngineer_tileImg.png',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'Software Engineer',
    category: 'Development',
    level: 'Intermediate',
    duration: '35 - 40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/SustainabilityAnalyst_tile_img.png',
    logo: 'https://skillzza.com/assets/img/GSSCA_logo.png',
    company: 'GSSCA',
    title: 'Sustainability Analyst',
    category: 'Sustainability & Climate Action',
    level: 'Intermediate',
    duration: '35-40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/RiskAssessmentStrategist_tile_img.png',
    logo: 'https://skillzza.com/assets/img/MidlandMicroFinance_logo.png',
    company: 'Midland Microfinance',
    title: 'Risk Assessment Strategist',
    category: 'Banking',
    level: 'Intermediate',
    duration: '25-30 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/prompt_engineering_tile.jpg',
    logo: 'https://skillzza.com/assets/img/greengold_logo.png',
    company: 'Green Gold Animation',
    title: 'StoryBoard Artist & Character Modeling',
    category: 'Design',
    level: 'Intermediate',
    duration: '35-40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/vmware_cloud_tile.jpg',
    logo: 'https://skillzza.com/assets/img/akhilSystems_logo.png',
    company: 'Akhil Systems',
    title: 'Product Manager / HIMS',
    category: 'Development',
    level: 'Intermediate',
    duration: '18-20 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/digital_twins_tile.jpg',
    logo: 'https://skillzza.com/assets/img/appsoluteky_logo.png',
    company: 'Appsolutely.ai',
    title: 'AI Solution Architect',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '35-40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/AIbasedAppDevelopment_tileImg.jpg',
    logo: 'https://skillzza.com/assets/img/builderAI_logo.png',
    company: 'Builder.AI',
    title: 'AI based App Development',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '25 - 30 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/sustainnovate_dev_tile.png',
    logo: 'https://skillzza.com/assets/img/Sustainnovatesolution_logo.png',
    company: 'Sustainnovate solution',
    title: 'ESG Strategies For Net Zero Goals',
    category: 'Sustainability & Climate Action',
    level: 'Intermediate',
    duration: '25-30 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/substance_painter_tile.jpg',
    logo: 'https://skillzza.com/assets/img/Adobe_logo.png',
    company: 'Adobe',
    title: 'Substance Painter for Animation',
    category: 'Design',
    level: 'Intermediate',
    duration: '35-40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/sentiment_analysis_tile.jpg',
    logo: 'https://skillzza.com/assets/img/meta_logo.png',
    company: 'Meta',
    title: 'Sentiment Analysis for Market Insights using LLaMA',
    category: 'AI & Data',
    level: 'Intermediate',
    duration: '35-40 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/precision_agriculture_tile.jpg',
    logo: 'https://skillzza.com/assets/img/grugrade_logo.png',
    company: 'Grus & Grade',
    title: 'Precision Agriculture and Drone Integration',
    category: 'Sustainability & Climate Action',
    level: 'Intermediate',
    duration: '75-80 hours'
  },
  {
    image: 'https://skillzza.com/assets/img/figma_adobe_tile.jpg',
    logo: 'https://skillzza.com/assets/img/Adobe_logo.png',
    company: 'Figma/Adobe',
    title: 'UI/UX design & Prototyping for mobile first approach',
    category: 'Design',
    level: 'Intermediate',
    duration: '45-50 hours'
  }
];


function JobSimulationPage() {
  const [showAll, setShowAll] = useState(false);

  // Default to showing 2 rows (8 items if 4 columns)
  const visibleCards = showAll ? simulationCards : simulationCards.slice(0, 8);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        /* ── Section wrapper: pure white, relative so we can drop the wavy img ── */
        .jsim-section {
          position: relative;
          width: 100%;
          background-color: #ffffff;
          padding: 72px 24px 88px;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* ── Wavy decorative image ── */
        .jsim-wavy {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
          pointer-events: none;
          user-select: none;
        }

        /* ── Content on top of background ── */
        .jsim-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ── Title ── */
        .jsim-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 38px;
          line-height: 1.25;
          color: #0F1114;
          text-align: center;
          margin: 0 0 28px 0;
        }

        /* ── Description ── */
        .jsim-description {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.75;
          color: #555b6e;
          text-align: center;
          max-width: 800px;
          margin: 0 0 56px 0;
        }

        /* ── Cards row ── */
        .jsim-cards-row {
          display: flex;
          flex-direction: row;
          gap: 18px;
          align-items: stretch;
          justify-content: center;
          width: 100%;
        }

        /* ── Individual card ── */
        .jsim-card {
          flex: 1;
          min-width: 0;
          background: #ffffff;
          border: 1px solid #dde3f0;
          border-radius: 18px;
          box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.07);
          padding: 28px 22px 28px 22px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          /* NO overflow:hidden so accent can protrude */
        }

        /* ── 4th card accent background (offset drop shadow) ── */
        .jsim-card-accent::after {
          content: '';
          position: absolute;
          right: -22px;
          bottom: -22px;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #165294 0%, #0d76be 100%);
          z-index: -1;
        }

        /* ── Stat number ── */
        .jsim-stat-number {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 68px;
          line-height: 1;
          color: #2974c9;
          margin: 0 0 16px 0;
          letter-spacing: -1px;
        }

        /* ── Stat label (blue, smaller) ── */
        .jsim-stat-label {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 18px;
          line-height: 1;
          color: #2974c9;
          margin: 0 0 12px 0;
        }

        /* ── Stat description (dark, small) ── */
        .jsim-stat-desc {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 15px;
          line-height: 1.6;
          color: #1a1a2e;
          white-space: pre-line;
          margin: 0;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .jsim-wavy { display: none; }
          .jsim-heading { font-size: 26px; }
          .jsim-cards-row {
            flex-direction: column;
            align-items: center;
          }
          .jsim-card {
            width: 100%;
            max-width: 340px;
          }
          .jsim-stat-number { font-size: 48px; }
          .jsim-card-accent::after { right: -8px; bottom: -8px; }
        }

        /* ── Tablet ── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .jsim-cards-row { flex-wrap: wrap; }
          .jsim-card { flex: 0 0 calc(50% - 9px); }
          .jsim-stat-number { font-size: 54px; }
        }

        /* ── Solution Section ── */
        .sol-section {
          position: relative;
          width: 100%;
          background-color: #fdfdfd;
          padding: 80px 24px;
          overflow: hidden;
          box-sizing: border-box;
        }

        .sol-map-bg {
          position: absolute;
          top: 0;
          right: -10%; /* Shift right so there's no gap and naturally bleeds off edge */
          width: 70%;
          height: auto;
          object-fit: contain;
          object-position: top right;
          pointer-events: none;
          z-index: 0;
        }

        .sol-inner {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Header */
        .sol-header {
          text-align: center;
          max-width: 800px;
          margin-bottom: 60px;
        }

        .sol-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 36px;
          color: #222222;
          margin: 0 0 16px 0;
        }

        .sol-subtitle {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 1.6;
          color: #474545;
          margin: 0;
        }

        /* Two Columns */
        .sol-content {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          gap: 60px;
          width: 100%;
        }

        /* Left Grid */
        .sol-cards-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .sol-card {
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.08);
          padding: 40px 32px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          border: 1px solid #f0f0f0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .sol-card:hover {
          transform: translateY(-5px);
          box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
        }

        .sol-card-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 16px;
          line-height: 1.4;
          color: #2974c9;
          margin: 0 0 16px 0;
          white-space: pre-line;
        }

        .sol-card-desc {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.6;
          color: #71717a;
          white-space: pre-line;
          margin: 0;
        }

        /* Right Image */
        .sol-image-col {
          flex: 1;
          display: flex;
          justify-content: flex-end; /* Align to the right edge */
          align-items: center;
          position: relative;
        }

        .sol-image-wrapper {
          position: relative;
          width: 38vw; /* Scale massively based on viewport size */
          max-width: 650px; /* Cap at generously large size */
          
          /* Push flush to the exact right boundary of the entire screen */
          margin-right: calc(-1 * max(24px, (100vw - 1500px) / 2));
        }

        /* Blue corner top-left */
        .sol-decor-tl {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 120px;
          height: 120px;
          border-top: 6px solid #2974c9;
          border-left: 6px solid #2974c9;
          z-index: 0;
        }

        /* Blue box bottom-right */
        .sol-decor-br {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 120px;
          height: 120px;
          border-bottom: 6px solid #2974c9;
          border-right: 6px solid #2974c9;
          z-index: 0;
        }

        /* Yellow dots */
        .sol-decor-dots-l {
          position: absolute;
          bottom: 60px;
          left: -40px;
          width: 40px;
          height: 120px;
          background-image: radial-gradient(#Facc15 2px, transparent 2px);
          background-size: 12px 12px;
          z-index: 0;
        }

        .sol-decor-dots-r {
          position: absolute;
          top: 60px;
          right: -50px;
          width: 40px;
          height: 180px;
          background-image: radial-gradient(#Facc15 2px, transparent 2px);
          background-size: 12px 12px;
          z-index: 0;
        }

        .sol-woman-img {
          position: relative;
          z-index: 2;
          width: 100%;
          height: auto;
          display: block;
        }

        /* ── Discover Section ── */
        .discover-section {
          width: 100%;
          background-color: #ffffff;
          padding: 80px 24px;
          box-sizing: border-box;
        }

        .discover-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .discover-title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 40px;
          color: #333333;
          margin: 0 0 20px 0;
          letter-spacing: -0.5px;
        }

        .discover-subtitle-blue {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 18px;
          color: #2974c9;
          margin: 0 0 20px 0;
        }

        .discover-subtitle-body {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 16px;
          color: #555555;
          margin: 0 0 48px 0;
        }

        .discover-filters {
          display: flex;
          flex-direction: row;
          justify-content: center;
          gap: 24px;
          width: 100%;
          flex-wrap: wrap;
        }

        .discover-select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-color: #ffffff;
          border: 1px solid #4a4a4a;
          border-radius: 6px;
          padding: 14px 20px;
          padding-right: 48px;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #4a4a4a;
          width: 250px;
          cursor: pointer;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234a4a4a' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          transition: border-color 0.3s ease;
        }

        .discover-select:focus {
          outline: none;
          border-color: #2974c9;
        }

        /* Options hover styling (Note: Native browser support may vary) */
        .discover-select option {
          background-color: #ffffff;
          color: #4a4a4a;
          padding: 10px;
        }

        .discover-select option:hover,
        .discover-select option:focus,
        .discover-select option:checked {
          background-color: #D46A6A !important;
          color: #ffffff !important;
        }

        /* To enforce scrolling to show 6 items, we can try applying height restrictions natively */
        select.discover-select[size] {
          height: auto;
        }
        
        @media (max-width: 900px) {
          .discover-filters {
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .discover-filters {
            flex-direction: column;
            gap: 16px;
          }
          .discover-select {
            width: 100%;
          }
          .discover-title {
            font-size: 32px;
          }
        }

        /* ── Job Simulation Cards Section ── */
        .sim-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          width: 100%;
          margin-top: 48px;
        }

        .sim-card {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          border: 1px solid #eaeaea;
        }

        .sim-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0px 12px 28px rgba(0, 0, 0, 0.12);
        }

        .explore-btn-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 48px;
        }

        .explore-more-btn {
          background-color: #ce2c2e;
          color: #ffffff;
          border: none;
          box-shadow: none;
          border-radius: 8px;
          padding: 12px 32px;
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }

        .explore-more-btn:hover {
          background-color: #b02425;
          transform: translateY(-2px);
          box-shadow: none;
        }

        .sim-card-image-wrap {
          position: relative;
          width: 100%;
          height: 185px;
        }

        .sim-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sim-card-logo-box {
          position: absolute;
          bottom: 12px;
          left: 16px;
          background: #ffffff;
          border-radius: 8px;
          padding: 8px;
          width: 108px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .sim-card-logo-box img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .sim-card-body {
          padding: 16px 16px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .sim-card-company {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #71717a;
          margin: 0 0 8px 0;
          font-weight: 500;
        }

        .sim-card-title {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #111827;
          font-weight: 600;
          line-height: 1.4;
          margin: 0 0 16px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          height: 44px;
        }

        .sim-card-tags {
          margin-top: auto;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
        }

        .sim-tag-category {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #0b5c9c;
        }

        .sim-tag-icon {
          width: 14px;
          height: 14px;
          object-fit: contain;
        }

        .sim-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #374151;
          font-weight: 500;
        }

        .sim-duration {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .sim-clock-icon {
          width: 16px;
          height: 16px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        @media (max-width: 1024px) {
          .sim-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .sim-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Banner Section ── */
        .jsim-banner {
          background-color: #1d97d4;
          width: 100%;
          display: flex;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .jsim-banner-content {
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          padding: 60px 24px;
          position: relative;
        }

        .jsim-banner-text {
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          flex: 1;
        }

        .jsim-banner-text h2 {
          font-size: 40px;
          font-weight: 600;
          margin: 0 0 24px 0;
        }

        .jsim-banner-text p {
          font-size: 20px;
          margin: 0 0 16px 0;
        }

        .highlight-yellow,
        .highlight-yellow-link {
          color: #ffda29;
          font-weight: 500;
        }

        .highlight-yellow-link {
          text-decoration: underline;
        }

        .highlight-yellow-link:hover {
          color: #f0c918;
        }

        .jsim-banner-image-wrapper {
          position: absolute;
          right: -44px;
          top: 60px;
          bottom: 0;
          height: 100%;
          display: flex;
          align-items: flex-end;
          pointer-events: none; /* so text underneath is selectable */
        }

        .jsim-banner-img {
          width: auto;
          height: 125%; /* Pops out slightly above the top if needed */
          max-height: 400px;
          object-fit: contain;
          margin-bottom: 0;
        }

        @media (max-width: 900px) {
          .jsim-banner-content {
            flex-direction: column;
            text-align: center;
            padding: 40px 24px 0 24px; /* padding top but 0 bottom for image */
          }
          .jsim-banner-image-wrapper {
            position: relative;
            right: 0;
            height: auto;
            margin-top: 30px;
          }
          .jsim-banner-img {
            max-height: 300px;
          }
        }
      `}</style>

      <section className="jsim-section">

        {/* Wavy background image — positioned absolutely on the right */}
        <img
          src="/simulation/wavyImage.png"
          alt=""
          className="jsim-wavy"
          aria-hidden="true"
        />

        <div className="jsim-inner">

          {/* Title */}
          <h1 className="jsim-heading">
            The Journey of Launching<br />Your Career
          </h1>

          {/* Description */}
          <p className="jsim-description">
            The significance of work experience cannot be overstated, but securing your first job can be
            challenging. Experience is the foundation, yet gaining it can be a formidable task. Ascend to a
            higher plane of pure excellence through our Job Simulation Program.
          </p>

          {/* Stat Cards */}
          <div className="jsim-cards-row">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`jsim-card${stat.accent ? ' jsim-card-accent' : ''}`}
              >
                <span className="jsim-stat-number">{stat.number}</span>
                <span className="jsim-stat-label">{stat.label}</span>
                <p className="jsim-stat-desc">{stat.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── THE SOLUTION SECTION ── */}
      <section className="sol-section">
        {/* Absolute Background Map */}
        <img src="/simulation/grey world map.jpg" alt="" className="sol-map-bg" />

        <div className="sol-inner">
          {/* Header */}
          <div className="sol-header">
            <h2 className="sol-title">The Solution..</h2>
            <p className="sol-subtitle">
              Gain virtual professional experience in any Industry through job simulation opportunities, 
              bridging the gap between learning and real-world application - anytime, anywhere.
            </p>
          </div>

          {/* Two Columns Content */}
          <div className="sol-content">
            {/* Left: Cards Grid */}
            <div className="sol-cards-grid">
              {solutionCards.map((card, index) => (
                <div key={index} className="sol-card">
                  <h3 className="sol-card-title">{card.title}</h3>
                  <p className="sol-card-desc">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Right: Woman Image & Decorations */}
            <div className="sol-image-col">
              <div className="sol-image-wrapper">
                {/* Decorative Elements */}
                <div className="sol-decor-tl"></div>
                <div className="sol-decor-dots-l"></div>
                <div className="sol-decor-dots-r"></div>
                <div className="sol-decor-br"></div>
                
                {/* Main Image */}
                <img 
                  src="/simulation/women.avif" 
                  alt="Woman with laptop" 
                  className="sol-woman-img" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCOVER THE JOB SIMULATIONS SECTION ── */}
      <section className="discover-section">
        <div className="discover-inner">
          <h2 className="discover-title">Discover the Job Simulations</h2>
          <p className="discover-subtitle-blue">Identify the perfect Job Simulation for you</p>
          <p className="discover-subtitle-body">All Job Simulations are thoughtfully curated, allowing you to navigate them at your own pace.</p>

          <div className="discover-filters">
            <select className="discover-select">
              <optgroup label="CAREER FIELDS">
                <option value="ai-data">AI & Data</option>
                <option value="banking">Banking</option>
                <option value="sustainability">Sustainability & Climate Action</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="consulting">Consulting</option>
                <option value="entrepreneurship">Entrepreneurship</option>
                <option value="marketing">Marketing</option>
                <option value="security">Security</option>
                <option value="technology">Technology</option>
                <option value="quantum">Quantum</option>
                <option value="law">Law</option>
              </optgroup>
            </select>
            <select className="discover-select" defaultValue="microsoft">
              <optgroup label="COMPANIES">
                <option value="appsolutely-ai">Appsolutely.ai</option>
                <option value="builder-ai">Builder.AI</option>
                <option value="ai-lifebot">AI LifeBOT</option>
                <option value="suflex-media">Suflex media</option>
                <option value="greengold-animation">GreenGold Animation</option>
                <option value="sustainnovate-solution">Sustainnovate solution</option>
                <option value="google">Google</option>
                <option value="midland-microfinance">Midland Microfinance</option>
                <option value="edgespark-it-ventures">Edgespark IT Ventures</option>
                <option value="adobe">Adobe</option>
                <option value="meta">Meta</option>
                <option value="grus-grade">Grus & Grade</option>
                <option value="figma-adobe">Figma/Adobe</option>
                <option value="ey">EY</option>
                <option value="ola">Ola</option>
                <option value="fox-mandals">Fox mandals</option>
                <option value="cxo-techbot">CXO TechBot</option>
                <option value="jaquar">Jaquar</option>
                <option value="microsoft">Microsoft</option>
                <option value="varnaaz-technologies">Varnaaz Technologies</option>
                <option value="sanjay">Sanjay</option>
                <option value="opswat">OPSWAT</option>
                <option value="palo-alto-networks">Palo Alto Networks</option>
                <option value="redhat">Redhat</option>
                <option value="vmware">Vmware</option>
                <option value="aws">AWS</option>
                <option value="newgen-software">Newgen Software</option>
                <option value="twinzo">twinzo</option>
              </optgroup>
            </select>
            <select className="discover-select" defaultValue="beginner">
              <optgroup label="DIFFICULTY">
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </optgroup>
            </select>
          </div>

          {/* Job Simulation Cards */}
          <div className="sim-cards-grid">
            {visibleCards.map((card, index) => (
              <div key={index} className="sim-card">
                <div className="sim-card-image-wrap">
                  <img src={card.image} alt={card.title} className="sim-card-image" />
                  <div className="sim-card-logo-box">
                    <img src={card.logo} alt={card.company} />
                  </div>
                </div>
                <div className="sim-card-body">
                  <p className="sim-card-company">{card.company}</p>
                  <h3 className="sim-card-title">{card.title}</h3>
                  <div className="sim-card-tags">
                    <span className="sim-tag-category">
                      <img src="/simulation/logo.png" alt="tag" className="sim-tag-icon" />
                      {card.category}
                    </span>
                  </div>
                  <div className="sim-card-footer">
                    <span className="sim-level">{card.level}</span>
                    <span className="sim-duration">
                      <svg className="sim-clock-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                        <path d="M3 3v5h5"/>
                        <path d="M12 7v5l4 2"/>
                      </svg>
                      {card.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="explore-btn-container">
            <button 
              className="explore-more-btn" 
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Explore Less' : 'Explore More'}
            </button>
          </div>
        </div>
      </section>

      {/* ── BANNER SECTION ── */}
      <section className="jsim-banner">
        <div className="jsim-banner-content">
          <div className="jsim-banner-text">
            <h2>Ready to unlock your true potential?</h2>
            <p>Let Our <span className="highlight-yellow">AI expert</span> help you to understand more about you..</p>
            <p>Take your one step Ahead.. <a href="#" className="highlight-yellow-link">just a click away!!</a></p>
          </div>
          <div className="jsim-banner-image-wrapper">
            <img src="/simulation/HappyMan.png" alt="Happy Man" className="jsim-banner-img" />
          </div>
        </div>
      </section>
    </>
  )
}

export default JobSimulationPage

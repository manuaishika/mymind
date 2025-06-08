"use client";
import Head from "next/head";
import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Sidebar = styled.aside`
  position: fixed;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  width: 320px;
  height: 480px;
  background: #000;
  border-radius: 40px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Avatar = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 32px;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const Name = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 1.2rem 0;
  text-align: center;
  color: #fff;
`;

const ContactInfo = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  align-items: center;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #fff;
  font-size: 1rem;
`;

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  background: #18191A;
`;

const Main = styled.main`
  margin-left: 400px;
  flex: 1;
  background: #18191A;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 3rem 0 0 0;
`;

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  background: transparent;
  border-radius: 0 0 24px 24px;
  box-shadow: none;
  padding: 2.5rem 2.5rem 2.5rem 2.5rem;
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFD600;
  margin-bottom: 1.5rem;
`;

const AboutText = styled.p`
  font-size: 1.08rem;
  color: #fff;
  margin-bottom: 2.2rem;
  line-height: 1.7;
  white-space: pre-line;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #18191A;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }
`;

const CardIcon = styled.div`
  font-size: 2.2rem;
  color: #FFD600;
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #fff;
`;

const CardDesc = styled.p`
  font-size: 0.98rem;
  color: #bbb;
  margin: 0;
`;

const roles = [
  "Quant Enthusiast",
  "ML Researcher",
  "Software Developer",
  "Creative Coder",
  "Problem Solver"
];

function useTypewriter(words: string[], speed = 120, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < words[index].length) {
      timeout = setTimeout(() => {
        setDisplayed(words[index].slice(0, displayed.length + 1));
      }, speed);
    } else if (!deleting && displayed.length === words[index].length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(words[index].slice(0, displayed.length - 1));
      }, speed / 2);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words, speed, pause]);

  return displayed.toUpperCase() + (deleting ? "|" : "|");
}

const Typewriter = styled.div`
  font-size: 2.2rem;
  color: #FFD600;
  font-family: 'Roboto Mono', monospace;
  margin-bottom: 2.5rem;
  margin-top: 1.5rem;
  min-height: 2.5rem;
  letter-spacing: 0.08em;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin-top: 2.5rem;
  width: 100%;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  background: #18191A;
  border-radius: 12px;
  padding: 0.7rem 1.1rem;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #23272F;
    color: #FFD600;
  }
`;

const SocialIcon = styled.span`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
`;

const SectionSpacer = styled.div`
  height: 3.5rem;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const TimelineTitle = styled.div`
  font-size: 1.13rem;
  font-weight: 700;
  color: #fff;
`;

const TimelineSubtitle = styled.div`
  font-size: 1rem;
  color: #bbb;
`;

const TimelineDate = styled.div`
  font-size: 0.98rem;
  color: #FFD600;
  margin-bottom: 0.2rem;
`;

const TimelineDesc = styled.ul`
  color: #bbb;
  font-size: 0.98rem;
  margin: 0.2rem 0 0 1.2rem;
  padding: 0;
  list-style: disc inside;
`;

const TopNavBar = styled(motion.div)`
  position: fixed;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: #18191A;
  border-radius: 32px;
  padding: 0.5rem 1.2rem;
  display: flex;
  gap: 1.5rem;
  z-index: 200;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
`;

const TopNavIcon = styled(motion.button)`
  background: none;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #FFD600;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-top: 2.2rem;
  justify-content: center;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.45rem;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  &:hover {
    color: #FFD600;
  }
`;

// Blinking dot animation
const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

const BlinkingDot = styled.div`
  width: 18px;
  height: 18px;
  background: #FFD600;
  border-radius: 50%;
  margin-bottom: 1.2rem;
  margin-left: 2px;
  animation: ${blink} 1.2s infinite;
  box-shadow: 0 0 12px 2px #FFD60055;
`;

const TimelineWrapper = styled.div`
  position: relative;
  padding-left: 38px;
  margin-left: 10px;
  &:before {
    content: '';
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #232323;
    border-radius: 2px;
    z-index: 0;
  }
`;

const TimelineItemWithDot = styled(TimelineItem)`
  position: relative;
  margin-bottom: 2.5rem;
`;

export default function Home() {
  const typewriter = useTypewriter(roles);
  return (
    <>
      <Head>
        <title>Aishika Manu | Portfolio</title>
        <meta name="description" content="Aishika Manu Portfolio" />
      </Head>
      {/* Top Navigation Bar with animated icons */}
      <TopNavBar initial="hidden" animate="visible" variants={{
        visible: { transition: { staggerChildren: 0.13 } },
      }}>
        {[
          { icon: <span role="img" aria-label="home">🏠</span>, key: "home" },
          { icon: <span role="img" aria-label="folder">📁</span>, key: "folder" },
          { icon: <span role="img" aria-label="briefcase">💼</span>, key: "briefcase" },
          { icon: <span role="img" aria-label="wrench">🔧</span>, key: "wrench", link: "/skills" },
          { icon: <span role="img" aria-label="pencil">📝</span>, key: "pencil" },
        ].map((item, i) => (
          item.link ? (
            <Link href={item.link} key={item.key}>
              <TopNavIcon
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: i * 0.13 }}
                title="Skillset"
                tabIndex={0}
                role="button"
                style={{ background: "none", border: "none" }}
              >
                {item.icon}
              </TopNavIcon>
            </Link>
          ) : (
            <TopNavIcon
              key={item.key}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: i * 0.13 }}
            >
              {item.icon}
            </TopNavIcon>
          )
        ))}
      </TopNavBar>
      <Layout>
        <Sidebar>
          <Avatar>
            <video
              src="/avatar.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "32px",
                objectFit: "cover",
                background: "#222"
              }}
            />
          </Avatar>
          <Name>Aishika Manu</Name>
          <ContactInfo>
            <ContactItem>
              <span role="img" aria-label="location">📍</span> India
            </ContactItem>
          </ContactInfo>
          <SocialRow>
            <SocialIconLink href="mailto:manuaishika@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
              ✉️
            </SocialIconLink>
            <SocialIconLink href="https://github.com/manuaishika" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            </SocialIconLink>
            <SocialIconLink href="https://www.kaggle.com/aishikaman" target="_blank" rel="noopener noreferrer" title="Kaggle">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 32 32"><path d="M29.5 6.5c-0.6-0.6-1.5-0.6-2.1 0l-7.4 7.4-7.4-7.4c-0.6-0.6-1.5-0.6-2.1 0s-0.6 1.5 0 2.1l7.4 7.4-7.4 7.4c-0.6 0.6-0.6 1.5 0 2.1 0.3 0.3 0.7 0.4 1.1 0.4s0.8-0.2 1.1-0.4l7.4-7.4 7.4 7.4c0.3 0.3 0.7 0.4 1.1 0.4s0.8-0.2 1.1-0.4c0.6-0.6 0.6-1.5 0-2.1l-7.4-7.4 7.4-7.4c0.6-0.6 0.6-1.5 0-2.1z"/></svg>
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/aishikamanu/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </SocialIconLink>
            <SocialIconLink href="https://leetcode.com/aishikaman/" target="_blank" rel="noopener noreferrer" title="LeetCode">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 50 50"><path d="M35.5 36.5c-0.8 0-1.5-0.3-2.1-0.9l-8.5-8.5c-1.2-1.2-1.2-3.1 0-4.2l8.5-8.5c1.2-1.2 3.1-1.2 4.2 0s1.2 3.1 0 4.2l-6.4 6.4 6.4 6.4c1.2 1.2 1.2 3.1 0 4.2-0.6 0.6-1.3 0.9-2.1 0.9z"/></svg>
            </SocialIconLink>
          </SocialRow>
        </Sidebar>
        <Main>
          <Section>
            <Typewriter>{typewriter}</Typewriter>
            <AboutText>{`welcome to my little corner of the internet! 

i'm aishika, someone who can't quite sit still in just one tech lane (its the adhd and the fafo in me heheh) hence, right now, i'm diving into ML research at (multiple) incredible universities, playing with code and numbers in quant competitions, and building things that (hopefully) don't break when shipped. 

feel free to reach out for projects, research, brainstorming, or just to say hi. 
talk soon. take care.`}</AboutText>
            <SectionSpacer />
            <SectionTitle>Experience</SectionTitle>
            <TimelineWrapper>
              {[
                {
                  title: "Research Intern",
                  subtitle: "Carnegie Mellon University",
                  date: "May 2025– Present | Remote",
                  desc: [
                    "Develop a parameter-efficient PyTorch STN to align MNIST digits for cryo-ET model adaptation, achieving 0.1873 validation loss using data augmentation and StepLR.",
                    "Enhance localization network (16→32 filters) and fix visualization to ensure consistent transformations and robust subtomogram alignment."
                  ]
                },
                {
                  title: "Research Intern",
                  subtitle: "International Institute of Information Technology, Hyderabad",
                  date: "March 2025– Present | Hybrid",
                  desc: [
                    "Investigate Bayesian Deep Learning using Monte Carlo Dropout, Variational Inference, and BNNs to quantify predictive uncertainty and enhance robustness in noisy environments.",
                    "Extend to Multimodal AI by fusing audio-visual inputs using cross-modal transformers and probabilistic fusion layers for reliable inference under ambiguous or missing modality scenarios."
                  ]
                },
                {
                  title: "Research Consultant",
                  subtitle: "WorldQuant",
                  date: "March 2025– Present | Remote",
                  desc: [
                    "Designed alpha-generating strategies using Regression, PCA, K-Means, optimizing returns across diverse market data."
                  ]
                },
                {
                  title: "Mentee",
                  subtitle: "LinkedIn CoachIn",
                  date: "February 2025– Present | Online Mentorship",
                  desc: [
                    "Selected among the top 60 of 22,000+ applicants for a national mentorship by LinkedIn India."
                  ]
                },
                {
                  title: "Research Intern",
                  subtitle: "Defence Research and Development Organisation (DRDO)",
                  date: "Dec 2024– Mar 2025",
                  desc: [
                    "Achieved 78% accuracy in irrigation scheduling using ensemble ML; reduced water use by 27% for jute crops."
                  ]
                },
                {
                  title: "App Development Intern",
                  subtitle: "NTPC Ltd.",
                  date: "May 2024– July 2024",
                  desc: [
                    "Developed a dashboard to track 100+ SDG-linked initiatives using geo-tagging and real-time analytics"
                  ]
                },
                {
                  title: "Indira Gandhi Delhi Technical University for Women, New Delhi",
                  subtitle: "",
                  date: "Aug. 2023– Present",
                  desc: []
                }
              ].map((exp, idx) => (
                <TimelineItemWithDot key={exp.title + idx}>
                  <TimelineTitle>{exp.title}</TimelineTitle>
                  <TimelineSubtitle>{exp.subtitle}</TimelineSubtitle>
                  <TimelineDate>{exp.date}</TimelineDate>
                  <TimelineDesc>
                    {exp.desc.map((d, i) => <li key={i}>{d}</li>)}
                  </TimelineDesc>
                </TimelineItemWithDot>
              ))}
            </TimelineWrapper>
          </Section>
        </Main>
      </Layout>
    </>
  );
}

"use client";
import Head from "next/head";
import styled from "styled-components";

const PageWrapper = styled.div`
  background: #EDE8D0;
  min-height: 100vh;
  padding: 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
  background: #fff0;
  border-radius: 18px;
  box-shadow: 0 0 0 1px #e0dcc7;
  padding: 48px 36px 36px 36px;
  position: relative;
`;

const TopNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  padding: 1.5rem 0 2.5rem 0;
  font-size: 1.18rem;
  letter-spacing: 0.09em;
  background: transparent;
`;

const TopNavLink = styled.a`
  text-decoration: none;
  color: #222;
  opacity: 0.85;
  transition: opacity 0.2s;
  cursor: pointer;
  font-family: 'Roboto Mono', monospace;
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const Heading = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: 2.2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 2.2rem;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: #222;
  margin: 2.2rem 0 1rem 0;
`;

const AboutText = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.08rem;
  color: #222;
  margin-bottom: 1.2rem;
  line-height: 1.7;
`;

const Highlight = styled.span`
  color: #1a3fa6;
  text-decoration: underline;
`;

const SocialLinks = styled.div`
  margin-top: 2.2rem;
  display: flex;
  gap: 2.2rem;
`;

const SocialLink = styled.a`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.08rem;
  color: #222;
  text-decoration: underline;
  transition: color 0.2s;
  &:hover {
    color: #444;
  }
`;

const Timeline = styled.div`
  margin-top: 2rem;
`;

const TimelineItem = styled.div`
  margin-bottom: 2rem;
  position: relative;
  padding-left: 2rem;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e0dcc7;
  }
  
  &:after {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #222;
  }
`;

const TimelineDate = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 0.5rem;
`;

const TimelineDescription = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About | Aishika</title>
        <meta name="description" content="About Aishika" />
      </Head>
      <PageWrapper>
        <ContentContainer>
          <TopNav>
            <TopNavLink href="/">home</TopNavLink>
            <TopNavLink href="/projects">projects</TopNavLink>
            <TopNavLink href="/blog">blog</TopNavLink>
            <TopNavLink href="/about">about</TopNavLink>
          </TopNav>

          <Heading>about</Heading>
          <AboutText>
            i do a bunch of things, and not all of them are technical.<br /><br />
            building tech or talking big terms has been a part of me for the last 4 years only but there's so much more that i'm truly proud of.<br /><br />
            i also work with NGOs, spend slow afternoons baking, scribbling and doodling my minds cluster onto canvasses, and fiercely support whichever football team my brother picks (i have no other choice). on random days i love to hang out with my nanu, even if he's telling me stories i've heard a hundred times (they never get old). I really like being around the people I love. i love love.
          </AboutText>

          <SectionTitle>education</SectionTitle>
          <Timeline>
            <TimelineItem>
              <TimelineDate>2020 - Present</TimelineDate>
              <TimelineTitle>Bachelor of Technology in Computer Science</TimelineTitle>
              <TimelineDescription>
                Majoring in Artificial Intelligence and Machine Learning. Currently pursuing research in quantum computing applications.
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>2018 - 2020</TimelineDate>
              <TimelineTitle>Higher Secondary Education</TimelineTitle>
              <TimelineDescription>
                Focused on Mathematics and Computer Science. Participated in various coding competitions and hackathons.
              </TimelineDescription>
            </TimelineItem>
          </Timeline>

          <SectionTitle>experience</SectionTitle>
          <Timeline>
            <TimelineItem>
              <TimelineDate>2023 - Present</TimelineDate>
              <TimelineTitle>ML Research Intern</TimelineTitle>
              <TimelineDescription>
                Working on quantum machine learning algorithms and their applications in solving complex optimization problems.
              </TimelineDescription>
            </TimelineItem>
            <TimelineItem>
              <TimelineDate>2022 - 2023</TimelineDate>
              <TimelineTitle>Software Development Intern</TimelineTitle>
              <TimelineDescription>
                Developed and maintained web applications using modern JavaScript frameworks and cloud technologies.
              </TimelineDescription>
            </TimelineItem>
          </Timeline>

          <SocialLinks>
            <SocialLink href="https://github.com/manuaishika" target="_blank" rel="noopener noreferrer">github</SocialLink>
            <SocialLink href="https://www.linkedin.com/in/aishikamanu/" target="_blank" rel="noopener noreferrer">linkedin</SocialLink>
          </SocialLinks>
        </ContentContainer>
      </PageWrapper>
    </>
  );
}

"use client";
import Head from "next/head";
import styled from "styled-components";

const PageWrapper = styled.div`
  background: #fff;
  min-height: 100vh;
  padding: 48px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
`;

const LeftCol = styled.div`
  flex: 2;
  min-width: 320px;
`;

const RightCol = styled.div`
  flex: 1;
  min-width: 180px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Heading = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: 2.2rem;
  font-weight: 700;
  color: #0a174e;
  margin-bottom: 2.2rem;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.3rem;
  font-weight: 700;
  color: #0a174e;
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

const Illustration = styled.div`
  width: 180px;
  height: 180px;
  background: #f8f6f1;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.04);
  overflow: hidden;
`;

const SocialLinks = styled.div`
  margin-top: 2.2rem;
  display: flex;
  gap: 2.2rem;
`;
const SocialLink = styled.a`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.08rem;
  color: #1a3fa6;
  text-decoration: underline;
  transition: color 0.2s;
  &:hover {
    color: #0a174e;
  }
`;

export default function About() {
  return (
    <>
      <Head>
        <title>About | Aishika Manu</title>
        <meta name="description" content="About Aishika Manu" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700&display=swap" rel="stylesheet" />
      </Head>
      <PageWrapper>
        <ContentRow>
          <LeftCol>
            <Heading>about</Heading>
            <AboutText>
              i do a bunch of things, and not all of them are technical.<br /><br />
              building tech or talking big terms has been a part of me for the last 4 years only but there's so much more that i'm truly proud of.<br /><br />
              i also work with NGOs, spend slow afternoons baking, scribbling and doodling my minds cluster onto canvasses, and fiercely support whichever football team my brother picks (i have no other choice). on random days i love to hang out with my nanu, even if he's telling me stories i've heard a hundred times (they never get old). I really like being around the people I love. i love love.
            </AboutText>
            <SocialLinks>
              <SocialLink href="https://github.com/manuaishika" target="_blank" rel="noopener noreferrer">github</SocialLink>
              <SocialLink href="https://www.linkedin.com/in/aishikamanu/" target="_blank" rel="noopener noreferrer">linkedin</SocialLink>
            </SocialLinks>
          </LeftCol>
          <RightCol>
            <Illustration>
              {/* Placeholder illustration, replace with your own image or SVG */}
              <img src="/snoopy.png" alt="illustration" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </Illustration>
          </RightCol>
        </ContentRow>
      </PageWrapper>
    </>
  );
}

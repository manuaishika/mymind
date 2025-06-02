"use client";
import Head from "next/head";
import GlobalStyle from "./_components/globalstyles";
import styled from "styled-components";
import { useEffect, useState } from "react";

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
  max-width: 700px;
  background: #fff0;
  border-radius: 18px;
  box-shadow: 0 0 0 1px #e0dcc7;
  padding: 48px 36px 36px 36px;
  position: relative;
`;

const SideLinks = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 10;
`;

const SideLink = styled.a`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
  font-family: 'Roboto Mono', monospace;
  font-size: 1.1rem;
  color: #222;
  opacity: 0.7;
  letter-spacing: 0.1em;
  text-decoration: none;
  pointer-events: auto;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const GithubLink = styled(SideLink)`
  left: 0;
`;
const LinkedinLink = styled(SideLink)`
  right: 0;
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

const Main = styled.main`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Intro = styled.div`
  font-size: 1.13rem;
  font-family: 'Roboto Mono', monospace;
  color: #333;
  margin: 2.2rem 0 1.8rem 0;
  line-height: 1.7;
  white-space: pre-line;
`;

const ImagePlaceholder = styled.div`
  width: 180px;
  height: 180px;
  background: #eae7df;
  border-radius: 16px;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 1.1rem;
  box-shadow: 0 2px 16px 0 rgba(0,0,0,0.04);
  font-family: 'Roboto Mono', monospace;
`;

// Loader Styles (using transient props: $visible, $progress)
const LoaderOverlay = styled.div<{$visible: boolean}>`
  position: fixed;
  z-index: 9999;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: #111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.6s;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
`;

const LoaderText = styled.div`
  color: #fff;
  font-family: 'Roboto Mono', monospace;
  font-size: 2rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;

const ProgressBarContainer = styled.div`
  width: 340px;
  height: 4px;
  background: #333;
  border-radius: 2px;
  margin-top: 2.5rem;
  position: relative;
  overflow: hidden;
`;

const ProgressBar = styled.div<{$progress: number}>`
  height: 100%;
  background: #fff;
  width: ${({ $progress }) => $progress}%;
  transition: width 0.2s linear;
`;

const CatGif = styled.img<{$progress: number}>`
  width: 90px;
  height: 90px;
  object-fit: contain;
  position: absolute;
  top: -70px;
  left: ${({ $progress }) => `calc(${$progress}% - 45px)`};
  transition: left 0.2s linear;
`;

const CAT_GIF_MAIN = "https://media.tenor.com/FFineDandyQwAAAAC/cat-jump-happy.gif";
const CAT_GIF_FALLBACK = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif";

const ContactSection = styled.section`
  margin-top: 4rem;
  padding: 2.5rem 0 0 0;
  border-top: 1px solid #e0dcc7;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 120px;
`;
const ContactTitle = styled.h3`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.1rem;
  color: #222;
`;
const ContactText = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 1.2rem;
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 100%;
  max-width: 340px;
  margin-bottom: 1.2rem;
`;
const Input = styled.input`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  border: 1px solid #e0dcc7;
  border-radius: 6px;
  background: #f8f6f1;
  color: #222;
`;
const TextArea = styled.textarea`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  padding: 0.6rem 0.8rem;
  border: 1px solid #e0dcc7;
  border-radius: 6px;
  background: #f8f6f1;
  color: #222;
  min-height: 80px;
`;
const SubmitButton = styled.button`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 6px;
  background: #e0dcc7;
  color: #222;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #e6e0c2;
  }
`;
const OrText = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.98rem;
  color: #666;
  margin-top: 0.7rem;
`;
const MailLink = styled.a`
  color: #222;
  text-decoration: underline;
  &:hover {
    color: #444;
  }
`;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [catGif, setCatGif] = useState(CAT_GIF_MAIN);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 30; // 3 seconds, 30 frames (100ms per frame)
    const interval = setInterval(() => {
      frame++;
      setProgress((frame / totalFrames) * 100);
      if (frame >= totalFrames) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 400); // allow fade out
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Aishika Manu</title>
        <meta name="description" content="Aishika Manu Portfolio" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      {loading && (
        <LoaderOverlay $visible={loading}>
          <LoaderText>THIS WEBSITE IS BUILT ON HAPPY ENERGY</LoaderText>
          <ProgressBarContainer>
            <ProgressBar $progress={progress} />
            <CatGif
              src={catGif}
              alt="Jumping Cat"
              $progress={progress}
              onError={() => setCatGif(CAT_GIF_FALLBACK)}
            />
          </ProgressBarContainer>
        </LoaderOverlay>
      )}
      {!loading && (
        <>
          <PageWrapper>
            <SideLinks>
              <GithubLink href="https://github.com/manuaishika" target="_blank" rel="noopener noreferrer">github</GithubLink>
              <LinkedinLink href="https://www.linkedin.com/in/aishikamanu/" target="_blank" rel="noopener noreferrer">linkedin</LinkedinLink>
            </SideLinks>
            <ContentContainer>
              <TopNav>
                <TopNavLink>education</TopNavLink>
                <TopNavLink href="/projects">projects</TopNavLink>
                <TopNavLink>experience</TopNavLink>
                <TopNavLink href="#contact" onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>contact</TopNavLink>
              </TopNav>
              <Main>
                <ImagePlaceholder>Image Placeholder</ImagePlaceholder>
                <Intro>
{`welcome to my little corner of the internet!

I'm aishika, someone who can't quite sit still in just one tech lane (its the adhd and the fafo in me heheh)
right now, I'm diving into ML research at (multiple) incredible universities, playing with code and numbers in quant competitions, and building things that (hopefully) don't break when shipped.

feel free to reach out for projects, research, brainstorming, or just to say hi.

talk soon,`}
                </Intro>
              </Main>
              <ContactSection id="contact">
                <ContactTitle>contact me</ContactTitle>
                <ContactText>i'd love to hear from you</ContactText>
                <ContactForm action="mailto:manuaishika@gmail.com" method="POST" encType="text/plain">
                  <Input type="text" name="name" placeholder="your name" required />
                  <Input type="email" name="email" placeholder="your email" required />
                  <TextArea name="message" placeholder="your message" required />
                  <SubmitButton type="submit">send</SubmitButton>
                </ContactForm>
                <OrText>or just email me at <MailLink href="mailto:manuaishika@gmail.com">manuaishika@gmail.com</MailLink></OrText>
              </ContactSection>
            </ContentContainer>
          </PageWrapper>
        </>
      )}
    </>
  );
}

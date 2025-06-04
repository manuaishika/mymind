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
  background: #EDE8D0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.6s;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  pointer-events: ${({ $visible }) => ($visible ? 'auto' : 'none')};
`;

const LoaderText = styled.div`
  color: #222;
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

const AnimatedCircleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0 2.5rem 0;
`;

const CircleWrapper = styled.div`
  width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RotatingCircle = styled.svg`
  width: 320px;
  height: 320px;
  transform-box: fill-box;
  animation: rotate 20s linear infinite;
  @keyframes rotate {
    100% { transform: rotate(360deg); }
  }
`;

const CircleCaption = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.05rem;
  color: #444;
  margin-top: 1.1rem;
  text-align: center;
`;

const BlogLink = styled.a`
  position: absolute;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  color: #222;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: #444;
    text-decoration: underline;
  }
`;

const blogLinks = [
  { title: "ML & Quantum", angle: 0, href: "/blog/1" },
  { title: "Neural Networks", angle: 72, href: "/blog/2" },
  { title: "AI in Healthcare", angle: 144, href: "/blog/3" },
  { title: "Research", angle: 216, href: "/blog" },
  { title: "Innovation", angle: 288, href: "/blog" }
];

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [catGif, setCatGif] = useState(CAT_GIF_MAIN);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Aishika | Portfolio</title>
        <meta name="description" content="Aishika's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <LoaderOverlay $visible={loading}>
        <LoaderText>there's nothing like too much ambition. enjoy the joyride of your potential</LoaderText>
        <ProgressBarContainer>
          <CatGif src={CAT_GIF_MAIN} alt="Loading..." $progress={progress} />
          <ProgressBar $progress={progress} />
        </ProgressBarContainer>
      </LoaderOverlay>
      {!loading && (
        <>
          <PageWrapper>
            <SideLinks>
              <GithubLink href="https://github.com/manuaishika" target="_blank" rel="noopener noreferrer">github</GithubLink>
              <LinkedinLink href="https://www.linkedin.com/in/aishikamanu/" target="_blank" rel="noopener noreferrer">linkedin</LinkedinLink>
            </SideLinks>
            <ContentContainer>
              <TopNav>
                <TopNavLink href="/about">about</TopNavLink>
                <TopNavLink href="/projects">projects</TopNavLink>
                <TopNavLink href="/blog">blog</TopNavLink>
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
                <AnimatedCircleSection>
                  <CircleWrapper>
                    <RotatingCircle viewBox="0 0 180 180">
                      <circle cx="90" cy="90" r="80" stroke="#222" strokeWidth="3" fill="none" strokeDasharray="502" strokeDashoffset="0" />
                      {blogLinks.map((link, index) => (
                        <BlogLink
                          key={index}
                          href={link.href}
                          style={{
                            left: `${90 + 80 * Math.cos((link.angle * Math.PI) / 180)}px`,
                            top: `${90 + 80 * Math.sin((link.angle * Math.PI) / 180)}px`,
                            transform: `translate(-50%, -50%) rotate(${link.angle}deg)`,
                            transformOrigin: 'center'
                          }}
                        >
                          {link.title}
                        </BlogLink>
                      ))}
                    </RotatingCircle>
                  </CircleWrapper>
                  <CircleCaption>life in motion</CircleCaption>
                </AnimatedCircleSection>
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

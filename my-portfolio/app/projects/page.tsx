"use client";
import styled from "styled-components";
import Head from "next/head";

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

const Section = styled.section`
  margin-bottom: 3.5rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Roboto Mono', monospace;
  font-size: 2.1rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #222;
  letter-spacing: 0.01em;
`;

const ProjectList = styled.ul`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.15rem;
  color: #222;
  margin-left: 1.2rem;
  margin-bottom: 1.5rem;
`;

const ProjectItem = styled.li`
  margin-bottom: 0.7rem;
`;

const ProjectLink = styled.a`
  color: #222;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #444;
  }
`;

const Description = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 1.2rem;
`;

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Aishika Manu</title>
        <meta name="description" content="Aishika Manu's projects" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700&display=swap" rel="stylesheet" />
      </Head>
      <PageWrapper>
        <ContentContainer>
          <Section>
            <SectionTitle>serious projects</SectionTitle>
            <Description>all my important projects</Description>
            <ProjectList>
              <ProjectItem><ProjectLink href="#">project 1</ProjectLink></ProjectItem>
              <ProjectItem><ProjectLink href="#">project 2</ProjectLink></ProjectItem>
              <ProjectItem><ProjectLink href="#">project 3</ProjectLink></ProjectItem>
            </ProjectList>
          </Section>
          <Section>
            <SectionTitle>fun projects</SectionTitle>
            <Description>all my fun projects</Description>
            <ProjectList>
              <ProjectItem><ProjectLink href="#">fun project 1</ProjectLink></ProjectItem>
              <ProjectItem><ProjectLink href="#">fun project 2</ProjectLink></ProjectItem>
            </ProjectList>
          </Section>
          <Section>
            <SectionTitle>research</SectionTitle>
            <Description>all my research work and papers</Description>
            <ProjectList>
              <ProjectItem><ProjectLink href="#">research project 1</ProjectLink></ProjectItem>
              <ProjectItem><ProjectLink href="#">research project 2</ProjectLink></ProjectItem>
            </ProjectList>
          </Section>
          <Section>
            <SectionTitle>non tech</SectionTitle>
            <Description>all my non-technical and creative projects</Description>
            <ProjectList>
              <ProjectItem><ProjectLink href="#">non tech project 1</ProjectLink></ProjectItem>
              <ProjectItem><ProjectLink href="#">non tech project 2</ProjectLink></ProjectItem>
            </ProjectList>
          </Section>
        </ContentContainer>
      </PageWrapper>
    </>
  );
} 
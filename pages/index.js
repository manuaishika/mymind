import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #F8F6F1;
    color: #222;
    font-family: 'IBM Plex Mono', 'Inter', 'Segoe UI', Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Nav = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 2.5rem 0 1.5rem 0;
  font-size: 1.3rem;
  letter-spacing: 0.1em;
  background: transparent;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #222;
  opacity: 0.85;
  transition: opacity 0.2s;
  cursor: pointer;
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const Main = styled.main`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Name = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  margin: 0.5rem 0 0.2rem 0;
  letter-spacing: 0.04em;
`;

const Tagline = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0 0 1.2rem 0;
  color: #444;
  letter-spacing: 0.02em;
`;

const Description = styled.p`
  font-size: 1.1rem;
  max-width: 500px;
  text-align: center;
  color: #555;
  margin-bottom: 2.5rem;
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
`;

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <NavLink>MY WORKS</NavLink>
        <NavLink>VITA</NavLink>
        <NavLink>PRESS</NavLink>
        <NavLink>CONTACTS</NavLink>
      </Nav>
      <Main>
        <ImagePlaceholder>Image Placeholder</ImagePlaceholder>
        <Name>Aishika Manu</Name>
        <Tagline>Developer</Tagline>
        <Description>
          I explore and build across machine learning, software development, and quant — solving problems that matter.
        </Description>
      </Main>
    </>
  );
} 
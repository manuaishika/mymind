"use client";
import styled from "styled-components";
import Link from "next/link";
import { useParams } from "next/navigation";

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

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Roboto Mono', monospace;
  color: #222;
  text-decoration: none;
  margin-bottom: 2rem;
  opacity: 0.8;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

const PostTitle = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 1rem;
`;

const PostDate = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const PostContent = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.1rem;
  color: #333;
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.8rem;
    margin: 2.5rem 0 1.5rem 0;
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem 0;
  }
  
  ul, ol {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  code {
    background: #f8f6f1;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
  }
  
  pre {
    background: #f8f6f1;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.8rem;
  color: #666;
  background: #e0dcc7;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
`;

interface BlogPost {
  title: string;
  date: string;
  content: string;
  tags: string[];
}

// Sample blog data - in a real app, this would come from a CMS or API
const sampleBlogPosts: Record<string, BlogPost> = {
  "1": {
    title: "The Intersection of ML and Quantum Computing",
    date: "March 15, 2024",
    content: `
      <p>The convergence of machine learning and quantum computing represents one of the most exciting frontiers in technology today. As we push the boundaries of what's possible with classical computing, quantum systems offer a new paradigm for solving complex problems.</p>
      
      <h2>Understanding the Basics</h2>
      <p>Quantum computing leverages the principles of quantum mechanics to process information in ways that classical computers cannot. When combined with machine learning algorithms, this opens up new possibilities for:</p>
      <ul>
        <li>Faster optimization of neural networks</li>
        <li>More efficient data processing</li>
        <li>Novel approaches to pattern recognition</li>
      </ul>
      
      <h2>Current Challenges</h2>
      <p>Despite the promise, there are significant challenges to overcome. Quantum systems are notoriously fragile, requiring precise control and error correction. Additionally, developing quantum machine learning algorithms requires a deep understanding of both fields.</p>
      
      <h2>Looking Forward</h2>
      <p>The future of quantum machine learning is bright, with research institutions and tech companies investing heavily in this space. As quantum computers become more stable and accessible, we can expect to see more practical applications emerge.</p>
    `,
    tags: ["ML", "Quantum Computing", "Research"]
  },
  // Add more sample posts as needed
};

export default function BlogPost() {
  const params = useParams();
  const postId = params.id as string;
  const post = sampleBlogPosts[postId] || null;

  if (!post) {
    return (
      <PageWrapper>
        <ContentContainer>
          <PostTitle>Post not found</PostTitle>
          <BackLink href="/blog">← Back to blog</BackLink>
        </ContentContainer>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <ContentContainer>
        <TopNav>
          <TopNavLink href="/">home</TopNavLink>
          <TopNavLink href="/projects">projects</TopNavLink>
          <TopNavLink href="/blog">blog</TopNavLink>
          <TopNavLink href="/about">about</TopNavLink>
        </TopNav>
        
        <BackLink href="/blog">← Back to blog</BackLink>
        
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{post.date}</PostDate>
        
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <TagsContainer>
          {post.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagsContainer>
      </ContentContainer>
    </PageWrapper>
  );
} 
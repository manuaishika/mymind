"use client";
import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

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

const BlogTitle = styled.h1`
  font-family: 'Roboto Mono', monospace;
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 2rem;
  text-align: center;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const BlogCard = styled(Link)`
  background: #f8f6f1;
  border: 1px solid #e0dcc7;
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
`;

const BlogCardTitle = styled.h2`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.3rem;
  color: #222;
  margin-bottom: 1rem;
`;

const BlogCardDate = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.8rem;
`;

const BlogCardExcerpt = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  color: #444;
  line-height: 1.6;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
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

const NewsletterSection = styled.section`
  margin-top: 4rem;
  padding: 2.5rem;
  background: #f8f6f1;
  border-radius: 12px;
  text-align: center;
`;

const NewsletterTitle = styled.h2`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.5rem;
  color: #222;
  margin-bottom: 1rem;
`;

const NewsletterText = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  color: #444;
  margin-bottom: 1.5rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  padding: 0.8rem 1rem;
  border: 1px solid #e0dcc7;
  border-radius: 8px;
  background: #fff;
  color: #222;
  
  &:focus {
    outline: none;
    border-color: #222;
  }
`;

const NewsletterButton = styled.button`
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  background: #222;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: #444;
  }
`;

const ExternalLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
`;

const ExternalLink = styled.a`
  font-family: 'Roboto Mono', monospace;
  font-size: 1.1rem;
  color: #222;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border: 1px solid #e0dcc7;
  border-radius: 8px;
  transition: all 0.2s;
  
  &:hover {
    background: #f8f6f1;
    transform: translateY(-2px);
  }
`;

// Sample blog data - in a real app, this would come from a CMS or API
const sampleBlogPosts = [
  {
    id: 1,
    title: "The Intersection of ML and Quantum Computing",
    date: "March 15, 2024",
    excerpt: "Exploring how machine learning algorithms are being adapted for quantum computers and what this means for the future of AI...",
    tags: ["ML", "Quantum Computing", "Research"],
    category: "AI"
  },
  {
    id: 2,
    title: "Building Better Neural Networks",
    date: "March 10, 2024",
    excerpt: "A deep dive into the latest advancements in neural network architectures and how they're changing the landscape of deep learning...",
    tags: ["Deep Learning", "Neural Networks", "AI"],
    category: "AI"
  },
  {
    id: 3,
    title: "The Future of AI in Healthcare",
    date: "March 5, 2024",
    excerpt: "Examining how artificial intelligence is revolutionizing healthcare delivery and patient outcomes...",
    tags: ["Healthcare", "AI", "Innovation"],
    category: "Healthcare"
  }
];

export default function Blog() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing email:", email);
    setIsSubscribed(true);
    setEmail("");
  };

  return (
    <PageWrapper>
      <ContentContainer>
        <TopNav>
          <TopNavLink href="/">home</TopNavLink>
          <TopNavLink href="/projects">projects</TopNavLink>
          <TopNavLink href="/blog">blog</TopNavLink>
          <TopNavLink href="/about">about</TopNavLink>
        </TopNav>
        
        <BlogTitle>thoughts & musings</BlogTitle>
        
        <ExternalLinks>
          <ExternalLink href="https://your-substack-url.substack.com" target="_blank" rel="noopener noreferrer">
            substack
          </ExternalLink>
          <ExternalLink href="https://your-notion-url.notion.site" target="_blank" rel="noopener noreferrer">
            notion
          </ExternalLink>
        </ExternalLinks>
        
        <BlogGrid>
          {sampleBlogPosts.map((post) => (
            <BlogCard key={post.id} href={`/blog/${post.id}`}>
              <BlogCardTitle>{post.title}</BlogCardTitle>
              <BlogCardDate>{post.date}</BlogCardDate>
              <BlogCardExcerpt>{post.excerpt}</BlogCardExcerpt>
              <TagsContainer>
                {post.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsContainer>
            </BlogCard>
          ))}
        </BlogGrid>

        <NewsletterSection>
          <NewsletterTitle>stay in the loop</NewsletterTitle>
          <NewsletterText>
            subscribe to my newsletter for updates on new posts, projects, and thoughts
          </NewsletterText>
          {isSubscribed ? (
            <NewsletterText>thanks for subscribing! 🎉</NewsletterText>
          ) : (
            <NewsletterForm onSubmit={handleSubscribe}>
              <NewsletterInput
                type="email"
                placeholder="your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <NewsletterButton type="submit">subscribe</NewsletterButton>
            </NewsletterForm>
          )}
        </NewsletterSection>
      </ContentContainer>
    </PageWrapper>
  );
} 
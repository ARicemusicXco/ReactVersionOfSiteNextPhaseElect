import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const BlogCard = styled(Link)`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
`;

const BlogExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.6;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
`;

const blogPosts = [
  {
    id: 1,
    title: 'The Benefits of Solar Energy for Your Home',
    excerpt: 'Discover how solar energy can reduce your electricity bills and help protect the environment.',
    image: '/NextPhaseElectMediaLibrary/AdobeStock_164972173.jpeg',
    date: 'March 1, 2024',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'Understanding Commercial Electrical Systems',
    excerpt: 'A comprehensive guide to commercial electrical systems and their maintenance.',
    image: '/NextPhaseElectMediaLibrary/AdobeStock_187018505.jpeg',
    date: 'February 28, 2024',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'EV Charging Solutions for Your Business',
    excerpt: 'Learn about the different EV charging options available for commercial properties.',
    image: '/NextPhaseElectMediaLibrary/AdobeStock_214337983.jpeg',
    date: 'February 25, 2024',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Energy Efficiency Tips for Your Home',
    excerpt: 'Simple ways to improve your home\'s energy efficiency and reduce your carbon footprint.',
    image: '/NextPhaseElectMediaLibrary/AdobeStock_164972173.jpeg',
    date: 'February 20, 2024',
    readTime: '4 min read'
  },
  {
    id: 5,
    title: 'The Future of Renewable Energy',
    excerpt: 'Exploring upcoming trends and innovations in renewable energy technology.',
    image: '/NextPhaseElectMediaLibrary/AdobeStock_187018505.jpeg',
    date: 'February 15, 2024',
    readTime: '8 min read'
  },
  {
    id: 6,
    title: 'Maintaining Your Solar Panel System',
    excerpt: 'Essential maintenance tips to keep your solar panels operating at peak efficiency.',
    image: '/NextPhaseElectMediaLibrary/AdobeStock_214337983.jpeg',
    date: 'February 10, 2024',
    readTime: '5 min read'
  }
];

const Blog: React.FC = () => {
  return (
    <BlogContainer>
      <PageTitle>Latest News & Insights</PageTitle>
      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogCard key={post.id} to={`/resources/blog/${post.id}`}>
            <BlogImage src={post.image} alt={post.title} />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <BlogMeta>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </BlogMeta>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog; 
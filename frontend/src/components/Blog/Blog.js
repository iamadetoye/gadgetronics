import React from 'react';
import data from '../../data';
import { Wrapper } from '../../pages/HomePage/HomePage.styles';
import { BlogSection, BlogHeading, BlogPosts, BlogPost } from './Blog.styles';

const Blog = () => {
  return (
    <BlogSection>
      <Wrapper>
        <BlogHeading>
          <h3>
            Blog
            <span>
              Stay updated with the tech world by regularly checking
              GADGETRONICS’ weekly blog posts.
            </span>
          </h3>

          <a href="/">View More</a>
        </BlogHeading>
        <BlogPosts>
          {data.blogPosts.map((blogPost) => (
            <BlogPost key={blogPost._id}>
              <img src={blogPost.image} alt={blogPost.linkLabel} />
              <a href={blogPost.linkUrl}>{blogPost.linkLabel}</a>
              <span>{blogPost.date}</span>
              <blockquote>{blogPost.post}</blockquote>
            </BlogPost>
          ))}
        </BlogPosts>
      </Wrapper>
    </BlogSection>
  );
};

export default Blog;

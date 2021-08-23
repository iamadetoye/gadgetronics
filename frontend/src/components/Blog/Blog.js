import React from 'react';
import data from '../../data';

import {
  BlogSection,
  BlogHeading,
  BlogPosts,
  BlogPost,
  BlogWrapper,
  BlogMore,
  BlogMore2,
} from './Blog.styles';

const Blog = () => {
  return (
    <BlogSection>
      <BlogWrapper>
        <BlogHeading>
          <h3>
            Blog
            <span>
              Stay updated with the tech world by regularly checking
              <a href="/"> GADGETRONICS’ </a> weekly blog posts.
            </span>
          </h3>

          <BlogMore href="/">View More</BlogMore>
        </BlogHeading>
        <BlogPosts>
          {data.blogPosts.map((blogPost) => (
            <BlogPost key={blogPost._id}>
              <img src={blogPost.image} alt={blogPost.linkLabel} />
              <h4>
                <a href={blogPost.linkUrl}>{blogPost.linkLabel}</a>
              </h4>
              <span>{blogPost.date}</span>
              <blockquote>{blogPost.post}</blockquote>
            </BlogPost>
          ))}
        </BlogPosts>

        <BlogMore2 href="/">View More</BlogMore2>
      </BlogWrapper>
    </BlogSection>
  );
};

export default Blog;

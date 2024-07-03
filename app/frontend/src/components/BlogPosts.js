import React from 'react';

const BlogPosts = ({ posts }) => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        <li key={1}>
          <h2>Post Title</h2>
          <p>Post content</p>
        </li>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;

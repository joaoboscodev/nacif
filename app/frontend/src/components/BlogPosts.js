import React from 'react';

const BlogPosts = ({ posts, onDeletePost }) => {
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => onDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;

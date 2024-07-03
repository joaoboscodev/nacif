import React from 'react';

const BlogPosts = ({ posts, onEditPost, onDeletePost }) => {
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => onEditPost(post)}>Edit</button>
            <button onClick={() => onDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;

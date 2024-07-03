import React, { useState } from 'react';

const EditPost = ({ post, onEditPost }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/api/posts/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao editar post');
        }
        return response.json();
      })
      .then(data => {
        onEditPost(data);
      })
      .catch(error => {
        console.error('Erro ao editar post:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit" disabled={!title || !body}>Save</button>
    </form>
  );
};

export default EditPost;

import React, { useState } from 'react';

const CreatePost = ({ onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:4000/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, body }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao criar post');
        }
        return response.json();
      })
      .then(data => {
        onCreatePost(data);
        setTitle('');
        setBody('');
      })
      .catch(error => {
        console.error('Erro ao criar post:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Post</h2>
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
      <button type="submit" disabled={!title || !body}>Create</button>
    </form>
  );
};

export default CreatePost;

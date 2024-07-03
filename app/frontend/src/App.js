import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import BlogPosts from './components/BlogPosts';
import CreatePost from './components/CreatePost';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      fetch('http://localhost:4000/api/posts')
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao buscar posts');
          }
          return response.json();
        })
        .then(data => {
          setPosts(data);
        })
        .catch(error => {
          console.error('Erro ao buscar posts:', error);
        });
    }
  }, [isAuthenticated]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleDeletePost = (postId) => {
    fetch(`http://localhost:4000/api/posts/${postId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao deletar post');
        }
        setPosts(posts.filter(post => post.id !== postId));
      })
      .catch(error => {
        console.error('Erro ao deletar post:', error);
      });
  };

  if (!isAuthenticated) {
    return <Login setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <div>
      <h1>Blog Posts App</h1>
      <CreatePost onCreatePost={handleCreatePost} />
      <BlogPosts posts={posts} onDeletePost={handleDeletePost} />
    </div>
  );
}

export default App;

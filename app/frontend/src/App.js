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

  if (!isAuthenticated) {
    return <Login setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <div>
      <CreatePost onCreatePost={handleCreatePost} />
      <BlogPosts posts={posts} />
    </div>
  );
}

export default App;

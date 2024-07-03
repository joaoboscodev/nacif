import React, { useEffect, useState } from 'react';
import Login from './components/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetch('http://localhost:3000/api/posts')
        .then(response => response.json())
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Login setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <div className="App">
      <h1>Blog Posts</h1>
    </div>
  );
}

export default App;

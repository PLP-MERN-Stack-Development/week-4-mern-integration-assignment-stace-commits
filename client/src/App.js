import React from 'react';
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>📝 My MERN Blog</h1>
      <CreatePostForm />
      <hr />
      <PostList />
    </div>
  );
}

export default App;

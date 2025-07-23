import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/postService';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div>
      <h2>All Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <small>By: {post.author}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;

import React, { useState } from 'react';
import { createPost } from '../services/postService';

const CreatePostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(formData);
    alert('Post created!');
    setFormData({ title: '', content: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Post</h2>
      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange} required />
      <input type="text" name="author" placeholder="Author" value={formData.author} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatePostForm;

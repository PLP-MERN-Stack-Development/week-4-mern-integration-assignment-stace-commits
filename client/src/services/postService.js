const API_BASE_URL = 'http://localhost:5000/api/posts';

export const fetchPosts = async () => {
  const response = await fetch(API_BASE_URL);
  return response.json();
};

export const createPost = async (postData) => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  return response.json();
};

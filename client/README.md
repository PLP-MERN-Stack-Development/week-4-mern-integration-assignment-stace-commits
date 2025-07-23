## Frontend
cd client
pnpm install
pnpm start

Frontend runs on: http://localhost:3000

React components render mock blog posts from a local service file.

Posts can be added using a form (stored in memory, not in DB).

## API Simulation
Because the real API fetch fails (TypeError: Failed to fetch), all API calls are mocked:

postService.js
export const fetchPosts = async () => {
  return [
    {
      _id: '1',
      title: 'Sample Post',
      content: 'This is a sample blog post.',
      author: 'Stace',
      createdAt: new Date().toISOString(),
    },
  ];
};

export const createPost = async (newPost) => {
  console.log('Mock post created:', newPost);
};

## 💡 Notes
Code is complete and well structured for both backend and frontend.

Comments are added to explain sections where functionality was simulated due to errors.

Ideal for future fixes once server-to-client connection is restored.

 ## Author
Stace Keriga – Week 4 MERN Assignment 
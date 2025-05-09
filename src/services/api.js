import { posts } from '../data/posts';

export const apiStates = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const fetchAllPosts = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    console.log('Fetching all posts:', posts.length); // Debug log
    
    return {
      status: apiStates.SUCCESS,
      data: posts,
      error: null
    };
  } catch (error) {
    console.error('Error fetching posts:', error); // Debug log
    return {
      status: apiStates.ERROR,
      data: [],
      error: error.message || 'Failed to fetch posts'
    };
  }
};

// Get latest posts with limit
export const fetchLatestPosts = async (limit = null) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const data = limit ? posts.slice(0, limit) : posts;
    
    return {
      status: apiStates.SUCCESS,
      data
    };
  } catch (error) {
    return {
      status: apiStates.ERROR,
      error: error.message
    };
  }
};

// Get post by ID
export const fetchPostById = async (id) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    const post = posts.find(post => post.id === parseInt(id) || post.id === id);
    
    if (!post) {
      throw new Error('Post not found');
    }
    
    return { 
      status: apiStates.SUCCESS,
      data: post,
      error: null 
    };
  } catch (error) {
    return { 
      status: apiStates.ERROR,
      data: null,
      error: error.message 
    };
  }
};

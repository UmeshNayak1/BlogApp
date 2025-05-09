export const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "2023-06-15",
    image: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/800/400`,
    excerpt: "Learn the basics of React and how to build your first component.",
    content: "React is a popular JavaScript library for building user interfaces. Developed by Facebook, React makes it easy to create interactive UIs that update efficiently when your data changes. In this post, we'll cover the fundamentals of React including components, props, and state management."
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    date: "2023-07-20",
    image: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/800/400`,
    excerpt: "Dive into React Hooks and learn how they simplify state management.",
    content: "React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. They let you use state and other React features without writing a class component. This tutorial will guide you through using the most common hooks like useState, useEffect, and useContext."
  },
  {
    id: 3,
    title: "Routing in React Applications",
    date: "2023-08-10",
    image: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/800/400`,
    excerpt: "Explore how to implement routing in your React application.",
    content: "Routing is essential for creating multi-page applications in React. React Router is the most popular library for implementing routing in React applications. In this guide, we'll walk through setting up routes, handling navigation, and using route parameters for dynamic content."
  },
  {
    id: 4,
    title: "CSS Grid vs Flexbox",
    date: "2023-09-05",
    image: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/800/400`,
    excerpt: "Understanding when to use CSS Grid and when to use Flexbox for layouts.",
    content: "Modern CSS layout techniques have revolutionized how we structure web pages. This article compares CSS Grid and Flexbox, helping you understand which tool is best for different layout scenarios."
  },
  {
    id: 5,
    title: "JavaScript Promise Patterns",
    date: "2023-09-15",
    image: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/800/400`,
    excerpt: "Master advanced Promise patterns in JavaScript.",
    content: "Learn about Promise chaining, Promise.all, Promise.race, and other advanced patterns for handling asynchronous operations in JavaScript effectively."
  },
  {
    id: 6,
    title: "React Performance Optimization",
    date: "2023-09-25",
    image: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/800/400`,
    excerpt: "Tips and tricks for optimizing your React applications.",
    content: "Discover various techniques to improve React performance, including memoization, lazy loading, and proper key usage in lists."
  },
  {
    id: 7,
    title: "TypeScript Best Practices",
    date: "2023-10-05",
    image: `https://picsum.photos/seed/${Math.floor(Math.random() * 1000) + 1}/800/400`,
    excerpt: "Write better TypeScript code with these proven practices.",
    content: "Explore TypeScript best practices that will help you write more maintainable and type-safe code, including interface design and type inference."
  },
  {
    id: 8,
    title: "Modern State Management",
    date: "2023-10-15",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60",
    excerpt: "Compare different state management solutions in React.",
    content: "From Context API to Redux to Zustand, learn about different state management approaches and when to use each one."
  },
  {
    id: 9,
    title: "Web Accessibility Guidelines",
    date: "2023-10-25",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60",
    excerpt: "Make your web applications accessible to everyone.",
    content: "Learn essential web accessibility guidelines and how to implement them in your React applications for better user experience."
  },
  {
    id: 10,
    title: "Testing React Components",
    date: "2023-11-05",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60",
    excerpt: "Comprehensive guide to testing React components.",
    content: "Explore different testing approaches for React components using Jest and React Testing Library, including unit tests and integration tests."
  },
  {
    id: 11,
    title: "React Server Components",
    date: "2023-11-15",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60",
    excerpt: "Understanding the future of React with Server Components.",
    content: "Dive into React Server Components and learn how they can improve application performance and user experience."
  },
  {
    id: 12,
    title: "CSS-in-JS Solutions",
    date: "2023-11-25",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60",
    excerpt: "Compare different CSS-in-JS libraries and approaches.",
    content: "Explore various CSS-in-JS solutions like styled-components, Emotion, and CSS Modules to find the best fit for your project."
  },
  {
    id: 13,
    title: "React Design Patterns",
    date: "2023-12-05",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60",
    excerpt: "Common design patterns for React applications.",
    content: "Learn about important React design patterns like HOCs, Render Props, and Custom Hooks that can make your code more reusable."
  },
  {
    id: 14,
    title: "Authentication in React",
    date: "2023-12-15",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60",
    excerpt: "Implement secure authentication in React apps.",
    content: "Step-by-step guide to implementing secure authentication in React applications using JWT and modern best practices."
  },
  {
    id: 15,
    title: "React Native Fundamentals",
    date: "2023-12-25",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop&q=60",
    excerpt: "Get started with mobile development using React Native.",
    content: "Learn the basics of React Native and how to build cross-platform mobile applications using your React knowledge."
  }
];

// Add a console log to verify the data is loaded
console.log('Posts data loaded:', posts.length, 'posts available');

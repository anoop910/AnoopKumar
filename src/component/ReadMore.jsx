// src/ReadMore.js
import React from 'react';

const ReadMore = () => {
  const post = {
    title: "Understanding React Hooks",
    date: "November 1, 2024",
    author: "Anoop Kumar",
    content: `
      React hooks have revolutionized the way we write React components by providing powerful features like state and lifecycle management in functional components.
      Hooks such as useState, useEffect, useContext, and others enable us to create more efficient, maintainable, and reusable components without relying on class-based components.
      
      In this post, we will explore the basics of React hooks, how to use them effectively, and some advanced patterns for optimizing your code. We'll cover common hooks, how to create custom hooks, and examples of how they can simplify your React applications.
      
      Let's dive in and understand why React hooks have become such a popular tool in the React ecosystem.
    `,
    image: "https://via.placeholder.com/800x400"
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-gray-400 mt-2">{post.date} • {post.author}</p>
      </section>

      {/* Blog Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Optional Image */}
        <div className="mb-8">
          <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none text-gray-800">
          <p>{post.content}</p>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button onClick={() => window.history.back()} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            ← Back to Blog
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReadMore;

// src/BlogPage.js
import React from 'react';

// Sample blog data
const blogs = [
  {
    title: "Understanding React Hooks",
    date: "November 1, 2024",
    excerpt: "Learn the basics of React hooks, including useState, useEffect, and how they can help you build efficient components.",
    link: "#"
  },
  {
    title: "Getting Started with Tailwind CSS",
    date: "October 20, 2024",
    excerpt: "A beginner's guide to setting up and using Tailwind CSS for responsive design and utility-first styling.",
    link: "#"
  },
  {
    title: "Building REST APIs with Spring Boot",
    date: "September 15, 2024",
    excerpt: "An in-depth look at building robust and scalable REST APIs using Spring Boot.",
    link: "#"
  }
];

const BlogPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      {/* Header Section */}
      <section className="py-16 text-center bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Welcome to my blog! Here you’ll find articles on web development, programming, and tutorials to help you enhance your skills.
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900">{blog.title}</h2>
              <p className="text-gray-500 mt-2">{blog.date}</p>
              <p className="text-gray-700 mt-4">{blog.excerpt}</p>
              <a href={blog.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-blue-500 hover:text-blue-600">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BlogPage;

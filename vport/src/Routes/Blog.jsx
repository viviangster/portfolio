// rafce
import React from 'react';

const Blog = () => {
  const posts = [
    { date: 'June 2025', title: 'The Strength of Weak Ties', summary: 'Mark S. Granovetter Johns Hopkins University' },
{ date: 'May 2025', title: 'Will AI replace you?', summary: 'If you think you’ll be replaced by AI, then you just might.” - Danny Bedingfield, AI & Learning Specialist. Those that are confident they won’t — might carve a different story. Had the chance to hear Danny speak during his recent visit to the Southern Institute of Technology. And his answer to when another student asked “Will most jobs be replaced by AI?” stuck out to me. Soo, it’s a little bit up to you. It’s not just about AI, but mindset. The future doesn’t just belong to the AI, or the technically skilled — it belongs to those with skills that they know AI can’t replace..(bring something to the table!). Thanks Danny for the inspiration and for reminding us in our third and final year, that we have more power than it sometimes feels.' },
    { date: 'April 2025', title: 'Steve Jobs', summary: 'A recent decision to focus on his biography.' }
    
  ];

  return (
    <div
      className="min-h-screen p-6 overflow-y-auto"
      style={{
        backgroundImage: "url('/assets/trees1.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <h1 className="text-3xl font-bold mb-6 text-black ">Blog</h1>

      <div className="flex flex-col gap-6 bg-white/80 p-4 rounded-md">
        {posts.map((post, index) => (
          <div key={index} className="border p-4 rounded shadow hover:shadow-lg transition bg-white">
            <p className="text-sm text-gray-500">{post.date}</p>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

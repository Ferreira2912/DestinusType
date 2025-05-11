import React from 'react';
import { notFound } from 'next/navigation';
import { getBlogPost } from ''';

// Mock function for getting blog post data - you'll need to implement this with your data source
// const getBlogPost = async (slug: string) => {
//   // Implement with your data fetching logic
// }

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="blog-post-container">
      <div className="blog-post-header">
        <h1>{post.title}</h1>
        <div className="blog-meta">
          <span className="blog-data">{post.date}</span>
          <span className="blog-tempo">{post.readTime} MIN LEITURA</span>
        </div>
      </div>
      
      <div className="featured-image">
        <img src={post.image} alt={post.title} />
      </div>
      
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
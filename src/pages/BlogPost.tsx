
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link, useParams } from "react-router-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const BlogPost = () => {
  // In a real app, you would fetch the blog post based on the slug
  const { slug } = useParams();
  
  // This is sample data - in a real app, you would fetch this from your data source
  const post = {
    title: "Getting Started with React Hooks",
    date: "April 15, 2023",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500",
    tags: ["React", "JavaScript", "Web Development"],
    content: `
      <h2>Introduction to React Hooks</h2>
      <p>
        React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component. 
        This was a game-changer for React development, making functional components just as powerful as class components.
      </p>
      
      <h2>Why Use Hooks?</h2>
      <p>
        Hooks solve several problems that developers faced with class components:
      </p>
      <ul>
        <li>They make it easier to reuse stateful logic between components</li>
        <li>They allow you to split one component into smaller functions based on related pieces</li>
        <li>They let you use more of React's features without classes</li>
      </ul>
      
      <h2>Basic Hooks</h2>
      
      <h3>useState</h3>
      <p>
        The useState hook lets you add React state to functional components.
      </p>
      <pre><code>
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
      
      <h3>useEffect</h3>
      <p>
        The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React class components.
      </p>
      <pre><code>
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Click me
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>
        React Hooks provide a more direct API to React concepts you already know: props, state, context, refs, and lifecycle. They also offer a new way to share stateful logic that wasn't possible with class components.
      </p>
      <p>
        By understanding and using Hooks effectively, you can write cleaner, more maintainable, and more reusable React code.
      </p>
    `
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <article className="container max-w-4xl py-12">
          <Button variant="ghost" size="sm" className="mb-8" asChild>
            <Link to="/blog" className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to all posts
            </Link>
          </Button>
          
          <div className="w-full h-[400px] rounded-lg overflow-hidden mb-8">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground mb-4 gap-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="gap-1">
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
          
          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;

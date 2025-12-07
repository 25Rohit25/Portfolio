export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    summary: string;
    content: string; // HTML or Markdown string
    tags: string[];
    date: string;
    readTime: string;
    author: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "deploying-nextjs-aws-ec2",
        title: "Deploying Next.js on AWS EC2 with Nginx & SSL",
        summary: "A step-by-step guide to hosting your full-stack Next.js application on an EC2 instance, configuring Nginx as a reverse proxy, and securing it with Certbot.",
        date: "Dec 05, 2024",
        readTime: "8 min read",
        tags: ["AWS", "Next.js", "DevOps", "Nginx"],
        author: "Rohit Singh",
        content: `
      <h2>Introduction</h2>
      <p>Deploying a Next.js application on a traditional VPS like AWS EC2 gives you full control over the infrastructure. In this guide, we'll walk through setting up an Ubuntu instance, installing Node.js, and using PM2 for process management.</p>
      
      <h3>Prerequisites</h3>
      <ul>
        <li>An AWS Account</li>
        <li>Basic knowledge of SSH</li>
        <li>A Next.js project</li>
      </ul>

      <h3>Step 1: Launching an EC2 Instance</h3>
      <p>Go to your AWS Console, select EC2, and launch a generic Ubuntu 22.04 LTS instance. Ensure you allow traffic on ports 80 (HTTP), 443 (HTTPS), and 22 (SSH).</p>

      <h3>Step 2: Environment Setup</h3>
      <p>SSH into your instance and update the package lists:</p>
      <pre><code>sudo apt update && sudo apt upgrade -y</code></pre>
      <p>Then install Node.js and NPM using NVM (Node Version Manager) for flexibility.</p>

      <h3>Step 3: Configuring Nginx</h3>
      <p>Nginx acts as a reverse proxy, forwarding requests from port 80 to your Next.js app running on port 3000. Here is a basic configuration block...</p>
    `
    },
    {
        id: "2",
        slug: "dockerizing-mern-stack",
        title: "Dockerizing a MERN Stack Application",
        summary: "Learn how to containerize a MongoDB, Express, React, and Node.js application using Docker Compose for consistent development and production environments.",
        date: "Nov 28, 2024",
        readTime: "10 min read",
        tags: ["Docker", "MERN", "Containers", "DevOps"],
        author: "Rohit Singh",
        content: `
      <h2>Why Docker?</h2>
      <p>"It works on my machine" is a phrase of the past. Docker ensures that your application runs exactly the same way in every environment, from your local dev environment to production servers.</p>

      <h3>The Dockerfile</h3>
      <p>We need to create a <code>Dockerfile</code> for both our client (React) and server (Node/Express). Here's a sample for the backend:</p>
      <pre><code>FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]</code></pre>

      <h3>Orchestration with Docker Compose</h3>
      <p>Docker Compose allows us to run multi-container applications. We will define services for the <code>mongo</code> database, <code>backend</code> API, and <code>client</code> frontend.</p>
    `
    },
    {
        id: "3",
        slug: "microservices-vs-monolith",
        title: "Monolith vs Microservices: When to Switch?",
        summary: "Analyzing the trade-offs between monolithic architectures and microservices. Understanding scalability, complexity, and team structure implications.",
        date: "Nov 15, 2024",
        readTime: "6 min read",
        tags: ["System Design", "Architecture", "Microservices"],
        author: "Rohit Singh",
        content: `
      <h2>The Monolithic Approach</h2>
      <p>Startups often start with a monolith because it's easier to develop, simpler to deploy, and easier to debug. All code lives in a single repository.</p>

      <h2>The Shift to Microservices</h2>
      <p>As teams grow and traffic spikes, monoliths can become bottlenecks. Microservices decouple components, allowing independent scaling and deployment.</p>
      
      <h3>Key Challenges</h3>
      <ul>
        <li>Data Consistency (CAP Theorem)</li>
        <li>Inter-service Communication (gRPC vs REST vs Events)</li>
        <li>Operational Complexity (Observability)</li>
      </ul>
    `
    },
    {
        id: "4",
        slug: "mastering-react-hooks",
        title: "Mastering React Hooks for Performance",
        summary: "Deep dive into useMemo, useCallback, and custom hooks. How to prevent unnecessary re-renders and optimize your React application.",
        date: "Nov 02, 2024",
        readTime: "7 min read",
        tags: ["React", "Frontend", "Performance"],
        author: "Rohit Singh",
        content: `
      <h2>The frequent mistake</h2>
      <p>Many developers wrap everything in <code>useMemo</code> thinking it makes things faster. In reality, the cost of checking dependencies can sometimes outweigh the re-computation cost.</p>
    `
    }
];

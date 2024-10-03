import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex justify-between items-center w-full">
        <div className="text-xl font-bold">Digital Success Take Home Assignment</div>
        <div className="flex items-center">
          {/* "By" text */}
          <span className="mr-2">By</span>
          {/* Vercel logo */}
          <Image
            className="invert"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
          />
        </div>
      </header>

      <main className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mt-12">Question 2</h2>
        <p className="text-lg mt-2 italic">
          A customer has reached out asking, “When should I choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?” 
          Write a reply to the customer.
        </p>
        
        <p className="text-lg mt-4 max-w-2xl text-center">
          The main difference between React and Next.js is that React is just a UI library for building interfaces, so you get a lot of flexibility in how you structure your app, but you’ll need to add things like routing or server-side rendering yourself. On the other hand, Next.js is more of a full framework built on React, and it comes with everything you need, like file-based routing, SSR, and API routes, all built-in. So, if you’re building something more complex, like a site that needs good SEO or has dynamic content, Next.js takes care of a lot of the heavy lifting for you.
          <br /><br />
          Another key thing is how they handle rendering. With React, it’s mostly client-side rendering, which means your content is loaded in the browser and requires some extra work to get things like SEO and performance right. But with Next.js, you can use server-side rendering, static site generation, or even a mix, so it’s super optimized for faster loading and better SEO.
        </p>
        <p className="text-lg mt-4 max-w-2xl text-center">
          Hi [Customer Name],
          <br /><br />
          Thank you for reaching out!
          <br /><br />
          Deciding between Edge Functions, Serverless Functions, or Edge Middleware on Vercel really depends on the use case and performance needs of your application. Here's a breakdown to help you decide:
          <br /><br />
            1. Edge Functions are ideal when you need ultra-low latency and want to deliver content closer to your users. Since they run on Vercel’s global Edge Network, they’re great for tasks like dynamic personalization or user authentication that need to be super-fast and close to the end-user. If performance at the edge is critical, Edge Functions are your go-to.
          <br /><br />
            Please find additional information here - <a href="https://vercel.com/docs/pricing/edge-functions" className="text-blue-600 underline">https://vercel.com/docs/pricing/edge-functions</a>
          <br /><br />
            2. Serverless Functions are more suited for backend logic that doesn’t require the super-fast response time of the edge. If you're handling API requests, heavy computations, or tasks that don’t need to be executed near the user (like connecting to a database), Serverless Functions work well. They’re cost-effective and scale automatically.
          <br /><br />
            Please find additional information here - <a href="https://vercel.com/docs/pricing/serverless-functions" className="text-blue-600 underline">https://vercel.com/docs/pricing/serverless-functions</a>
          <br /><br />
            3. Edge Middleware allows you to modify requests and responses before they reach a function or a page. It’s best used for things like routing, custom authentication, or geolocation-based redirects. Middleware can inspect requests and make decisions on the fly without adding much delay, offering flexibility while keeping performance high.
          <br /><br />
            Please find additional information here - <a href="https://vercel.com/docs/pricing/edge-middleware" className="text-blue-600 underline">https://vercel.com/docs/pricing/edge-middleware</a>
          <br /><br />
          Kind Regards,
          <br />
          Gejsi
        </p>
      </main>
    </div>
  );
}

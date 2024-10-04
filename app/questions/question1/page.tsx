import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
        <h2 className="text-2xl font-bold mt-12">Question 4</h2>
        <p className="text-lg mt-2 italic">
          A customer who has been sold Vercel through a reseller has reached out to the team to ask about the product. Can you give a brief 2-5 sentence introduction to Vercel to showcase what Vercel does?
        </p>

        {/* Email Component */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-2xl mt-4">
          <p className="text-sm text-black">
            Vercel is a powerful platform designed to help developers deploy, manage, and optimize frontend web applications effortlessly. It provides a frontend cloud that offers features like instant deploys, serverless functions, and edge network optimizations. This makes it ideal for projects that need high-performance websites and web apps with minimal setup. Plus, Vercel is the creator of Next.js, a popular React framework, which further enhances its ease of use for modern web development.
            <br />
            <br />
            The main difference between React and Next.js is that React is just a UI library for building interfaces, so you get a lot of flexibility in how you structure your app, but you’ll need to add things like routing or server-side rendering yourself. On the other hand, Next.js is more of a full framework built on React, and it comes with everything you need, like file-based routing, SSR, and API routes, all built-in. So, if you’re building something more complex, like a site that needs good SEO or has dynamic content, Next.js takes care of a lot of the heavy lifting for you.
            <br />
            <br />
            Another key thing is how they handle rendering. With React, it’s mostly client-side rendering, which means your content is loaded in the browser and requires some extra work to get things like SEO and performance right. But with Next.js, you can use server-side rendering, static site generation, or even a mix, so it’s super optimized for faster loading and better SEO.
          </p>
        </div>
      </main>
    </div>
  );
}

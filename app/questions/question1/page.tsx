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
        <h2 className="text-2xl font-bold mt-12">Question 1</h2>
        <p className="text-lg mt-2 italic">
          Please compare the similarities and differences between Next.js and React.
        </p>

        <h2 className="text-2xl font-bold mt-12">Question 2</h2>
        <p className="text-sm text-black leading-relaxed mt-4 max-w-2xl text-left">
          • Edge Functions are ideal when you need ultra-low latency and want to deliver content closer to your users. Since they run on Vercel’s global Edge Network, they’re great for tasks like dynamic personalization or user authentication that need to be super-fast and close to the end-user. If performance at the edge is critical, Edge Functions are your go-to.
          <br />
          Please find additional information here - <a href="https://vercel.com/docs/pricing/edge-functions" className="text-blue-600 underline">https://vercel.com/docs/pricing/edge-functions</a>
        </p>

        <p className="text-sm text-black leading-relaxed mt-4 max-w-2xl text-left">
          • Serverless Functions are more suited for backend logic that doesn’t require the super-fast response time of the edge. If you're handling API requests, heavy computations, or tasks that don’t need to be executed near the user (like connecting to a database), Serverless Functions work well. They’re cost-effective and scale automatically.
          <br />
          Please find additional information here - <a href="https://vercel.com/docs/pricing/serverless-functions" className="text-blue-600 underline">https://vercel.com/docs/pricing/serverless-functions</a>
        </p>

        <p className="text-sm text-black leading-relaxed mt-4 max-w-2xl text-left">
          • Edge Middleware allows you to modify requests and responses before they reach a function or a page. It’s best used for things like routing, custom authentication, or geolocation-based redirects. Middleware can inspect requests and make decisions on the fly without adding much delay, offering flexibility while keeping performance high.
          <br />
          Please find additional information here - <a href="https://vercel.com/docs/pricing/edge-middleware" className="text-blue-600 underline">https://vercel.com/docs/pricing/edge-middleware</a>
        </p>
      </main>
    </div>
  );
}

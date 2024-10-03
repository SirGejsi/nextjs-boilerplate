import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Email Component */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-2xl mb-12">
        <p className="text-sm text-black"> {/* Changed to text-sm for smaller font */}
          Hi [Customer Name],
        </p>
        <br />
        <p className="text-sm text-black"> {/* Changed to text-sm for smaller font */}
          Thank you for reaching out!
        </p>
        <br />
        <p className="text-sm text-black"> {/* Changed to text-sm for smaller font */}
          Deciding between Edge Functions, Serverless Functions, or Edge Middleware on Vercel really depends on the use case and performance needs of your application. Here&apos;s a breakdown to help you decide:
        </p>
        <br />
        <ul className="list-none pl-5 text-sm text-black"> {/* Changed to text-sm for smaller font */}
          <li className="flex mb-2"> {/* Reduced margin-bottom for compactness */}
            <span className="list-disc mr-2">•</span>
            <div>
              Edge Functions are ideal when you need ultra-low latency and want to deliver content closer to your users. Since they run on Vercel’s global Edge Network, they’re great for tasks like dynamic personalization or user authentication that need to be super-fast and close to the end-user. If performance at the edge is critical, Edge Functions are your go-to.
              <br />
              Please find additional information here - <a href="https://vercel.com/docs/pricing/edge-functions" className="text-blue-600 underline">https://vercel.com/docs/pricing/edge-functions</a>
            </div>
          </li>
          <li className="flex mb-2"> {/* Reduced margin-bottom for compactness */}
            <span className="list-disc mr-2">•</span>
            <div>
              Serverless Functions are more suited for backend logic that doesn’t require the super-fast response time of the edge. If you&apos;re handling API requests, heavy computations, or tasks that don&apos;t need to be executed near the user (like connecting to a database), Serverless Functions work well. They’re cost-effective and scale automatically.
              <br />
              Please find additional information here - <a href="https://vercel.com/docs/pricing/serverless-functions" className="text-blue-600 underline">https://vercel.com/docs/pricing/serverless-functions</a>
            </div>
          </li>
          <li className="flex mb-2"> {/* Reduced margin-bottom for compactness */}
            <span className="list-disc mr-2">•</span>
            <div>
              Edge Middleware allows you to modify requests and responses before they reach a function or a page. It’s best used for things like routing, custom authentication, or geolocation-based redirects. Middleware can inspect requests and make decisions on the fly without adding much delay, offering flexibility while keeping performance high.
              <br />
              Please find additional information here - <a href="https://vercel.com/docs/pricing/edge-middleware" className="text-blue-600 underline">https://vercel.com/docs/pricing/edge-middleware</a>
            </div>
          </li>
        </ul>
        <br />
        <p className="text-sm text-black"> {/* Changed to text-sm for smaller font */}
          Kind Regards,
          <br />
          Gejsi
        </p>
      </div>

      {/* About Component */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="flex justify-between items-center w-full mb-12">
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
        </main>
      </div>
    </div>
  );
}

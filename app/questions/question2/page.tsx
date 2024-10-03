export default function Email() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-2xl">
        <p className="text-lg">
          Hi [Customer Name],
        </p>
        <br />
        <p className="text-lg">
          Thank you for reaching out!
        </p>
        <br />
        <p className="text-lg">
          Deciding between Edge Functions, Serverless Functions, or Edge Middleware on Vercel really depends on the use case and performance needs of your application. Here&apos;s a breakdown to help you decide:
        </p>
        <br />
        <ol className="list-decimal list-inside text-lg">
          <li>
            Edge Functions are ideal when you need ultra-low latency and want to deliver content closer to your users. Since they run on Vercel’s global Edge Network, they’re great for tasks like dynamic personalization or user authentication that need to be super-fast and close to the end-user. If performance at the edge is critical, Edge Functions are your go-to.
            <br />
            <a href="https://vercel.com/docs/pricing/edge-functions" className="text-blue-600 underline">
              Please find additional information here - https://vercel.com/docs/pricing/edge-functions
            </a>
          </li>
          <br />
          <li>
            Serverless Functions are more suited for backend logic that doesn’t require the super-fast response time of the edge. If you&apos;re handling API requests, heavy computations, or tasks that don&apos;t need to be executed near the user (like connecting to a database), Serverless Functions work well. They’re cost-effective and scale automatically.
            <br />
            <a href="https://vercel.com/docs/pricing/serverless-functions" className="text-blue-600 underline">
              Please find additional information here - https://vercel.com/docs/pricing/serverless-functions
            </a>
          </li>
          <br />
          <li>
            Edge Middleware allows you to modify requests and responses before they reach a function or a page. It’s best used for things like routing, custom authentication, or geolocation-based redirects. Middleware can inspect requests and make decisions on the fly without adding much delay, offering flexibility while keeping performance high.
            <br />
            <a href="https://vercel.com/docs/pricing/edge-middleware" className="text-blue-600 underline">
              Please find additional information here - https://vercel.com/docs/pricing/edge-middleware
            </a>
          </li>
        </ol>
        <br />
        <p className="text-lg">
          Kind Regards,
          <br />
          Gejsi
        </p>
      </div>
    </div>
  );
}

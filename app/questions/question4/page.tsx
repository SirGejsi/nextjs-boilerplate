export default function Email() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-2xl">
        <p className="text-sm text-black">
          Hi [Customer Name],
        </p>
        <br />
        <p className="text-sm text-black">
          Thank you for reaching out!
        </p>
        <br />
        <p className="text-sm text-black">
          Vercel is a powerful platform designed to help developers deploy, manage, and optimize frontend web applications effortlessly. It provides a frontend cloud that offers features like instant deploys, serverless functions, and edge network optimizations. This makes it ideal for projects that need high-performance websites and web apps with minimal setup. Plus, Vercel is the creator of Next.js, a popular React framework, which further enhances its ease of use for modern web development.
        </p>
        <br />
        <p className="text-sm text-black">
          Kind regards,
          <br />
          Gejsi
        </p>
      </div>
    </div>
  );
}

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
          Could you provide a bit more detail about what exactly you'd like to monitor and log within your project? Vercel offers a variety of tools to cover both areas. For logging, integrations like Datadog, New Relic, and Sentry can help track runtime errors, performance issues, and more. In terms of monitoring, Vercel allows you to visualize metrics like traffic and error rates and set up custom metrics using third-party integrations. Let me know what specifics you're looking for, and I can guide you further!
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

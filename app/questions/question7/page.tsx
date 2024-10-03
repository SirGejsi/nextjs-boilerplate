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
          When implementing redirects on Vercel, here are a few best practices to follow:
        </p>
        <br />
        <ul className="list-none pl-5 text-sm text-black">
          <li className="flex mb-2">
            <span className="list-disc mr-2">•</span>
            <div>
              Test thoroughly before deploying redirects to ensure they work as expected.
            </div>
          </li>
          <li className="flex mb-2">
            <span className="list-disc mr-2">•</span>
            <div>
              Use relative paths in the destination field to avoid hardcoding your domain.
            </div>
          </li>
          <li className="flex mb-2">
            <span className="list-disc mr-2">•</span>
            <div>
              For permanent changes, always use permanent redirects (308 or 301).
            </div>
          </li>
          <li className="flex mb-2">
            <span className="list-disc mr-2">•</span>
            <div>
              Be cautious with wildcards to avoid unintended redirects.
            </div>
          </li>
          <li className="flex mb-2">
            <span className="list-disc mr-2">•</span>
            <div>
              Use redirects to enforce HTTPS across your site.
            </div>
          </li>
        </ul>
        <br />
        <p className="text-sm text-black">
          Would be happy to have a call discussing this further or for more detailed guidance, feel free to check out Vercel’s documentation.
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

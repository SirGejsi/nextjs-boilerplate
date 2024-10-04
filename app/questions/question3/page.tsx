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
        <h2 className="text-2xl font-bold mt-12">Question 3</h2>
        <p className="text-lg mt-2 italic">
          A customer has a project on Vercel and they want to know about best practices when it comes to redirects. Write a reply to the customer.
        </p>

        {/* Email Component */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-2xl mt-4">
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
            Would be happy to have a call discussing this further or for more detailed guidance, feel free to check out <a href="https://vercel.com/docs/edge-network/redirects#best-practices-for-implementing-redirects" className="text-blue-500 underline">Vercel’s documentation</a>.
          </p>
          <br />
          <p className="text-sm text-black">
            Kind regards,
            <br />
            Gejsi
          </p>
        </div>
      </main>
    </div>
  );
}

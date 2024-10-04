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
        <h2 className="text-2xl font-bold mt-12">Question 7</h2>
        <p className="text-lg mt-2 italic">
          What resources would you want to prepare to make sure that the CISO has everything they need to succeed as they migrate to the Enterprise version of the platform?
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
            These are the steps I would take to ensure information is relayed to the CISO and to address any of their needs as they migrate to the Enterprise version of Vercel.
          </p>
          <br />
          <ul className="list-none pl-5 text-sm text-black">
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                <b>Presentation Overview</b>: Provide a presentation outlining key Enterprise features and a roadmap of their customer journey with Vercel.
              </div>
            </li>
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                <b>Customer Support & Resources</b>: Explain support from the CSM team and highlight available resources for a smooth transition.
              </div>
            </li>
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                <b>Security Products</b>: Present Vercel’s security offerings (<a href="https://vercel.com/docs/security/secure-compute" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Secure Compute</a>).
              </div>
            </li>
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                <b>Enterprise Features</b>: Clarify new Enterprise-only features and the benefits they bring.
              </div>
            </li>
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                <b>Migration Process</b>: Reassure them the migration is automated, focusing on customer education.
              </div>
            </li>
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                <b>Follow-up Documentation</b>: Send detailed documentation for each product discussed.
              </div>
            </li>
          </ul>
          <br />
          <p className="text-sm text-black">
            Please let us know if you need help with these optimizations!
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

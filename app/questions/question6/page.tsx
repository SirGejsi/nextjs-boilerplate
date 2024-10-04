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
        <h2 className="text-2xl font-bold mt-12">Question 6</h2>
        <p className="text-lg mt-2 italic">
          A customer, new to Next.js and Vercel, asks about a high usage bill regarding fast origin transfer and fast data transfer. What would be the best way to help mitigate this?
        </p>

        {/* Email Component */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-2xl mt-4">
          <p className="text-sm text-black">
            Hi [Customer Name],
          </p>
          <br />
          <p className="text-sm text-black">
            These are the steps I would take to ensure information is relayed to the CISO and to address any of their needs as they migrate to the Enterprise version of Vercel:
          </p>
          <br />
          <ul className="list-none pl-5 text-sm text-black">
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                Presentation Overview: Provide a presentation outlining key Enterprise features and a roadmap of their customer journey with Vercel.
              </div>
            </li>
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                Customer Support & Resources: Explain support from the CSM team and highlight available resources for a smooth transition.
              </div>
            </li>
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                Security Products: Present Vercel’s security offerings (e.g., Secure Compute).
              </div>
            </li>
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                Enterprise Features: Clarify new Enterprise-only features and the benefits they bring.
              </div>
            </li>
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                Migration Process: Reassure them the migration is automated, focusing on customer education.
              </div>
            </li>
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                Follow-up Documentation: Send detailed documentation for each product discussed.
              </div>
            </li>
          </ul>
          <br />
          <p className="text-sm text-black">
            Please let us know if you need help with these steps!
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

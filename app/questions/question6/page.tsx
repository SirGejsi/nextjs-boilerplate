
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
            Thank you for reaching out!
          </p>
          <br />
          <p className="text-sm text-black">
            To better assist you, could you clarify which parts of your application consume the most data or processing?
          </p>
          <br />
          <p className="text-sm text-black">
            In general, here are a few strategies to help mitigate costs related to Fast Data Transfer and Fast Origin Transfer on Vercel:
          </p>
          <br />
          <ul className="list-none pl-5 text-sm text-black">
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                Optimize Image Delivery: Leverage Vercel’s built-in Image Optimization to compress and serve images more efficiently, reducing transfer costs.
              </div>
            </li>
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                Reduce Payload Sizes: For Fast Origin Transfer, ensure server responses only include essential data. Implement caching mechanisms to reduce repeated requests.
              </div>
            </li>
            <li className="flex mb-2">
              <span className="list-disc mr-2">•</span>
              <div>
                Analyse Data Usage: Use Vercel’s monitoring tools to identify high traffic paths or projects. This will help spot and optimize the most resource-consuming endpoints.
              </div>
            </li>
          </ul>
          <br />
          <p className="text-sm text-black">
            For more details, you can review Vercel’s guidance on Fast Data Transfer and Fast Origin Transfer.
          </p>
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

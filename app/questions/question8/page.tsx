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
        <h2 className="text-2xl font-bold mt-12">Question 8</h2>
        <p className="text-lg mt-2 italic">
          How could we improve or alter this familiarization exercise?
        </p>

        {/* Email Component */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-2xl mt-4">
          <p className="text-sm text-black">
            The exercise was effective, especially in focusing on technical aspects over customer interactions, which I appreciated. However, I noticed that you were assessing how I handle customer communication, and I’ve been using my current company’s tone. If Vercel has a different approach, like a more casual or team-based communication style, it would be helpful to understand that. Also, I’d suggest incorporating more real-life customer scenarios. For example, question 7 was great since it encouraged more thoughtful responses compared to those requiring straightforward research.
          </p>
        </div>
      </main>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Add a div for the header section */}
      <header className="flex justify-between items-center w-full">
        <div className="text-xl font-bold">Digital Success Take Home Assignment Example</div>
        <div className="flex items-center">
          {/* Vercel logo */}
          <Image
            className="invert"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Vercel_logo_black.svg"
            alt="Vercel Logo"
            width={100} // Set width as needed
            height={40} // Set height as needed
          />
        </div>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex justify-center">
          <Image
            className="invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          {/* Row for Questions 1 to 4 */}
          <div className="flex gap-4 justify-center">
            <Link href="/questions/question1">
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 w-40">
                Question 1
              </a>
            </Link>
            <Link href="/questions/question2">
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 w-40">
                Question 2
              </a>
            </Link>
            <Link href="/questions/question3">
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 w-40">
                Question 3
              </a>
            </Link>
            <Link href="/questions/question4">
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 w-40">
                Question 4
              </a>
            </Link>
          </div>

          {/* Row for Questions 5 to 8 */}
          <div className="flex gap-4 justify-center">
            <Link href="/questions/question5">
              <a className="rounded-full border bo

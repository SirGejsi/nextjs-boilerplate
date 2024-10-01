import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 w-40">
                Question 5
              </a>
            </Link>
            <Link href="/questions/question6">
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 w-40">
                Question 6
              </a>
            </Link>
            <Link href="/questions/question7">
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 w-40">
                Question 7
              </a>
            </Link>
            <Link href="/questions/question8">
              <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-12 w-40">
                Question 8
              </a>
            </Link>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/gejsi-halili-a4aa78221/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/LinkedIn_Logo_2013.svg"
            alt="IN icon"
            width={16}
            height={16}
          />
          <span className="sr-only">LinkedIn</span> {/* Screen reader text for accessibility */}
        </a>
      </footer>
    </div>
  );
}

import {
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiJquery,
  SiReact,
} from "react-icons/si";

import Image from "next/image";

const iconsAnimation: string =
  "transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 active:scale-95";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col-reverse md:flex-row items-center p-4 md:p-8 shadow-[0_0_20px_1px_#ffffff] rounded-3xl">
        <div className="w-full md:w-3/5 flex flex-col gap-6 justify-center p-2 md:px-8">
          {/* INTRO */}
          <div className="w-full">
            <h2 className="text-3xl font-semibold text-green-500 mb-1">
              Hi, I am Prasan
            </h2>
            <div className="flex flex-col gap-2.5 text-white text-lg leading-relaxed">
              <p>
                I'm a Computer Engineering graduate from Tribhuvan University. I
                enjoy building simple and efficient websites and web apps. I
                focus on making things clean, fast, and easy for users.
              </p>
              <p>
                Outside of coding, I love travelling and going on adventures.
              </p>
            </div>
          </div>

          {/* SKILLS */}
          <div className="w-full">
            <h2 className="text-3xl font-semibold text-green-500 mb-3">
              Skills
            </h2>
            <div className="text-white text-4xl flex flex-wrap gap-5">
              <a
                href="https://en.wikipedia.org/wiki/HTML5"
                target="_blank"
                title="HTML5"
                className={`${iconsAnimation}  hover:drop-shadow-[0_0_12px_#e34c26]`}
              >
                <SiHtml5 />
              </a>
              <a
                href="https://en.wikipedia.org/wiki/Tailwind_CSS"
                target="_blank"
                title="Tailwind CSS"
                className={`${iconsAnimation}  hover:drop-shadow-[0_0_12px_#38bdf8]`}
              >
                <SiTailwindcss />
              </a>
              <a
                href="https://en.wikipedia.org/wiki/JavaScript"
                target="_blank"
                title="JavaScript"
                className={`${iconsAnimation}  hover:drop-shadow-[0_0_10px_#f0db4f]`}
              >
                <SiJavascript />
              </a>
              <a
                href="https://en.wikipedia.org/wiki/JQuery"
                target="_blank"
                title="jQuery"
                className={`${iconsAnimation}  hover:drop-shadow-[0_0_12px_#0769AD]`}
              >
                <SiJquery />
              </a>
              <a
                href="https://en.wikipedia.org/wiki/React_(software)"
                target="_blank"
                title="ReactJS"
                className={`${iconsAnimation}  hover:drop-shadow-[0_0_12px_#61DBFB]`}
              >
                <SiReact />
              </a>
            </div>
          </div>

          {/* DOWNLOAD BUTTON */}
          <div className="w-full flex justify-center md:justify-start">
            <a
              href="/Resume-PrasanKC.pdf"
              className="group w-fit flex gap-2 items-center bg-transparent border-green-600 border-2 p-3 text-xl text-green-600 rounded-lg hover:bg-green-600 hover:text-white mt-2"
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600 group-hover:text-white"
                fill="none"
                viewBox="0 0 21 21"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download My Resume
            </a>
          </div>
        </div>

        <div className="sm:w-full md:w-2/5 flex flex-col items-center min-w-fit">
          <Image
            src="/Picsart_23-11-26_11-20-27-323.jpg"
            alt="Prasan KC image"
            width={400}
            height={400}
            className="rounded-4xl object-contain w-84 md:w-120 mb-6 transition-all hover:shadow-[0_0_20px_1px_#39ff14] hover:scale-102"
          />
        </div>
      </main>
    </>
  );
}

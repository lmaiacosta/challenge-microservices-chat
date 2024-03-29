"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-between p-3 font-mono text-sm md:p-2">
      <div className="z-10 w-full max-w-6xl items-center justify-between lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl md:pb-6 md:pt-8 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200  lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
          <p className="pt-4">Do your </p>
          <Link
            className="blue m-2 rounded-lg bg-blue-600 p-2 text-white"
            href="/auth"
          >
            {" "}
            Login&nbsp;{" "}
          </Link>
          <p className="pt-4">and talk!</p>
        </div>
        <Link href="/">
          <h1 className="size	 pt-3 text-center  sm:pt-0">
            <p className="text-lg font-extrabold underline">
              Chat Microservice{" "}
            </p>
            {/* <br /> */}
            <span className="text-base">
              Docker Next.js Nest.js Redis MySQL Kafka{" "}
            </span>
          </h1>
        </Link>
        <div className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none dark:from-black dark:via-black">
          {/* By Leonardo Maia Costa */}

          <div className="flex flex-row justify-center gap-2">
            <Link
              className="pointer-events-none flex place-items-center items-center gap-2 space-x-2 rounded bg-blue-600  p-3 font-semibold text-white lg:pointer-events-auto "
              href="https://www.linkedin.com/in/leonardo-maia-costa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <svg
                className="h-8 "
                fill="currentColor"
                role="img"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path>
                </g>
              </svg> */}
            </Link>

            <Link
              className="pointer-events-none flex place-items-center items-center gap-2 space-x-2 rounded bg-gray-700 p-3 font-semibold text-white lg:pointer-events-auto "
              href="https://github.com/lmaiacosta"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="h-8 "
                fill="currentColor"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                    fill="currentColor"
                  />
                </g>
              </svg> */}
            </Link>

            <Link
              className="pointer-events-none flex place-items-center items-center gap-2 space-x-2 rounded p-2 font-semibold text-white lg:pointer-events-auto lg:p-0"
              href="https://github.com/lmaiacosta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className=" relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/logo-h.png"
                alt="Next.js Logo"
                width={90}
                height={50}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

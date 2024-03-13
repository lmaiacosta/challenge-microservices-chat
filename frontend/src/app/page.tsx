import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-mono text-sm ">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <p className="pt-4">Get started by </p>
          <button className="bg-blue-600 text-white blue p-2 m-2 rounded-lg ">
            {" "}
            Login&nbsp;{" "}
          </button>
        </div>
        <h1 className="font-extrabold text-center">
          Chat Microservice <br /> Docker Next.js Nest.js Redis MySQL Kafka
        </h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/lmaiacosta"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Leonardo Maia Costa
            <Image
              src="https://avatars.githubusercontent.com/lmaiacosta"
              alt="Leonardo Maia Costa - GitHub Profile"
              className="dark:invert  rounded-full "
              loading="lazy"
              width={80}
              height={30}
              priority
            />
          </a>
        </div>
      </div>

      <div className="text-blue">
        <h2 className="font-bold mt-6">
          Open Source code to create a full chat with diferent tecnologies on a
          microservice structure.
        </h2>
        <div className="font-bold p-5">
          <h3 className="p-6 ">Tecnologies:</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
              <h4 className="border-blue-700 rounded-lg border-2">Frontend</h4>
              <ul className="underline">
                <p>React</p>
                <p>Next.js</p>
                <p>Tailwind</p>
                <p>Prettier</p>
                <p>Eslint</p>
              </ul>
            </div>

            <div className="text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
              <h4>Backend</h4>
              <ul className="underline">
                <p>Node</p>
                <p>Nest.js</p>
                <p>Socket</p>
                <p>Apache Kafka</p>
                <p>Nginx</p>
                <p>Mysql</p>
              </ul>
            </div>
            <div className="text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
              <h4>Infrastructure and Authentication</h4>
              <ul className="underline">
                <p>Docker</p>
                <p>Docker Compose</p>
                <p>Digital Ocean</p>
                <p>Keycloack</p>
              </ul>
            </div>
          </div>
        </div>
        {/* <div>
          <p>
            Posted on&nbsp;
            <time dateTime="2024-05-13 19:00">2024-05-13 19:00</time>
            by Staff.
          </p>
        </div> */}
      </div>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}

      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://fpinfo.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className=" relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo-full.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </a>
      {/* </div> */}

      <div className="mb-32grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        https://www.linkedin.com/in/leonardo-maia-costa/
      </div>
    </main>
  );
}

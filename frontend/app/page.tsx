export default function Home() {
  return (
    <>
      <div className="text-blue">
        <h2 className="mt-6 font-bold">
          Open Source code to create a full chat with diferent tecnologies on a
          microservice structure.
        </h2>
        <div className="p-5 font-bold">
          <h3 className="p-6 ">Tecnologies:</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
              <h4 className="rounded-lg border-2 border-blue-700">Frontend</h4>
              <ul className="underline">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>Prettier</li>
                <li>Eslint</li>
              </ul>
            </div>

            <div className="text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
              <h4>Backend</h4>
              <ul className="underline">
                <li>Node</li>
                <li>Nest.js</li>
                <li>Socket</li>
                <li>Apache Kafka</li>
                <li>Nginx</li>
                <li>Mysql</li>
              </ul>
            </div>
            <div className="text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
              <h4>Infrastructure and Authentication</h4>
              <ul className="underline">
                <li>Docker</li>
                <li>Docker Compose</li>
                <li>Digital Ocean</li>
                <li>Keycloack</li>7 <li>Next Auth</li>
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
        {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"> */}
      </div>
    </>
  );
}

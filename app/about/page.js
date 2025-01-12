export default function About() {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col">
            <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
            <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-8">
              A brief introduction about myself.
            </p>
            <div className="text-gray-600 dark:text-gray-400">
              <p className="mb-4">
                I am a passionate developer with a keen interest in building
                innovative solutions.
              </p>
              <p className="mb-4">
                My skills include web development, mobile development, and
                more.
              </p>
              <p>
                I am always eager to learn new technologies and expand my
                knowledge.
              </p>
            </div>
          </div>
        </main>
      );
    }

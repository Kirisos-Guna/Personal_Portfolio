export default function Contact() {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col">
            <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>
            <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-8">
              Feel free to reach out to me.
            </p>
            <div className="text-gray-600 dark:text-gray-400">
              <p className="mb-4">
                You can contact me via email at: <a href="mailto:test@example.com" className="text-blue-500">test@example.com</a>
              </p>
              <p className="mb-4">
                You can also find me on <a href="https://www.linkedin.com/" className="text-blue-500">LinkedIn</a>
              </p>
              <p>
                I'm looking forward to hearing from you!
              </p>
            </div>
          </div>
        </main>
      );
    }

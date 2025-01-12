import Image from 'next/image'

    export default function Home() {
      return (
        <main className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gradientColor-from to-gradientColor-to dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Welcome to My Portfolio</h1>
              <p className="text-lg text-gray-200 dark:text-gray-400">
                A showcase of my work and experience.
              </p>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">My Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-2">E-commerce Website</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A fully functional e-commerce platform with user authentication, product listings, and shopping cart functionality.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-2">Task Management App</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A task management application that allows users to create, organize, and track their tasks with due dates and priorities.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-2">Personal Blog</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A personal blog where I share my thoughts, experiences, and insights on various topics.
                  </p>
                </div>
                 <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-800 dark:text-primary-200 mb-2">Weather App</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A weather application that fetches real-time weather data based on user location.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">About Me</h2>
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  I am a passionate developer with a keen interest in building
                  innovative solutions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  My skills include web development, mobile development, and
                  more.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  I am always eager to learn new technologies and expand my
                  knowledge.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Me</h2>
              <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You can contact me via email at: <a href="mailto:test@example.com" className="text-primary-600 dark:text-primary-400 hover:underline">test@example.com</a>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You can also find me on <a href="https://www.linkedin.com/" className="text-primary-600 dark:text-primary-400 hover:underline">LinkedIn</a>
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm looking forward to hearing from you!
                </p>
              </div>
            </section>
          </div>
        </main>
      )
    }

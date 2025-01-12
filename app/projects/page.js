export default function Projects() {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col">
            <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
            <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-8">
              Here are some of the projects I've worked on.
            </p>
            <ul className="list-disc list-inside">
              <li>
                <h2 className="text-2xl font-semibold mb-2">E-commerce Website</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  A fully functional e-commerce platform with user authentication, product listings, and shopping cart functionality.
                </p>
              </li>
              <li>
                <h2 className="text-2xl font-semibold mb-2">Task Management App</h2>
                 <p className="text-gray-600 dark:text-gray-400">
                    A task management application that allows users to create, organize, and track their tasks with due dates and priorities.
                 </p>
              </li>
              <li>
                <h2 className="text-2xl font-semibold mb-2">Personal Blog</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  A personal blog where I share my thoughts, experiences, and insights on various topics.
                </p>
              </li>
               <li>
                <h2 className="text-2xl font-semibold mb-2">Weather App</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  A weather application that fetches real-time weather data based on user location.
                </p>
              </li>
            </ul>
          </div>
        </main>
      );
    }

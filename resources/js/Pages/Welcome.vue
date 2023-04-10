<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-white shadow-lg">
            <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex px-2 lg:px-0">
                        <div class="flex-shrink-0 flex items-center">
                            <img
                                class="h-8 w-auto"
                                src="/logo.svg"
                                alt="Logo"
                            />
                        </div>
                        <div class="hidden lg:ml-6 lg:flex lg:items-center">
                            <a
                                href="#"
                                class="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                                >Home</a
                            >
                            <a
                                href="#"
                                class="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                                >About</a
                            >
                            <a
                                href="#"
                                class="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                                >Contact</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold leading-tight text-gray-900">
                    Hello, I'm Strider White
                </h1>
                <h2
                    class="text-xl font-semibold leading-tight text-gray-800 mt-2"
                >
                    Fullstack Web Developer
                </h2>
                <h3
                    class="text-xl font-semibold leading-tight text-gray-700 mt-2"
                >
                    Specializing in Laravel, Vue, Mysql
                </h3>
                <p class="text-gray-700 mt-4">
                    With over 5 years of experience
                </p>
            </div>
        </header>
        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <p class="text-gray-800 text-xl mb-4">Featured Work</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img
                        class="w-full h-48 object-cover"
                        src="https://via.placeholder.com/640x360.png?text=Project+1"
                        alt="Project 1"
                    />
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Project 1
                        </h3>
                        <p class="mt-2 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus imperdiet metus sit amet lorem
                            efficitur, ut ultricies metus luctus.
                        </p>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img
                        class="w-full h-48 object-cover"
                        src="https://via.placeholder.com/640x360.png?text=Project+2"
                        alt="Project 2"
                    />
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Project 2
                        </h3>
                        <p class="mt-2 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus imperdiet metus sit amet lorem
                            efficitur, ut ultricies metus luctus.
                        </p>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <img
                        class="w-full h-48 object-cover"
                        src="https://via.placeholder.com/640x360.png?text=Project+3"
                        alt="Project 3"
                    />
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Project 3
                        </h3>
                        <p class="mt-2 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus imperdiet metus sit amet lorem
                            efficitur, ut ultricies metus luctus.
                        </p>
                    </div>
                </div>
            </div>
        </main>
        <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="mb-4">
            <h3 class="text-lg font-medium">Contact</h3>
            <p class="mt-2 text-gray-400">123 Main St.</p>
            <p class="text-gray-400">New York, NY 10001</p>
            <p class="mt-2 text-gray-400">Email: strider.white@example.com</p>
            <p class="text-gray-400">Phone: 555-555-5555</p>
          </div>
          <div class="mb-4">
            <h3 class="text-lg font-medium">Services</h3>
            <ul class="mt-2">
              <li><a href="#" class="text-gray-400 hover:text-gray-300">Web Development</a></li>
              <li><a href="#" class="text-gray-400 hover:text-gray-300">Mobile Development</a></li>
              <li><a href="#" class="text-gray-400 hover:text-gray-300">Database Design</a></li>
              <li><a href="#" class="text-gray-400 hover:text-gray-300">API Development</a></li>
            </ul>
          </div>
          <div class="mb-4">
            <h3 class="text-lg font-medium">About</h3>
            <ul class="mt-2">
              <li><a href="#" class="text-gray-400 hover:text-gray-300">Company History</a></li>
              <li><a href="#" class="text-gray-400 hover:text-gray-300">Meet the Team</a></li>
              <li><a href="#" class="text-gray-400 hover:text-gray-300">Partners</a></li>
            </ul>
          </div>
          <div class="mb-4">
            <h3 class="text-lg font-medium">Connect</h3>
            <div class="mt-2 flex">
              <a href="#" class="text-gray-400 hover:text-gray-300 mr-4"><i class="fab fa-twitter"></i></a>
              <a href="#" class="text-gray-400 hover:text-gray-300 mr-4"><i class="fab fa-facebook"></i></a>
              <a href="#" class="text-gray-400 hover:text-gray-300 mr-4"><i class="fab fa-instagram"></i></a>
              <a href="#" class="text-gray-400 hover:text-gray-300 mr-4"><i class="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <p class="mt-8 text-center text-gray-400">&copy; 2023 Strider White. All rights reserved.</p>
      </div>
    </footer>
    </div>
</template>

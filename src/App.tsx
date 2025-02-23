import React from 'react';
import { Github, Mail, Terminal, Code2, BookOpen, Star, GitFork } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">0nsec</h1>
              <p className="text-xl mb-8">Security Researcher & Developer</p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/0nsec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-opacity-90 transition"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-2 border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-800 transition"
                >
                  <Mail size={20} />
                  Contact
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&q=80"
                alt="Security"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Terminal className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security Research</h3>
              <p className="text-gray-600">Specialized in vulnerability assessment and penetration testing</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Code2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Full-stack development with modern technologies</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Open Source</h3>
              <p className="text-gray-600">Active contributor to security tools and libraries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">Security Tool</h3>
                <div className="flex gap-2">
                  <span className="flex items-center text-gray-600">
                    <Star className="w-4 h-4 mr-1" />
                    42
                  </span>
                  <span className="flex items-center text-gray-600">
                    <GitFork className="w-4 h-4 mr-1" />
                    12
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced security analysis tool for penetration testing
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Security</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">Vulnerability Scanner</h3>
                <div className="flex gap-2">
                  <span className="flex items-center text-gray-600">
                    <Star className="w-4 h-4 mr-1" />
                    38
                  </span>
                  <span className="flex items-center text-gray-600">
                    <GitFork className="w-4 h-4 mr-1" />
                    8
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Automated vulnerability assessment framework
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Go</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>© 2024 0nsec. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/0nsec"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="hover:text-blue-400 transition"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
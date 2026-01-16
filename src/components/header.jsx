import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoSunny, IoMoon } from 'react-icons/io5';

function Header({ darkMode, setDarkMode, sidebarOpen, setSidebarOpen }) {
    return (
        <div className="flex items-center justify-end mb-8">
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors mr-auto ${darkMode
                    ? 'hover:bg-gray-700 text-white'
                    : 'hover:bg-gray-100 text-gray-800'
                    }`}
                aria-label="Toggle sidebar"
            >
                <HiMenu className="text-2xl" />
            </button>

            <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all ${darkMode
                    ? 'hover:bg-gray-700 text-yellow-400'
                    : 'hover:bg-gray-100 text-gray-600'
                    }`}
                aria-label="Toggle theme"
            >
                {darkMode ? (
                    <IoSunny className="text-2xl" />
                ) : (
                    <IoMoon className="text-2xl" />
                )}
            </button>
        </div>
    );
}

export default Header;
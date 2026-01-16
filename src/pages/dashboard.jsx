import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Footer from '../components/footer';
import TaskList from '../components/tasklist';
import useGreeting from '../hooks/greetings';

function DashboardPage({ tasks, setTasks, darkMode, setDarkMode, onNavigate, sidebarOpen, setSidebarOpen }) {
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');
    const greeting = useGreeting();

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([
                ...tasks,
                { id: Date.now(), text: newTask, completed: false }
            ]);
            setNewTask('');
        }
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const updateTask = (id, newText) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, text: newText } : task
            )
        );
    };

    const getFilteredTasks = () => {
        if (filter === 'active') return tasks.filter((t) => !t.completed);
        if (filter === 'completed') return tasks.filter((t) => t.completed);
        return tasks;
    };

    return (
        <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className="flex flex-1">
                <Sidebar
                    darkMode={darkMode}
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    currentPage="dashboard"
                    onNavigate={(page) => {
                        // Only close sidebar on mobile (screen width < 1024px)
                        if (window.innerWidth < 1024) {
                            setSidebarOpen(false);
                        }
                        onNavigate(page);
                    }}
                />

                <div className="flex-1 flex flex-col">
                    <div className="flex-1 p-4 lg:p-8">
                        <div className="max-w-5xl mx-auto">
                            <Header
                                darkMode={darkMode}
                                setDarkMode={setDarkMode}
                                sidebarOpen={sidebarOpen}
                                setSidebarOpen={setSidebarOpen}
                            />

                            <h1
                                className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12"
                                style={{ color: darkMode ? '#FFFFFF' : '#1F41BB' }}
                            >
                                {greeting}
                            </h1>

                            <div className="max-w-3xl mx-auto">
                                <h2
                                    className={`text-2xl lg:text-3xl font-bold text-center mb-6 lg:mb-8 ${darkMode ? 'text-white' : 'text-gray-800'
                                        }`}
                                >
                                    My Tasks
                                </h2>

                                {/* Add Task Input */}
                                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                    <input
                                        type="text"
                                        placeholder="Type your task here.."
                                        value={newTask}
                                        onChange={(e) => setNewTask(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && addTask()}
                                        className={`flex-1 px-4 py-3 rounded-lg ${darkMode
                                            ? 'bg-gray-800 text-white placeholder-gray-400 border border-gray-700'
                                            : 'bg-white text-gray-900 border border-gray-200'
                                            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                    <button
                                        onClick={addTask}
                                        className="px-6 py-3 text-white font-semibold rounded-lg transition-all hover:opacity-90"
                                        style={{ backgroundColor: '#1F41BB' }}
                                    >
                                        + Add
                                    </button>
                                </div>

                                {/* Filter Tabs */}
                                <div className="flex gap-4 mb-6 text-sm lg:text-base">
                                    <button
                                        onClick={() => setFilter('all')}
                                        className={`transition-colors ${filter === 'all'
                                            ? darkMode
                                                ? 'text-blue-400 font-semibold'
                                                : 'text-blue-600 font-semibold'
                                            : darkMode
                                                ? 'text-gray-400 hover:text-gray-300'
                                                : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        All
                                    </button>
                                    <span className={darkMode ? 'text-gray-600' : 'text-gray-300'}>
                                        |
                                    </span>
                                    <button
                                        onClick={() => setFilter('active')}
                                        className={`transition-colors ${filter === 'active'
                                            ? darkMode
                                                ? 'text-blue-400 font-semibold'
                                                : 'text-blue-600 font-semibold'
                                            : darkMode
                                                ? 'text-gray-400 hover:text-gray-300'
                                                : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        Active
                                    </button>
                                    <span className={darkMode ? 'text-gray-600' : 'text-gray-300'}>
                                        |
                                    </span>
                                    <button
                                        onClick={() => setFilter('completed')}
                                        className={`transition-colors ${filter === 'completed'
                                            ? darkMode
                                                ? 'text-blue-400 font-semibold'
                                                : 'text-blue-600 font-semibold'
                                            : darkMode
                                                ? 'text-gray-400 hover:text-gray-300'
                                                : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        Completed
                                    </button>
                                </div>

                                <TaskList
                                    tasks={getFilteredTasks()}
                                    darkMode={darkMode}
                                    onToggle={toggleTask}
                                    onDelete={deleteTask}
                                    onUpdate={updateTask}
                                />
                            </div>
                        </div>
                    </div>

                    <Footer darkMode={darkMode} />
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
import React, { useState } from 'react';
import LoginPage from './pages/loginpage';
import SignupPage from './pages/signuppage';
import DashboardPage from './pages/dashboard';
import SettingsPage from './pages/settings';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Prototyping To-Do List', completed: true }
  ]);
  const [darkMode, setDarkMode] = useState(false);
  // Lift sidebarOpen state to App level to persist across page navigation
  const [sidebarOpen, setSidebarOpen] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);

  const pageProps = {
    onNavigate: setCurrentPage,
    tasks,
    setTasks,
    darkMode,
    setDarkMode,
    sidebarOpen,
    setSidebarOpen
  };

  return (
    <>
      {currentPage === 'login' && <LoginPage {...pageProps} />}
      {currentPage === 'signup' && <SignupPage {...pageProps} />}
      {currentPage === 'dashboard' && <DashboardPage {...pageProps} />}
      {currentPage === 'settings' && <SettingsPage {...pageProps} />}
    </>
  );
}

export default App;
import React from 'react';
import NotificationBell from './notificationbell';

function Header({ darkMode, currentUser }) {
    return (
        <div className="flex items-center justify-end gap-3 sm:gap-4 mb-8">
            <NotificationBell darkMode={darkMode} currentUser={currentUser} />
        </div>
    );
}

export default Header;
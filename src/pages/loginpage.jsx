import React, { useState } from 'react';
import Footer from "../components/footer";

function LoginPage({ onNavigate }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md flex-grow flex flex-col justify-center">
                {/* App Title */}
                <h1 className="text-5xl font-bold mb-8" style={{ color: '#1F41BB' }}>
                    ToDo
                </h1>

                {/* Login Card */}
                <div className="bg-white rounded-3xl shadow-lg p-10">
                    {/* Header */}
                    <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#1F41BB' }}>
                        Login here
                    </h2>
                    <p className="text-center text-gray-700 font-semibold mb-12 leading-relaxed">
                        Welcome back you've
                        <br />
                        been missed!
                    </p>

                    {/* Form Fields */}
                    <div className="px-4">
                        <div className="mb-12">
                            <input
                                type="email"
                                placeholder="sample@mail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-6 py-4 mb-6 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base block"
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-6 py-4 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base block"
                            />
                        </div>

                        {/* Buttons */}
                        <button
                            onClick={() => onNavigate('dashboard')}
                            className="w-full py-4 text-white text-base font-semibold rounded-xl mb-6 hover:opacity-90 transition-opacity shadow-md"
                            style={{ backgroundColor: '#1F41BB' }}
                        >
                            Log in
                        </button>

                        <button
                            onClick={() => onNavigate('signup')}
                            className="w-full text-gray-700 text-base font-semibold hover:text-blue-600 transition-colors py-2"
                        >
                            Create new account
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer at bottom */}
            <Footer />
        </div>
    );
}

export default LoginPage;
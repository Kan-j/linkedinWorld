import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your password reset logic here (e.g., sending an email with a reset link)
    // Update the message state with the result of the password reset request.
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Forgot Password</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Email"
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Reset Password
          </button>
        </form>
        {message && <div className="mt-4 text-center text-blue-500">{message}</div>}
      </div>
    </div>
  );
};

export default ForgotPassword;

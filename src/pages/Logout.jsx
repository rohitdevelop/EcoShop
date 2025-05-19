import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg max-w-4xl w-full">
        {/* Left Image / Info */}
        <div className="hidden md:flex md:flex-col justify-between bg-blue-600 text-white p-8 w-full md:w-1/2">
          <div>
            <h2 className="text-3xl font-bold mb-4">Login</h2>
            <p className="text-lg">
              Get access to your Orders, Wishlist and Recommendations.
            </p>
          </div>
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740"
            alt="Login Visual"
            className="mt-8 w-full"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Login to your account</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Email / Mobile Number</label>
              <input
                type="text"
                placeholder="Enter your email or phone"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition-all"
            >
              Login
            </button>

            <p className="text-sm text-gray-600 mt-2 text-center">
              By continuing, you agree to Flipkart's <span className="text-green-600">Terms of Use</span> and <span className="text-blue-500">Privacy Policy</span>.
            </p>

            <div className="text-center mt-4">
              <span className="text-gray-700">New to Flipkart? </span>
              <a href="#" className="text-bgreenlue-600 font-semibold">Create an account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

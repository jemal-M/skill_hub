import HomeLayout from '@/components/Layout/HomeLayout'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <HomeLayout>
      <div className="grid grid-cols-12 min-h-screen items-center">
        {/* Image Column */}
        <div className="col-span-12 md:col-span-6 hidden md:block">
          <img src="/images/register.png" alt="Login Illustration" className="w-full h-full object-cover" />
        </div>

        {/* Form Column */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
            {/* Form Content */}
            <form>
                      {/* Email Input */}
                      <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email Input */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"
              >
                register
              </button>
            </form>
            <p>Already have an Acount?<span><Link href='/auth/login'>Sign In</Link></span></p>

          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Register

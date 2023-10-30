import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { FaLinkedin } from 'react-icons/fa';

const SignInSchema = yup.object().shape({
  email: yup.string().required('Email or Phone is required').email('Invalid email or phone'),
  password: yup.string().required('Password is required'),
});

export default function SignIn() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(SignInSchema)
  });

  const onSubmit = (data) => {
    // Handle the form submission, e.g., send data to your backend.
    console.log(data);
    reset();
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <FaLinkedin className="text-5xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">Sign in to LinkedWorld</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold">Email or Phone</label>
            <input
              type="text"
              {...register("email")}
              className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Email or Phone"
            />
            {errors?.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full py-2 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Password"
            />
            {errors?.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
        </div>
      </div>
    </div>
  )
}




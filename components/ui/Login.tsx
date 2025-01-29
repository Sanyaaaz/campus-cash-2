"use client"
import type React from "react"
import { useState } from "react"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "./animated-modal"
import { motion } from "framer-motion"
import Link from "next/link";

export default function AnimatedAuthModal() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLogin) {
      console.log("Login attempted with:", { email, password })
    } else {
      console.log("Sign up attempted with:", { name, email, password })
    }
    // Reset fields after submission
    setEmail("")
    setPassword("")
    setName("")
  }

  const handleGoogleAuth = () => {
    console.log(isLogin ? "Google Sign-In attempted" : "Google Sign-Up attempted")
  }

  const toggleAuthMode = () => {
    setIsLogin(!isLogin)
    setEmail("")
    setPassword("")
    setName("")
  }

  return (
    <div className="py-4 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            {isLogin ? "Login" : "Sign Up"}
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🔐
          </div>
        </ModalTrigger>
        <ModalBody className="bg-black">
          <ModalContent className="bg-black ">
            <h4 className="text-lg md:text-2xl text-neutral-100 font-bold text-center mb-8">
              {isLogin ? "Welcome Back! 👋" : "Create an Account 🚀"}
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                    className="mt-1 block w-full px-3 py-2 bg-neutral-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[#c1ff72] focus:border-[#c1ff72] text-white"
                  />
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 text-white bg-neutral-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[#c1ff72] focus:border-[#c1ff72] "
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 text-white bg-neutral-800 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-[#c1ff72] focus:border-[#c1ff72]"
                />
              </div>
              
              <Link href={"/dashboard"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-[#c1ff72] hover:bg-[#c1ff72] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                {isLogin ? "Sign in" : "Sign up"}
              </motion.button>
              </Link>
            </form>
            <div className="mt-4 flex items-center justify-between">
              <hr className="w-full border-t border-gray-600" />
              <span className="px-2 text-gray-400">Or</span>
              <hr className="w-full border-t border-gray-600" />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoogleAuth}
              className="mt-4 w-full flex items-center justify-center px-4 py-2 border text-white border-gray-600 rounded-md shadow-sm text-sm font-medium  dark:text-gray-200 bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c1ff72]"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
                <path fill="none" d="M1 1h22v22H1z" />
              </svg>
              {isLogin ? "Sign in with Google" : "Sign up with Google"}
            </motion.button>
            {isLogin && (
              <div className="mt-4 text-center text-sm">
                <a href="#" className="font-medium text-[#c1ff72] hover:text-[#c1ff72]">
                  Forgot your password?
                </a>
              </div>
            )}
          </ModalContent>
          <ModalFooter className="justify-center bg-black">
            <p className="text-sm text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button onClick={toggleAuthMode} className="font-medium text-[#c1ff72] hover:text-[#c1ff72]">
                {isLogin ? "Sign up" : "Log in"}
              </button>
            </p>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  )
}

"use client";
import { useState, FormEvent, useEffect, useRef } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Errors {
  email?: string;
  password?: string;
  general?: string;
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const clearForm = () => {
      setEmail("");
      setPassword("");
      setErrors({});
      setIsLoggedIn(false);
      setLoading(false);

      if (emailRef.current) {
        emailRef.current.value = "";
      }
      if (passwordRef.current) {
        passwordRef.current.value = "";
      }
      if (formRef.current) {
        formRef.current.reset();
      }
    };

    clearForm();

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        clearForm();
      }
    };

    const handleFocus = () => {
      clearForm();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", handleFocus);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors({});
    const newErrors: Errors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      window.setTimeout(() => {
        router.push("/Loginsucces");
        setLoading(false);
      }, 500);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome to MDM Security
        </h2>

        <button className="flex items-center justify-center w-full gap-2 py-2 text-black border rounded-md hover:bg-gray-100">
          <FcGoogle className="text-xl" />
          <span>Login with Google</span>
        </button>

        <div className="relative text-center">
          <hr className="my-4 border-gray-300" />
          <span className="absolute px-2 text-gray-500 -translate-x-1/2 -translate-y-1/2 bg-white top-1/2 left-1/2">
            OR
          </span>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4"
          autoComplete="off"
        >
          {errors.general && (
            <p className="text-sm text-center text-red-500">{errors.general}</p>
          )}

          <div>
            <div className="relative">
              <span className="absolute inset-y-0 flex items-center text-gray-400 left-3">
                <FaEnvelope />
              </span>
              <input
                ref={emailRef}
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                autoComplete="new-email"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                name="email-new"
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-black placeholder-gray-500 bg-white ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <span className="absolute inset-y-0 flex items-center text-gray-400 left-3">
                <FaLock />
              </span>
              <input
                ref={passwordRef}
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Password"
                autoComplete="new-password"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                name="password-new"
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-black placeholder-gray-500 bg-white ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div className="text-right">
            <Link
              href="/Forget"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className={`w-full py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="py-2 text-center bg-white border-gray-300">
          <p className="text-black text-md">
            Don't have an account?{" "}
            <Link href="/Signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
          
        </div>
      </div>
    </div>
  );
}

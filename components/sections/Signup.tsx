"use client";
import { useState, FormEvent, useRef } from "react";
import { FaEnvelope, FaLock, FaUser, FaPhone } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface Errors {
  fullName?: string;
  email?: string;
  password?: string;
  contactNumber?: string;
}
const SignUpPage: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [projectSize, setProjectSize] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [apiError, setApiError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const contactNumberRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setApiError("");
    const newErrors: Errors = {};
    if (!fullName.trim()) newErrors.fullName = "Please enter your full name";
    if (!email.trim()) newErrors.email = "Please enter a valid email";
    if (!password.trim()) newErrors.password = "Please enter a password";
    if (!contactNumber.trim())
      newErrors.contactNumber = "Please enter your contact number";
    // Contact number validation (basic Indian number format)
    if (
      contactNumber &&
      !/^[6-9]\d{9}$/.test(contactNumber.replace(/\s+/g, ""))
    ) {
      newErrors.contactNumber = "Please enter a valid 10-digit mobile number";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const requestBody = {
          full_name: fullName,
          email,
          password,
          contact_num: contactNumber,
          project_name: projectName,
          project_size: projectSize,
        };
        const res = await fetch(
          "https://mdm-security-backend-v1-498807929429.us-central1.run.app/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          }
        );
        let data;
        try {
          data = await res.json();
        } catch (jsonError) {
          setApiError("Invalid response from server.");
          return;
        }
        if (res.ok) {
          // Remove all state resets and formRef.current.reset()
          // Redirect to login page after successful signup
          router.push("/Login");
        } else {
          console.error("Signup error response:", data);
          setApiError(
            data.message ||
              data.error ||
              JSON.stringify(data) ||
              "Signup failed. Please try again."
          );
        }
      } catch (error) {
        setApiError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleContactNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Remove any non-digit characters
    const value = e.target.value.replace(/\D/g, "");
    // Limit to 10 digits
    if (value.length <= 10) {
      setContactNumber(value);
    }
  };
  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };
  const handleProjectSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProjectSize(e.target.value);
  };
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 bg-gray-100">
      <div className="bg-white rounded-xl shadow-xl w-[450px] p-8 space-y-6 mx-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Create an Account
        </h2>
        <button className="flex items-center justify-center w-full gap-2 py-2 text-black border rounded-md hover:bg-gray-100">
          <FcGoogle className="text-xl" />
          <span>Sign up with Google</span>
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
          className="space-y-3"
          autoComplete="off"
        >
          {apiError && (
            <p className="text-sm text-red-500 text-center">{apiError}</p>
          )}
          <div className="space-y-1">
            <div className="relative">
              <span className="absolute inset-y-0 flex items-center text-gray-400 left-3">
                <FaUser />
              </span>
              <input
                ref={fullNameRef}
                type="text"
                value={fullName}
                onChange={handleFullNameChange}
                placeholder="Full Name"
                autoComplete="name"
                autoCorrect="off"
                spellCheck="false"
                name="fullname-signup"
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-black placeholder-gray-500 bg-white ${
                  errors.fullName
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>
          <div className="space-y-1">
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
                spellCheck="false"
                name="email-signup-new"
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
          <div className="space-y-1">
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
                spellCheck="false"
                name="password-signup-new"
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
          <div className="space-y-1">
            <div className="relative">
              <span className="absolute inset-y-0 flex items-center text-gray-400 left-3">
                <FaPhone />
              </span>
              <input
                ref={contactNumberRef}
                type="tel"
                value={contactNumber}
                onChange={handleContactNumberChange}
                placeholder="Contact Number"
                autoComplete="tel"
                name="contact-number-signup"
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-black placeholder-gray-500 bg-white ${
                  errors.contactNumber
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
            </div>
            {errors.contactNumber && (
              <p className="mt-1 text-sm text-red-500">
                {errors.contactNumber}
              </p>
            )}
          </div>
          {/* Project Name field */}
          <div className="space-y-1">
            <div className="relative">
              <input
                type="text"
                value={projectName}
                onChange={handleProjectNameChange}
                placeholder="Project Name"
                autoComplete="off"
                name="project_name"
                className="w-full pl-3 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-black placeholder-gray-500 bg-white border-gray-300 focus:ring-blue-500"
              />
            </div>
          </div>
          {/* Project Size field */}
          <div className="space-y-1">
            <div className="relative">
              <select
                value={projectSize}
                onChange={handleProjectSizeChange}
                name="project_size"
                className="w-full pl-3 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-black bg-white border-gray-300 focus:ring-blue-500"
              >
                <option value="">Select Project Size</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="200+">200+</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <div className="text-sm text-center text-black">
          Already have an account?{" "}
          <Link href="/Login" passHref legacyBehavior>
            <span className="text-blue-600 cursor-pointer hover:underline">
              Login
            </span>
          </Link>
        </div>
        <div className="text-xs text-center text-gray-500">
          <p>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
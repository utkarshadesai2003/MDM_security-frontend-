"use client";
import { useState, useEffect, FormEvent } from "react";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Forgotpassword: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ email?: string; newPassword?: string }>(
    {}
  );
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Clear form fields when component mounts
  useEffect(() => {
    setEmail("");
    setNewPassword("");
    setErrors({});
    setShowPassword(false);
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; newPassword?: string } = {};

    if (!email.trim()) {
      newErrors.email = "Please enter your email";
    }

    if (!newPassword.trim()) {
      newErrors.newPassword = "Please enter a new password";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await fetch(
          `https://mdm-security-backend-498807929429.us-central1.run.app/auth/reset-password?email=${encodeURIComponent(
            email
          )}&new_password=${encodeURIComponent(newPassword)}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
          }
        );

        if (res.ok) {
          router.push("/Login");
        } else {
          const data = await res.json();
          alert(data.message || "Failed to reset password");
        }
      } catch (error) {
        alert("Network error. Please try again.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="bg-white rounded-xl shadow-xl w-[500px] p-10 space-y-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Reset Your Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 pl-3 pr-3 text-black placeholder-gray-500 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full py-2 pl-10 pr-10 text-black placeholder-gray-500 bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span
                className="absolute inset-y-0 flex items-center text-gray-500 cursor-pointer right-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.newPassword && (
              <p className="mt-1 text-sm text-red-500">{errors.newPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Reset Password
          </button>
        </form>

        <div className="text-sm text-center text-black">
          Back to login?{" "}
          <button
            onClick={() => router.push("/Login")}
            className="text-blue-600 hover:underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
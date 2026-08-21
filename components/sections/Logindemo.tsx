"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function BookDemoPage() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4 bg-white bg-opacity-70 text-slate-900">
      <div className="w-full max-w-lg bg-white shadow-xl p-7 rounded-2xl ring-1 ring-slate-200">
        <h2 className="text-2xl font-semibold tracking-tight text-center">
          Book Your <span className="text-[#016795]">Start Free Trial</span>
        </h2>
     
        <DemoForm />
      </div>
    </main>
  );
}

function DemoForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    country: "India",
    dial: "+91",
    phone: "",
    company: "",
    designation: "",
    size: "",
    goals: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const sizes = ["1–10", "11–50", "51–200", "201–500", "501–1000", "1000+"];

  const countryConfig = {
    India: { dial: "+91", phoneLength: 10, placeholder: "9876543210" },
    "United States": { dial: "+1", phoneLength: 10, placeholder: "2025551234" },
    "United Kingdom": {
      dial: "+44",
      phoneLength: 10,
      placeholder: "2071234567",
    },
    "United Arab Emirates": {
      dial: "+971",
      phoneLength: 9,
      placeholder: "501234567",
    },
    "Saudi Arabia": { dial: "+966", phoneLength: 9, placeholder: "501234567" },
    Germany: { dial: "+49", phoneLength: 11, placeholder: "15123456789" },
  };

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    if (name === "country") {
      const countryData = countryConfig[value as keyof typeof countryConfig];
      const newDial = countryData ? countryData.dial : form.dial;
      setForm((f) => ({ ...f, country: value, dial: newDial, phone: "" }));
      return;
    }

    if (name === "phone") {
      const numbersOnly = value.replace(/[^0-9]/g, "");
      const currentCountry = form.country as keyof typeof countryConfig;
      const maxLength = countryConfig[currentCountry]?.phoneLength || 15;
      if (numbersOnly.length <= maxLength) {
        setForm((f) => ({ ...f, [name]: numbersOnly }));
      }
      return;
    }

    setForm((f) => ({ ...f, [name]: value }));
  }

  function validateForm() {
    const newErrors: { [key: string]: string } = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    } else {
      const personalDomains = [
        "gmail.com",
        "yahoo.com",
        "outlook.com",
        "hotmail.com",
        "aol.com",
        "icloud.com",
        "protonmail.com",
        
        "zoho.com",
        "mail.com",
        "gmx.com"
      ];
      const emailDomain = form.email.split("@")[1]?.toLowerCase();
      if (emailDomain && personalDomains.includes(emailDomain)) {
        newErrors.email = "Personal email addresses are not allowed. Please use your company email.";
      }
    }

    if (!form.company.trim()) {
      newErrors.company = "Company name is required";
      } else if (form.company.trim().toLowerCase() === "cybo tri") {
        newErrors.company = "Submissions from 'cybo tri' are not allowed.";
    }

    if (form.email.trim() && form.company.trim()) {
      const emailDomain = form.email.split("@")[1]?.toLowerCase();
      const companyName = form.company
        .replace(/\s+/g, "")
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();
      
      // Check if company name is in email domain (no exceptions for personal emails)
      if (emailDomain && !emailDomain.includes(companyName)) {
        newErrors.email = `Email domain must contain company name. Use email like: name@${companyName}.com`;
        newErrors.company = "Company name must match your email domain";
      }
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const currentCountry = form.country as keyof typeof countryConfig;
      const expectedLength = countryConfig[currentCountry]?.phoneLength || 10;
      const phoneNumbers = form.phone.replace(/[^0-9]/g, "");
      if (phoneNumbers.length !== expectedLength) {
        newErrors.phone = `Phone number must be exactly ${expectedLength} digits for ${form.country}`;
      }
    }

    if (!form.designation.trim()) {
      newErrors.designation = "Designation is required";
    }

    if (!form.size) {
      newErrors.size = "Company size is required";
    }

    return newErrors;
  }

  function handleStartFreeTrial(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.querySelector(
        `[name="${firstErrorField}"]`
      ) as HTMLElement;
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setErrors({});
    setLoading(true);

    const formData = {
      fullName: form.fullName,
      email: form.email,
      dial: form.dial,
      phone: form.phone,
      company: form.company,
      designation: form.designation,
      size: form.size,
      goals: form.goals,
    };

    if (typeof window !== "undefined") {
      sessionStorage.setItem("demoFormData", JSON.stringify(formData));
    }

    const params = new URLSearchParams({
      fullName: form.fullName,
      loginId: form.email,
    }).toString();

    router.push(`/Logindemo?${params}`);
  }

  const currentCountryConfig =
    countryConfig[form.country as keyof typeof countryConfig];

  return (
    <form className="grid gap-4 mt-4">
      <FormField label="Full Name" required error={errors.fullName}>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className={`${inputCls} ${
            errors.fullName
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : ""
          }`}
          required
        />
      </FormField>

      <FormField label="Email" required error={errors.email}>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="john@company.com"
          className={`${inputCls} ${
            errors.email
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : ""
          }`}
          required
        />
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Country" required>
          <div className="relative">
            <select
              name="country"
              value={form.country}
              onChange={handleChange}
              className={`${inputCls} appearance-none pr-10`}
              required
            >
              {Object.keys(countryConfig).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </FormField>

        <FormField label="Phone Number" required error={errors.phone}>
          <div
            className={`flex overflow-hidden border border-slate-300 rounded-xl shadow-sm focus-within:border-[#016795] focus-within:ring-2 focus-within:ring-[#016795] transition-colors ${
              errors.phone
                ? "border-red-500 focus-within:border-red-500 focus-within:ring-red-500"
                : ""
            }`}
          >
            <div className="flex items-center px-3 py-2 text-sm font-medium border-r bg-slate-50 text-slate-600 border-slate-300 whitespace-nowrap">
              {form.dial}
            </div>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder={currentCountryConfig?.placeholder || "Phone number"}
              className="flex-1 min-w-0 px-3 py-2 text-sm bg-white placeholder:text-slate-400 focus:outline-none"
              required
              inputMode="tel"
              maxLength={currentCountryConfig?.phoneLength || 15}
            />
          </div>
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField label="Company Name" required error={errors.company}>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Cybotronics, Inc"
            className={`${inputCls} ${
              errors.company
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            required
          />
        </FormField>

        <FormField label="Designation" required error={errors.designation}>
          <input
            type="text"
            name="designation"
            value={form.designation}
            onChange={handleChange}
            placeholder="Manager, CTO, Developer..."
            className={`${inputCls} ${
              errors.designation
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            required
          />
        </FormField>
      </div>

      <FormField label="Company Size" required error={errors.size}>
        <div className="relative">
          <select
            name="size"
            value={form.size}
            onChange={handleChange}
            className={`${inputCls} appearance-none pr-10 ${
              errors.size
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : ""
            }`}
            required
          >
            <option value="">Please Select</option>
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </FormField>

      <FormField label="What would you like to explore?">
        <textarea
          name="goals"
          value={form.goals}
          onChange={handleChange}
          placeholder="Tell us your goals for the demo..."
          rows={3}
          className={inputCls}
        />
      </FormField>

      <button
        type="button"
        disabled={loading}
        onClick={handleStartFreeTrial}
        className="inline-flex items-center justify-center w-full px-4 font-medium text-white bg-[#016795] shadow-sm h-10 rounded-xl hover:bg-[#014d6b] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#016795] disabled:opacity-60 transition-colors"
      >
        {loading ? "Booking…" : "Start Free Trial"}
      </button>

      <p className="text-xs text-center text-slate-500">
        By submitting this form, you agree to our terms and privacy policy.
      </p>
    </form>
  );
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5 text-sm">
      <span className="font-medium text-slate-700">
        {label}
        {required && <span className="text-[#016795]">*</span>}
      </span>
      {children}
      {error && (
        <span className="text-xs font-medium text-red-500">{error}</span>
      )}
    </div>
  ); 
}

const inputCls =
  "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-[#016795] focus:outline-none focus:ring-2 focus:ring-[#016795] placeholder:text-slate-400 transition-colors";
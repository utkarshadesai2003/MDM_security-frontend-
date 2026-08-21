"use client";
import React from "react";

type Props = {
  loginId: string;
  loginUrl?: string;
  passwordMasked?: string;
  mailedTo?: string;
  onLogin?: () => void;
};

// URL constant
const DEFAULT_LOGIN_URL =
  "https://mdm-security-screenshots-498807929429.europe-west1.run.app";

export default function LoginSuccess({
  loginId,
  loginUrl,
  passwordMasked = "********",
  mailedTo,
  onLogin,
}: Props) {
  const { useSearchParams } = require("next/navigation");
  const searchParams = useSearchParams();

  // Single source of truth for URL
  const url = loginUrl || DEFAULT_LOGIN_URL;

  const id = searchParams.get("loginId") || loginId;
  const pwd = searchParams.get("passwordMasked") || passwordMasked;
  const mail = searchParams.get("mailedTo") || mailedTo;

  // Extract domain from URL (remove https://)
  const getDomainFromUrl = (fullUrl: string) => {
    try {
      const urlObj = new URL(fullUrl);
      return urlObj.hostname + urlObj.pathname;
    } catch (error) {
      // If URL parsing fails, just remove https:// manually
      return fullUrl.replace(/^https?:\/\//, "");
    }
  };

  const displayUrl = getDomainFromUrl(url);

  return (
    <main
      className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-b from-slate-50 to-white"
      style={{
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      <div className="w-full max-w-2xl">
        <div className="rounded-[24px] bg-white shadow-xl ring-1 ring-slate-200 p-6 sm:p-10">
          <h1
            className="text-2xl font-semibold text-center sm:text-3xl text-slate-900"
            style={{
              fontWeight: "600",
              letterSpacing: "-0.025em",
              textRendering: "optimizeLegibility",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            Your trial account has been{" "}
            <span
              className="text-transparent bg-gradient-to-r from-[#016795] to-[#016795] bg-clip-text"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              successfully created
            </span>
            .
          </h1>

          <div className="flex justify-center mt-6">
            <div className="relative">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100">
                <svg
                  viewBox="0 0 24 24"
                  className="h-9 w-9 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div className="absolute inset-0 rounded-full animate-ping bg-emerald-200 opacity-30" />
            </div>
          </div>

          <div
            className="mt-8 space-y-3 text-center text-slate-700"
            style={{
              textRendering: "optimizeLegibility",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            <p
              style={{ color: "#374151", fontSize: "16px", fontWeight: "400" }}
            >
              <span
                className="font-semibold"
                style={{ fontWeight: "600", color: "#111827" }}
              >
                Login URL:
              </span>{" "}
              <a
                href={url}
                className="text-[#5A2A82] underline break-all"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#5A2A82",
                  textDecoration: "underline",
                  wordBreak: "break-all",
                }}
              >
                {displayUrl}
              </a>
            </p>
            <p
              style={{ color: "#374151", fontSize: "16px", fontWeight: "400" }}
            >
              <span
                className="font-semibold"
                style={{ fontWeight: "600", color: "#111827" }}
              >
                Login ID:
              </span>{" "}
              <span
                className="break-all"
                style={{ wordBreak: "break-all", color: "#374151" }}
              >
                {id}
              </span>
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href={url}
              onClick={onLogin}
              className="inline-flex items-center justify-center rounded-full bg-[#33498e] px-10 py-3 text-white text-sm sm:text-base font-semibold shadow-md hover:opacity-95 active:translate-y-px transition"
              style={{
                backgroundColor: "#33498e",
                color: "white",
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "16px",
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              Login
            </a>
          </div>

          {mail && (
            <p
              className="mt-6 text-sm text-center text-slate-500"
              style={{
                color: "#6b7280",
                fontSize: "14px",
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              These details have been mailed to{" "}
              <span
                className="font-medium"
                style={{ fontWeight: "500", color: "#374151" }}
              >
                {mail}
              </span>
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import  logo  from '../../../public/home-image/asset 0.png'

const navItems = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "For Job Seekers", href: "/job-seekers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // route change হলে mobile menu auto close
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav
      className="fixed z-50 w-full border-b-2 border-rose-500/20 bg-white py-4 shadow-sm transition-all duration-300"
      aria-label="Main Navigation"
    >
      <div className="app-container">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center">
            <Link className="flex items-center" href="/">
              <Image
                alt="Hiring Dhaka Logo"
                className="h-10 w-20"
                src={logo}
                width={152}
                height={100}
                priority
              />
              <span className="ml-0 text-xl font-bold sm:text-2xl">
                <span className="text-slate-900">Hiring</span>
                <span className="btn-text">Dhaka</span>
              </span>
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden items-center space-x-2 lg:flex">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "px-4 py-2 text-base font-semibold transition-colors lg:text-lg",
                    active
                      ? "border-b-2 border-[#DD4B4B] btn-text"
                      : "text-slate-900 hover:text-[#DD4B4B]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* এগুলো আগে window.location ছিল → reload করত */}
            <button
              type="button"
              onClick={() => router.push("/build-your-team")}
              className="ml-2 rounded-md btn-bg px-6 py-2 text-base font-semibold text-white shadow-md transition-colors hover:bg-slate-900 hover:text-white lg:text-lg"
            >
              Build Your Team
            </button>

            <button
              type="button"
              onClick={() => router.push("/join-community")}
              className="ml-2 rounded-md bg-slate-900 px-6 py-2 text-base font-semibold text-white shadow-md transition-colors hover:bg-[#DD4B4B] hover:text-white lg:text-lg"
            >
              Join Talent Network
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button
              type="button"
              className="rounded p-2 transition hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
              aria-label="Open mobile menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <svg
                className="h-7 w-7 text-slate-900"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={[
          "fixed left-0 top-16 z-50 w-full bg-white shadow-lg lg:hidden",
          open ? "block" : "hidden",
        ].join(" ")}
      >
        <div className="flex justify-end pr-4 pt-4">
          <button
            type="button"
            className="text-2xl btn-text"
            aria-label="Close mobile menu"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "flex items-center gap-2 px-3 py-2.5 text-base transition-colors",
                  active
                    ? "border-b-2 border-[#DD4B4B] font-semibold btn-text"
                    : "rounded-md font-medium text-slate-900 hover:bg-gray-50 hover:text-[#DD4B4B]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => router.push("/build-your-team")}
            className="flex w-full items-center justify-center gap-2 rounded-md btn-bg px-3 py-2.5 text-base font-semibold text-white transition-colors hover:bg-slate-900 hover:text-white"
          >
            Build Your Team
          </button>

          <button
            type="button"
            onClick={() => router.push("/join-community")}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-900 px-3 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#DD4B4B] hover:text-white"
          >
            Join Talent Network
          </button>
        </div>
      </div>
    </nav>
  );
}

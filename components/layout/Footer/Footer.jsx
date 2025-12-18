// src/components/layout/Footer.jsx

import Link from "next/link";
import Image from "next/image";
import IconMapper from "@/components/ui/IconMapper";
import { SOCIAL_LINKS } from "@/data/footer/footer.data";
import  logo  from '../../../public/home-image/asset 0.png'

export default function Footer() {
  return (
    <footer className=" text-hd-navy pt-16 pb-8  border-t-2 border-[#d48888] mt-8 w-full px-2">
      <div className="">

        {/* Top */}
        <div className="text-center">
          <div className="flex flex-col items-center mb-8">
            {/* Logo */}
            <Link href="/" className="flex items-center mb-2">
              <Image
                src={logo}
                alt="Hiring Dhaka Logo"
                width={152}
                height={100}
                className="w-20 h-10"
                priority={false}
              />
             <span className="ml-0 text-xl font-bold sm:text-2xl">
                <span className="text-slate-900">Hiring</span>
                <span className="btn-text">Dhaka</span>
              </span>
            </Link>

            <p className="text-gray-500 text-sm mb-4">
              A Concern of Hiring Dhaka Consulting
            </p>

            <p className="text-gray-500 mb-6 text-center max-w-xl text-base sm:text-lg">
              Connecting exceptional talent with visionary employers worldwide.
              <span className="text-hd-red font-semibold block btn-text">
                Rooted locally. Empowering globally.
              </span>
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-12 h-12 bg-white hover:bg-[#e1c1c1] border border-[#e3a7a7] rounded-full flex items-center justify-center text-hd-navy hover:text-hd-red transition-colors"
                >
                  <IconMapper name={item.icon} className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-[#e9adad] flex flex-col sm:flex-row justify-between items-center gap-4">

          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2">
            <span className="text-gray-400 text-sm">
              © 2025 Hiring Dhaka. All rights reserved.
            </span>

            <a
              href="https://www.genexone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bg hover:bg-hd-navy hover:text-white text-white font-bold rounded-md px-4 py-1 text-sm transition-colors shadow-md"
            >
              Developed by GenexOne
            </a>
          </div>

          <div className="flex gap-6">
            <Link
              href="/terms/"
              className="text-gray-400 hover:text-hd-red text-sm transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy/"
              className="text-gray-400 hover:text-hd-red text-sm transition-colors"
            >
              Privacy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

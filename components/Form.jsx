import React from "react";
import { Twitter, Mail, Wallet } from "lucide-react";
import Link from "next/link";

const Form = () => {
  return (
    <section className="w-full px-6 md:px-24 py-16 text-white ">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Join the Community.
        </h1>
        <p className="text-gray-300 mb-10">
          Sign up to get updates from us and enjoy exclusive perks.
        </p>

        {/* Glass Form */}
        <form className="flex flex-col gap-5">
          {/* Twitter */}
          <div className="relative">
            <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
            <input
              type="text"
              placeholder="Twitter Account"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#20A4F3]"
            />
          </div>

          {/* Wallet */}
          <div className="relative">
            <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
            <input
              type="text"
              placeholder="Wallet Address"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#20A4F3]"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 w-5 h-5" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#20A4F3]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-[#20A4F3] to-[#59F8E8] text-black hover:opacity-90 transition"
          >
            Join Community
          </button>
        </form>
        {/* Footer Links */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/user-agreement">User Agreement</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/whitepaper">Whitepaper</Link>
            <Link href="/lite-paper">Lite Paper</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="w-5 h-5 hover:text-blue-400 transition" />
            </a>
            <a href="mailto:info@company.com">
              <Mail className="w-5 h-5 hover:text-pink-400 transition" />
            </a>
            <a href="#">
              <Wallet className="w-5 h-5 hover:text-green-400 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;

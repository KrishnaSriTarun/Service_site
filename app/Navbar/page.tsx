"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-black shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ServiceApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          <Link href="/" className="hover:text-blue-600 dark:text-white">
            Home
          </Link>
          <Link href="/providers" className="hover:text-blue-600 dark:text-white">
            Providers
          </Link>
          <Link href="/dashboard" className="hover:text-blue-600 dark:text-white">
            My Bookings
          </Link>
          <Link
            href="/providers/add"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Become Provider
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {/* <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button> */}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-zinc-900 p-4 space-y-4 shadow">
          <Link href="/" onClick={() => setOpen(false)} className="block text-lg">
            Home
          </Link>
          <Link href="/providers" onClick={() => setOpen(false)} className="block text-lg">
            Providers
          </Link>
          <Link href="/dashboard" onClick={() => setOpen(false)} className="block text-lg">
            My Bookings
          </Link>
          <Link
            href="/providers/add"
            onClick={() => setOpen(false)}
            className="block text-lg bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Become Provider
          </Link>
        </div>
      )}
    </nav>
  );
}

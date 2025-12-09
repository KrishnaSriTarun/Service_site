"use client";

import { useState } from "react";
import Link from "next/link";
import {
      SignInButton,
      SignUpButton,
      SignedIn,
      SignedOut,
      UserButton,
} from '@clerk/nextjs'

export default function Navbar() {
      const [open, setOpen] = useState(false);

      return (
            <nav className="w-full bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
                  <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
                              ServiceApp
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Home
                              </Link>
                              <Link href="/providers" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Providers
                              </Link>
                              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                                    My Bookings
                              </Link>
                              <Link href="/providers/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                                    Provider Dashboard
                              </Link>
                              <Link
                                    href="/providers/add"
                                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                              >
                                    Become Provider
                              </Link>
                        </div>

                        {/* Auth Buttons */}
                        <div className="hidden md:flex items-center gap-4">
                              <SignedOut>
                                    <SignInButton mode="modal">
                                          <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                                Sign In
                                          </button>
                                    </SignInButton>
                                    <SignUpButton mode="modal">
                                          <button className="bg-primary text-primary-foreground rounded-full font-medium text-sm px-5 py-2.5 hover:bg-primary/90 transition-colors shadow-sm">
                                                Sign Up
                                          </button>
                                    </SignUpButton>
                              </SignedOut>
                              <SignedIn>
                                    <UserButton
                                          appearance={{
                                                elements: {
                                                      avatarBox: "w-9 h-9"
                                                }
                                          }}
                                    />
                              </SignedIn>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                              className="md:hidden text-foreground p-2"
                              onClick={() => setOpen(!open)}
                        >
                              <span className="sr-only">Open menu</span>
                              {/* Hamburger Icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                              </svg>
                        </button>
                  </div>

                  {/* Mobile Menu */}
                  {open && (
                        <div className="md:hidden bg-background border-b border-border p-4 space-y-4 shadow-lg animate-in slide-in-from-top-2">
                              <Link href="/" onClick={() => setOpen(false)} className="block text-lg font-medium text-foreground">
                                    Home
                              </Link>
                              <Link href="/providers" onClick={() => setOpen(false)} className="block text-lg font-medium text-foreground">
                                    Providers
                              </Link>
                              <Link href="/dashboard" onClick={() => setOpen(false)} className="block text-lg font-medium text-foreground">
                                    My Bookings
                              </Link>
                              <Link href="/providers/dashboard" onClick={() => setOpen(false)} className="block text-lg font-medium text-foreground">
                                    Provider Dashboard
                              </Link>
                              <Link
                                    href="/providers/add"
                                    onClick={() => setOpen(false)}
                                    className="block text-lg bg-primary text-primary-foreground px-4 py-2 rounded-lg text-center font-medium"
                              >
                                    Become Provider
                              </Link>
                              <div className="pt-4 border-t border-border flex flex-col gap-3">
                                    <SignedOut>
                                          <SignInButton mode="modal">
                                                <button className="w-full text-center text-muted-foreground font-medium p-2 border border-input rounded-lg">
                                                      Sign In
                                                </button>
                                          </SignInButton>
                                          <SignUpButton mode="modal">
                                                <button className="w-full bg-primary text-primary-foreground rounded-lg font-medium p-2">
                                                      Sign Up
                                                </button>
                                          </SignUpButton>
                                    </SignedOut>
                                    <SignedIn>
                                          <div className="flex justify-center">
                                                <UserButton />
                                          </div>
                                    </SignedIn>
                              </div>
                        </div>
                  )}
            </nav>
      );
}

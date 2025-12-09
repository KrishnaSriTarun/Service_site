"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useUser } from "@clerk/nextjs";

const inter = Inter({ subsets: ['latin'] });

export default function DashboardPage() {
      const { user, isLoaded } = useUser();
      const [bookings, setBookings] = useState<any[]>([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            if (!isLoaded) return;

            if (!user) {
                  setLoading(false);
                  return;
            }

            const uid = user.id;

            async function load() {
                  try {
                        const res = await fetch(`/api/bookings/user/${uid}`);
                        const data = await res.json();
                        if (Array.isArray(data)) {
                              setBookings(data);
                        } else {
                              console.error("API returned error:", data);
                              setBookings([]);
                        }
                  } catch (err) {
                        console.log("Error loading bookings:", err);
                  } finally {
                        setLoading(false);
                  }
            }

            load();
      }, [isLoaded, user]);

      if (loading) {
            return <p className="p-4 text-center">Loading...</p>;
      }

      if (bookings.length === 0) {
            return <p className="p-4 text-center">No bookings found.</p>;
      }

      return (
            <div className="max-w-2xl mx-auto p-4">
                  <h1 className={`text-2xl font-bold mb-4 ${inter.className}`}>
                        My Bookings
                  </h1>

                  <div className="space-y-4">
                        {bookings.map((b: any) => (
                              <div
                                    key={b.id}
                                    className="p-4 rounded-xl border shadow-sm bg-white flex items-center gap-4"
                              >
                                    {/* Provider Image */}
                                    <img
                                          src={b.provider?.photoUrl ?? "/default.png"}
                                          alt={b.provider?.name ?? "Provider"}
                                          className="w-20 h-20 rounded-xl object-cover"
                                    />

                                    <div className="flex-1">
                                          <div className="flex justify-between">
                                                <h2 className="text-lg font-semibold text-black">
                                                      {b.provider?.name ?? "Unknown Provider"}
                                                </h2>

                                                <span
                                                      className={`px-3 py-1 text-sm rounded-full ${b.status === "pending"
                                                            ? "bg-yellow-200 text-yellow-800"
                                                            : b.status === "completed"
                                                                  ? "bg-green-200 text-green-800"
                                                                  : "bg-gray-200 text-gray-700"
                                                            }`}
                                                >
                                                      {b.status}
                                                </span>
                                          </div>

                                          <p className="text-sm text-gray-600">
                                                {b.provider?.category ?? ""}
                                          </p>

                                          <div className="grid grid-cols-2 mt-2 text-sm text-gray-700">
                                                <p>
                                                      <span className="font-medium">Price:</span> ₹{b.price}
                                                </p>

                                                <p>
                                                      <span className="font-medium">Experience:</span>{" "}
                                                      {b.provider?.experience ?? "0"} yrs
                                                </p>

                                                <p className="col-span-2">
                                                      <span className="font-medium">Address:</span> {b.address}
                                                </p>
                                          </div>

                                          <p className="mt-2 text-sm text-gray-600">{b.description}</p>

                                          {/* Buttons */}
                                          <div className="mt-3 flex gap-3">
                                                <Link
                                                      href={`/providers/${b.providerId}`}
                                                      className="px-3 py-1 bg-blue-600 text-white rounded-lg"
                                                >
                                                      View Provider
                                                </Link>

                                                {b.status === "pending" && (
                                                      <button className="px-3 py-1 bg-gray-800 text-white rounded-lg">
                                                            Cancel
                                                      </button>
                                                )}
                                          </div>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
}

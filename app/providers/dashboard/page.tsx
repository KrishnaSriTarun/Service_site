"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function ProviderDashboard() {
      const { user, isLoaded } = useUser();
      const [providerId, setProviderId] = useState<string | null>(null);
      const [bookings, setBookings] = useState<any[]>([]);

      useEffect(() => {
            if (isLoaded && user) {
                  setProviderId(user.id);
            }
      }, [isLoaded, user]);

      useEffect(() => {
            if (!providerId) return; // Wait until providerId loads

            async function load() {
                  try {
                        const res = await fetch(`/api/providers/bookings/${providerId}`);
                        const data = await res.json();
                        if (Array.isArray(data)) {
                              setBookings(data);
                        } else {
                              console.error("API returned error:", data);
                              setBookings([]);
                        }
                  } catch (err) {
                        console.error("Error fetching provider bookings:", err);
                  }
            }

            load();
      }, [providerId]);

      return (
            <div className="min-h-screen p-6 bg-zinc-100 dark:bg-black">
                  <h1 className="text-3xl font-bold dark:text-white">Provider Dashboard</h1>

                  {/* Show message if still loading */}
                  {!providerId && (
                        <p className="mt-6 text-zinc-500 dark:text-zinc-400">Loading...</p>
                  )}

                  {/* No bookings */}
                  {providerId && bookings.length === 0 && (
                        <p className="text-center mt-6 text-zinc-500 dark:text-zinc-400">
                              No bookings received yet.
                        </p>
                  )}

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bookings.map((b: any) => (
                              <div key={b.id} className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow">
                                    <h2 className="text-lg font-bold dark:text-white">
                                          {b.customer?.name ?? "Unknown Customer"}
                                    </h2>

                                    <p className="text-sm text-zinc-500">{b.address}</p>
                                    <p className="text-sm mt-2 dark:text-white">{b.description}</p>

                                    <p className="mt-2">
                                          Status: <b className="text-blue-600">{b.status}</b>
                                    </p>

                                    <p className="mt-2 text-sm dark:text-zinc-300">
                                          Created: {new Date(b.createdAt).toDateString()}
                                    </p>
                              </div>
                        ))}
                  </div>
            </div>
      );
}

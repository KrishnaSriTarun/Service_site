"use client";

import { useState } from "react";
import { ObjectId } from 'bson';

export default function BookingForm({ providerId, price }: any) {

      const fakeCustomerId = new ObjectId().toString();
      const [form, setForm] = useState({
            address: "",
            description: "",
            price: price,
            customerId: fakeCustomerId,
      });

      const [message, setMessage] = useState("");

      async function handleSubmit(e: any) {
            e.preventDefault();

            const res = await fetch("/api/bookings", {
                  method: "POST",
                  body: JSON.stringify({ ...form, providerId }),
            });

            const data = await res.json();

            if (res.ok) {
                  setMessage("Booking Successful!");
                  setForm({ address: "", description: "", price, customerId: "TEMP_USER_ID" });
            } else {
                  setMessage(data.error || "Failed to book");
            }
      }

      return (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <input
                        className="w-full p-3 border rounded"
                        placeholder="Service Address"
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        required
                  />

                  <textarea
                        className="w-full p-3 border rounded"
                        placeholder="Describe the problem..."
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        required
                  />

                  <button className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700">
                        Book Now – ₹{price}
                  </button>

                  {message && <p className="text-green-600 text-center">{message}</p>}
            </form>
      );
}

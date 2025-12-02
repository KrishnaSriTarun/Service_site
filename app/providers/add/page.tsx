"use client";

import { useState } from "react";

export default function AddProviderPage() {
      const [form, setForm] = useState({
            name: "",
            category: "",
            experience: "",
            price: "",
            userId: "",
            photoUrl: "",
      });

      const [loading, setLoading] = useState(false);
      const [message, setMessage] = useState("");

      const categories = [
            "Electrician",
            "Plumber",
            "Carpenter",
            "AC Repair",
            "Cleaning",
            "Painting",
      ];

      async function handleSubmit(e: any) {
            e.preventDefault();
            setLoading(true);
            setMessage("");

            const res = await fetch("/api/providers", {
                  method: "POST",
                  body: JSON.stringify(form),
            });

            const data = await res.json();
            setLoading(false);

            if (res.ok) {
                  setMessage("Provider added successfully!");
                  setForm({
                        name: "",
                        category: "",
                        experience: "",
                        price: "",
                        userId: "",
                        photoUrl: "",
                  });
            } else {
                  setMessage(data.error || "Something went wrong");
            }
      }

      function handleChange(e: any) {
            setForm({ ...form, [e.target.name]: e.target.value });
      }

      return (
            <div className="min-h-screen bg-zinc-50 p-6 dark:bg-black">
                  <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">
                        Add Provider
                  </h1>

                  <form
                        onSubmit={handleSubmit}
                        className="max-w-lg mx-auto bg-white dark:bg-zinc-900 p-6 rounded-xl shadow space-y-4"
                  >
                        <input
                              type="text"
                              name="name"
                              placeholder="Provider Name"
                              value={form.name}
                              onChange={handleChange}
                              className="w-full p-3 border rounded"
                              required
                        />

                        <select
                              name="category"
                              value={form.category}
                              onChange={handleChange}
                              className="w-full p-3 border rounded bg-black"
                              required
                        >
                              <option value="">Select Category</option>
                              {categories.map((c) => (
                                    <option key={c} value={c} className="text-white">
                                          {c}
                                    </option>
                              ))}
                        </select>

                        <input
                              type="number"
                              name="experience"
                              placeholder="Experience (years)"
                              value={form.experience}
                              onChange={handleChange}
                              className="w-full p-3 border rounded"
                        />

                        <input
                              type="number"
                              name="price"
                              placeholder="Base Price"
                              value={form.price}
                              onChange={handleChange}
                              className="w-full p-3 border rounded"
                              required
                        />

                        <input
                              type="text"
                              name="userId"
                              placeholder="User ID (temporary)"
                              value={form.userId}
                              onChange={handleChange}
                              className="w-full p-3 border rounded"
                              required
                        />

                        <input
                              type="text"
                              name="photoUrl"
                              placeholder="Photo URL (optional)"
                              value={form.photoUrl}
                              onChange={handleChange}
                              className="w-full p-3 border rounded"
                        />

                        <button
                              type="submit"
                              disabled={loading}
                              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
                        >
                              {loading ? "Adding..." : "Add Provider"}
                        </button>

                        {message && (
                              <p className="text-center mt-3 text-green-600 dark:text-green-400">
                                    {message}
                              </p>
                        )}
                  </form>
            </div>
      );
}

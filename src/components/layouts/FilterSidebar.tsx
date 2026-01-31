"use client";

import React from "react";
import { Check, RotateCcw } from "lucide-react";

export function FilterSidebarUI() {
  return (
    <aside className="w-72 border-r bg-white p-6 sticky top-40 h-[calc(100vh-160px)] overflow-y-auto scrollbar-hide shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Filter</h2>
        <button className="text-gray-400 hover:text-red-500 transition-colors">
          <RotateCcw size={18} />
        </button>
      </div>

      {/* Cuisine Section */}
      <div className="mb-8">
        <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">
          Cuisine
        </h3>
        <div className="space-y-3">
          {[
            "Bengali",
            "Indian",
            "Italian",
            "Chinese",
            "Fast Food",
            "Thai",
            "Mexican",
            "Arabic",
            "Continental",
            "Dessert",
          ].map((c) => (
            <label key={c} className="flex items-center group cursor-pointer">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  className="peer h-5 w-5 appearance-none rounded border-2 border-gray-200 checked:bg-yellow-300 checked:border-yellow-300 transition-all cursor-pointer"
                />
                <Check
                  className="absolute h-3.5 w-3.5 text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none left-0.5"
                  strokeWidth={4}
                />
              </div>
              <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                {c}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Dietary Section */}
      <div className="mb-8">
        <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">
          Dietary
        </h3>
        <div className="space-y-3">
          {["Vegetarian", "Vegan", "Halal", "Gluten Free"].map((d) => (
            <label key={d} className="flex items-center group cursor-pointer">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  className="peer h-5 w-5 appearance-none rounded border-2 border-gray-200 checked:bg-yellow-300 checked:border-yellow-300 transition-all cursor-pointer"
                />
                <Check
                  className="absolute h-3.5 w-3.5 text-gray-900 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none left-0.5"
                  strokeWidth={4}
                />
              </div>
              <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                {d}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-6">
        <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">
          Price
        </h3>
        <div className="space-y-3">
          {[
            { label: "Low", icon: "৳" },
            { label: "Medium", icon: "৳৳" },
            { label: "High", icon: "৳৳৳" },
          ].map((p) => (
            <label
              key={p.label}
              className="flex items-center group cursor-pointer"
            >
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="price"
                  className="peer h-5 w-5 appearance-none rounded-full border-2 border-gray-200 checked:border-yellow-400 checked:bg-yellow-300 transition-all cursor-pointer"
                />
                <div className="absolute h-2 w-2 rounded-full bg-gray-900 opacity-0 peer-checked:opacity-100 left-1.5 transition-opacity pointer-events-none" />
              </div>
              <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                <span className="font-bold text-gray-400 mr-1">{p.icon}</span>{" "}
                {p.label}
              </span>
            </label>
          ))}
        </div>

        <button className="text-xs font-bold text-yellow-600 mt-4 hover:underline transition-all">
          Clear price filter
        </button>
      </div>

      {/* Apply Button */}
      <button className="w-full bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-bold py-3 rounded-xl shadow-sm transition-all active:scale-[0.98] mt-4">
        Apply Filters
      </button>
    </aside>
  );
}

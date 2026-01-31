"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Globe,
  Menu,
  X,
  ChevronDown,
  Search,
  UtensilsCrossed,
  Store,
  TicketPercent,
  Navigation,
  MapPin,
} from "lucide-react";
import logo from "../../../public/logos/logo5.png";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0 border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* =======================
              MAIN NAVBAR SECTION 
           ======================= */}
        <div className="flex justify-between items-center py-2 gap-4">
          {/* LEFT SIDE: LOGO & NAME */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div className="relative w-10 h-10">
              <Image
                src={logo}
                alt="Brand Logo"
                width={40}
                height={40}
                className=""
              />
            </div>
            <span className=" text-xl text-yellow-400 tracking-tight ">
              foodprime
            </span>
          </div>

          {/* CENTER: SEARCH BAR */}
          <div className="hidden md:flex flex-1 max-w-md mx-auto">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search food..."
                className="w-full border border-gray-300 bg-gray-50 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-yellow-400 focus:bg-white transition-all"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
          </div>

          {/* RIGHT SIDE: ACTIONS */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-700 border text-sm rounded-sm border-black px-4 py-1 ">
              Log in
            </button>

            <button className="bg-yellow-300 hover:bg-yellow-400 px-5 text-sm py-1.5 rounded-sm">
              Sign up for Free Delivery
            </button>

            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-black"
              >
                <Globe size={20} />
                <span className="text-sm">EN</span>
                <ChevronDown size={14} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg py-1">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    English
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Bangla
                  </button>
                </div>
              )}
            </div>

            <div className="relative cursor-pointer text-gray-600 hover:text-black transition">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* =======================
              SEC NAVBAR SECTION (Added)
           ======================= */}
        <div className="hidden md:flex items-center pt-6 pb-3 border-t border-gray-50 justify-between">
          <div className="flex items-center gap-16">
            {/* 1. Prime Meal (Active Route Support) */}
            <Link
              href="/"
              className="flex items-center gap-2 cursor-pointer group relative"
            >
              <UtensilsCrossed
                size={18}
                className={
                  isActive("/prime-meal")
                    ? "text-yellow-500"
                    : "text-gray-500 group-hover:text-yellow-500"
                }
              />
              <span
                className={`text-sm font-bold transition-colors ${
                  isActive("/prime-meal")
                    ? "text-yellow-500"
                    : "text-gray-700 group-hover:text-yellow-500"
                }`}
              >
                Prime Meal
              </span>
              {isActive("/") && (
                <div className="absolute -bottom-[9px] left-0 w-full h-0.5 bg-yellow-500" />
              )}
            </Link>

            {/* 2. Prime Shop (With a 'New' Badge) */}
            <Link
              href="/prime-shop"
              className="flex items-center gap-2 cursor-pointer group relative"
            >
              <Store
                size={18}
                className={
                  isActive("/prime-shop")
                    ? "text-yellow-500"
                    : "text-gray-500 group-hover:text-yellow-500"
                }
              />
              <span
                className={`text-sm font-bold transition-colors ${
                  isActive("/prime-shop")
                    ? "text-yellow-500"
                    : "text-gray-700 group-hover:text-yellow-500"
                }`}
              >
                Prime Shop
              </span>
              <span className="absolute -top-3 -right-6 bg-yellow-300 text-[10px] px-1.5 py-0.5 rounded-full  animate-pulse">
                New
              </span>
              {isActive("/prime-shop") && (
                <div className="absolute -bottom-[9px] left-0 w-full h-0.5 bg-yellow-500" />
              )}
            </Link>

            {/* 4. Order Tracking  */}
            <Link
              href="/track-order"
              className="flex items-center gap-2 cursor-pointer group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>

              <span className="text-sm font-bold text-gray-700 group-hover:text-green-600 transition-colors">
                Track Order
              </span>
            </Link>
          </div>

          {/* 5. RIGHT SIDE: Delivery Location (Context Awareness) */}
          <div className="flex items-center gap-2 text-gray-500 hover:text-gray-800 cursor-pointer transition-all">
            <MapPin size={16} className="text-yellow-500" />
            <span className="text-xs font-medium">
              Deliver to: <b className="text-gray-800">Your Current Location</b>
            </span>
            <ChevronDown size={14} />
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 absolute w-full left-0 bg-white">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
            <div className="relative w-full mb-2">
              <input
                type="text"
                placeholder="Search food..."
                className="w-full border border-gray-300 bg-gray-50 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-yellow-400"
              />
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>

            {/* SecNavbar items in Mobile */}
            <div className="flex gap-4 py-2 border-b border-gray-50">
              <span className="text-sm font-bold flex items-center gap-2">
                <UtensilsCrossed size={16} /> Prime Meal
              </span>
              <span className="text-sm font-bold flex items-center gap-2">
                <Store size={16} /> Prime Shop
              </span>
            </div>

            <Link
              href="/"
              className="block text-gray-700 hover:text-yellow-500 font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-gray-700 hover:text-yellow-500 font-medium py-2"
            >
              Shop
            </Link>

            <hr className="border-gray-100" />

            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600 flex items-center gap-2">
                <Globe size={18} /> Language: EN
              </span>
              <span className="text-gray-600 flex items-center gap-2">
                <ShoppingCart size={18} /> Cart (3)
              </span>
            </div>

            <button className="w-full text-center border border-gray-300 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-50">
              Log in
            </button>

            <button className="w-full text-center bg-yellow-300 hover:bg-yellow-400 text-gray-900 py-3 rounded-lg font-bold shadow-sm">
              Sign up for Free Delivery
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

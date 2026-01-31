"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const SignUpBanner = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[240px] overflow-hidden rounded-2xl shadow-sm">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background/signbanner.jpg"
          alt="Signup Banner"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content: Left Side Top Button */}
      <div className="relative z-10 left-50 h-full w-full p-8 md:p-12">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-white text-3xl md:text-5xl lg:text-4xl font-black drop-shadow-md max-w-xl leading-tight">
            Sign up for free delivery on your first order
          </h2>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-8 py-2 rounded-xl shadow-lg transition-all active:scale-95 text-sm md:text-base">
            <Link href={"/signup"}>Sign Up Now</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUpBanner;

"use client";
import React from "react";

export const Nav = () => {
  return (
    <nav className="flex px-[5%] py-[2%] bg-gtahidiCream sticky top-0 right-0 left-0 z-50">
      <ul className="ml-auto flex gap-x-4 text-sm items-center">
        <div className="sm:flex gap-x-4 hidden">
          <a href="#benefits" className="cursor-pointer">
            Benefits
          </a>
          <a href="#how-it-works" className="cursor-pointer">
            How it works
          </a>
          <a href="#testimonials" className="cursor-pointer">
            Testimonials
          </a>
          <a className="cursor-pointer" href="#pricing">
            Pricing
          </a>
        </div>
        <button className="bg-gtahidiPurple p-3 rounded text-white font-medium">
          Start Creating
        </button>
      </ul>
    </nav>
  );
};

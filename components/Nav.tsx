"use client";
import React from "react";

export const Nav = () => {
  return (
    <nav className="flex px-[5%] py-[2%] bg-gtahidiCream sticky top-0 right-0 left-0 z-50">
      <ul className="ml-auto flex gap-x-4 text-sm items-center">
        <li onClick={() => handleScroll("#benefits")}>Benefits</li>
        <li onClick={() => handleScroll("#how-it-works")}>How it works</li>
        <li onClick={() => handleScroll("#testimonials")}>Testimonials</li>
        <li onClick={() => handleScroll("#pricing")}>Pricing</li>
        <button className="bg-gtahidiPurple p-3 rounded text-white font-medium">
          Start Creating
        </button>
      </ul>
    </nav>
  );
};

function handleScroll(id: string): void {
  const section = document.getElementById(id);
  if (section) {
    const sectionPosition = section.getBoundingClientRect().top;
    const offsetPosition = window.pageYOffset + sectionPosition;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

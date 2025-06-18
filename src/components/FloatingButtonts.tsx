"use client";

import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { BsTelephoneForward } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";

function FloatingButtons() {
  // Use a boolean state to manage visibility, which is more idiomatic for toggling.
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
        {/*
          Conditionally apply Tailwind classes based on isVisible state.
          We use absolute positioning and opacity/pointer-events for the "hide" effect.
        */}
        <a
          className={`${
            isVisible
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-5 opacity-0 pointer-events-none"
          } mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white transition-all duration-300 ease-in-out`}
          href="https://wa.me/+905373234343">
          <IoLogoWhatsapp size={30} />
        </a>
        <a
          className={`${
            isVisible
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-5 opacity-0 pointer-events-none"
          } mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white transition-all duration-300 ease-in-out`}
          href="tel:+905373234343">
          <BsTelephoneForward />
        </a>
        <a
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-300 ease-out hover:bg-red-500 animate-spin-once"
          onClick={toggleVisibility}
          href="#">
          {isVisible ? <RiCloseFill /> : <IoMdContact />}
        </a>
      </div>
    </>
  );
}

export default FloatingButtons;

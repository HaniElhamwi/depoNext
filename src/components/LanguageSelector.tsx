"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import React from "react";

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLang = (lang: string) => {
    if (lang === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = lang; // Replace the locale segment
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <div className="hidden sm:block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <GlobeIcon className="h-5 w-5" />
            <span className="uppercase">{currentLocale}</span>
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {/* <DropdownMenuItem
            onClick={() => switchLang("en")}
            className={`flex items-center justify-between font-montserrat ${
              currentLocale === "en" ? "font-bold" : ""
            }`}>
            English
            {currentLocale === "en" && <CheckIcon className="h-4 w-4" />}
          </DropdownMenuItem> */}
          <DropdownMenuItem
            onClick={() => switchLang("tr")}
            className={`flex items-center justify-between font-montserrat ${
              currentLocale === "tr" ? "font-bold" : ""
            }`}>
            Türkçe
            {currentLocale === "tr" && <CheckIcon className="h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => switchLang("ar")}
            className={`flex items-center justify-between font-changa ${
              currentLocale === "ar" ? "font-bold" : ""
            }`}>
            عربي
            {currentLocale === "ar" && <CheckIcon className="h-4 w-4" />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

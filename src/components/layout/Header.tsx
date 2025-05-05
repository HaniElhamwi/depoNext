"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LangaugeSelector from "../LanguageSelector";
import { useTranslations } from "next-intl";
import Image from "next/image";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "EVENTS", path: "/events" },
  { name: "BLOG", path: "/blog" },
  { name: "REVIRES", path: "/reviews" },
  { name: "FAQ", path: "/faq" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = useTranslations("HOME_PAGE");

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            {/* <div className="h-10 w-10 bg-ssu-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold">SSU</span>
            </div> */}
            <Image
              src="/images/logo.png"
              alt="SSU Logo"
              width={100}
              height={100}
              className="h-10 w-10 rounded-full"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-ssu-blue rtl:font-changa ltr:font-montserrat">
                {t("SSU")}
              </h1>
              <p className="text-xs text-[#e8791d] rtl:font-changa ltr:font-montserrat">
                {t("KARABUK_UNIVERSITY")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-800 hover:text-ssu-blue !font-semi transition-colors font-tajawal">
                {t(item.name)}
              </Link>
            ))}
            <Button
              variant="default"
              className="bg-ssu-blue hover:bg-ssu-blue/90">
              {t("CONTACT_US")}
            </Button>
            <LangaugeSelector />
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block text-gray-700 hover:text-ssu-blue font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}>
                {t(item.name)}
              </Link>
            ))}
            <Button
              variant="default"
              className="w-full mt-2 bg-ssu-blue hover:bg-ssu-blue/90"
              onClick={() => setMobileMenuOpen(false)}>
              {t("CONTACT_US")}
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

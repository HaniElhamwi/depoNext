"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "PRICING", path: "/pricing" },
  { name: "CONTACT", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("HOME_PAGE");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Depo Next Logo"
            width={120}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-gray-700 hover:text-primary transition-colors font-medium text-sm">
              {t(item.name)}
            </Link>
          ))}
          <Link href="https://wa.me/+905373234343" target="_blank">
            <Button className="bg-primary hover:bg-primary/90 transition-all">
              {t("CONTACT_US")}
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 text-gray-700"
          aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="fixed right-0 top-0 w-72 h-full bg-white shadow-lg px-6 py-6 z-50 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Depo Next Logo"
                width={100}
                height={50}
              />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700 text-base hover:text-primary transition-colors">
                  {t(item.name)}
                </Link>
              ))}
              <Link href="https://wa.me/+905373234343" target="_blank">
                <Button
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 w-full bg-primary hover:bg-primary/90">
                  {t("CONTACT_US")}
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

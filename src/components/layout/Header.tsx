"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Events", path: "/events" },
  { name: "Blog", path: "/blog" },
  { name: "Reviews", path: "/reviews" },
  { name: "FAQ", path: "/faq" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 bg-ssu-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold">SSU</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-ssu-blue">
                Syrian Student Union
              </h1>
              <p className="text-xs text-gray-600">Karabük University</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-gray-700 hover:text-ssu-blue font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              className="bg-ssu-blue hover:bg-ssu-blue/90"
            >
              Contact Us
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
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
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              className="w-full mt-2 bg-ssu-blue hover:bg-ssu-blue/90"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

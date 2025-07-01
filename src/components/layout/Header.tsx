"use client";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "PRICING", path: "/pricing" },
  { name: "CONTACT", path: "/contact" },
];

const Header = () => {
  const t = useTranslations("HOME_PAGE");

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Depo Next Logo"
            width={160}
            height={70}
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

        {/* Mobile Menu using Sheet */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex justify-between items-center mb-6">
                <Image
                  src="/images/logo.png"
                  alt="Depo Next Logo"
                  width={160}
                  height={60}
                  objectFit="cover"
                />
                {/* <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X size={24} />
                  </Button>
                </SheetClose> */}
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.name}>
                    <Link
                      href={item.path}
                      className="text-gray-700 text-base hover:text-primary transition-colors">
                      {t(item.name)}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link href="https://wa.me/+905373234343" target="_blank">
                    <Button className="mt-4 w-full bg-primary hover:bg-primary/90">
                      {t("CONTACT_US")}
                    </Button>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

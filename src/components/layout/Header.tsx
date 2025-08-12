"use client";

import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
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
import { usePathname } from "next/navigation";

// ⬇️ hover-friendly (shadcn/Radix)
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/servisler" },
  { name: "SERVICES_LOCATIONS", path: "/servisler" }, // rendered as hover card
  { name: "PRICING", path: "/pricing" },
  { name: "CONTACT", path: "/iletisim" },
];

const locations = [
  { label: "Şişli Depo Kiralama", href: "/servisler/sisli-depo-kiralama" },
  {
    label: "Mecidiyeköy Depo Kiralama",
    href: "/servisler/mecidiyekoy-depo-kiralama",
  },
  {
    label: "Beşiktaş Depo Kiralama",
    href: "/servisler/besiktas-depo-kiralama",
  },
  {
    label: "Kağıthane Depo Kiralama",
    href: "/servisler/kagithane-depo-kiralama",
  },
  { label: "Beyoğlu Depo Kiralama", href: "/servisler/beyoglu-depo-kiralama" },
];

const Header = () => {
  const t = useTranslations("HOME_PAGE");
  const pathname = usePathname();
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);

  const isLocationsPage = pathname?.startsWith("/servisler/");

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
          {navItems.map((item) => {
            if (item.name === "SERVICES_LOCATIONS") {
              return (
                <HoverCard key={item.name} openDelay={100} closeDelay={200}>
                  <HoverCardTrigger asChild>
                    <button
                      type="button"
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        isLocationsPage
                          ? "text-primary"
                          : "text-gray-700 hover:text-primary"
                      }`}>
                      {t(item.name)}
                      <ChevronDown size={16} className="opacity-70" />
                    </button>
                  </HoverCardTrigger>

                  <HoverCardContent
                    align="start"
                    sideOffset={8}
                    className="w-80 p-2">
                    <div className="flex flex-col">
                      {locations.map((loc) => {
                        const isActive = pathname === loc.href;
                        return (
                          <Link
                            key={loc.href}
                            href={loc.href}
                            className={`rounded-md px-2 py-2 text-sm transition-colors ${
                              isActive
                                ? "bg-primary text-white"
                                : "text-gray-700 hover:bg-gray-100 hover:text-primary"
                            }`}>
                            {loc.label}
                          </Link>
                        );
                      })}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );
            }

            const isActiveTop = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActiveTop
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}>
                {t(item.name)}
              </Link>
            );
          })}

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
                />
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => {
                  if (item.name === "SERVICES_LOCATIONS") {
                    return (
                      <div key={item.name} className="flex flex-col">
                        <button
                          type="button"
                          onClick={() => setMobileLocationsOpen((v) => !v)}
                          className="flex items-center justify-between text-gray-700 text-base hover:text-primary transition-colors">
                          <span>{t(item.name)}</span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${
                              mobileLocationsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {mobileLocationsOpen && (
                          <div className="mt-2 ml-3 flex flex-col gap-2">
                            {locations.map((loc) => {
                              const isActive = pathname === loc.href;
                              return (
                                <SheetClose asChild key={loc.href}>
                                  <Link
                                    href={loc.href}
                                    className={`text-sm transition-colors ${
                                      isActive
                                        ? "text-primary font-semibold"
                                        : "text-gray-700 hover:text-primary"
                                    }`}>
                                    {loc.label}
                                  </Link>
                                </SheetClose>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  const isActiveTop = pathname === item.path;
                  return (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.path}
                        className={`text-base transition-colors ${
                          isActiveTop
                            ? "text-primary font-semibold"
                            : "text-gray-700 hover:text-primary"
                        }`}>
                        {t(item.name)}
                      </Link>
                    </SheetClose>
                  );
                })}

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

"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("HOME_PAGE.FOOTER");

  return (
    <footer className="bg-primary text-white py-16 bg-secondary">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">DepoNext</h2>
          <p className="text-gray-300">{t("BRAND_DESCRIPTION")}</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {t("NAVIGATION.TITLE")}
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline text-gray-300">
                {t("NAVIGATION.HOME")}
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline text-gray-300">
                {t("NAVIGATION.SERVICES")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-gray-300">
                {t("NAVIGATION.ABOUT")}
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline text-gray-300">
                {t("NAVIGATION.FAQ")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline text-gray-300">
                {t("NAVIGATION.CONTACT")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("CONTACT.TITLE")}</h3>
          <Link
            href="https://www.google.com/maps/place/Cam+Pak+otopark+ve+y%C4%B1kama/@41.0655793,29.0040037,21z/data=!4m14!1m7!3m6!1s0x14cab654199f9f09:0xc56988360e82a6aa!2zR2F5cmV0dGVwZSwgVmVmYWJleSBTb2thxJ_EsSBObzoyNSBEOjEsIDM0MzQ5IEJlxZ9pa3RhxZ8vxLBzdGFuYnVs!3b1!8m2!3d41.0656118!4d29.0042239!3m5!1s0x14cab7e0e90d1005:0x1bfb0e4fa8b47755!8m2!3d41.0656188!4d29.0039287!16s%2Fg%2F11y1dv3j2v?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
            className="text-gray-300 hover:underline">
            <p className="text-gray-300">{t("CONTACT.LOCATION")}</p>
          </Link>
          <div className="flex flex-col gap-2">
            <Link
              className="text-gray-300 mt-2 hover:underline"
              href={`mailto:${t("CONTACT.EMAIL")}`}>
              {t("CONTACT.EMAIL")}
            </Link>
            <Link
              className="text-gray-300 hover:underline"
              href={`tel:${t("CONTACT.PHONE").replace(/\s+/g, "")}`}>
              {t("CONTACT.PHONE")}
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t("FOLLOW_US")}</h3>
          <div className="flex gap-4">
            <Link href="#" className="text-white hover:text-secondary">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-white hover:text-secondary">
              <FaInstagram />
            </Link>
            <Link href="#" className="text-white hover:text-secondary">
              <FaLinkedinIn />
            </Link>
            <Link href="#" className="text-white hover:text-secondary">
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DepoNext. {t("COPYRIGHT")}
      </div>
    </footer>
  );
};

export default Footer;

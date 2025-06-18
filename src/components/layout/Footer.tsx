"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 bg-secondary">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">DepoNext</h2>
          <p className="text-gray-300">
            Güvenli, temiz ve modern depolama çözümleri ile eşyalarınızı bizimle
            güven içinde saklayın.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline text-gray-300">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline text-gray-300">
                Hizmetler
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-gray-300">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline text-gray-300">
                Sık Sorulanlar
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline text-gray-300">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">İletişim</h3>
          <p className="text-gray-300">İstanbul, Türkiye</p>
          <div className="flex flex-col gap-2">
            <Link
              className="text-gray-300 mt-2 hover:underline"
              href={`mailto:info@deponext.com`}>
              info@deponext.com
            </Link>
            <Link
              className="text-gray-300 hover:underline"
              href={`tel:+905373234343`}>
              +90 537 323 43 43
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
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
        © {new Date().getFullYear()} DepoNext. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;

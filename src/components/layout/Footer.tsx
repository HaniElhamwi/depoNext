import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ssu-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Syrian Student Union</h3>
            <p className="mb-4 text-gray-200">
              Supporting Syrian students at Karabük University through
              community, resources, and activities.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="mailto:contact@ssukarabuk.com"
                className="hover:text-gray-300 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/activities"
                  className="text-gray-200 hover:text-white transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-gray-200 hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-200 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">Karabük Üniversitesi</p>
              <p className="mb-2">Karabük, Turkey</p>
              <p className="mb-2">
                <a
                  href="mailto:contact@ssukarabuk.com"
                  className="text-gray-200 hover:text-white transition-colors">
                  contact@ssukarabuk.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+905555555555"
                  className="text-gray-200 hover:text-white transition-colors">
                  +90 555 555 55 55
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-600 text-center text-gray-300">
          <p>
            &copy; {currentYear} Karabük University Syrian Student Union. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

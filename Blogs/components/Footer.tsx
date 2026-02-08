import {
  Clock,
  Github,
  Instagram,
  Linkedin,
  MapPin,
  MessageCircle,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer
      className="w-full pt-16 pb-8 px-6 md:px-12 lg:px-20 border-t 
      bg-gradient-to-b from-white to-[#f2f2f2] border-black/10 text-neutral-700
      dark:from-[#1a1a1a] dark:to-[#0f0f0f] dark:border-white/10 dark:text-neutral-400"
    >
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand + Social */}
        <div>
          <a href="https://fairarena.app/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://fra.cloud.appwrite.io/v1/storage/buckets/697b974d001a7a80496e/files/697b9764002453409e98/view?project=69735edc00127d2033d8&mode=admin"
              className="w-30 -mb-10 -mt-10"
              alt="FairArena Logo"
              width={120}
              height={120}
            />
          </a>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            Empowering the future of fair play and competitive integrity.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a
              href="https://github.com/FairArena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github className="w-5 h-5 cursor-pointer duration-200 hover:scale-110 text-[#556000] hover:text-[#8aa300] dark:text-[#DDFF00]" />
            </a>
            <a
              href="https://www.linkedin.com/company/fairarena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5 cursor-pointer duration-200 hover:scale-110 text-[#556000] hover:text-[#8aa300] dark:text-[#DDFF00]" />
            </a>
            <a
              href="https://www.instagram.com/fair.arena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 cursor-pointer duration-200 hover:scale-110 text-[#556000] hover:text-[#8aa300] dark:text-[#DDFF00]" />
            </a>
            <a
              href="https://x.com/real_fairarena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
            >
              <Twitter className="w-5 h-5 cursor-pointer duration-200 hover:scale-110 text-[#556000] hover:text-[#8aa300] dark:text-[#DDFF00]" />
            </a>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Menu
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { label: 'About', path: 'https://fairarena.app/about' },
              { label: 'Why Choose Us', path: 'https://fairarena.app/why-choose-us' },
              { label: 'Changelog', path: 'https://fairarena.app/changelog' },
              { label: 'FAQ', path: 'https://fairarena.app/faq' },
              { label: 'Pricing', path: 'https://fairarena.app/#pricing', hash: true },
              {
                label: 'Status',
                path: 'https://status.fairarena.app',
                badge: true,
              },
            ].map((item) => (
              <li
                key={item.path}
                className="cursor-pointer flex items-center gap-2 hover:text-[#556000] dark:hover:text-[#DDFF00]"
              >
                {item.badge && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                )}
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Resources
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              {
                label: 'Docs',
                path: 'https://docs.fairarena.app',
              },
              {
                label: 'Blog',
                path: 'https://blogs.fairarena.app',
              },
              { label: 'Accessibility', path: 'https://fairarena.app/accessibility' },
              { label: 'Community Guidelines', path: 'https://fairarena.app/community-guidelines' },
              { label: 'Security Policy', path: 'https://fairarena.app/security-policy' },
            ].map((item) => (
              <li
                key={item.path}
                className="cursor-pointer hover:text-[#556000] dark:hover:text-[#DDFF00]"
              >
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MessageCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <a
                  href="https://fairarena.app/support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-medium cursor-pointer hover:text-[#556000] dark:hover:text-[#DDFF00]"
                >
                  Support
                </a>
                <div className="text-xs mt-0.5 text-neutral-500">
                  We usually respond within 24 hours
                </div>
              </div>
            </li>
            <li className="flex gap-2">
              <Clock className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="text-neutral-600 dark:text-neutral-400">
                Mon-Fri, 9am - 5pm EST
              </span>
            </li>
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="text-neutral-600 dark:text-neutral-400">
                United States
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-neutral-300 dark:border-neutral-700"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm gap-4 md:gap-0 text-neutral-600 dark:text-neutral-500">
        <p>© {new Date().getFullYear()} FairArena. All rights reserved.</p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {[
            { key: 'privacy-policy', label: 'Privacy Policy' },
            { key: 'terms-and-conditions', label: 'Terms & Conditions' },
            { key: 'cookie-policy', label: 'Cookie Policy' },
            { key: 'refund', label: 'Refund Policy' },
            { key: 'dmca', label: 'DMCA' },
          ].map((item) => (
            <p
              key={item.key}
              className="cursor-pointer capitalize hover:text-[#556000] dark:hover:text-[#DDFF00]"
            >
              <a
                href={`https://fairarena.app/${item.key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            </p>
          ))}
        </div>

        <p>Built with ❤️ by FairArena</p>
      </div>
    </footer>
  );
}

export default Footer;

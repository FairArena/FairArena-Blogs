import { } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="3" width="20" height="18" rx="2" ry="2" />
      <path d="M7 9h3v8H7z" />
      <path d="M10 9v8" />
      <path d="M16 9c1.5 0 3 1 3 3v5h-3v-4c0-1-0.5-2-2-2s-2 1-2 2v4h-3v-8h3v1" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function IconGithub({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.4-3.88-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.17a11.06 11.06 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.48 3.17-1.17 3.17-1.17.63 1.57.23 2.73.11 3.02.74.8 1.19 1.82 1.19 3.07 0 4.39-2.7 5.36-5.27 5.64.42.36.8 1.07.8 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.2.67.8.55C20.71 21.39 24 17.08 24 12c0-6.35-5.15-11.5-12-11.5z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 11.37 7 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconMessageCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function Footer() {
  return (
    <footer
      className="w-full pt-16 pb-8 px-6 md:px-12 lg:px-20 border-t 
      bg-linear-to-b from-white to-[#f2f2f2] border-black/10 text-neutral-700
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
              <IconGithub className="w-5 h-5 cursor-pointer duration-200 hover:scale-110 text-[#556000] hover:text-[#8aa300] dark:text-[#DDFF00]" />
            </a>
            <a
              href="https://www.linkedin.com/company/fairarena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5 cursor-pointer duration-200 hover:scale-110 text-[#556000] hover:text-[#8aa300] dark:text-[#DDFF00]" />
            </a>
            <a
              href="https://www.instagram.com/fair.arena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <IconInstagram className="w-5 h-5 cursor-pointer duration-200 hover:scale-110 text-[#556000] hover:text-[#8aa300] dark:text-[#DDFF00]" />
            </a>
            <a
              href="https://x.com/real_fairarena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              title="X"
            >
              <XIcon className="w-5 h-5 cursor-pointer duration-200 hover:scale-110 text-[#556000] hover:text-[#8aa300] dark:text-[#DDFF00]" />
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
              <IconMessageCircle className="w-4 h-4 shrink-0 mt-0.5" />
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
              <IconClock className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="text-neutral-600 dark:text-neutral-400">
                Mon-Fri, 9am - 5pm EST
              </span>
            </li>
            <li className="flex gap-2">
              <IconMapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span className="text-neutral-600 dark:text-neutral-400">
                Delhi, India
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

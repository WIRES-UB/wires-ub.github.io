"use client";

// "use client" is needed because this component uses browser-only features:
// useState for open/close state, useEffect for click-outside detection, usePathname for the active link

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import clsx from "clsx"; // clsx combines multiple class names cleanly

// Links shown inside the "Research" dropdown menu
const researchLinks = [
  { href: "/research/localization/", label: "Localization & Navigation" },
  { href: "/research/digital-twins/", label: "Digital-Twins for Sensing" },
  { href: "/research/robotics/", label: "Wireless for Robotics" },
  { href: "/research/privacy/", label: "Privacy for Sensing" },
];

export default function Navbar() {
  // pathname is the current URL path (e.g., "/research/robotics/")
  const pathname = usePathname();

  // Controls whether the mobile slide-out menu is open
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Controls whether the Research dropdown is open
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // navRef lets us detect clicks that happen outside the navbar element
  const navRef = useRef<HTMLElement>(null);

  // Close the dropdown and mobile menu when the user clicks anywhere outside the navbar
  useEffect(() => {
    function handleClickOutside(event: Event) {
      const clickedElement = event.target as HTMLElement;
      if (navRef.current && !navRef.current.contains(clickedElement)) {
        setIsDropdownOpen(false);
        setIsMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup: remove the listener when the component is removed from the page
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close both menus whenever the user navigates to a different page
  useEffect(() => {
    setIsMobileOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  // Returns true if the given href matches or is a parent of the current page URL
  function isActivePage(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  // Returns the correct CSS classes for a nav link depending on whether it is the active page
  function getLinkClass(href: string) {
    const base = "px-3 py-2 text-sm font-medium transition-colors duration-150 rounded";
    if (isActivePage(href)) {
      // Active page: white text with underline decoration
      return clsx(base, "text-white font-semibold underline underline-offset-4 decoration-white/60");
    }
    // Inactive page: lighter blue text that turns white on hover
    return clsx(base, "text-blue-100 hover:text-white");
  }

  return (
    // navRef is attached here so the click-outside handler can check if a click was inside this element
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-ub-blue shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Top bar: logo on the left, desktop links on the right, hamburger on mobile */}
        <div className="flex items-center justify-between h-16">

          {/* Logo image — clicking it goes to the home page */}
          <Link href="/" className="flex items-center shrink-0 h-16 overflow-hidden">
            <Image
              src="/images/wires.jpg"
              alt="WiRES Lab"
              width={200}
              height={64}
              className="h-16 w-auto object-cover"
              priority
            />
          </Link>

          {/* Desktop nav links — hidden on small screens, visible on md and larger */}
          <ul className="hidden md:flex items-center gap-1">
            <li>
              <Link href="/" className={getLinkClass("/")}>
                Home
              </Link>
            </li>

            {/* Research link with a hover dropdown showing sub-topics */}
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="/research/"
                className={clsx(getLinkClass("/research"), "flex items-center gap-1")}
              >
                Research
                {/* Arrow icon rotates 180° when dropdown is open */}
                <svg
                  className={clsx(
                    "w-3 h-3 transition-transform duration-200",
                    isDropdownOpen && "rotate-180"
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown panel — fades in/out using opacity and visibility transitions */}
              <div
                className={clsx(
                  "absolute left-0 top-full pt-1 w-60 transition-all duration-200",
                  isDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1"
                )}
              >
                <ul className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                  {researchLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={clsx(
                          "block px-4 py-2.5 text-sm transition-colors duration-150",
                          isActivePage(item.href)
                            ? "bg-blue-50 text-ub-blue font-medium"
                            : "text-gray-700 hover:bg-blue-50 hover:text-ub-blue"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link href="/team/" className={getLinkClass("/team")}>
                Team
              </Link>
            </li>
            <li>
              <Link href="/publications/" className={getLinkClass("/publications")}>
                Publications
              </Link>
            </li>
          </ul>

          {/* Hamburger button — only visible on small screens (mobile).
              Toggles the mobile menu open or closed. */}
          <button
            className="md:hidden p-2 rounded text-white hover:text-blue-100"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {/* Show an X icon when menu is open, or three horizontal lines (hamburger) when closed */}
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — slides open/closed using max-height transition.
          Only visible on small screens when isMobileOpen is true. */}
      <div
        className={clsx(
          "md:hidden border-t border-blue-400 bg-ub-blue overflow-hidden transition-all duration-200",
          isMobileOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <ul className="px-4 py-2 space-y-1">
          <li>
            <Link href="/" className={clsx(getLinkClass("/"), "block")}>
              Home
            </Link>
          </li>

          {/* Research link with a toggle button to expand/collapse the sub-links */}
          <li>
            <div className="flex items-center justify-between">
              <Link href="/research/" className={getLinkClass("/research")}>
                Research
              </Link>
              {/* Arrow button toggles the sub-menu */}
              <button
                className="p-1 text-blue-100 hover:text-white"
                onClick={() => setIsDropdownOpen((v) => !v)}
                aria-label="Toggle research submenu"
              >
                <svg
                  className={clsx("w-4 h-4 transition-transform", isDropdownOpen && "rotate-180")}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Sub-links shown only when isDropdownOpen is true */}
            {isDropdownOpen && (
              <ul className="mt-1 ml-4 space-y-1 border-l-2 border-blue-300 pl-3">
                {researchLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "block py-1.5 text-sm",
                        isActivePage(item.href)
                          ? "text-white font-medium"
                          : "text-blue-100 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link href="/team/" className={clsx(getLinkClass("/team"), "block")}>
              Team
            </Link>
          </li>
          <li>
            <Link href="/publications/" className={clsx(getLinkClass("/publications"), "block")}>
              Publications
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#what-i-build", label: "Build" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#highlights", label: "Highlights" },
  { href: "#principles", label: "Principles" },
  { href: "#projects", label: "Products" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (open) {
      firstMobileLinkRef.current?.focus();
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <motion.div
        style={{ scaleX }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-accent"
      />
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-8 py-4 lg:px-10"
      >
        <a
          href="#"
          aria-label={`${profile.name}, back to top`}
          className="shrink-0 whitespace-nowrap text-lg font-semibold tracking-tight sm:text-xl"
        >
          {profile.name}
        </a>
        <div className="flex min-w-0 items-center gap-6">
          <ul className="hidden min-w-0 gap-4 whitespace-nowrap text-xs text-muted sm:gap-5 sm:text-sm xl:flex">
            {links.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="relative transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {profile.links.resume && (
            <a
              href={profile.links.resume}
              download
              className="hidden shrink-0 rounded-full border border-border px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent xl:inline-flex"
            >
              Resume
            </a>
          )}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent xl:hidden"
          >
            {open ? <X aria-hidden="true" size={17} /> : <Menu aria-hidden="true" size={17} />}
          </button>
          <ThemeToggle />
        </div>
      </nav>
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background/95 px-8 py-4 shadow-sm xl:hidden"
        >
          <div className="mx-auto grid max-w-6xl gap-2 sm:grid-cols-2">
            {links.map((link, index) => (
              <a
                key={link.href}
                ref={index === 0 ? firstMobileLinkRef : undefined}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            {profile.links.resume && (
              <a
                href={profile.links.resume}
                download
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-accent transition-colors hover:bg-surface"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

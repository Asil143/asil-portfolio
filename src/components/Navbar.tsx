"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const primaryLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#projects", label: "Products" },
  { href: "#contact", label: "Contact" },
];

const moreLinks = [
  { href: "#what-i-build", label: "Build" },
  { href: "#skills", label: "Skills" },
  { href: "#highlights", label: "Highlights" },
  { href: "#principles", label: "Principles" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
];

const links = [...primaryLinks, ...moreLinks];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const moreRef = useRef<HTMLLIElement>(null);
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

  useEffect(() => {
    if (!moreOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (!moreRef.current?.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [moreOpen]);

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
        <div className="flex min-w-0 items-center gap-5">
          <ul className="hidden min-w-0 gap-5 whitespace-nowrap text-sm text-muted lg:flex">
            {primaryLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="relative transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="relative shrink-0" ref={moreRef}>
              <button
                type="button"
                aria-expanded={moreOpen}
                aria-haspopup="true"
                onClick={() => setMoreOpen((value) => !value)}
                className="flex items-center gap-1 transition-colors hover:text-foreground"
              >
                More
                <ChevronDown aria-hidden="true" size={14} />
              </button>
              {moreOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-border bg-background/95 p-1.5 shadow-lg backdrop-blur-xl">
                  {moreLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>
          {profile.links.resume && (
            <a
              href={profile.links.resume}
              download
              className="hidden shrink-0 rounded-full border border-border px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent lg:inline-flex"
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
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? <X aria-hidden="true" size={17} /> : <Menu aria-hidden="true" size={17} />}
          </button>
          <ThemeToggle />
        </div>
      </nav>
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background/95 px-8 py-4 shadow-sm lg:hidden"
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

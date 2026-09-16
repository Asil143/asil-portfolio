"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Products" },
  { href: "#contact", label: "Contact" },
  { href: "#what-i-build", label: "Build" },
  { href: "#highlights", label: "Highlights" },
  { href: "#principles", label: "Principles" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
];

const MORE_LABEL_WIDTH_BUFFER = 4;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(links.length);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const moreRef = useRef<HTMLLIElement>(null);
  const containerRef = useRef<HTMLUListElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
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

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const linkEls = Array.from(
      measure.querySelectorAll<HTMLElement>("[data-measure-link]"),
    );
    const moreEl = measure.querySelector<HTMLElement>("[data-measure-more]");
    const widths = linkEls.map((el) => el.getBoundingClientRect().width);
    const moreWidth =
      (moreEl?.getBoundingClientRect().width ?? 0) + MORE_LABEL_WIDTH_BUFFER;
    const gap = parseFloat(getComputedStyle(container).columnGap || "0") || 0;

    const compute = () => {
      const available = container.getBoundingClientRect().width;

      for (let count = widths.length; count >= 0; count--) {
        const linksWidth = widths
          .slice(0, count)
          .reduce((sum, w, idx) => sum + w + (idx > 0 ? gap : 0), 0);
        const needsMoreButton = count < widths.length;
        const totalWidth = needsMoreButton
          ? linksWidth + (count > 0 ? gap : 0) + moreWidth
          : linksWidth;

        if (totalWidth <= available || count === 0) {
          setVisibleCount(count);
          return;
        }
      }
    };

    compute();
    const observer = new ResizeObserver(compute);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const visibleLinks = links.slice(0, visibleCount);
  const overflowLinks = links.slice(visibleCount);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <motion.div
        style={{ scaleX }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-accent"
      />
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center gap-8 px-8 py-4 lg:px-10"
      >
        <a
          href="#"
          aria-label={`${profile.name}, back to top`}
          className="shrink-0 whitespace-nowrap text-lg font-semibold tracking-tight sm:text-xl"
        >
          {profile.name}
        </a>

        {/* Hidden measurer: same markup/styles as the real links, used only to read natural widths. */}
        <div
          ref={measureRef}
          aria-hidden="true"
          className="pointer-events-none invisible flex gap-5 whitespace-nowrap text-sm"
          style={{ position: "fixed", top: -9999, left: -9999 }}
        >
          {links.map((link) => (
            <span key={link.href} data-measure-link>
              {link.label}
            </span>
          ))}
          <span data-measure-more className="flex items-center gap-1">
            More <ChevronDown size={14} />
          </span>
        </div>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-5">
          <ul
            ref={containerRef}
            className="hidden min-w-0 flex-1 items-center gap-5 whitespace-nowrap text-sm text-muted lg:flex"
          >
            {visibleLinks.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="relative transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {overflowLinks.length > 0 && (
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
                    {overflowLinks.map((link) => (
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
            )}
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

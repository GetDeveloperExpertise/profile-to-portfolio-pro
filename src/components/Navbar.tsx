import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "glass shadow-[var(--shadow-elevated)]" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan to-violet text-primary-foreground text-sm">
              W
            </span>
            <span className="hidden sm:inline">Waqas Ahmed</span>
          </a>
          <ul className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 rounded-full hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary transition-colors"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}

import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "impact", label: "Impact" },
  { id: "skills", label: "Stack" },
  { id: "experience", label: "Journey" },
  { id: "certifications", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-[var(--shadow-elevated)]" : ""
          }`}
        >
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 font-display text-lg"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-xl overflow-hidden text-primary-foreground font-sans font-semibold text-sm">
              <span className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary animate-aurora" />
              <span className="relative">W</span>
            </span>
            <span className="hidden sm:inline">
              Waqas <span className="italic text-accent">Ahmed</span>
            </span>
          </button>
          <ul className="hidden md:flex items-center gap-1 text-sm text-muted-foreground font-sans">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(l.id)}
                  className="px-3.5 py-2 rounded-full hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold font-sans hover:shadow-[var(--shadow-mint)] transition-shadow"
          >
            Hire me →
          </button>
        </nav>
      </div>
    </header>
  );
}

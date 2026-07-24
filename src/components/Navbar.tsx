import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
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
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 font-display font-semibold"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan to-violet text-primary-foreground text-sm">
              W
            </span>
            <span className="hidden sm:inline">Waqas Ahmed</span>
          </button>
          <ul className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => scrollToId(l.id)}
                  className="px-3 py-2 rounded-full hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => scrollToId("contact")}
            className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-primary transition-colors"
          >
            Hire me
          </button>
        </nav>
      </div>
    </header>
  );
}

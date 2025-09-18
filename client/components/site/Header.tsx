import { useState } from "react";
import { cn } from "@/lib/utils";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
  >
    {children}
  </a>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="hidden md:block border-b bg-secondary/20">
        <div className="container flex items-center justify-between py-2 text-xs text-foreground/70">
          <div className="flex items-center gap-4">
            <span>📞 (555) 123-4567</span>
            <span>✉️ hello@brightbeginnings.school</span>
            <span>📍 123 Preschool Ave, Sunnyvale</span>
          </div>
          <div className="flex items-center gap-3">
            <a aria-label="Facebook" href="#" className="hover:text-primary">📘</a>
            <a aria-label="Instagram" href="#" className="hover:text-primary">📸</a>
            <a aria-label="Twitter" href="#" className="hover:text-primary">🐦</a>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between py-4">
        <a href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-primary to-accent grid place-items-center text-white font-bold">BB</div>
          <div className="leading-tight">
            <div className="text-xl font-extrabold tracking-tight">BrightBeginnings</div>
            <div className="text-xs text-foreground/60 -mt-0.5">Preschool & Kindergarten</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#programs">Programs</NavLink>
          <NavLink href="#events">Events</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a
            href="#admissions"
            className={cn(
              "inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            )}
          >
            Admissions
          </a>
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h18" />
            <path d="M3 6h18" />
            <path d="M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden border-t bg-white", open ? "block" : "hidden")}
        onClick={() => setOpen(false)}
      >
        <div className="container py-4 grid gap-4">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#programs">Programs</NavLink>
          <NavLink href="#events">Events</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <a
            href="#admissions"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm"
          >
            Admissions
          </a>
        </div>
      </div>
    </header>
  );
}

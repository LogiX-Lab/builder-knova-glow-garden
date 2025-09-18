export default function Footer() {
  return (
    <footer className="mt-24 border-t bg-gradient-to-b from-white to-secondary/20">
      <div className="container py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-primary to-accent grid place-items-center text-white font-bold">BB</div>
            <div className="text-lg font-extrabold">BrightBeginnings</div>
          </div>
          <p className="mt-4 text-sm text-foreground/70 max-w-xs">
            A joyful and nurturing place where curiosity blossoms and little minds grow every day.
          </p>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
            <li><a href="#about" className="hover:text-primary">About</a></li>
            <li><a href="#programs" className="hover:text-primary">Programs</a></li>
            <li><a href="#events" className="hover:text-primary">Events</a></li>
            <li><a href="#gallery" className="hover:text-primary">Gallery</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <ul className="mt-4 grid gap-2 text-sm text-foreground/80">
            <li>📞 (555) 123-4567</li>
            <li>✉️ hello@brightbeginnings.school</li>
            <li>📍 123 Preschool Ave, Sunnyvale</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Newsletter</div>
          <p className="mt-4 text-sm text-foreground/70">Get school news, events, and updates.</p>
          <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              className="flex-1 rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your email"
              aria-label="Email"
            />
            <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-center text-xs text-foreground/60">
          © {new Date().getFullYear()} BrightBeginnings Preschool. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

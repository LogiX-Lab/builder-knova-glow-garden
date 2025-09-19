import CreateProjectButton from "./CreateProjectButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">
            Joyful Learning
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            Where Little Minds Bloom Every Day
          </h1>
          <p className="mt-4 max-w-prose text-foreground/70 md:text-lg">
            A nurturing environment that sparks curiosity, creativity, and confidence in every child.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#admissions"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02]"
            >
              Apply for Admission
            </a>
            <CreateProjectButton />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-secondary/50 to-accent/40 blur-xl" />
          <img
            src="https://images.unsplash.com/photo-1596464716121-8b2033e06b3a?q=80&w=1600&auto=format&fit=crop"
            alt="Happy kids learning from each others"
            className="w-full rounded-[1.5rem] border shadow-xl object-cover aspect-[16/10]"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

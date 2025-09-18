import { cn } from "@/lib/utils";

export function Section({ id, className, children, title, subtitle }: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className="container">
        {(title || subtitle) && (
          <div className="mx-auto mb-10 max-w-2xl text-center">
            {subtitle && (
              <div className="text-xs font-extrabold uppercase tracking-widest text-primary">{subtitle}</div>
            )}
            {title && (
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function FeatureCard({ colorClass, title, description, icon }: {
  colorClass: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className={cn("rounded-2xl border p-6 shadow-sm transition-transform hover:-translate-y-1", colorClass)}>
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 text-2xl">
        {icon}
      </div>
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-foreground/70">{description}</p>
    </div>
  );
}

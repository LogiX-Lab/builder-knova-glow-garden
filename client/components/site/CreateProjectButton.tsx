type Props = {
  className?: string;
};

export default function CreateProjectButton({ className }: Props) {
  return (
    <a
      href="#admissions"
      className={
        "group inline-flex items-center gap-3 rounded-full border border-foreground/20 bg-white/90 px-5 py-2 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/40 hover:bg-white hover:text-primary " +
        (className ?? "")
      }
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-80"
        >
          <path d="M12 5l0 14"></path>
          <path d="M5 12l14 0"></path>
        </svg>
      </span>
      <span>Create Project</span>
    </a>
  );
}

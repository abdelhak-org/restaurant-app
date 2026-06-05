export function SectionDivider() {
  return (
    <div className="section-shell flex items-center gap-4" aria-hidden="true">
      <span className="h-px flex-1 bg-linear-to-r from-transparent to-border/60" />
      <span className="text-[0.5rem] text-primary/50">◆</span>
      <span className="h-px flex-1 bg-linear-to-l from-transparent to-border/60" />
    </div>
  );
}

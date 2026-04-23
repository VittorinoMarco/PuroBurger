import clsx from "clsx";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-puro-green",
        className
      )}
    >
      <span className="block h-px w-6 bg-puro-green" />
      {children}
    </div>
  );
}

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`block uppercase font-medium text-[11px] tracking-[0.2em] text-puro-green mb-2 ${className}`}
    >
      {children}
    </span>
  );
}

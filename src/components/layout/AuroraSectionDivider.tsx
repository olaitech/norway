type AuroraSectionDividerVariant =
  | "dark-to-warm"
  | "warm-to-dark"
  | "dark-footer";

type AuroraSectionDividerProps = {
  variant?: AuroraSectionDividerVariant;
  className?: string;
};

const variantClassName: Record<AuroraSectionDividerVariant, string> = {
  "dark-to-warm": "aurora-section-divider--dark-to-warm",
  "warm-to-dark": "aurora-section-divider--warm-to-dark",
  "dark-footer": "aurora-section-divider--dark-footer",
};

export function AuroraSectionDivider({
  variant = "dark-to-warm",
  className = "",
}: AuroraSectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`aurora-section-divider ${variantClassName[variant]} ${className}`.trim()}
      role="presentation"
    />
  );
}

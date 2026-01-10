import { brandIcons, type BrandIconName } from "@/lib/brandIcons";
import { cn } from "@/lib/utils";

type BrandIconProps = {
  name?: BrandIconName;
  className?: string;
  title?: string;
};

export function BrandIcon({ name, className, title }: BrandIconProps) {
  const icon = name ? brandIcons[name] : null;

  if (!icon) {
    return (
      <svg
        viewBox="0 0 24 24"
        className={cn("h-5 w-5 text-muted", className)}
        aria-hidden={title ? undefined : true}
        role="img"
      >
        {title ? <title>{title}</title> : null}
        <circle cx="12" cy="12" r="8" fill="currentColor" opacity="0.3" />
      </svg>
    );
  }

  return (
    <svg
      viewBox={icon.viewBox}
      className={cn("h-5 w-5 text-accent", className)}
      aria-hidden={title ? undefined : true}
      role="img"
    >
      {title ? <title>{title}</title> : null}
      {icon.paths.map((path, index) => (
        <path
          key={`${name}-${index}`}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

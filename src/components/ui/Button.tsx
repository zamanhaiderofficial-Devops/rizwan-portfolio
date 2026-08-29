import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

interface ButtonStyle {
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function buttonClasses({ variant = "primary", size = "md", className }: ButtonStyle = {}) {
  return cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
    variant === "primary" && "bg-teal text-ivory hover:bg-teal-dark",
    variant === "dark" && "bg-ink text-ivory hover:bg-olive",
    variant === "outline" &&
      "border border-olive/25 bg-transparent text-olive hover:border-teal hover:text-teal",
    variant === "ghost" && "text-olive hover:text-teal",
    variant === "light" &&
      "bg-ivory text-ink hover:bg-misty",
    size === "sm" && "h-9 px-4 text-sm",
    size === "md" && "h-11 px-6 text-sm",
    size === "lg" && "h-13 px-8 text-base",
    className
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  ...rest
}: ButtonLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={buttonClasses({ variant, size, className })} {...rest}>
        {children}
        {arrow && <ArrowMark />}
      </Link>
    );
  }
  return (
    <a href={href} className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
      {arrow && <ArrowMark />}
    </a>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
}

export function Button({ children, variant = "primary", size = "md", className, ...rest }: ButtonProps) {
  return (
    <button className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}

function ArrowMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
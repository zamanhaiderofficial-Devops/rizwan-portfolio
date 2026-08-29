import type { SVGProps } from "react";
import { Layout, LinkIcon, Pen, Pin, Tag, Wrench } from "./icons";

const map = {
  tag: Tag,
  wrench: Wrench,
  link: LinkIcon,
  pen: Pen,
  pin: Pin,
  layout: Layout,
} as const;

interface ServiceIconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof map | string;
}

export function ServiceIcon({ name, ...props }: ServiceIconProps) {
  const Component = map[name as keyof typeof map] ?? Tag;
  return <Component {...props} />;
}
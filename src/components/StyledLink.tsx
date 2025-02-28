'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
   href: string;
   button?: boolean;
   variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
   size?: "default" | "sm" | "lg" | "icon" | null | undefined;
}

export default function StyledLink(
   {
      href,
      children,
      className,
      button = false,
      variant = 'default',
      size = 'default',
      ...props
   }: LinkProps
) {
   const isButton = button && buttonVariants({
      variant,
      size
   })

   return (
      <Link
         href={href}
         className={cn(className, isButton)}
         {...props}
         prefetch
      >
         {children}
      </Link>
   );
}



"use client";

import * as React from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface CardStickyProps extends HTMLMotionProps<"div"> {
  index: number;
  incrementY?: number;
  incrementZ?: number;
}

export const ContainerScroll = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  const { style, ...restProps } = props as any;
  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      style={{ perspective: "1200px", ...style }}
      {...restProps}
    >
      {children}
    </div>
  );
});

ContainerScroll.displayName = "ContainerScroll";

export const CardSticky = React.forwardRef<HTMLDivElement, CardStickyProps>(
  (
    {
      index,
      incrementY = 12,
      incrementZ = 8,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const y = index * incrementY;
    const z = index * incrementZ;

    return (
      <motion.div
        ref={ref}
        className={cn(
          "sticky top-24 rounded-2xl will-change-transform",
          className
        )}
        style={{
          top: y,
          zIndex: index,
          transform: `translateZ(${z}px)`,
          ...style,
        }}
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

CardSticky.displayName = "CardSticky";
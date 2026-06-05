import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

export const withNeoBrutalist = <Tag extends keyof HTMLElementTagNameMap>(
  TagComponent: Tag,
) => {
  // Extract motion component outside the render to prevent unmounting
  const MotionComponent = motion(TagComponent);

  const WithNeoBrutalist = React.forwardRef<
    HTMLElement,
    HTMLMotionProps<Tag>
  >((props, ref) => {
    // We cast to React.ElementType to bypass the complex internal union types 
    // of framer-motion while keeping the external API perfectly type-safe.
    const Component = MotionComponent as React.ElementType;
    const className = (props as { className?: string }).className;

    return (
      <Component
        ref={ref}
        {...props}
        className={`bg-foreground border-primary text-primary border-2 px-4 pb-2 text-4xl shadow-[4px_4px_0_0_var(--color-primary)] lg:text-7xl ${
          className || ""
        }`}
      />
    );
  });

  WithNeoBrutalist.displayName = `WithNeoBrutalist(${String(TagComponent)})`;

  return WithNeoBrutalist;
};

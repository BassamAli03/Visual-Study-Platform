"use client";
import React, { forwardRef } from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../../utils/cn";

const Label = forwardRef((props, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-white dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      props.className
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };

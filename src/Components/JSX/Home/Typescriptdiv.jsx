"use client";
import { TypewriterEffectSmooth } from "../Home/Typescripteffect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "To",
    },
    {
      text: "Visual Study Platform",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      
      <TypewriterEffectSmooth words={words} />
   
    </div>
  );
}

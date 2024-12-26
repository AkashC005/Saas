"use client";


import { useScroll, useTransform } from "framer-motion";
import Tag from "@/components/Tag";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

// Updated and escaped text
const text = `
You're driven to craft exceptional designs, yet traditional tools hold you back with needless complexity and steep learning curves.`;

const words = text.split(' ');

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: scrollTarget, offset: ['start end', 'end end'] });
  const [currentWord, setCurrentWord] = useState(0);

  // Use useTransform to map the scroll position to word index
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(Math.floor(latest)); // Use Math.floor to avoid fractional word index
    });
  }, [wordIndex]);

  return (
    <section className="py-24 lg:py-40">
      <div className="container">
        <div className="sticky top-20 md:top-28">
          <div className="flex justify-center">
            <Tag>Introducing Layers</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl font-medium text-center mt-10">
            <span>Your Creative Process deserves better.</span>
            <span>
              {words.map((word, index) => (
                <span
                  key={index}
                  className={twMerge(
                    "transition duration-500 text-white/15",
                    index < currentWord && "text-white"
                  )}
                >
                  {`${word}`}{" "}
                </span>
              ))}
            </span>
            <span className="text-lime-400 block">
              That&apos;s Why we built Layers!!
            </span>
          </div>
        </div>

        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}

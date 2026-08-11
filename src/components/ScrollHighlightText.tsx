"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0, 1]);

  return (
    <span className="relative mr-[0.28em] inline-block whitespace-nowrap">
      <span className="text-[#54507a]/45">{word}</span>
      <motion.span style={{ opacity }} className="absolute inset-0 whitespace-nowrap font-normal text-rf-navy">
        {word}
      </motion.span>
    </span>
  );
}

// Every paragraph shares one scroll-linked progress value, spring-smoothed
// so the bold reveal glides rather than snapping word to word, and words
// are indexed continuously across paragraphs so the whole block reads as
// a single highlight sweep instead of each paragraph restarting on its own.
export function ScrollHighlightParagraphs({
  paragraphs,
  paragraphClassName,
}: {
  paragraphs: string[];
  paragraphClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 260, damping: 40, mass: 0.4 });

  const wordLists = paragraphs.map((p) => p.split(" "));
  const total = wordLists.reduce((sum, words) => sum + words.length, 0);
  let runningIndex = 0;

  return (
    <div ref={containerRef}>
      {wordLists.map((words, pIdx) => {
        const startIndex = runningIndex;
        runningIndex += words.length;
        return (
          <p key={pIdx} className={paragraphClassName}>
            {words.map((word, i) => (
              <Word key={`${pIdx}-${i}`} word={word} index={startIndex + i} total={total} progress={smoothProgress} />
            ))}
          </p>
        );
      })}
    </div>
  );
}

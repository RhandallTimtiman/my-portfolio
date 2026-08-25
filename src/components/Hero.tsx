import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import type { Profile } from "../data/portfolio";

const buttonBase =
  "group inline-flex min-h-12 items-center justify-between gap-4 border px-5 py-3.5 font-mono text-[0.73rem] font-semibold uppercase tracking-[0.08em] no-underline outline-offset-4 transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 motion-reduce:transform-none motion-reduce:transition-none";
const headline = "Senior Flutter Developer.\nFull Stack Engineer.";

export default function Hero({ profile }: { profile: Profile }) {
  const reduced = useReducedMotion();
  const [typedHeadline, setTypedHeadline] = useState(headline);
  const hasSecondLine = typedHeadline.includes("\n");
  const [firstLine, secondLine = ""] = typedHeadline.split("\n");

  useEffect(() => {
    if (reduced) {
      setTypedHeadline(headline);
      return;
    }

    setTypedHeadline("");
    let characterIndex = 0;
    let intervalId: number | undefined;
    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        characterIndex += 1;
        setTypedHeadline(headline.slice(0, characterIndex));

        if (characterIndex >= headline.length && intervalId !== undefined) {
          window.clearInterval(intervalId);
        }
      }, 42);
    }, 300);

    return () => {
      window.clearTimeout(startId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [reduced]);

  const transition = {
    duration: reduced ? 0 : 0.55,
    ease: [0.22, 1, 0.36, 1] as const,
  };
  const reveal = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { ...transition, delay: reduced ? 0 : delay },
  });
  return (
    <section
      className="grid min-h-svh scroll-mt-[72px] items-end pt-32 pb-12 sm:pt-36"
      id="top"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto w-[min(calc(100%_-_1.25rem),1280px)] sm:w-[min(calc(100%_-_2rem),1280px)]">
        <motion.p
          className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-[#555] before:size-1.5 before:rounded-full before:bg-[#111] before:content-[''] dark:text-[#aaa] dark:before:bg-white"
          {...reveal(0.05)}
        >
          {profile.availability}
        </motion.p>
        <motion.h1
          aria-label="Senior Flutter Developer. Full Stack Engineer."
          className="relative my-7 max-w-[15ch] text-[clamp(3rem,14vw,4.8rem)] leading-[0.92] font-medium tracking-[-0.065em] min-[621px]:text-[clamp(3.5rem,8vw,7.4rem)]"
          id="hero-title"
          {...reveal(0.13)}
        >
          <span aria-hidden="true" className="invisible">
            Senior Flutter Developer.<br />Full Stack Engineer.
          </span>
          <span aria-hidden="true" className="absolute inset-0">
            {firstLine}
            {!hasSecondLine && !reduced && (
              <span className="ml-1 inline-block h-[0.75em] w-[2px] animate-pulse bg-current align-baseline" />
            )}
            {hasSecondLine && (
              <>
                <br />
                <span className="text-[#666] dark:text-[#777]">
                  {secondLine}
                  {!reduced && typedHeadline.length < headline.length && (
                    <span className="ml-1 inline-block h-[0.75em] w-[2px] animate-pulse bg-current align-baseline" />
                  )}
                </span>
              </>
            )}
          </span>
        </motion.h1>
        <div className="grid items-end gap-10 min-[901px]:grid-cols-[1fr_minmax(280px,440px)] min-[901px]:gap-12">
          <motion.div className="mt-8 flex flex-wrap gap-3" {...reveal(0.3)}>
            <a
              className={`${buttonBase} flex-1 border-[#111] bg-[#111] text-[#f2f1ed] hover:border-[#333] hover:bg-[#333] sm:flex-none dark:border-[#f5f5f5] dark:bg-[#f5f5f5] dark:text-[#080808] dark:hover:border-[#d9d9d9] dark:hover:bg-[#d9d9d9]`}
              href="#projects"
            >
              View projects{" "}
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                ↘
              </span>
            </a>
            <a
              className={`${buttonBase} flex-1 border-[#aaa9a3] sm:flex-none dark:border-[#383838] dark:hover:border-[#888]`}
              href={`mailto:${profile.email}`}
            >
              Contact me{" "}
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </motion.div>
          <motion.p
            className="m-0 text-[clamp(1rem,1.6vw,1.2rem)] leading-7 text-[#4d4d4d] dark:text-[#adadad]"
            {...reveal(0.22)}
          >
            {profile.name} {profile.summary}
          </motion.p>
        </div>
        <motion.div
          className="mt-12 flex justify-between border-t border-black/15 pt-10 font-mono text-[0.68rem] font-medium uppercase tracking-[0.1em] text-[#666] sm:mt-16 dark:border-white/15 dark:text-[#6f6f6f]"
          aria-hidden="true"
          {...reveal(0.42)}
        >
          <span>Based in {profile.location}</span>
          <span className="hidden sm:inline">Scroll to explore ↓</span>
        </motion.div>
      </div>
    </section>
  );
}

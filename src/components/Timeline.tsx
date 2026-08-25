import { motion, useReducedMotion } from "motion/react";
import type { Experience } from "../data/portfolio";

const detailHeading =
  "mb-3 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-[#666] dark:text-[#767676]";
const tagClass =
  "border border-[#aaa9a3] px-2.5 py-2 font-mono text-[0.62rem] font-medium tracking-[0.04em] text-[#4d4d4d] dark:border-[#333] dark:text-[#aaa]";

export default function Timeline({ items }: { items: Experience[] }) {
  const reduced = useReducedMotion();
  return (
    <div className="relative border-t border-black/15 dark:border-white/15">
      <div
        className="absolute top-0 bottom-0 left-[23px] w-px bg-[#c4c3bd] dark:bg-[#303030]"
        aria-hidden="true"
      />
      {items.map((item, index) => (
        <motion.article
          className="relative grid grid-cols-[48px_1fr] gap-4 border-b border-black/15 py-14 min-[901px]:grid-cols-[48px_minmax(180px,.45fr)_1.55fr] min-[901px]:gap-8 dark:border-white/15"
          key={`${index}-${item.company}-${item.period}`}
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduced ? 0 : 0.5 }}
        >
          <div className="relative z-10 grid place-items-start">
            <span className="grid size-12 place-items-center rounded-full border border-[#aaa9a3] bg-[#e9e8e3] font-mono text-[0.63rem] font-medium text-[#666] dark:border-[#343434] dark:bg-[#0b0b0b] dark:text-[#888]">
              0{index + 1}
            </span>
          </div>
          <div className="col-start-2 font-mono text-[0.68rem] leading-6 font-medium uppercase tracking-[0.06em] text-[#666] min-[901px]:col-auto">
            <p className="m-0 mb-2">{item.period}</p>
            <p className="m-0">{item.company}</p>
          </div>
          <div className="col-start-2 min-[901px]:col-auto">
            <h3 className="mt-0 mb-4 text-[clamp(1.8rem,3vw,2.8rem)] font-medium tracking-[-0.04em]">
              {item.title}
            </h3>
            <p className="max-w-[65ch] leading-7 text-[#4d4d4d] dark:text-[#999]">
              {item.overview}
            </p>
            <div className="my-8 grid gap-8 min-[621px]:grid-cols-2">
              <div>
                <h4 className={detailHeading}>Ownership</h4>
                <ul className="m-0 list-none p-0 text-sm leading-6 text-[#4d4d4d] dark:text-[#939393]">
                  {item.responsibilities.map((entry) => (
                    <li
                      className="relative mb-2 pl-4 before:absolute before:left-0 before:content-['—']"
                      key={entry}
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={detailHeading}>Impact</h4>
                <ul className="m-0 list-none p-0 text-sm leading-6 text-[#4d4d4d] dark:text-[#939393]">
                  {item.achievements.map((entry) => (
                    <li
                      className="relative mb-2 pl-4 before:absolute before:left-0 before:content-['—']"
                      key={entry}
                    >
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <ul
              className="m-0 flex list-none flex-wrap gap-2 p-0"
              aria-label="Technologies"
            >
              {item.technologies.map((technology, technologyIndex) => (
                <li
                  className={tagClass}
                  key={`${technologyIndex}-${technology}`}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

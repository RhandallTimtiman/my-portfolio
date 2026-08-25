import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Metric } from "../data/portfolio";

function MetricValue({ metric }: { metric: Metric }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(metric.numericValue ? 0 : metric.value);
  useEffect(() => {
    if (!inView || metric.placeholder || metric.numericValue === undefined)
      return;
    if (reduced) {
      setValue(`${metric.numericValue}${metric.suffix ?? ""}`);
      return;
    }
    const controls = animate(0, metric.numericValue, {
      duration: 0.8,
      onUpdate: (latest) =>
        setValue(`${Math.round(latest)}${metric.suffix ?? ""}`),
    });
    return () => controls.stop();
  }, [inView, metric, reduced]);
  return (
    <span
      className="text-[clamp(4rem,8vw,7.5rem)] leading-[0.85] font-medium tracking-[-0.07em]"
      ref={ref}
    >
      {value}
    </span>
  );
}

export default function Metrics({ metrics }: { metrics: Metric[] }) {
  const reduced = useReducedMotion();
  return (
    <div className="grid border-y border-black/15 min-[621px]:grid-cols-3 dark:border-white/15">
      {metrics.map((metric, index) => (
        <motion.div
          className="flex min-h-[190px] flex-col justify-end border-b border-black/15 p-8 last:border-b-0 min-[621px]:min-h-[260px] min-[621px]:border-r min-[621px]:border-b-0 min-[621px]:last:border-r-0 dark:border-white/15"
          key={metric.label}
          initial={reduced ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reduced ? 0 : 0.4,
            delay: reduced ? 0 : index * 0.08,
          }}
        >
          <MetricValue metric={metric} />
          <p className="mt-8 mb-2 text-[#4d4d4d] dark:text-[#b3b3b3]">
            {metric.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

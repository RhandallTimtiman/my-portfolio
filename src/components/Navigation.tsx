import { useEffect, useRef, useState } from "react";

interface Link {
  label: string;
  href: string;
}
interface Props {
  name: string;
  specialty: string;
  links: Link[];
}

const monoLabel =
  "font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em]";

export default function Navigation({ name, specialty, links }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setTheme(
      document.documentElement.dataset.theme === "light" ? "light" : "dark",
    );
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeAtDesktop);
    return () => desktop.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -60%", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => toggleRef.current?.focus());
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {}
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", nextTheme === "light" ? "#f2f1ed" : "#080808");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-[#f2f1ed]/85 backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-[#080808]/85 min-[901px]:h-auto ${open ? "h-dvh" : ""}`}
    >
      <nav
        className="mx-auto flex h-[72px] w-[min(calc(100%-1.25rem),1280px)] items-center justify-between sm:w-[min(calc(100%-2rem),1280px)]"
        aria-label="Primary navigation"
      >
        <a
          className="font-mono text-xs font-semibold tracking-[0.18em] no-underline outline-offset-4 focus-visible:outline-2"
          href="#top"
          aria-label="Back to top"
        >
          Rhandall Timtiman / 2026
        </a>
        <ul className="hidden list-none items-center gap-7 p-0 min-[901px]:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className={`${monoLabel} relative py-3 no-underline outline-offset-4 transition-colors hover:text-[#111] focus-visible:outline-2 dark:hover:text-white ${active === link.href ? "text-[#111] after:absolute after:inset-x-0 after:bottom-1 after:h-px after:bg-current dark:text-white" : "text-[#666] dark:text-[#9d9d9d]"}`}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className={`${monoLabel} flex min-h-11 cursor-pointer items-center gap-2 border-0 bg-transparent px-1 text-[#111] outline-offset-4 focus-visible:outline-2 dark:text-[#f5f5f5]`}
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "light"}
            onClick={toggleTheme}
          >
            <span aria-hidden="true">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
            <span
              className="relative size-[18px] overflow-hidden rounded-full border border-current"
              aria-hidden="true"
            >
              <span
                className={`absolute rounded-full bg-current transition-all duration-300 ${theme === "light" ? "inset-[3px]" : "inset-y-0.5 right-0.5 left-2"}`}
              />
            </span>
          </button>
          <button
            ref={toggleRef}
            className={`${monoLabel} flex min-h-11 cursor-pointer items-center gap-2 border-0 bg-transparent px-1 text-[#111] outline-offset-4 focus-visible:outline-2 dark:text-[#f5f5f5] min-[901px]:hidden`}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span className="relative block h-3 w-[18px]" aria-hidden="true">
              <span
                className={`absolute top-1/2 block h-px w-full bg-current transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[3px]"}`}
              />
              <span
                className={`absolute top-1/2 block h-px w-full bg-current transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[3px]"}`}
              />
            </span>
          </button>
        </div>
      </nav>
      <div
        className={`absolute inset-x-0 top-[72px] bottom-0 flex flex-col justify-between overflow-y-auto bg-[#f2f1ed] p-4 pt-6 transition-[opacity,transform,visibility] duration-300 dark:bg-[#080808] min-[901px]:hidden ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"}`}
        id="mobile-menu"
        aria-hidden={!open}
      >
        <ul className="m-0 list-none p-0">
          {links.map((link, index) => (
            <li key={link.href}>
              <a
                className="flex items-baseline gap-6 border-b border-black/15 py-5 text-[clamp(2rem,10vw,4rem)] tracking-[-0.05em] no-underline outline-offset-[-2px] focus-visible:outline-2 dark:border-white/15"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <span className="font-mono text-[0.62rem] font-medium tracking-[0.08em] text-[#666]">
                  0{index + 1}
                </span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.08em] text-[#666]">
          {name} · {specialty}
        </p>
      </div>
    </header>
  );
}

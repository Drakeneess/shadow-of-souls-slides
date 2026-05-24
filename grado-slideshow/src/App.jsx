import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { slides } from "./slides";

export default function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((i) => Math.min(i + 1, slides.length - 1));
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => Math.max(i - 1, 0));
  };

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "ArrowRight" || event.key === " ") next();
      if (event.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const CurrentSlide = slides[index]?.component;

  return (
    <main className="presentation">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slides[index]?.path ?? index}
          className="slide-motion"
          custom={direction}
          initial={{
            opacity: 0,
            x: direction > 0 ? 28 : -28,
            filter: "blur(6px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            x: direction > 0 ? -28 : 28,
            filter: "blur(6px)",
          }}
          transition={{
            duration: 0.42,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {CurrentSlide ? <CurrentSlide /> : null}
        </motion.div>
      </AnimatePresence>

      <footer className="slide-footer">
        <span>
          {index + 1} / {slides.length}
        </span>
      </footer>
    </main>
  );
}
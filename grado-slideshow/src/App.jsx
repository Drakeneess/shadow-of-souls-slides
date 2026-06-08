import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { slides } from "./slides";

export default function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

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
      const tag = event.target?.tagName?.toLowerCase();
      const isTyping =
        tag === "input" ||
        tag === "textarea" ||
        event.target?.isContentEditable;

      if (isTyping) return;

      if (event.key === "ArrowRight" || event.key === " ") {
        event.preventDefault();
        next();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }

      if (event.key === "Shift") {
        event.preventDefault();
        setIsTimerRunning((running) => !running);
      }

      if (event.key.toLowerCase() === "r") {
        event.preventDefault();
        setElapsedSeconds(0);
        setIsTimerRunning(false);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (!isTimerRunning) return;

    const intervalId = window.setInterval(() => {
      setElapsedSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isTimerRunning]);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  }, [elapsedSeconds]);

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

      <div
        className="presentation-hud"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999999,
          pointerEvents: "none",
        }}
      >
        <button
          className={`presentation-timer ${
            isTimerRunning ? "is-running" : "is-paused"
          }`}
          type="button"
          onClick={() => setIsTimerRunning((running) => !running)}
          title="Shift: iniciar/pausar · R: reiniciar"
          style={{
            position: "absolute",
            top: 18,
            left: 18,
            pointerEvents: "auto",
          }}
        >
          <span className="timer-dot" />
          <span>{formattedTime}</span>
        </button>

        <span
          className="slide-counter"
          style={{
            position: "absolute",
            right: 18,
            bottom: 14,
            pointerEvents: "auto",
          }}
        >
          {index + 1} / {slides.length}
        </span>
      </div>
    </main>
  );
}
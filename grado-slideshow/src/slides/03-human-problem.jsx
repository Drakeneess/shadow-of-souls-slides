import { motion } from "framer-motion";
import {
  EyeOff,
  MessageCircleOff,
  ShieldAlert,
  ClockAlert,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide03.css";

const introContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 14,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.46,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const cardIn = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.97,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HumanProblemSlide() {
  return (
    <Slide
      eyebrow="Problema humano"
      title="La depresión adolescente puede permanecer oculta"
      className="human-problem-slide"
    >
      <motion.div
        className="human-problem-intro"
        variants={introContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="lead" variants={fadeUp}>
          La depresión en adolescentes representa una problemática creciente de
          salud mental que, en muchos casos, no es detectada de manera temprana
          dentro del entorno escolar.
        </motion.p>

        <motion.p className="muted" variants={fadeUp}>
          El problema no siempre es la ausencia de señales, sino la dificultad
          para identificarlas antes de que se expresen como crisis visibles.
        </motion.p>
      </motion.div>

      <motion.div
        className="signal-grid signal-grid-2x2"
        variants={cardContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="signal-card active-signal-card" variants={cardIn}>
          <motion.div
            className="signal-icon"
            animate={{
              opacity: [0.78, 1, 0.78],
              scale: [1, 1.035, 1],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MessageCircleOff size={28} strokeWidth={1.7} />
          </motion.div>
          <span>Barrera 01</span>
          <strong>Resistencia a verbalizar malestar</strong>
        </motion.div>

        <motion.div className="signal-card active-signal-card" variants={cardIn}>
          <motion.div
            className="signal-icon"
            animate={{
              opacity: [0.72, 1, 0.72],
              scale: [1, 1.035, 1],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.25,
            }}
          >
            <ShieldAlert size={28} strokeWidth={1.7} />
          </motion.div>
          <span>Barrera 02</span>
          <strong>Miedo al juicio social</strong>
        </motion.div>

        <motion.div className="signal-card active-signal-card" variants={cardIn}>
          <motion.div
            className="signal-icon"
            animate={{
              opacity: [0.76, 1, 0.76],
              scale: [1, 1.035, 1],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <EyeOff size={28} strokeWidth={1.7} />
          </motion.div>
          <span>Barrera 03</span>
          <strong>Ocultamiento emocional</strong>
        </motion.div>

        <motion.div className="signal-card active-signal-card" variants={cardIn}>
          <motion.div
            className="signal-icon"
            animate={{
              opacity: [0.74, 1, 0.74],
              scale: [1, 1.035, 1],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.75,
            }}
          >
            <ClockAlert size={28} strokeWidth={1.7} />
          </motion.div>
          <span>Barrera 04</span>
          <strong>Detección tardía</strong>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
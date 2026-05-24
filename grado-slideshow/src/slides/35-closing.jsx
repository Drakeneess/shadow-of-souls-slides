import { motion } from "framer-motion";
import {
  Ear,
  Eye,
  Gamepad2,
  HeartPulse,
  MessageCircleOff,
  ShieldCheck,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide35.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const closingIdeas = [
  {
    icon: MessageCircleOff,
    label: "Cuando no se verbaliza",
  },
  {
    icon: Eye,
    label: "la conducta puede mostrar señales",
  },
  {
    icon: Ear,
    label: "si alguien aprende a escucharla",
  },
];

export default function ClosingSlide() {
  return (
    <Slide
      eyebrow="Cierre"
      title="Shadow of Souls"
      className="closing-slide"
    >
      <motion.div
        className="slide35-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="closing-main-card" variants={fadeUp}>
          <motion.div
            className="closing-symbol"
            animate={{
              opacity: [0.78, 1, 0.78],
              scale: [1, 1.035, 1],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Gamepad2 size={34} strokeWidth={1.6} />
          </motion.div>

          <p className="closing-quote">
            Cuando la palabra no aparece, la conducta también merece ser
            escuchada.
          </p>

          <div className="closing-divider" />

          <p className="closing-reflection">
            La depresión no es solo una lista de síntomas: también puede alterar
            la forma en que una persona percibe el mundo, el tiempo y a sí
            misma. Detectarla temprano no significa diagnosticar desde una
            pantalla, sino prestar atención antes de que el silencio se convierta
            en crisis.
          </p>
        </motion.div>

        <motion.div className="closing-ideas-grid" variants={staggerContainer}>
          {closingIdeas.map(({ icon: Icon, label }) => (
            <motion.div className="closing-idea-card" variants={fadeUp} key={label}>
              <motion.div
                className="closing-idea-icon"
                animate={{
                  opacity: [0.74, 1, 0.74],
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon size={22} strokeWidth={1.7} />
              </motion.div>

              <span>{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="closing-final-card" variants={fadeUp}>
          <HeartPulse size={22} strokeWidth={1.7} />

          <p>
            Shadow of Souls se plantea como una herramienta complementaria para
            observar, organizar y presentar señales conductuales que puedan
            orientar una revisión profesional oportuna.
          </p>
        </motion.div>

        <motion.div className="closing-thanks-card" variants={fadeUp}>
          <ShieldCheck size={22} strokeWidth={1.7} />

          <div>
            <span>Gracias</span>
            <p>Preguntas y observaciones.</p>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
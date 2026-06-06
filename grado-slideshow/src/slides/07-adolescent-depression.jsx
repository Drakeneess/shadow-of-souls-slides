import { motion } from "framer-motion";
import {
  Brain,
  EyeOff,
  HeartPulse,
  MessageSquareOff,
  SearchCheck,
  TriangleAlert,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import Figure from "../components/Figure.jsx";

import adolescentDepression from "../assets/images/adolescent-depression-concept.png";

import "../styles/slides/Slide07.css";

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
      duration: 0.44,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AdolescentDepressionSlide() {
  return (
    <Slide
      eyebrow="Marco conceptual"
      title="Depresión adolescente y detección temprana"
      className="adolescent-depression-slide"
    >
      <motion.div
        className="slide07-layout compact-slide07-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="slide07-visual-card" variants={fadeUp}>
          <Figure
            src={adolescentDepression}
            alt="Representación conceptual de depresión adolescente"
            caption="La depresión adolescente puede manifestarse de forma emocional, cognitiva y conductual."
            variant="cover"
            className="slide07-main-figure"
          />

          <div className="symptom-chip-grid">
            <div className="symptom-chip">
              <Brain size={15} strokeWidth={1.8} />
              <span>Dificultades cognitivas</span>
            </div>

            <div className="symptom-chip">
              <HeartPulse size={15} strokeWidth={1.8} />
              <span>Ánimo depresivo</span>
            </div>

            <div className="symptom-chip">
              <TriangleAlert size={15} strokeWidth={1.8} />
              <span>Pérdida de interés</span>
            </div>

            <div className="symptom-chip">
              <MessageSquareOff size={15} strokeWidth={1.8} />
              <span>Expresión indirecta</span>
            </div>
          </div>
        </motion.div>

        <motion.div className="slide07-concept-column" variants={staggerContainer}>
          <motion.div className="concept-card compact-concept-card" variants={fadeUp}>
            <div className="concept-card-header">
              <motion.div
                className="concept-icon"
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
                <HeartPulse size={22} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span className="concept-kicker">Concepto base</span>
                <h3>Depresión adolescente</h3>
              </div>
            </div>

            <p className="concept-text">
              Se entiende como un trastorno del estado de ánimo caracterizado
              por tristeza profunda y pérdida de interés general por las cosas
              de forma mantenida, acompañado por síntomas psicológicos, físicos
              y del comportamiento.
            </p>
          </motion.div>

          <motion.div className="concept-card compact-concept-card" variants={fadeUp}>
            <div className="concept-card-header">
              <motion.div
                className="concept-icon"
                animate={{
                  opacity: [0.76, 1, 0.76],
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                <SearchCheck size={22} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span className="concept-kicker">Definición</span>
                <h3>Detección temprana</h3>
              </div>
            </div>

            <p className="concept-text">
              Consiste en identificar señales o patrones que sugieren la posible
              presencia de alteraciones emocionales, sin emitir un diagnóstico
              clínico. Su finalidad es preventiva y orientadora.
            </p>
          </motion.div>

          <motion.div className="concept-card compact-concept-card" variants={fadeUp}>
            <div className="concept-card-header">
              <motion.div
                className="concept-icon"
                animate={{
                  opacity: [0.74, 1, 0.74],
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              >
                <EyeOff size={22} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span className="concept-kicker">Distinción clave</span>
                <h3>Diagnóstico y detección</h3>
              </div>
            </div>

            <p className="concept-text">
              El diagnóstico clínico confirma una condición mediante evaluación
              profesional. La detección temprana, en cambio, identifica señales iniciales
              de posible riesgo para orientar una revisión oportuna sin emitir una
              conclusión clínica.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
import { motion } from "framer-motion";
import {
  BarChart3,
  Gamepad2,
  GitMerge,
  MessageSquareText,
  Scale,
  UsersRound,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide11.css";

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

export default function ResearchApproachSlide() {
  return (
    <Slide
      eyebrow="Metodología"
      title="Enfoque de investigación"
      className="research-approach-slide"
    >
      <motion.div
        className="slide11-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="approach-main-card" variants={fadeUp}>
          <div className="approach-card-header">
            <motion.div
              className="approach-icon approach-icon-main"
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
              <Scale size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="approach-kicker">Enfoque mixto</span>
              <h3>Medir conducta e interpretar contexto</h3>
            </div>
          </div>

          <p>
            Este estudio adopta un enfoque mixto, combinando elementos
            cuantitativos y cualitativos para abordar la salud emocional en
            adolescentes desde múltiples dimensiones.
          </p>

          <div className="approach-equation">
            <div className="equation-block">
              <BarChart3 size={20} strokeWidth={1.7} />
              <span>Datos conductuales</span>
            </div>

            <strong>+</strong>

            <div className="equation-block">
              <MessageSquareText size={20} strokeWidth={1.7} />
              <span>Interpretación contextual</span>
            </div>

            <strong>=</strong>

            <div className="equation-block result-block">
              <GitMerge size={20} strokeWidth={1.7} />
              <span>Triangulación</span>
            </div>
          </div>
        </motion.div>

        <motion.div className="approach-source-grid" variants={staggerContainer}>
          <motion.div className="approach-source-card" variants={fadeUp}>
            <div className="approach-card-header compact-header">
              <motion.div
                className="approach-icon"
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
                <Gamepad2 size={21} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span className="approach-kicker">Cuantitativo</span>
                <h3>Registros del videojuego</h3>
              </div>
            </div>

            <p>
              Análisis de datos conductuales obtenidos durante la interacción
              con Shadow of Souls: decisiones, tiempos, exploración e
              interacción.
            </p>
          </motion.div>

          <motion.div className="approach-source-card" variants={fadeUp}>
            <div className="approach-card-header compact-header">
              <motion.div
                className="approach-icon"
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
                <UsersRound size={21} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span className="approach-kicker">Cualitativo</span>
                <h3>Percepciones y valoración</h3>
              </div>
            </div>

            <p>
              Interpretación contextual basada en percepciones del gabinete
              psicológico y de los estudiantes respecto al uso del sistema.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="approach-triangulation-card" variants={fadeUp}>
          <div className="approach-triangle">
            <div className="triangle-node top-node">Datos objetivos</div>
            <div className="triangle-node left-node">Contexto escolar</div>
            <div className="triangle-node right-node">Interpretación profesional</div>
            <div className="triangle-center">
              <GitMerge size={24} strokeWidth={1.7} />
              <span>Validez</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
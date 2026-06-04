import { motion } from "framer-motion";
import {
  Gamepad2,
  Puzzle,
  MessageSquareText,
  RefreshCcw,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import Figure from "../components/Figure.jsx";

import seriousGameConcept from "../assets/images/serious-game-concept.png";

import "../styles/slides/Slide09.css";

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

export default function SeriousGamesSlide() {
  return (
    <Slide
      eyebrow="Marco conceptual"
      title="Videojuegos serios como experiencias con propósito"
      className="serious-games-slide"
    >
      <motion.div
        className="slide09-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="slide09-visual-card" variants={fadeUp}>
          <Figure
            src={seriousGameConcept}
            alt="Concepto referencial de serious game"
            caption="Los videojuegos serios integran elementos lúdicos con un propósito educativo, formativo, social, terapéutico o analítico."
            variant="cover"
            className="slide09-main-figure"
          />

          <div className="slide09-visual-tags">
            <span>Reglas</span>
            <span>Mecánicas</span>
            <span>Narrativa</span>
            <span>Retroalimentación</span>
          </div>
        </motion.div>

        <motion.div className="slide09-content-column" variants={staggerContainer}>
          <motion.div className="slide09-main-card" variants={fadeUp}>
            <div className="slide09-card-header">
              <motion.div
                className="slide09-icon slide09-icon-main"
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
                <Gamepad2 size={26} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span className="slide09-kicker">Concepto</span>
                <h3>Serious game</h3>
              </div>
            </div>

            <p>
              Un videojuego serio es una experiencia interactiva diseñada con un
              propósito adicional al entretenimiento. A través de reglas,
              mecánicas, narrativa y retroalimentación, permite abordar objetivos
              educativos, formativos, sociales, terapéuticos o analíticos dentro
              de un entorno lúdico controlado.
            </p>

            <div className="slide09-flow">
              <div className="slide09-flow-step">Objetivo</div>
              <div className="slide09-flow-line" />
              <div className="slide09-flow-step">Mecánica</div>
              <div className="slide09-flow-line" />
              <div className="slide09-flow-step">Interacción</div>
              <div className="slide09-flow-line" />
              <div className="slide09-flow-step">Retroalimentación</div>
            </div>
          </motion.div>

          <div className="slide09-bottom-grid">
            <motion.div className="slide09-mini-card" variants={fadeUp}>
              <div className="slide09-card-header compact-header">
                <motion.div
                  className="slide09-icon"
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
                  <Puzzle size={20} strokeWidth={1.7} />
                </motion.div>

                <div>
                  <span className="slide09-kicker">Propósito</span>
                  <h3>Más allá del entretenimiento</h3>
                </div>
              </div>

              <p>
                Conserva elementos propios del videojuego, pero los orienta hacia
                un objetivo adicional, como aprendizaje, entrenamiento,
                sensibilización, exploración o análisis.
              </p>
            </motion.div>

            <motion.div className="slide09-mini-card" variants={fadeUp}>
              <div className="slide09-card-header compact-header">
                <motion.div
                  className="slide09-icon"
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
                  <MessageSquareText size={20} strokeWidth={1.7} />
                </motion.div>

                <div>
                  <span className="slide09-kicker">Interacción</span>
                  <h3>Participación activa del usuario</h3>
                </div>
              </div>

              <p>
                El jugador toma decisiones, explora escenarios, resuelve
                situaciones y modifica el desarrollo de la experiencia mediante
                sus acciones.
              </p>
            </motion.div>
          </div>

          <motion.div className="slide09-note-card" variants={fadeUp}>
            <div className="slide09-card-header compact-header">
              <div className="slide09-icon">
                <RefreshCcw size={20} strokeWidth={1.7} />
              </div>

              <div>
                <span className="slide09-kicker">Retroalimentación</span>
                <h3>Respuesta del sistema</h3>
              </div>
            </div>

            <p>
              El sistema responde a las acciones del jugador mediante cambios
              narrativos, mecánicos o visuales, reforzando la relación entre
              decisión, consecuencia y experiencia.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Gamepad2,
  ScanSearch,
  ShieldCheck,
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
      title="Videojuegos serios como entorno de observación"
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
            caption="Los videojuegos serios combinan interacción, propósito formativo o analítico y registro del comportamiento en contexto."
            variant="cover"
            className="slide09-main-figure"
          />

          <div className="slide09-visual-tags">
            <span>Interacción</span>
            <span>Contexto</span>
            <span>Observación</span>
            <span>Registro</span>
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
              propósito que va más allá del entretenimiento. En este contexto,
              permite registrar decisiones, tiempos, exploración y otras
              conductas dentro de un entorno controlado.
            </p>

            <div className="slide09-flow">
              <div className="slide09-flow-step">Estímulo</div>
              <div className="slide09-flow-line" />
              <div className="slide09-flow-step">Interacción</div>
              <div className="slide09-flow-line" />
              <div className="slide09-flow-step">Registro</div>
              <div className="slide09-flow-line" />
              <div className="slide09-flow-step">Análisis</div>
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
                  <ShieldCheck size={20} strokeWidth={1.7} />
                </motion.div>

                <div>
                  <span className="slide09-kicker">Alcance</span>
                  <h3>No sustituye la evaluación</h3>
                </div>
              </div>

              <p>
                El juego no reemplaza la evaluación psicológica profesional ni
                emite diagnósticos clínicos; funciona como herramienta de apoyo
                para observación inicial.
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
                  <ScanSearch size={20} strokeWidth={1.7} />
                </motion.div>

                <div>
                  <span className="slide09-kicker">Utilidad</span>
                  <h3>Observación en contexto interactivo</h3>
                </div>
              </div>

              <p>
                Su valor está en permitir que ciertas conductas emerjan durante
                la interacción, facilitando el registro de patrones difíciles de
                captar en una entrevista tradicional.
              </p>
            </motion.div>
          </div>

          <motion.div className="slide09-note-card" variants={fadeUp}>
            <div className="slide09-card-header compact-header">
              <div className="slide09-icon">
                <ClipboardCheck size={20} strokeWidth={1.7} />
              </div>

              <div>
                <span className="slide09-kicker">Enfoque</span>
                <h3>Herramienta de apoyo</h3>
              </div>
            </div>

            <p>
              El videojuego crea un espacio donde la conducta puede ser
              observada, registrada e interpretada como señal indirecta, siempre
              bajo revisión profesional posterior.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
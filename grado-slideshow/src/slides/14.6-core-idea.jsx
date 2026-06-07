import { motion } from "framer-motion";

import Slide from "../components/Slide.jsx";
import Figure from "../components/Figure.jsx";

import shadowGameplay from "../assets/images/shadow-of-souls-gameplay.png";
import webDashboard from "../assets/images/web-analysis-dashboard.png";

import "../styles/slides/Slide02.css";

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
  },
};

const nodeLeft = {
  hidden: {
    opacity: 0,
    x: -26,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
};

const nodeRight = {
  hidden: {
    opacity: 0,
    x: 26,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
};

export default function CoreIdeaSlide() {
  return (
    <Slide
      eyebrow="Idea central"
      title="Sistema híbrido: videojuego interactivo + plataforma web de análisis"
      className="core-idea-slide"
    >
      <motion.p
        className="lead compact-lead"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.45,
          delay: 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        La propuesta se materializa en un sistema híbrido compuesto por un
        videojuego interactivo y una plataforma web de análisis.
      </motion.p>

      <div className="hybrid-system hybrid-system-visual hybrid-system-asymmetric">
        <motion.div
          className="system-node system-node-asymmetric game-node"
          variants={nodeLeft}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.52,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Figure
            src={shadowGameplay}
            alt="Captura del videojuego Shadow of Souls"
            variant="contain"
          />

          <div className="node-text-block">
            <div className="system-node-header">
              <span className="node-index">01</span>
              <h3>Shadow of Souls</h3>
            </div>

            <p>
              Entorno narrativo donde el estudiante interactúa, explora, decide
              y genera registros conductuales durante la experiencia.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="system-connector system-connector-flow"
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.45,
            delay: 0.44,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.span
            animate={{
              x: [0, 4, 0],
              opacity: [0.72, 1, 0.72],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            →
          </motion.span>

          <motion.small
            animate={{
              opacity: [0.55, 0.95, 0.55],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            datos conductuales
          </motion.small>
        </motion.div>

        <motion.div
          className="system-node system-node-asymmetric panel-node"
          variants={nodeRight}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.52,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="node-text-block">
            <div className="system-node-header">
              <span className="node-index">02</span>
              <h3>Plataforma web</h3>
            </div>

            <p>
              Espacio de análisis donde los registros se procesan y visualizan
              mediante reportes automáticos para el gabinete psicológico.
            </p>
          </div>

          <Figure
            src={webDashboard}
            alt="Panel web de análisis conductual"
            variant="contain"
          />
        </motion.div>
      </div>
    </Slide>
  );
}
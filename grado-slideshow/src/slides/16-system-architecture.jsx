import { motion } from "framer-motion";
import {
  Braces,
  Code2,
  Database,
  Gamepad2,
  LayoutDashboard,
  Server,
  Workflow,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide16.css";

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
      staggerChildren: 0.09,
    },
  },
};

const architectureLayers = [
  {
    icon: Gamepad2,
    layer: "Capa de interacción",
    tech: "Unity",
    detail: "Cliente del videojuego Shadow of Souls y captura de eventos del jugador.",
  },
  {
    icon: Server,
    layer: "Capa de comunicación",
    tech: "PHP",
    detail: "API REST para recepción, validación y envío de información.",
  },
  {
    icon: Database,
    layer: "Capa de almacenamiento",
    tech: "MySQL + Firebase",
    detail: "Datos estructurados y telemetría conductual en formato flexible.",
  },
  {
    icon: Braces,
    layer: "Capa de procesamiento",
    tech: "Node.js + Python",
    detail: "Orquestación, preprocesamiento y análisis de datos conductuales.",
  },
  {
    icon: LayoutDashboard,
    layer: "Capa de visualización",
    tech: "React",
    detail: "Panel web para reportes, revisión profesional e indicadores.",
  },
];

export default function SystemArchitectureSlide() {
  return (
    <Slide
      eyebrow="Ingeniería del proyecto"
      title="Arquitectura del sistema"
      className="system-architecture-slide"
    >
      <motion.div
        className="slide16-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="architecture-main-card" variants={fadeUp}>
          <div className="architecture-main-header">
            <motion.div
              className="architecture-main-icon"
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
              <Workflow size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="architecture-kicker">Arquitectura por capas</span>
              <h3>Del juego al panel de análisis</h3>
            </div>
          </div>

          <p>
            El sistema se organiza en una arquitectura modular que conecta el
            videojuego, la API, las bases de datos, los módulos de procesamiento
            y el panel web de visualización.
          </p>

          <div className="architecture-tech-strip">
            <span>Unity</span>
            <span>PHP</span>
            <span>MySQL</span>
            <span>Firebase</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>React</span>
          </div>
        </motion.div>

        <motion.div className="architecture-flow" variants={staggerContainer}>
          {architectureLayers.map(({ icon: Icon, layer, tech, detail }, index) => (
            <motion.div className="architecture-layer" variants={fadeUp} key={layer}>
              <div className="architecture-layer-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <motion.div
                className="architecture-layer-icon"
                animate={{
                  opacity: [0.76, 1, 0.76],
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
              >
                <Icon size={21} strokeWidth={1.7} />
              </motion.div>

              <div className="architecture-layer-content">
                <span>{layer}</span>
                <h3>{tech}</h3>
                <p>{detail}</p>
              </div>

              {index < architectureLayers.length - 1 && (
                <div className="architecture-connector">↓</div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="architecture-note-card" variants={fadeUp}>
          <div className="architecture-note-header">
            <Code2 size={22} strokeWidth={1.7} />
            <span>Separación de responsabilidades</span>
          </div>

          <p>
            Cada tecnología cumple una función específica: captura, comunicación,
            almacenamiento, procesamiento o visualización. Así se evita un
            sistema monolítico y se facilita el mantenimiento.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
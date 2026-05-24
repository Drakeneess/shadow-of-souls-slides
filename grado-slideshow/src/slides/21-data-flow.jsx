import { motion } from "framer-motion";
import {
  Braces,
  ChartNoAxesColumnIncreasing,
  Database,
  Gamepad2,
  GitBranch,
  Layers3,
  ServerCog,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide21.css";

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

const flowSteps = [
  {
    icon: Gamepad2,
    label: "Juego",
    detail: "Shadow of Souls",
    description: "El estudiante interactúa con el entorno narrativo.",
  },
  {
    icon: ServerCog,
    label: "Servidor",
    detail: "API / Backend",
    description: "Recibe y organiza los eventos generados por la sesión.",
  },
  {
    icon: Database,
    label: "Almacén",
    detail: "MySQL + Firebase",
    description: "Guarda datos estructurados y telemetría flexible.",
  },
  {
    icon: Braces,
    label: "Procesamiento",
    detail: "Limpieza y resumen",
    description: "Agrupa eventos y transforma logs en variables útiles.",
  },
  {
    icon: GitBranch,
    label: "Clusterización",
    detail: "Agrupamiento",
    description: "Identifica patrones conductuales similares entre sesiones.",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    label: "Visualización",
    detail: "Panel web",
    description: "Presenta resultados para revisión profesional.",
  },
];

export default function DataFlowSlide() {
  return (
    <Slide
      eyebrow="Ingeniería del proyecto"
      title="Flujo de datos"
      className="data-flow-slide"
    >
      <motion.div
        className="slide21-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="data-flow-main-card" variants={fadeUp}>
          <div className="data-flow-card-header">
            <motion.div
              className="data-flow-icon data-flow-icon-main"
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
              <Layers3 size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="data-flow-kicker">Pipeline del sistema</span>
              <h3>De la acción del jugador al resultado visualizable</h3>
            </div>
          </div>

          <p>
            El sistema transforma la interacción del estudiante en registros
            conductuales, los almacena, los procesa y los presenta como patrones
            revisables dentro del panel web.
          </p>
        </motion.div>

        <motion.div className="data-pipeline-card" variants={fadeUp}>
          <div className="data-pipeline">
            {flowSteps.map(({ icon: Icon, label, detail }, index) => (
              <div className="pipeline-step-wrap" key={label}>
                <motion.div
                  className="pipeline-step"
                  variants={fadeUp}
                  whileHover={{
                    y: -2,
                    transition: { duration: 0.18 },
                  }}
                >
                  <motion.div
                    className="pipeline-icon"
                    animate={{
                      opacity: [0.72, 1, 0.72],
                      scale: [1, 1.035, 1],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.12,
                    }}
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </motion.div>

                  <span>{label}</span>
                  <strong>{detail}</strong>
                </motion.div>

                {index < flowSteps.length - 1 && (
                  <motion.div
                    className="pipeline-arrow"
                    animate={{
                      opacity: [0.42, 1, 0.42],
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.12,
                    }}
                  >
                    →
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="data-flow-detail-grid" variants={staggerContainer}>
          {flowSteps.map(({ icon: Icon, label, description }) => (
            <motion.div className="data-flow-detail-card" variants={fadeUp} key={label}>
              <Icon size={18} strokeWidth={1.7} />
              <div>
                <span>{label}</span>
                <p>{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="data-flow-note-card" variants={fadeUp}>
          <Braces size={20} strokeWidth={1.7} />
          <p>
            La etapa crítica no es solo guardar datos, sino convertir logs
            extensos en variables conductuales comparables para el análisis
            posterior.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
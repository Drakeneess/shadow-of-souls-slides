import { motion } from "framer-motion";
import {
  Database,
  Gamepad2,
  LayoutDashboard,
  ServerCog,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import Figure from "../components/Figure.jsx";

import systemGeneralProposal from "../assets/images/system-general-proposal.png";

import "../styles/slides/Slide15.css";

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

const systemParts = [
  {
    icon: Gamepad2,
    label: "Shadow of Souls",
    text: "Cliente del juego desarrollado en Unity.",
  },
  {
    icon: ServerCog,
    label: "Backend",
    text: "API REST y orquestador para gestionar el flujo de datos.",
  },
  {
    icon: Database,
    label: "Base híbrida",
    text: "MySQL y Firebase para datos estructurados y telemetría.",
  },
  {
    icon: LayoutDashboard,
    label: "Panel web",
    text: "Interfaz React para revisión y visualización de resultados.",
  },
];

export default function SystemProposalSlide() {
  return (
    <Slide
      eyebrow="Propuesta general"
      title="Propuesta general del sistema"
      className="system-proposal-slide"
    >
      <motion.div
        className="slide15-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="system-diagram-card" variants={fadeUp}>
          <Figure
            src={systemGeneralProposal}
            alt="Diagrama de propuesta general del sistema"
            caption="Figura. Propuesta general del sistema: Shadow of Souls, backend, base de datos híbrida y panel web."
            variant="diagram"
            className="system-proposal-figure"
          />
        </motion.div>

        <motion.div className="system-summary-column" variants={staggerContainer}>
          <motion.div className="system-summary-main" variants={fadeUp}>
            <div className="system-summary-header">
              <motion.div
                className="system-summary-icon"
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
                <ServerCog size={26} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span className="system-kicker">Sistema híbrido</span>
                <h3>Juego + análisis + visualización</h3>
              </div>
            </div>

            <p>
              La propuesta integra Shadow of Souls con servicios de backend, una
              base de datos híbrida y un panel web para convertir la interacción
              del estudiante en registros analizables.
            </p>
          </motion.div>

          <div className="system-parts-grid">
            {systemParts.map(({ icon: Icon, label, text }) => (
              <motion.div className="system-part-card" variants={fadeUp} key={label}>
                <motion.div
                  className="system-part-icon"
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
                  <Icon size={20} strokeWidth={1.7} />
                </motion.div>

                <div>
                  <span>{label}</span>
                  <p>{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
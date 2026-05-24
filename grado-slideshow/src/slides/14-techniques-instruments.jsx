import { motion } from "framer-motion";
import {
  ClipboardCheck,
  ClipboardList,
  FileSearch,
  Gamepad2,
  MessageSquareText,
  ScrollText,
  ServerCog,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide14.css";

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

const techniques = [
  {
    icon: Gamepad2,
    label: "Observación sistemática",
    text: "Registro de tiempos, rutas, decisiones narrativas, pausas y fallos durante el juego.",
  },
  {
    icon: FileSearch,
    label: "Análisis de información",
    text: "Organización de registros para detectar tendencias generales y comportamientos atípicos.",
  },
  {
    icon: MessageSquareText,
    label: "Entrevistas",
    text: "Aplicadas a subdirección y gabinete psicológico para comprender el contexto institucional.",
  },
  {
    icon: ClipboardList,
    label: "Encuesta",
    text: "Dirigida a estudiantes sobre hábitos de juego, preferencias y comprensión de la depresión.",
  },
];

const instruments = [
  "Logs de Shadow of Souls",
  "BDI-II",
  "Cuestionario digital",
  "Validación funcional",
];

export default function TechniquesInstrumentsSlide() {
  return (
    <Slide
      eyebrow="Metodología"
      title="Técnicas e instrumentos"
      className="techniques-instruments-slide"
    >
      <motion.div
        className="slide14-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="technique-main-card" variants={fadeUp}>
          <div className="technique-card-header">
            <motion.div
              className="technique-icon technique-icon-main"
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
              <ServerCog size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="technique-kicker">Recolección y contraste</span>
              <h3>Del evento de juego al análisis metodológico</h3>
            </div>
          </div>

          <p>
            Las técnicas permitieron recoger, contrastar y analizar información
            tanto del entorno institucional como del comportamiento de los
            estudiantes dentro del videojuego.
          </p>

          <div className="technique-flow">
            <div>juego</div>
            <span>→</span>
            <div>logs</div>
            <span>→</span>
            <div>contraste</div>
            <span>→</span>
            <div>validación</div>
          </div>
        </motion.div>

        <motion.div className="techniques-grid" variants={staggerContainer}>
          {techniques.map(({ icon: Icon, label, text }) => (
            <motion.div className="technique-card" variants={fadeUp} key={label}>
              <motion.div
                className="technique-icon"
                animate={{
                  opacity: [0.76, 1, 0.76],
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Icon size={21} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span>{label}</span>
                <p>{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="instruments-card" variants={fadeUp}>
          <div className="technique-card-header compact-header">
            <div className="technique-icon">
              <ClipboardCheck size={22} strokeWidth={1.7} />
            </div>

            <div>
              <span className="technique-kicker">Instrumentos</span>
              <h3>Herramientas utilizadas</h3>
            </div>
          </div>

          <div className="instrument-chip-grid">
            {instruments.map((instrument) => (
              <div className="instrument-chip" key={instrument}>
                <ScrollText size={16} strokeWidth={1.7} />
                <span>{instrument}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
import { motion } from "framer-motion";
import {
  Activity,
  Clock3,
  DatabaseZap,
  FileJson,
  Footprints,
  Gamepad2,
  MousePointerClick,
  PauseCircle,
  Swords,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide27.css";

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

const eventTypes = [
  {
    icon: Footprints,
    label: "Movement",
    text: "Desplazamiento, dirección y posición del jugador.",
  },
  {
    icon: PauseCircle,
    label: "Stopped",
    text: "Momentos de detención o ausencia de movimiento.",
  },
  {
    icon: Swords,
    label: "Light Attacking",
    text: "Ataques ligeros, arma actual y estado del combo.",
  },
  {
    icon: Activity,
    label: "Estado",
    text: "Vida actual, coordenadas y datos contextuales de sesión.",
  },
];

const processedVariables = [
  {
    icon: MousePointerClick,
    label: "Frecuencia de acciones",
  },
  {
    icon: Clock3,
    label: "Secuencia temporal",
  },
  {
    icon: Footprints,
    label: "Patrón de movimiento",
  },
  {
    icon: PauseCircle,
    label: "Pausas y detenciones",
  },
  {
    icon: Swords,
    label: "Uso de combate",
  },
  {
    icon: DatabaseZap,
    label: "Sesión procesada",
  },
];

export default function GameSessionResultsSlide() {
  return (
    <Slide
      eyebrow="Resultados"
      title="Resultados de sesiones de juego"
      className="game-session-results-slide"
    >
      <motion.div
        className="slide27-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="session-main-card" variants={fadeUp}>
          <div className="session-card-header">
            <motion.div
              className="session-icon session-icon-main"
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
              <Gamepad2 size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="session-kicker">Sesiones reales</span>
              <h3>Registros capturados desde Shadow of Souls</h3>
            </div>
          </div>

          <p>
            Las sesiones de juego generaron registros conductuales reales,
            almacenados como eventos temporales dentro de estructuras JSON para
            su posterior procesamiento y análisis.
          </p>
        </motion.div>

        <motion.div className="session-json-card" variants={fadeUp}>
          <div className="json-card-header">
            <FileJson size={20} strokeWidth={1.7} />
            <span>Fragmento representativo de sesión</span>
          </div>

          <pre>{`{
  "id_session": 20,
  "created_at": "2025-11-03T21:57:49Z",
  "actions": [
    {
      "type": "Movement",
      "timestamp": "21:57:20",
      "posX": 3.8178,
      "posY": -2.0766,
      "currentHealth": 1.0
    },
    {
      "type": "Light Attacking",
      "timestamp": "21:57:27",
      "weapon": "Autojuicio",
      "combo": 0
    },
    {
      "type": "Stopped",
      "timestamp": "21:57:29",
      "direction": "None"
    }
  ]
}`}</pre>
        </motion.div>

        <motion.div className="session-events-grid" variants={staggerContainer}>
          {eventTypes.map(({ icon: Icon, label, text }) => (
            <motion.div className="session-event-card" variants={fadeUp} key={label}>
              <motion.div
                className="session-icon"
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
        </motion.div>

        <motion.div className="session-processing-card" variants={fadeUp}>
          <div className="session-card-header compact-header">
            <motion.div
              className="session-icon"
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
              <DatabaseZap size={21} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="session-kicker">Procesamiento</span>
              <h3>Del log crudo a variables analizables</h3>
            </div>
          </div>

          <div className="processed-variable-grid">
            {processedVariables.map(({ icon: Icon, label }) => (
              <div className="processed-variable-chip" key={label}>
                <Icon size={15} strokeWidth={1.7} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
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
  Radar,
  Route,
  ServerCog,
  UserRound,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide20.css";

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
    icon: UserRound,
    label: "Jugador",
    detail: "Estudiante",
  },
  {
    icon: Gamepad2,
    label: "Acción",
    detail: "Interacción en juego",
  },
  {
    icon: Radar,
    label: "Evento",
    detail: "Captura automática",
  },
  {
    icon: FileJson,
    label: "Log JSON",
    detail: "Dato flexible",
  },
  {
    icon: DatabaseZap,
    label: "Almacenamiento",
    detail: "Firebase / Backend",
  },
  {
    icon: Activity,
    label: "Análisis",
    detail: "Patrón conductual",
  },
];

const telemetryItems = [
  {
    icon: MousePointerClick,
    label: "Acciones",
  },
  {
    icon: Clock3,
    label: "Tiempos",
  },
  {
    icon: Footprints,
    label: "Movimientos",
  },
  {
    icon: PauseCircle,
    label: "Pausas",
  },
  {
    icon: Route,
    label: "Exploración",
  },
  {
    icon: Activity,
    label: "Interacción",
  },
];

export default function PassiveTelemetrySlide() {
  return (
    <Slide
      eyebrow="Shadow of Souls"
      title="Telemetría pasiva"
      className="passive-telemetry-slide"
    >
      <motion.div
        className="slide20-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="telemetry-main-card" variants={fadeUp}>
          <div className="telemetry-card-header">
            <motion.div
              className="telemetry-icon telemetry-icon-main"
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
              <Radar size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="telemetry-kicker">Captura automática</span>
              <h3>Registrar sin interrumpir la experiencia</h3>
            </div>
          </div>

          <p>
            La telemetría pasiva captura acciones, tiempos, movimientos, pausas
            y variables de interacción durante la sesión de juego, sin detener al
            estudiante ni convertir la experiencia en una evaluación directa.
          </p>
        </motion.div>

        <motion.div className="telemetry-diagram-card" variants={fadeUp}>
          <div className="telemetry-diagram">
            {flowSteps.map(({ icon: Icon, label, detail }, index) => (
              <motion.div
                className="telemetry-flow-node-wrap"
                variants={fadeUp}
                key={label}
              >
                <div className="telemetry-flow-node">
                  <motion.div
                    className="telemetry-flow-icon"
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

                  <div>
                    <strong>{label}</strong>
                    <span>{detail}</span>
                  </div>
                </div>

                {index < flowSteps.length - 1 && (
                  <motion.div
                    className="telemetry-flow-arrow"
                    animate={{
                      opacity: [0.4, 1, 0.4],
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15,
                    }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="telemetry-json-panel">
            <span className="json-label">Fragmento real de telemetría</span>
            <pre>{`{
  "id_session": 20,
  "created_at": "2025-11-03T21:57:49Z",
  "log_data": {
    "actions": [
      {
        "type": "Movement",
        "timestamp": "2025-11-03T21:57:20Z",
        "posX": 3.8178,
        "posY": -2.0766,
        "currentHealth": 1.0,
        "extras": ["Direction: Left"]
      },
      {
        "type": "Light Attacking",
        "timestamp": "2025-11-03T21:57:27Z",
        "extras": [
          "Current Weapon: Autojuicio",
          "Current Combo: 0"
        ]
      },
      {
        "type": "Stopped",
        "timestamp": "2025-11-03T21:57:29Z",
        "extras": ["Direction: None"]
      }
    ]
  }
}`}</pre>
          </div>
        </motion.div>

        <motion.div className="telemetry-variable-card" variants={fadeUp}>
          <div className="telemetry-card-header compact-header">
            <div className="telemetry-icon">
              <ServerCog size={21} strokeWidth={1.7} />
            </div>

            <div>
              <span className="telemetry-kicker">Variables capturadas</span>
              <h3>Eventos convertidos en datos</h3>
            </div>
          </div>

          <div className="telemetry-variable-grid">
            {telemetryItems.map(({ icon: Icon, label }) => (
              <motion.div
                className="telemetry-variable-chip"
                variants={fadeUp}
                key={label}
              >
                <Icon size={16} strokeWidth={1.7} />
                <span>{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="telemetry-note-card" variants={fadeUp}>
          <ServerCog size={20} strokeWidth={1.7} />
          <p>
            El sistema no interpreta una acción aislada como síntoma; agrupa
            eventos para construir patrones conductuales revisables.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
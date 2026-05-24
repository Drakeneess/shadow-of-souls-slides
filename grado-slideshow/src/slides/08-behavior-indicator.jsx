import { motion } from "framer-motion";
import {
  Clock3,
  Compass,
  MousePointerClick,
  Route,
  ShieldOff,
  Waves,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide08.css";

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

const behaviorSignals = [
  {
    icon: MousePointerClick,
    label: "Decisiones",
    text: "Elecciones narrativas, rutas tomadas y respuestas frente a situaciones simbólicas.",
  },
  {
    icon: Clock3,
    label: "Tiempos",
    text: "Latencia, pausas, tiempo de reacción y permanencia ante estímulos.",
  },
  {
    icon: ShieldOff,
    label: "Evitación",
    text: "Interacciones omitidas, rechazo de eventos o abandono de acciones relevantes.",
  },
  {
    icon: Compass,
    label: "Exploración",
    text: "Recorrido del entorno, búsqueda de objetos y disposición a interactuar.",
  },
  {
    icon: Waves,
    label: "Ritmo",
    text: "Flujo de juego, frecuencia de acciones y variación del comportamiento.",
  },
  {
    icon: Route,
    label: "Patrón",
    text: "Regularidades observables que permiten comparar sesiones y tendencias.",
  },
];

export default function BehaviorIndicatorSlide() {
  return (
    <Slide
      eyebrow="Marco conceptual"
      title="Conducta como indicador emocional"
      className="behavior-indicator-slide"
    >
      <motion.div
        className="behavior-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="behavior-core-card" variants={fadeUp}>
          <div className="behavior-core-header">
            <div className="behavior-core-icon">
              <Route size={30} strokeWidth={1.7} />
            </div>

            <div>
              <span className="behavior-kicker">Principio de observación</span>
              <h3>La acción también comunica</h3>
            </div>
          </div>

          <p>
            El comportamiento observable puede funcionar como una vía indirecta
            para identificar estados emocionales internos, siempre que se
            interprete dentro de un marco ético, contextual y no diagnóstico.
          </p>

          <div className="behavior-flow">
            <div className="flow-step">Interacción</div>
            <div className="flow-line" />
            <div className="flow-step">Registro</div>
            <div className="flow-line" />
            <div className="flow-step">Patrón</div>
            <div className="flow-line" />
            <div className="flow-step">Señal</div>
          </div>
        </motion.div>

        <motion.div className="behavior-signal-grid" variants={staggerContainer}>
          {behaviorSignals.map(({ icon: Icon, label, text }) => (
            <motion.div
              className="behavior-signal-card"
              variants={fadeUp}
              key={label}
            >
              <motion.div
                className="behavior-signal-icon"
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
                <Icon size={22} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span>{label}</span>
                <p>{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Slide>
  );
}
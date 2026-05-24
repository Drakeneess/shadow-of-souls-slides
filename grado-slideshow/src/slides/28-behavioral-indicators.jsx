import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Compass,
  Gauge,
  Hand,
  MousePointerClick,
  PauseCircle,
  Swords,
  Waves,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide28.css";

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

const indicators = [
  {
    icon: Gauge,
    label: "Ritmo de juego",
    source: "timestamps",
    text: "Velocidad, continuidad y variación temporal entre acciones.",
  },
  {
    icon: MousePointerClick,
    label: "Frecuencia de interacción",
    source: "actions",
    text: "Cantidad de eventos ejecutados durante la sesión.",
  },
  {
    icon: Compass,
    label: "Exploración",
    source: "posX / posY",
    text: "Recorrido espacial, zonas visitadas y desplazamiento.",
  },
  {
    icon: Swords,
    label: "Uso de habilidades",
    source: "extras",
    text: "Ataques, arma actual, combos y recursos utilizados.",
  },
  {
    icon: PauseCircle,
    label: "Pausas",
    source: "Stopped",
    text: "Momentos de detención, interrupción o inactividad.",
  },
];

const pipeline = [
  "Log crudo",
  "Extracción",
  "Variables",
  "Indicadores",
  "Visualización",
];

export default function BehavioralIndicatorsSlide() {
  return (
    <Slide
      eyebrow="Resultados"
      title="Indicadores conductuales derivados"
      className="behavioral-indicators-slide"
    >
      <motion.div
        className="slide28-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="indicators-main-card" variants={fadeUp}>
          <div className="indicators-card-header">
            <motion.div
              className="indicators-icon indicators-icon-main"
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
              <BarChart3 size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="indicators-kicker">De eventos a métricas</span>
              <h3>Variables observables del comportamiento</h3>
            </div>
          </div>

          <p>
            Los registros de juego se transforman en indicadores conductuales
            derivados, permitiendo resumir el comportamiento del estudiante sin
            depender de una única acción aislada.
          </p>

          <div className="indicator-pipeline">
            {pipeline.map((step, index) => (
              <div className="indicator-pipeline-step" key={step}>
                <span>{step}</span>

                {index < pipeline.length - 1 && (
                  <motion.strong
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
                  </motion.strong>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="indicator-focus-card" variants={fadeUp}>
          <motion.div
            className="indicator-radar"
            animate={{
              opacity: [0.86, 1, 0.86],
              scale: [1, 1.015, 1],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="radar-ring ring-1" />
            <div className="radar-ring ring-2" />
            <div className="radar-ring ring-3" />

            <div className="radar-center">
              <Activity size={28} strokeWidth={1.7} />
              <span>Patrón</span>
            </div>

            <div className="radar-node node-top">Ritmo</div>
            <div className="radar-node node-right">Interacción</div>
            <div className="radar-node node-bottom">Pausas</div>
            <div className="radar-node node-left">Exploración</div>
          </motion.div>
        </motion.div>

        <motion.div className="indicators-grid" variants={staggerContainer}>
          {indicators.map(({ icon: Icon, label, source, text }) => (
            <motion.div className="indicator-card" variants={fadeUp} key={label}>
              <motion.div
                className="indicators-icon"
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
                <strong>{source}</strong>
                <p>{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="indicator-note-card" variants={fadeUp}>
          <Waves size={20} strokeWidth={1.7} />
          <p>
            Los indicadores no representan diagnóstico clínico; funcionan como
            señales conductuales agregadas para apoyar la revisión profesional.
          </p>
        </motion.div>

        <motion.div className="indicator-summary-card" variants={fadeUp}>
          <Hand size={20} strokeWidth={1.7} />
          <p>
            El valor analítico aparece al observar tendencias: repetición,
            intensidad, duración y relación entre eventos dentro de una sesión.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
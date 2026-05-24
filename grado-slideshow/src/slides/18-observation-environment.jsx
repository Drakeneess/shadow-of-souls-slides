import { motion } from "framer-motion";
import {
  Eye,
  Gamepad2,
  MousePointerClick,
  Route,
  Timer,
  ScanSearch,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import Figure from "../components/Figure.jsx";

import shadowObservation from "../assets/images/shadow-of-souls-observation.png";

import "../styles/slides/Slide18.css";

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

const observationItems = [
  {
    icon: MousePointerClick,
    label: "Decisiones",
    text: "Elecciones narrativas y respuestas frente a situaciones simbólicas.",
  },
  {
    icon: Timer,
    label: "Tiempos",
    text: "Latencia, pausas, permanencia y ritmo de respuesta.",
  },
  {
    icon: Route,
    label: "Exploración",
    text: "Rutas tomadas, objetos revisados y disposición a interactuar.",
  },
  {
    icon: ScanSearch,
    label: "Evitación",
    text: "Interacciones omitidas, zonas evitadas o abandono de acciones.",
  },
];

export default function ObservationEnvironmentSlide() {
  return (
    <Slide
      eyebrow="Ingeniería del proyecto"
      title="Shadow of Souls como entorno de observación"
      className="observation-environment-slide"
    >
      <motion.div
        className="slide18-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="observation-visual-card" variants={fadeUp}>
          <Figure
            src={shadowObservation}
            alt="Captura de Shadow of Souls como entorno de observación conductual"
            caption="El videojuego funciona como un entorno interactivo donde las acciones del jugador generan registros conductuales."
            variant="cover"
            className="shadow-observation-figure"
          />
        </motion.div>

        <motion.div className="observation-content-column" variants={staggerContainer}>
          <motion.div className="observation-main-card" variants={fadeUp}>
            <div className="observation-card-header">
              <motion.div
                className="observation-icon observation-icon-main"
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
                <span className="observation-kicker">Observación indirecta</span>
                <h3>Conducta sin pregunta clínica directa</h3>
              </div>
            </div>

            <p>
              Shadow of Souls no solicita al estudiante declarar su estado
              emocional de forma explícita. En su lugar, registra cómo interactúa
              con el entorno, qué decisiones toma y qué patrones aparecen
              durante la experiencia.
            </p>

            <div className="observation-flow">
              <div>juego</div>
              <span>→</span>
              <div>acción</div>
              <span>→</span>
              <div>registro</div>
              <span>→</span>
              <div>indicador</div>
            </div>
          </motion.div>

          <motion.div className="observation-grid" variants={staggerContainer}>
            {observationItems.map(({ icon: Icon, label, text }) => (
              <motion.div
                className="observation-item-card"
                variants={fadeUp}
                key={label}
              >
                <motion.div
                  className="observation-icon"
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

          <motion.div className="observation-note-card" variants={fadeUp}>
            <Eye size={20} strokeWidth={1.7} />
            <p>
              El valor del videojuego está en observar comportamiento situado:
              no sustituye al profesional, pero entrega señales para una revisión
              posterior más informada.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
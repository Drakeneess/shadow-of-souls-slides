import { motion } from "framer-motion";
import {
  AppWindow,
  Compass,
  FlaskConical,
  Layers3,
  TimerReset,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide12.css";

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
      staggerChildren: 0.1,
    },
  },
};

const designItems = [
  {
    icon: AppWindow,
    label: "Aplicativo",
    text: "Desarrolla e implementa una solución tecnológica concreta para el contexto escolar.",
  },
  {
    icon: Compass,
    label: "Exploratorio",
    text: "Analiza una propuesta innovadora en un escenario donde aún existe poca aplicación local.",
  },
  {
    icon: TimerReset,
    label: "Transversal",
    text: "Observa el fenómeno en un momento temporal específico, sin seguimiento longitudinal.",
  },
  {
    icon: Layers3,
    label: "Caso único",
    text: "Se focaliza en la Unidad Educativa Técnico Humanística Pater Noster.",
  },
];

export default function ResearchDesignSlide() {
  return (
    <Slide
      eyebrow="Metodología"
      title="Diseño de investigación"
      className="research-design-slide"
    >
      <motion.div
        className="slide12-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="design-main-card" variants={fadeUp}>
          <div className="design-card-header">
            <motion.div
              className="design-icon design-icon-main"
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
              <FlaskConical size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="design-kicker">Diseño metodológico</span>
              <h3>Aplicativo, exploratorio, transversal y de caso único</h3>
            </div>
          </div>

          <p>
            El estudio permite analizar cómo se integra una herramienta
            tecnológica en el contexto educativo para apoyar la detección
            temprana de síntomas depresivos.
          </p>

          <div className="design-method-flow">
            <div>contexto escolar</div>
            <span>→</span>
            <div>interacción con el sistema</div>
            <span>→</span>
            <div>observación conductual</div>
            <span>→</span>
            <div>análisis metodológico</div>
          </div>
        </motion.div>

        <motion.div className="design-grid" variants={staggerContainer}>
          {designItems.map(({ icon: Icon, label, text }) => (
            <motion.div className="design-item-card" variants={fadeUp} key={label}>
              <motion.div
                className="design-icon"
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
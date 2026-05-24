import { motion } from "framer-motion";
import {
  ClipboardList,
  GitCompare,
  ShieldCheck,
  Stethoscope,
  UserSearch,
  Workflow,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide26.css";

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

const useCases = [
  {
    icon: ClipboardList,
    label: "Referencia",
    text: "El BDI-II entrega una base psicométrica para comparar niveles generales.",
  },
  {
    icon: GitCompare,
    label: "Contraste",
    text: "Los resultados se comparan con patrones conductuales registrados en el juego.",
  },
  {
    icon: UserSearch,
    label: "Revisión",
    text: "La interpretación queda sujeta al análisis profesional del gabinete psicológico.",
  },
];

const limits = [
  "No emite diagnóstico clínico.",
  "No reemplaza entrevista psicológica.",
  "No etiqueta individualmente al estudiante.",
  "No interpreta una acción aislada como síntoma.",
];

export default function BdiSystemUseSlide() {
  return (
    <Slide
      eyebrow="Resultados"
      title="Uso del BDI-II dentro del sistema"
      className="bdi-system-use-slide"
    >
      <motion.div
        className="slide26-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="bdi-use-main-card" variants={fadeUp}>
          <div className="bdi-use-card-header">
            <motion.div
              className="bdi-use-icon bdi-use-icon-main"
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
              <ShieldCheck size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="bdi-use-kicker">Límite metodológico</span>
              <h3>Referencia comparativa, no diagnóstico clínico individual</h3>
            </div>
          </div>

          <p>
            Dentro del sistema, el BDI-II se utiliza como punto de comparación
            para contrastar resultados psicométricos con patrones conductuales
            generados durante la interacción con Shadow of Souls.
          </p>
        </motion.div>

        <motion.div className="bdi-use-flow-card" variants={fadeUp}>
          <div className="bdi-use-flow">
            <div className="flow-node">
              <ClipboardList size={24} strokeWidth={1.7} />
              <span>BDI-II</span>
              <strong>referencia psicométrica</strong>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-node">
              <Workflow size={24} strokeWidth={1.7} />
              <span>Sistema</span>
              <strong>patrones conductuales</strong>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-node">
              <UserSearch size={24} strokeWidth={1.7} />
              <span>Gabinete</span>
              <strong>revisión profesional</strong>
            </div>
          </div>
        </motion.div>

        <motion.div className="bdi-use-grid" variants={staggerContainer}>
          {useCases.map(({ icon: Icon, label, text }) => (
            <motion.div className="bdi-use-card" variants={fadeUp} key={label}>
              <motion.div
                className="bdi-use-icon"
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

        <motion.div className="bdi-limits-card" variants={fadeUp}>
          <div className="bdi-use-card-header compact-header">
            <div className="bdi-use-icon">
              <Stethoscope size={22} strokeWidth={1.7} />
            </div>

            <div>
              <span className="bdi-use-kicker">Lo que el sistema no hace</span>
              <h3>Control ético de interpretación</h3>
            </div>
          </div>

          <div className="bdi-limits-grid">
            {limits.map((limit) => (
              <div className="bdi-limit-chip" key={limit}>
                <ShieldCheck size={15} strokeWidth={1.7} />
                <span>{limit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bdi-use-note-card" variants={fadeUp}>
          <ShieldCheck size={20} strokeWidth={1.7} />
          <p>
            La salida del sistema debe entenderse como apoyo para detección
            temprana y priorización de revisión, no como diagnóstico psicológico
            automatizado.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  LineChart,
  Microscope,
  Repeat2,
  UsersRound,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide34.css";

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
      staggerChildren: 0.08,
    },
  },
};

const recommendations = [
  {
    number: "01",
    icon: UsersRound,
    title: "Ampliar la muestra",
    problem: "El estudio se aplicó en un contexto institucional específico.",
    recommendation:
      "Incorporar más estudiantes, cursos e instituciones para fortalecer la representatividad de los resultados.",
  },
  {
    number: "02",
    icon: Microscope,
    title: "Fortalecer validación clínica posterior",
    problem: "El sistema no emite diagnóstico clínico individual.",
    recommendation:
      "Contrastar los indicadores conductuales con evaluación profesional posterior y protocolos psicológicos complementarios.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Mejorar seguimiento longitudinal",
    problem: "La investigación observó sesiones en un periodo delimitado.",
    recommendation:
      "Realizar seguimiento temporal para identificar cambios de comportamiento entre sesiones y evolución de patrones.",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Replicar en otros contextos",
    problem: "Los resultados pertenecen al contexto de Pater Noster.",
    recommendation:
      "Aplicar el sistema en diferentes unidades educativas para comparar comportamiento, aceptación y funcionamiento operativo.",
  },
];

const futureLines = [
  "Mayor diversidad de participantes",
  "Contraste profesional posterior",
  "Análisis temporal de patrones",
  "Aplicación multicentro",
];

export default function RecommendationsSlide() {
  return (
    <Slide
      eyebrow="Recomendaciones"
      title="Recomendaciones"
      className="recommendations-slide"
    >
      <motion.div
        className="slide34-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="recommendations-main-card" variants={fadeUp}>
          <div className="recommendations-card-header">
            <motion.div
              className="recommendations-icon recommendations-icon-main"
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
              <ClipboardCheck size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="recommendations-kicker">Proyección del estudio</span>
              <h3>Continuidad metodológica y técnica</h3>
            </div>
          </div>

          <p>
            Las recomendaciones se orientan a fortalecer la validez externa,
            ampliar el alcance de aplicación y profundizar el análisis de los
            indicadores conductuales en futuras investigaciones.
          </p>
        </motion.div>

        <motion.div className="recommendations-grid" variants={staggerContainer}>
          {recommendations.map(
            ({ number, icon: Icon, title, problem, recommendation }) => (
              <motion.div
                className="recommendation-card"
                variants={fadeUp}
                key={number}
              >
                <div className="recommendation-top">
                  <span className="recommendation-number">{number}</span>

                  <motion.div
                    className="recommendations-icon"
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
                </div>

                <h3>{title}</h3>

                <div className="recommendation-block">
                  <span>Base</span>
                  <p>{problem}</p>
                </div>

                <div className="recommendation-block emphasized">
                  <span>Recomendación</span>
                  <p>{recommendation}</p>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        <motion.div className="future-lines-card" variants={fadeUp}>
          <div className="future-lines-header">
            <ArrowUpRight size={20} strokeWidth={1.7} />
            <span>Líneas futuras</span>
          </div>

          <div className="future-lines-grid">
            {futureLines.map((line) => (
              <div className="future-line-chip" key={line}>
                <CheckCircle2 size={15} strokeWidth={1.8} />
                <span>{line}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="recommendations-note-card" variants={fadeUp}>
          <Repeat2 size={20} strokeWidth={1.7} />

          <p>
            Estas recomendaciones no modifican el alcance del sistema actual:
            orientan su mejora, contraste y expansión en nuevas etapas de
            investigación.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
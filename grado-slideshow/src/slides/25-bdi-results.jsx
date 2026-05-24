import { motion } from "framer-motion";
import {
  BarChart3,
  Gauge,
  LineChart,
  ShieldCheck,
  Sigma,
  UsersRound,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide25.css";

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

const bdiLevels = [
  {
    label: "Mínimo",
    value: 15,
    range: "0–13",
    percent: 88.24,
  },
  {
    label: "Leve",
    value: 2,
    range: "14–19",
    percent: 11.76,
  },
  {
    label: "Moderado",
    value: 0,
    range: "20–28",
    percent: 0,
  },
  {
    label: "Severo",
    value: 0,
    range: "29–63",
    percent: 0,
  },
];

const stats = [
  {
    label: "Media",
    value: "7.35",
  },
  {
    label: "Mediana",
    value: "7",
  },
  {
    label: "Desv. estándar",
    value: "3.79",
  },
  {
    label: "Mínimo",
    value: "2",
  },
  {
    label: "Máximo",
    value: "14",
  },
];

export default function BdiResultsSlide() {
  return (
    <Slide
      eyebrow="Resultados"
      title="Resultados BDI-II"
      className="bdi-results-slide"
    >
      <motion.div
        className="slide25-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="bdi-results-main-card" variants={fadeUp}>
          <div className="bdi-results-card-header">
            <motion.div
              className="bdi-results-icon bdi-results-icon-main"
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
              <UsersRound size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="bdi-results-kicker">Aplicación BDI-II</span>
              <h3>17 estudiantes evaluados</h3>
            </div>
          </div>

          <p>
            Los resultados se concentraron principalmente en el nivel mínimo,
            con dos casos en nivel leve y ausencia de resultados moderados o
            severos.
          </p>

          <div className="bdi-total-chip">
            <Gauge size={17} strokeWidth={1.7} />
            <span>Rango observado: 2 a 14 puntos</span>
          </div>
        </motion.div>

        <motion.div className="bdi-distribution-card" variants={fadeUp}>
          <div className="bdi-results-card-header compact-header">
            <div className="bdi-results-icon">
              <BarChart3 size={22} strokeWidth={1.7} />
            </div>

            <div>
              <span className="bdi-results-kicker">Distribución por nivel</span>
              <h3>Concentración en nivel mínimo</h3>
            </div>
          </div>

          <div className="bdi-level-bars">
            {bdiLevels.map((level) => (
              <div className="bdi-level-row" key={level.label}>
                <div className="bdi-level-label">
                  <strong>{level.label}</strong>
                  <span>{level.range}</span>
                </div>

                <div className="bdi-level-track">
                  <motion.div
                    className="bdi-level-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${level.percent}%` }}
                    transition={{
                      duration: 0.8,
                      delay: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>

                <div className="bdi-level-value">
                  <strong>{level.value}</strong>
                  <span>{level.percent.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bdi-stats-grid-results" variants={staggerContainer}>
          {stats.map((stat) => (
            <motion.div className="bdi-stat-result-card" variants={fadeUp} key={stat.label}>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="bdi-interpretation-card" variants={fadeUp}>
          <div className="bdi-results-card-header compact-header">
            <motion.div
              className="bdi-results-icon"
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
              <LineChart size={22} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="bdi-results-kicker">Lectura general</span>
              <h3>Sin concentración en niveles altos</h3>
            </div>
          </div>

          <p>
            La media de 7.35 y la mediana de 7 refuerzan una tendencia central
            ubicada en el rango mínimo. El valor máximo observado fue 14, límite
            inferior del nivel leve.
          </p>
        </motion.div>

        <motion.div className="bdi-method-note-card" variants={fadeUp}>
          <ShieldCheck size={20} strokeWidth={1.7} />
          <p>
            Estos resultados se usan como referencia psicométrica y punto de
            comparación, no como salida diagnóstica automática del sistema.
          </p>
        </motion.div>

        <motion.div className="bdi-summary-card" variants={fadeUp}>
          <Sigma size={22} strokeWidth={1.7} />

          <div>
            <span>Resumen</span>
            <strong>15 mínimo · 2 leve · 0 moderado · 0 severo</strong>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
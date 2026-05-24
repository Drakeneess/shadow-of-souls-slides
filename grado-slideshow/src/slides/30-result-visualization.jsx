import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Clock3,
  GitBranch,
  MousePointerClick,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import BoxPlot from "../components/charts/BoxPlot.jsx";
import Histogram from "../components/charts/Histogram.jsx";

import "../styles/slides/Slide30.css";
import "../data/studyGraphs.js";

const actionsByCluster = [
  {
    label: "0",
    min: 130,
    q1: 280,
    median: 398,
    q3: 600,
    max: 710,
    outliers: [],
    variant: "cluster-a",
  },
  {
    label: "1",
    min: 50,
    q1: 240,
    median: 410,
    q3: 595,
    max: 745,
    outliers: [],
    variant: "cluster-b",
  },
  {
    label: "2",
    min: 40,
    q1: 120,
    median: 440,
    q3: 585,
    max: 770,
    outliers: [],
    variant: "cluster-c",
  },
];

const latencyByCluster = [
  {
    label: "0",
    min: 0,
    q1: 1.75,
    median: 4,
    q3: 8.5,
    max: 9.8,
    outliers: [],
    variant: "cluster-a",
  },
  {
    label: "1",
    min: 0.4,
    q1: 2.4,
    median: 4.6,
    q3: 5.5,
    max: 8.7,
    outliers: [12.7],
    variant: "cluster-b",
  },
  {
    label: "2",
    min: 0,
    q1: 2.95,
    median: 4.7,
    q3: 6.9,
    max: 8.55,
    outliers: [],
    variant: "cluster-c",
  },
];

const apmBins = [
  { from: 10, to: 32, frequency: 5 },
  { from: 32, to: 54, frequency: 6 },
  { from: 54, to: 76, frequency: 3 },
  { from: 76, to: 98, frequency: 10 },
  { from: 98, to: 120, frequency: 8 },
  { from: 120, to: 142, frequency: 9 },
  { from: 142, to: 164, frequency: 9 },
  { from: 164, to: 186, frequency: 5 },
  { from: 186, to: 208, frequency: 1 },
  { from: 208, to: 230, frequency: 1 },
];

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

const resultPoints = [
  {
    icon: MousePointerClick,
    label: "Acciones",
    text: "El volumen total no diferencia por sí solo los clústeres.",
  },
  {
    icon: Clock3,
    label: "Latencia",
    text: "El ritmo temporal muestra variaciones y dispersión entre grupos.",
  },
  {
    icon: Activity,
    label: "APM",
    text: "La frecuencia de interacción presenta amplitud considerable.",
  },
];

export default function StudyGraphsSlide() {
  return (
    <Slide
      eyebrow="Resultados"
      title="Resultados gráficos del estudio"
      className="study-graphs-slide"
    >
      <motion.div
        className="slide30-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="study-main-card" variants={fadeUp}>
          <div className="study-card-header">
            <motion.div
              className="study-icon study-icon-main"
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
              <span className="study-kicker">Indicadores conductuales</span>
              <h3>57 sesiones procesadas</h3>
            </div>
          </div>

          <p>
            Los gráficos resumen diferencias en volumen de acciones, ritmo
            temporal y frecuencia de interacción durante las sesiones analizadas.
          </p>
        </motion.div>

        <motion.div className="study-chart-card study-chart-primary" variants={fadeUp}>
          <BoxPlot
            title="Distribución de acciones por clúster"
            yLabel="Número de acciones"
            clusters={actionsByCluster}
            maxValue={800}
          />
        </motion.div>

        <motion.div className="study-chart-card study-chart-secondary" variants={fadeUp}>
          <BoxPlot
            title="Latencia promedio por clúster"
            yLabel="Latencia promedio"
            clusters={latencyByCluster}
            maxValue={13}
          />
        </motion.div>

        <motion.div className="study-chart-card study-chart-tertiary" variants={fadeUp}>
          <Histogram
            title="Distribución global de APM"
            xLabel="Acciones por minuto"
            bins={apmBins}
            mean={109}
          />
        </motion.div>

        <motion.div className="study-result-grid" variants={staggerContainer}>
          {resultPoints.map(({ icon: Icon, label, text }) => (
            <motion.div className="study-result-card" variants={fadeUp} key={label}>
              <motion.div
                className="study-result-icon"
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
                <Icon size={18} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span>{label}</span>
                <p>{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="study-note-card" variants={fadeUp}>
          <GitBranch size={20} strokeWidth={1.7} />
          <p>
            La segmentación no responde a una variable aislada, sino a la
            configuración conjunta de múltiples indicadores conductuales
            estandarizados mediante escalamiento estadístico.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
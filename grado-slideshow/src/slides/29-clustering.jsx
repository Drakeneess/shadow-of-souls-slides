import { motion } from "framer-motion";
import {
  Activity,
  GitBranch,
  Layers3,
  Network,
  ScatterChart,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide29.css";

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

const clusterSteps = [
  {
    icon: Activity,
    label: "Indicadores",
    text: "Variables derivadas desde sesiones de juego.",
  },
  {
    icon: ScatterChart,
    label: "K-Means",
    text: "Agrupamiento no supervisado con k = 3.",
  },
  {
    icon: GitBranch,
    label: "Clusters",
    text: "Patrones conductuales diferenciados.",
  },
];

const clusterGroups = [
  {
    number: "01",
    title: "Patrón A",
    description: "Mayor continuidad de interacción y ritmo de juego más estable.",
  },
  {
    number: "02",
    title: "Patrón B",
    description: "Interacción intermedia con variaciones en pausas y exploración.",
  },
  {
    number: "03",
    title: "Patrón C",
    description: "Mayor presencia de pausas, evitación o baja frecuencia de acción.",
  },
];

export default function BehavioralClusteringSlide() {
  return (
    <Slide
      eyebrow="Resultados"
      title="Clusterización conductual"
      className="behavioral-clustering-slide"
    >
      <motion.div
        className="slide29-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="clustering-main-card" variants={fadeUp}>
          <div className="clustering-card-header">
            <motion.div
              className="clustering-icon clustering-icon-main"
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
              <Network size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="clustering-kicker">K-Means</span>
              <h3>k = 3 para patrones diferenciados</h3>
            </div>
          </div>

          <p>
            La clusterización conductual permitió agrupar sesiones según
            similitudes en los indicadores derivados, identificando tres
            patrones generales de comportamiento.
          </p>

          <div className="clustering-k-chip">
            <Layers3 size={17} strokeWidth={1.7} />
            <span>Modelo no supervisado · tres grupos conductuales</span>
          </div>
        </motion.div>

        <motion.div className="clustering-diagram-card" variants={fadeUp}>
          <div className="cluster-scatter">
            <div className="cluster-zone cluster-zone-a">
              <span>Cluster 01</span>
            </div>

            <div className="cluster-zone cluster-zone-b">
              <span>Cluster 02</span>
            </div>

            <div className="cluster-zone cluster-zone-c">
              <span>Cluster 03</span>
            </div>

            {Array.from({ length: 9 }).map((_, index) => (
              <motion.div
                className="cluster-point point-a"
                key={`a-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.18 + index * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}

            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                className="cluster-point point-b"
                key={`b-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.46 + index * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}

            {Array.from({ length: 7 }).map((_, index) => (
              <motion.div
                className="cluster-point point-c"
                key={`c-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.72 + index * 0.035,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ))}

            <div className="scatter-axis axis-x">frecuencia de interacción</div>
            <div className="scatter-axis axis-y">ritmo / pausas</div>
          </div>
        </motion.div>

        <motion.div className="clustering-process-card" variants={fadeUp}>
          <div className="clustering-process">
            {clusterSteps.map(({ icon: Icon, label, text }, index) => (
              <div className="clustering-process-step" key={label}>
                <motion.div
                  className="clustering-icon"
                  animate={{
                    opacity: [0.74, 1, 0.74],
                    scale: [1, 1.035, 1],
                  }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15,
                  }}
                >
                  <Icon size={20} strokeWidth={1.7} />
                </motion.div>

                <span>{label}</span>
                <p>{text}</p>

                {index < clusterSteps.length - 1 && (
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

        <motion.div className="cluster-group-grid" variants={staggerContainer}>
          {clusterGroups.map(({ number, title, description }) => (
            <motion.div className="cluster-group-card" variants={fadeUp} key={number}>
              <div className="cluster-number">{number}</div>

              <div>
                <span>{title}</span>
                <p>{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </Slide>
  );
}
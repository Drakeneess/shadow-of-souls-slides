import { motion } from "framer-motion";
import {
  ClipboardList,
  Gauge,
  ShieldCheck,
  Split,
  Waves,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide10.css";

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

const dimensions = [
  "Estado de ánimo",
  "Hábitos",
  "Aspectos cognitivos",
  "Síntomas somáticos",
];

export default function BdiReferenceSlide() {
  return (
    <Slide
      eyebrow="Marco conceptual"
      title="BDI-II como referencia psicométrica"
      className="bdi-reference-slide"
    >
      <motion.div
        className="slide10-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="bdi-main-card" variants={fadeUp}>
          <div className="bdi-card-header">
            <motion.div
              className="bdi-icon bdi-icon-main"
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
              <ClipboardList size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="bdi-kicker">Instrumento de referencia</span>
              <h3>Inventario de Depresión de Beck-II</h3>
            </div>
          </div>

          <p>
            El BDI-II sirve como punto de comparación psicométrica para
            estructurar criterios conductuales observables dentro del entorno
            interactivo.
          </p>

          <div className="bdi-stats-grid">
            <div className="bdi-stat">
              <strong>21</strong>
              <span>ítems</span>
            </div>

            <div className="bdi-stat">
              <strong>0–3</strong>
              <span>valor por respuesta</span>
            </div>

            <div className="bdi-stat">
              <strong>0–63</strong>
              <span>rango total</span>
            </div>
          </div>
        </motion.div>

        <motion.div className="bdi-scale-card" variants={fadeUp}>
          <div className="bdi-card-header compact-header">
            <div className="bdi-icon">
              <Gauge size={22} strokeWidth={1.7} />
            </div>

            <div>
              <span className="bdi-kicker">Franjas de severidad</span>
              <h3>Punto de contraste</h3>
            </div>
          </div>

          <div className="bdi-scale">
            <div className="scale-row">
              <span>Mínimo</span>
              <div className="scale-track">
                <div className="scale-fill minimal" />
              </div>
              <strong>0–13</strong>
            </div>

            <div className="scale-row">
              <span>Leve</span>
              <div className="scale-track">
                <div className="scale-fill mild" />
              </div>
              <strong>14–19</strong>
            </div>

            <div className="scale-row">
              <span>Moderado</span>
              <div className="scale-track">
                <div className="scale-fill moderate" />
              </div>
              <strong>20–28</strong>
            </div>

            <div className="scale-row">
              <span>Grave</span>
              <div className="scale-track">
                <div className="scale-fill severe" />
              </div>
              <strong>29–63</strong>
            </div>
          </div>
        </motion.div>

        <motion.div className="bdi-dimensions-card" variants={fadeUp}>
          <div className="bdi-card-header compact-header">
            <div className="bdi-icon">
              <Split size={22} strokeWidth={1.7} />
            </div>

            <div>
              <span className="bdi-kicker">Dimensiones consideradas</span>
              <h3>Del ítem al criterio observable</h3>
            </div>
          </div>

          <div className="bdi-dimension-grid">
            {dimensions.map((dimension) => (
              <div className="bdi-dimension" key={dimension}>
                {dimension}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="bdi-warning-card" variants={fadeUp}>
          <div className="bdi-card-header compact-header">
            <motion.div
              className="bdi-icon"
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
              <ShieldCheck size={22} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="bdi-kicker">Límite metodológico</span>
              <h3>No es diagnóstico del sistema</h3>
            </div>
          </div>

          <p>
            En este proyecto, el BDI-II no se usa para que el videojuego emita
            un diagnóstico clínico. Su función es servir como referencia para
            vincular síntomas con equivalentes simbólicos y patrones
            conductuales observables.
          </p>

          <div className="bdi-method-flow">
            <div>BDI-II</div>
            <span>→</span>
            <div>equivalente simbólico</div>
            <span>→</span>
            <div>conducta observable</div>
          </div>
        </motion.div>

        <motion.div className="bdi-support-card" variants={fadeUp}>
          <div className="bdi-card-header compact-header">
            <div className="bdi-icon">
              <Waves size={22} strokeWidth={1.7} />
            </div>

            <div>
              <span className="bdi-kicker">Rol dentro del sistema</span>
              <h3>Comparar, no etiquetar</h3>
            </div>
          </div>

          <p>
            El sistema observa tendencias conductuales y las presenta como
            señales preliminares para revisión profesional posterior.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
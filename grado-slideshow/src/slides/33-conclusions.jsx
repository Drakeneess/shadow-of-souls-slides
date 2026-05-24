import { motion } from "framer-motion";
import {
  CheckCircle2,
  ClipboardList,
  Gamepad2,
  GitBranch,
  LineChart,
  Puzzle,
  ShieldCheck,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide33.css";

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

const conclusions = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Criterios conductuales basados en BDI-II",
    text: "Se establecieron criterios observables dentro del entorno interactivo mediante mecánicas simbólicas, decisiones narrativas y acciones registrables.",
  },
  {
    number: "02",
    icon: Gamepad2,
    title: "Narrativa y decisiones como medio de observación",
    text: "La experiencia narrativa permitió reflejar estilos de afrontamiento, ritmo de interacción y respuestas ante dilemas simbólicos.",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Patrones conductuales derivados",
    text: "Se describieron diferencias en frecuencia de interacción, tiempos de respuesta, exploración, pausas y uso de habilidades.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Funcionamiento técnico y metodológico",
    text: "La aplicación en un entorno educativo real evidenció estabilidad operativa, coherencia interna y generación consistente de indicadores.",
  },
];

const generalPoints = [
  "Viabilidad técnica",
  "Pertinencia operativa",
  "Herramienta complementaria",
];

export default function MainConclusionsSlide() {
  return (
    <Slide
      eyebrow="Conclusiones"
      title="Conclusiones principales"
      className="main-conclusions-slide"
    >
      <motion.div
        className="slide33-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="conclusions-main-card" variants={fadeUp}>
          <div className="conclusions-card-header">
            <motion.div
              className="conclusions-icon conclusions-icon-main"
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
              <CheckCircle2 size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="conclusions-kicker">Síntesis final</span>
              <h3>Viabilidad técnica, pertinencia operativa y valor complementario</h3>
            </div>
          </div>

          <p>
            El desarrollo e implementación de Shadow of Souls permitió constatar
            la viabilidad de integrar un videojuego serio con mecanismos de
            análisis conductual orientados al apoyo en procesos de detección
            temprana.
          </p>

          <div className="general-points">
            {generalPoints.map((point) => (
              <div className="general-point" key={point}>
                <CheckCircle2 size={15} strokeWidth={1.8} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="conclusions-grid" variants={staggerContainer}>
          {conclusions.map(({ number, icon: Icon, title, text }) => (
            <motion.div className="conclusion-card" variants={fadeUp} key={number}>
              <div className="conclusion-top">
                <span className="conclusion-number">{number}</span>

                <motion.div
                  className="conclusions-icon"
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
              <p>{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="conclusions-final-card" variants={fadeUp}>
          <Puzzle size={20} strokeWidth={1.7} />

          <p>
            En conjunto, el sistema articula narrativa interactiva, análisis de
            datos y diseño simbólico para observar comportamiento adolescente en
            contexto educativo real.
          </p>
        </motion.div>

        <motion.div className="conclusions-limit-card" variants={fadeUp}>
          <ShieldCheck size={20} strokeWidth={1.7} />

          <p>
            Su valor es complementario: apoya la observación conductual, pero no
            sustituye la evaluación clínica profesional. Porque por suerte aún
            no estamos entregando diagnósticos a un algoritmo con espada y menú
            de pausa.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
import { motion } from "framer-motion";
import {
  Cpu,
  HeartHandshake,
  Landmark,
  Clock3,
  BadgeDollarSign,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide36.css";

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

const justifications = [
  {
    icon: HeartHandshake,
    kicker: "Justificación social",
    title: "Prevención en contexto escolar",
    text:
      "La depresión adolescente no siempre se verbaliza; puede expresarse mediante silencio, evitación o conductas encubiertas. El sistema propone un medio lúdico y cercano para apoyar la identificación temprana de posibles señales.",
    points: [
      "Fortalece el rol preventivo de la escuela",
      "Reduce barreras de estigma",
      "Apoya a familias y docentes",
    ],
  },
  {
    icon: Cpu,
    kicker: "Justificación técnica",
    title: "Arquitectura viable y replicable",
    text:
      "La propuesta integra Unity, backend PHP, base de datos híbrida y panel web en React para registrar eventos conductuales, procesarlos y presentar reportes automáticos al gabinete psicológico.",
    points: [
      "Registro automático de variables",
      "Panel web para revisión institucional",
      "Sin inversión adicional en hardware",
    ],
  },
  {
    icon: Landmark,
    kicker: "Justificación económica",
    title: "Reducción de carga operativa",
    text:
      "El sistema plantea una inversión única en software frente a ciclos manuales de evaluación que demandan tiempo profesional continuo. Su reutilización permite amortizar el costo en ciclos académicos sucesivos.",
    points: [
      "Costo marginal casi nulo por nueva aplicación",
      "Menor carga administrativa",
      "Amortización en 2 a 3 ciclos",
    ],
  },
];

const economicFacts = [
  {
    icon: Clock3,
    value: "97 h",
    label: "trabajo estimado",
    text: "para evaluar individualmente a 130 estudiantes.",
  },
  {
    icon: BadgeDollarSign,
    value: "9.100–13.000 Bs",
    label: "costo por ciclo",
    text: "solo en horas de evaluación psicológica.",
  },
  {
    icon: RefreshCcw,
    value: "18.700 Bs",
    label: "inversión única",
    text: "desarrollo de software reutilizable.",
  },
];

export default function ProjectJustificationSlide() {
  return (
    <Slide
      eyebrow="Justificación"
      title="Justificación del proyecto"
      className="project-justification-slide"
    >
      <motion.div
        className="justification-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="justification-main-card" variants={fadeUp}>
          <div className="justification-card-header">
            <motion.div
              className="justification-icon justification-icon-main"
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
              <span className="justification-kicker">Pertinencia del sistema</span>
              <h3>Valor social, técnico y económico</h3>
            </div>
          </div>

          <p>
            La propuesta se justifica por su aporte preventivo en salud mental
            escolar, su factibilidad técnica con recursos disponibles y su
            potencial para reducir costos operativos en procesos de observación
            y evaluación inicial.
          </p>
        </motion.div>

        <motion.div className="justification-grid" variants={staggerContainer}>
          {justifications.map(({ icon: Icon, kicker, title, text, points }) => (
            <motion.div
              className="justification-card"
              variants={fadeUp}
              key={kicker}
            >
              <div className="justification-card-header compact-header">
                <motion.div
                  className="justification-icon"
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
                  <Icon size={22} strokeWidth={1.7} />
                </motion.div>

                <div>
                  <span className="justification-kicker">{kicker}</span>
                  <h3>{title}</h3>
                </div>
              </div>

              <p>{text}</p>

              <div className="justification-point-list">
                {points.map((point) => (
                  <div className="justification-point" key={point}>
                    <span />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="economic-facts-grid" variants={staggerContainer}>
          {economicFacts.map(({ icon: Icon, value, label, text }) => (
            <motion.div className="economic-fact-card" variants={fadeUp} key={label}>
              <div className="economic-fact-icon">
                <Icon size={21} strokeWidth={1.7} />
              </div>

              <div>
                <strong>{value}</strong>
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
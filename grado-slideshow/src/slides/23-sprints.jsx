import { motion } from "framer-motion";
import {
  Braces,
  CheckCircle2,
  Gamepad2,
  LineChart,
  Rocket,
  ServerCog,
  Sparkles,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide23.css";

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

const sprints = [
  {
    number: "01",
    icon: ServerCog,
    title: "Base técnica del sistema",
    items: [
      "Backlog y casos de uso iniciales",
      "Modelo relacional de datos",
      "Login y acceso web inicial",
      "Prototipo jugable base",
    ],
  },
  {
    number: "02",
    icon: Gamepad2,
    title: "Narrativa, telemetría y panel",
    items: [
      "Diálogos interactivos con CSV",
      "Decisiones simbólicas vinculadas al BDI-II",
      "Registro de inputs, tiempos e interacciones",
      "API de ingesta de sesiones JSON",
    ],
  },
  {
    number: "03",
    icon: LineChart,
    title: "Progresión y analítica",
    items: [
      "Checkpoints y persistencia avanzada",
      "Menú principal y continuidad de partida",
      "Dashboards por rol y KPIs",
      "Reportes, sesiones y clusterización",
    ],
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Integración y validación final",
    items: [
      "Base de datos final y alertas",
      "Panel responsivo",
      "Mapa modular y música dinámica",
      "Bosses, demo integrada y despliegue",
    ],
  },
];

export default function SprintDevelopmentSlide() {
  return (
    <Slide
      eyebrow="Desarrollo del sistema"
      title="Desarrollo por sprints"
      className="sprint-development-slide"
    >
      <motion.div
        className="slide23-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="sprint-main-card" variants={fadeUp}>
          <div className="sprint-card-header">
            <motion.div
              className="sprint-icon sprint-icon-main"
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
              <Rocket size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="sprint-kicker">Proceso incremental</span>
              <h3>Construcción progresiva del sistema</h3>
            </div>
          </div>

          <p>
            El desarrollo se organizó en cuatro sprints incrementales. Cada
            etapa incorporó componentes funcionales concretos: base de datos y
            prototipo inicial, telemetría narrativa, módulos analíticos,
            reportes, alertas, responsividad y una demo integrada del sistema.
          </p>
        </motion.div>

        <motion.div className="sprint-timeline-card" variants={fadeUp}>
          <div className="sprint-timeline">
            {sprints.map(({ number, icon: Icon, title }, index) => (
              <div className="sprint-timeline-step" key={number}>
                <motion.div
                  className="sprint-timeline-node"
                  animate={{
                    opacity: [0.76, 1, 0.76],
                    scale: [1, 1.035, 1],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.15,
                  }}
                >
                  <Icon size={22} strokeWidth={1.7} />
                </motion.div>

                <span>Sprint {number}</span>
                <strong>{title}</strong>

                {index < sprints.length - 1 && (
                  <motion.div
                    className="sprint-timeline-arrow"
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
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="sprint-grid" variants={staggerContainer}>
          {sprints.map(({ number, icon: Icon, title, items }) => (
            <motion.div className="sprint-card" variants={fadeUp} key={number}>
              <div className="sprint-card-top">
                <span className="sprint-number">{number}</span>

                <motion.div
                  className="sprint-icon"
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

              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={13} strokeWidth={1.8} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="sprint-note-card" variants={fadeUp}>
          <Braces size={20} strokeWidth={1.7} />
          <p>
            El proceso permitió pasar de una base técnica inicial a un ecosistema
            funcional compuesto por videojuego, API, almacenamiento, análisis de
            datos y panel web para revisión institucional.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}

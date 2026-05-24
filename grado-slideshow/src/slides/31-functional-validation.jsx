import { motion } from "framer-motion";
import {
  CalendarCheck,
  CheckCircle2,
  Database,
  Eye,
  Gamepad2,
  GitBranch,
  MonitorCheck,
  ServerCog,
  UserCheck,
  Workflow,
  Braces,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide31.css";

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

const validationFlow = [
  {
    icon: Gamepad2,
    label: "Videojuego",
    text: "Ejecución de Shadow of Souls.",
  },
  {
    icon: Eye,
    label: "Eventos",
    text: "Captura automática de acciones.",
  },
  {
    icon: ServerCog,
    label: "Servidor",
    text: "Envío y recepción de registros.",
  },
  {
    icon: Database,
    label: "Almacenamiento",
    text: "Persistencia en base de datos.",
  },
  {
    icon: Braces,
    label: "Preprocesamiento",
    text: "Conversión de logs en variables.",
  },
  {
    icon: GitBranch,
    label: "Agrupamiento",
    text: "Clusterización conductual.",
  },
  {
    icon: MonitorCheck,
    label: "Visualización",
    text: "Consulta desde el panel web.",
  },
];

const validationConditions = [
  {
    icon: CalendarCheck,
    label: "Inicio",
    value: "03 de noviembre de 2025",
  },
  {
    icon: UserCheck,
    label: "Uso",
    value: "Independiente por participante",
  },
  {
    icon: Workflow,
    label: "Entorno",
    value: "Condiciones naturales de aplicación",
  },
];

export default function FunctionalValidationSlide() {
  return (
    <Slide
      eyebrow="Validación"
      title="Validación funcional del sistema"
      className="functional-validation-slide"
    >
      <motion.div
        className="slide31-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="validation-main-card" variants={fadeUp}>
          <div className="validation-card-header">
            <motion.div
              className="validation-icon validation-icon-main"
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
              <span className="validation-kicker">Prueba funcional</span>
              <h3>Flujo completo comprobado</h3>
            </div>
          </div>

          <p>
            La prueba comenzó el 03 de noviembre de 2025, en condiciones
            naturales, con uso independiente por cada participante. Se comprobó
            el recorrido completo del sistema desde el videojuego hasta la
            visualización de resultados.
          </p>
        </motion.div>

        <motion.div className="validation-conditions-grid" variants={staggerContainer}>
          {validationConditions.map(({ icon: Icon, label, value }) => (
            <motion.div className="validation-condition-card" variants={fadeUp} key={label}>
              <motion.div
                className="validation-icon"
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
                <strong>{value}</strong>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="validation-flow-card" variants={fadeUp}>
          <div className="validation-flow">
            {validationFlow.map(({ icon: Icon, label }, index) => (
              <div className="validation-flow-step" key={label}>
                <motion.div
                  className="validation-flow-node"
                  animate={{
                    opacity: [0.76, 1, 0.76],
                    scale: [1, 1.035, 1],
                  }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                >
                  <Icon size={21} strokeWidth={1.7} />
                </motion.div>

                <span>{label}</span>

                {index < validationFlow.length - 1 && (
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

        <motion.div className="validation-detail-grid" variants={staggerContainer}>
          {validationFlow.map(({ icon: Icon, label, text }) => (
            <motion.div className="validation-detail-card" variants={fadeUp} key={label}>
              <Icon size={18} strokeWidth={1.7} />
              <div>
                <span>{label}</span>
                <p>{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="validation-note-card" variants={fadeUp}>
          <CheckCircle2 size={20} strokeWidth={1.7} />
          <p>
            La validación funcional confirmó la integración entre los módulos del
            sistema: captura, transmisión, persistencia, procesamiento,
            agrupamiento y consulta visual.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
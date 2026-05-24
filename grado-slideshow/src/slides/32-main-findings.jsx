import { motion } from "framer-motion";
import {
  CheckCircle2,
  DatabaseZap,
  GitBranch,
  LayoutDashboard,
  Radar,
  Table2,
  Workflow,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide32.css";

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

const findings = [
  {
    icon: DatabaseZap,
    component: "Captura de información",
    evidence:
      "El sistema registró eventos reales de las sesiones de Shadow of Souls de forma continua.",
    result: "Cumplido",
  },
  {
    icon: Radar,
    component: "Telemetría conductual",
    evidence:
      "Se capturaron acciones, tiempos, movimientos, pausas, uso de habilidades y variables de interacción.",
    result: "Cumplido",
  },
  {
    icon: Workflow,
    component: "Procesamiento de datos",
    evidence:
      "Los logs fueron transformados en indicadores derivados para análisis posterior.",
    result: "Cumplido",
  },
  {
    icon: GitBranch,
    component: "Clusterización",
    evidence:
      "K-Means con k = 3 permitió diferenciar patrones conductuales generales entre sesiones.",
    result: "Cumplido",
  },
  {
    icon: LayoutDashboard,
    component: "Visualización",
    evidence:
      "La plataforma web permitió consultar sesiones, indicadores, gráficos y reportes.",
    result: "Cumplido",
  },
];

export default function ChapterFourFindingsSlide() {
  return (
    <Slide
      eyebrow="Capítulo IV"
      title="Hallazgos principales del Capítulo IV"
      className="chapter-four-findings-slide"
    >
      <motion.div
        className="slide32-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="findings-main-card" variants={fadeUp}>
          <div className="findings-card-header">
            <motion.div
              className="findings-icon findings-icon-main"
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
              <Table2 size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="findings-kicker">Síntesis de resultados</span>
              <h3>Análisis de cumplimiento funcional</h3>
            </div>
          </div>

          <p>
            El Capítulo IV evidencia que el sistema recopiló información de
            forma estable y continua, diferenciando patrones de ritmo,
            interacción, exploración, habilidades y pausas sin recurrir a
            interpretación clínica directa.
          </p>
        </motion.div>

        <motion.div className="findings-table-card" variants={fadeUp}>
          <div className="findings-table">
            <div className="findings-table-header">
              <span>Componente</span>
              <span>Evidencia del Capítulo IV</span>
              <span>Resultado</span>
            </div>

            {findings.map(({ icon: Icon, component, evidence, result }) => (
              <motion.div
                className="findings-table-row"
                variants={fadeUp}
                key={component}
              >
                <div className="finding-component">
                  <div className="finding-row-icon">
                    <Icon size={17} strokeWidth={1.7} />
                  </div>
                  <strong>{component}</strong>
                </div>

                <p>{evidence}</p>

                <div className="finding-status">
                  <CheckCircle2 size={16} strokeWidth={1.8} />
                  <span>{result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="findings-note-card" variants={fadeUp}>
          <CheckCircle2 size={20} strokeWidth={1.7} />
          <p>
            La validación del sistema se interpreta como cumplimiento funcional
            del flujo técnico y analítico, no como validación clínica diagnóstica
            individual.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
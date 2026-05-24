import { motion } from "framer-motion";
import {
  BarChart3,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  LineChart,
  SearchCheck,
  UsersRound,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import Figure from "../components/Figure.jsx";

import webDashboard from "../assets/images/web-platform-dashboard.png";
import webReports from "../assets/images/web-platform-reports.png";

import "../styles/slides/Slide22.css";

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

const platformFeatures = [
  {
    icon: UsersRound,
    label: "Sesiones",
    text: "Consulta de sesiones registradas por estudiante.",
  },
  {
    icon: BarChart3,
    label: "Indicadores",
    text: "Resumen de variables conductuales observadas.",
  },
  {
    icon: LineChart,
    label: "Gráficos",
    text: "Representación visual de tendencias y patrones.",
  },
  {
    icon: FileText,
    label: "Reportes",
    text: "Generación de reportes para revisión institucional.",
  },
  {
    icon: SearchCheck,
    label: "Revisión",
    text: "Apoyo a la interpretación profesional posterior.",
  },
];

export default function WebPlatformSlide() {
  return (
    <Slide
      eyebrow="Plataforma web"
      title="Plataforma web de análisis"
      className="web-platform-slide"
    >
      <motion.div
        className="slide22-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="web-platform-main-card" variants={fadeUp}>
          <div className="web-platform-card-header">
            <motion.div
              className="web-platform-icon web-platform-icon-main"
              animate={{
                opacity: [0.78, 1, 0.78],
                scale: [1, 1.0, 1],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <LayoutDashboard size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="web-platform-kicker">Panel de análisis</span>
              <h3>Sesiones, indicadores, gráficos y reportes</h3>
            </div>
          </div>

          <p>
            La plataforma web permite revisar sesiones de juego, visualizar
            indicadores conductuales, consultar gráficos, generar reportes y
            apoyar la revisión profesional del gabinete psicológico.
          </p>
        </motion.div>

        <motion.div className="web-platform-visual-main" variants={fadeUp}>
          <Figure
            src={webDashboard}
            alt="Dashboard principal de la plataforma web de análisis"
            variant="cover"
            className="web-dashboard-figure"
          />
        </motion.div>

        <motion.div className="web-platform-visual-secondary" variants={fadeUp}>
          <Figure
            src={webReports}
            alt="Vista de reportes o gráficos de la plataforma web"
            variant="cover"
            className="web-reports-figure"
          />
        </motion.div>

        <motion.div className="web-platform-feature-grid" variants={staggerContainer}>
          {platformFeatures.map(({ icon: Icon, label, text }) => (
            <motion.div
              className="web-platform-feature-card"
              variants={fadeUp}
              key={label}
            >
              <motion.div
                className="web-platform-feature-icon"
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

        <motion.div className="web-platform-note-card" variants={fadeUp}>
          <ClipboardCheck size={20} strokeWidth={1.7} />
          <p>
            El panel no reemplaza la valoración profesional: organiza la
            información para facilitar una revisión más clara, trazable y
            contextualizada.
          </p>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
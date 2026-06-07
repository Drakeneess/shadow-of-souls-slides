import { motion } from "framer-motion";
import {
  BarChart3,
  Building2,
  ClipboardCheck,
  Gamepad2,
  GraduationCap,
  Laptop,
  School,
  UsersRound,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide24.css";

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

const characterizationPoints = [
  {
    icon: Laptop,
    label: "Perfil tecnológico",
    text: "Se identificaron condiciones de acceso, familiaridad digital y disponibilidad técnica para utilizar el videojuego.",
  },
  {
    icon: Gamepad2,
    label: "Familiaridad lúdica",
    text: "Se consideraron hábitos de juego y cercanía con experiencias interactivas para valorar la pertinencia del formato.",
  },
  {
    icon: ClipboardCheck,
    label: "Uso no diagnóstico",
    text: "La caracterización funcionó como contexto de análisis, sin emitir juicios clínicos individuales.",
  },
  {
    icon: BarChart3,
    label: "Base comparativa",
    text: "Los resultados del BDI-II se usaron como referente psicométrico para contextualizar patrones conductuales.",
  },
];

export default function UserCharacterizationSlide() {
  return (
    <Slide
      eyebrow="Marco práctico"
      title="Caracterización de usuarios"
      className="user-characterization-slide"
    >
      <motion.div
        className="slide24-layout compact-slide24-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="user-main-card" variants={fadeUp}>
          <div className="user-card-header">
            <motion.div
              className="user-icon user-icon-main"
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
              <School size={28} strokeWidth={1.7} />
            </motion.div>

            <div>
              <span className="user-kicker">Contexto de aplicación</span>
              <h3>Unidad Educativa Pater Noster</h3>
            </div>
          </div>

          <p>
            La caracterización permitió contextualizar a los usuarios finales
            antes del análisis conductual, considerando hábitos tecnológicos,
            familiaridad con videojuegos, condiciones de aplicación y el uso del
            BDI-II como referente comparativo.
          </p>

          <div className="user-context-chip">
            <Building2 size={16} strokeWidth={1.7} />
            <span>La Paz, Bolivia · Contexto escolar real</span>
          </div>
        </motion.div>

        <motion.div
          className="user-stats-card compact-user-stats-card"
          variants={fadeUp}
        >
          <div className="user-stat-big">
            <GraduationCap size={24} strokeWidth={1.7} />
            <span>Muestra aplicada</span>
            <strong>24</strong>
            <p>estudiantes participantes en la aplicación del sistema</p>
          </div>

          <div className="user-stat-divider" />

          <div className="user-stat-big selected">
            <UsersRound size={24} strokeWidth={1.7} />
            <span>BDI-II aplicado</span>
            <strong>17</strong>
            <p>estudiantes con referente psicométrico vinculado al análisis</p>
          </div>
        </motion.div>

        <motion.div
          className="conditions-card compact-conditions-card"
          variants={fadeUp}
        >
          <div className="conditions-header">
            <ClipboardCheck size={20} strokeWidth={1.7} />
            <span>Lectura de caracterización</span>
          </div>

          <div className="profile-definition-grid">
            {characterizationPoints.map(({ icon: Icon, label, text }) => (
              <div className="profile-definition-card" key={label}>
                <Icon size={17} strokeWidth={1.7} />

                <div>
                  <strong>{label}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
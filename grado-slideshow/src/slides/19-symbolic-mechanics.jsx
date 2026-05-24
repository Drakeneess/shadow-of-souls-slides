import { motion } from "framer-motion";
import {
  BrainCircuit,
  Compass,
  Gamepad2,
  HeartPulse,
  Swords,
  Waypoints,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import Figure from "../components/Figure.jsx";

import symbolicMechanics from "../assets/images/shadow-symbolic-mechanics.png";

import "../styles/slides/Slide19.css";

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

const mechanics = [
  {
    icon: Waypoints,
    label: "Decisiones",
    text: "Elecciones narrativas vinculadas a respuestas emocionales y simbólicas.",
  },
  {
    icon: Swords,
    label: "Combate y armas",
    text: "Uso de recursos, agresión, evitación, insistencia o abandono.",
  },
  {
    icon: Compass,
    label: "Exploración",
    text: "Rutas tomadas, objetos revisados y disposición a interactuar.",
  },
  {
    icon: HeartPulse,
    label: "Símbolos emocionales",
    text: "Elementos narrativos asociados a criterios observables derivados del BDI-II.",
  },
];

export default function SymbolicMechanicsSlide() {
  return (
    <Slide
      eyebrow="Shadow of Souls"
      title="Mecánicas narrativas y simbólicas"
      className="symbolic-mechanics-slide"
    >
      <motion.div
        className="slide19-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="symbolic-visual-card" variants={fadeUp}>
          <Figure
            src={symbolicMechanics}
            alt="Captura de Shadow of Souls con mecánicas narrativas y simbólicas"
            caption="Las decisiones, la exploración y el combate permiten observar patrones conductuales dentro de una narrativa simbólica."
            variant="cover"
            className="symbolic-mechanics-figure"
          />
        </motion.div>

        <motion.div className="symbolic-content-column" variants={staggerContainer}>
          <motion.div className="symbolic-main-card" variants={fadeUp}>
            <div className="symbolic-card-header">
              <motion.div
                className="symbolic-icon symbolic-icon-main"
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
                <Gamepad2 size={28} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span className="symbolic-kicker">Diseño observacional</span>
                <h3>La mecánica como lenguaje conductual</h3>
              </div>
            </div>

            <p>
              Shadow of Souls utiliza decisiones, armas, combate, exploración y
              elementos simbólicos para representar situaciones vinculadas a
              criterios conductuales derivados del BDI-II.
            </p>

            <div className="symbolic-method-flow">
              <div>criterio BDI-II</div>
              <span>→</span>
              <div>equivalente simbólico</div>
              <span>→</span>
              <div>acción jugable</div>
              <span>→</span>
              <div>registro conductual</div>
            </div>
          </motion.div>

          <motion.div className="symbolic-grid" variants={staggerContainer}>
            {mechanics.map(({ icon: Icon, label, text }) => (
              <motion.div
                className="symbolic-item-card"
                variants={fadeUp}
                key={label}
              >
                <motion.div
                  className="symbolic-icon"
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
                  <p>{text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="symbolic-note-card" variants={fadeUp}>
            <BrainCircuit size={20} strokeWidth={1.7} />
            <p>
              La interpretación no se realiza sobre una acción aislada, sino
              sobre patrones repetidos dentro del contexto narrativo.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
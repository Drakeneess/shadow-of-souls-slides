import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  HandHeart,
  School,
  UserCheck,
  UsersRound,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide13.css";

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

export default function PopulationSampleSlide() {
  return (
    <Slide
      eyebrow="Metodología"
      title="Población y muestra"
      className="population-sample-slide"
    >
      <motion.div
        className="slide13-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="population-context-card" variants={fadeUp}>
          <div className="population-card-header">
            <motion.div
              className="population-icon population-icon-main"
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
              <span className="population-kicker">Caso de estudio</span>
              <h3>Unidad Educativa Técnico Humanística Pater Noster</h3>
            </div>
          </div>

          <p>
            La investigación se focaliza en la comunidad educativa de Pater
            Noster, ubicada en la ciudad de La Paz, Bolivia, con énfasis en
            estudiantes de tercero a sexto de secundaria.
          </p>

          <div className="population-location-chip">
            <Building2 size={17} strokeWidth={1.7} />
            <span>La Paz, Bolivia · Contexto escolar real</span>
          </div>
        </motion.div>

        <motion.div className="population-stats-grid" variants={staggerContainer}>
          <motion.div className="population-stat-card" variants={fadeUp}>
            <UsersRound size={24} strokeWidth={1.7} />
            <strong>56</strong>
            <span>candidatos viables</span>
          </motion.div>

          <motion.div className="population-stat-card" variants={fadeUp}>
            <GraduationCap size={24} strokeWidth={1.7} />
            <strong>3ro–6to</strong>
            <span>nivel secundario</span>
          </motion.div>

          <motion.div className="population-stat-card" variants={fadeUp}>
            <UserCheck size={24} strokeWidth={1.7} />
            <strong>24</strong>
            <span>estudiantes participantes</span>
          </motion.div>

          <motion.div className="population-stat-card" variants={fadeUp}>
            <HandHeart size={24} strokeWidth={1.7} />
            <strong>voluntaria</strong>
            <span>participación con criterios de inclusión</span>
          </motion.div>
        </motion.div>

        <motion.div className="sample-composition-card" variants={fadeUp}>
          <div className="population-card-header compact-header">
            <div className="population-icon">
              <UsersRound size={22} strokeWidth={1.7} />
            </div>

            <div>
              <span className="population-kicker">Composición de muestra</span>
              <h3>Participantes del estudio</h3>
            </div>
          </div>

          <div className="sample-list">
            <div>
              <strong>24</strong>
              <span>estudiantes voluntarios</span>
            </div>
            <div>
              <strong>1</strong>
              <span>gabinete psicológico</span>
            </div>
            <div>
              <strong>2</strong>
              <span>docentes colaboradores</span>
            </div>
            <div>
              <strong>2</strong>
              <span>autoridades institucionales</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
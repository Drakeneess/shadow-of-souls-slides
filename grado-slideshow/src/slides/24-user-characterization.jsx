import { motion } from "framer-motion";
import {
  Building2,
  ClipboardCheck,
  GraduationCap,
  HandHeart,
  Laptop,
  School,
  ShieldCheck,
  UserCheck,
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

const conditions = [
  {
    icon: HandHeart,
    label: "Participación voluntaria",
  },
  {
    icon: ShieldCheck,
    label: "Consentimiento informado",
  },
  {
    icon: Laptop,
    label: "Medios técnicos disponibles",
  },
  {
    icon: UserCheck,
    label: "Criterios de inclusión",
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
            La aplicación se realizó con estudiantes de tercero a sexto de
            secundaria, en un contexto escolar real, bajo participación
            voluntaria y disponibilidad técnica para utilizar el videojuego.
          </p>

          <div className="user-context-chip">
            <Building2 size={16} strokeWidth={1.7} />
            <span>La Paz, Bolivia</span>
          </div>
        </motion.div>

        <motion.div className="user-stats-card compact-user-stats-card" variants={fadeUp}>
          <div className="user-stat-big">
            <GraduationCap size={24} strokeWidth={1.7} />
            <span>Población objetivo</span>
            <strong>56</strong>
            <p>estudiantes candidatos de 3ro a 6to de secundaria</p>
          </div>

          <div className="user-stat-divider" />

          <div className="user-stat-big selected">
            <UsersRound size={24} strokeWidth={1.7} />
            <span>Muestra aplicada</span>
            <strong>24</strong>
            <p>estudiantes participantes voluntarios</p>
          </div>
        </motion.div>

        <motion.div className="conditions-card compact-conditions-card" variants={fadeUp}>
          <div className="conditions-header">
            <ClipboardCheck size={20} strokeWidth={1.7} />
            <span>Condiciones de participación</span>
          </div>

          <div className="conditions-grid">
            {conditions.map(({ icon: Icon, label }) => (
              <div className="condition-chip" key={label}>
                <Icon size={16} strokeWidth={1.7} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
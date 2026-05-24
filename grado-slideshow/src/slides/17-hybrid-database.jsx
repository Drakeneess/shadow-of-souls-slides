import { motion } from "framer-motion";
import {
  Database,
  FileJson,
  GitBranch,
  ShieldCheck,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import Figure from "../components/Figure.jsx";

import mysqlDatabaseDiagram from "../assets/images/mysql-database-diagram.png";

import "../styles/slides/Slide17.css";

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

export default function HybridDatabaseSlide() {
  return (
    <Slide
      eyebrow="Ingeniería del proyecto"
      title="Base de datos híbrida"
      className="hybrid-database-slide"
    >
      <motion.div
        className="slide17-layout"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="database-diagram-card" variants={fadeUp}>
          <Figure
            src={mysqlDatabaseDiagram}
            alt="Diagrama relacional de la base de datos MySQL del sistema"
            caption="Modelo relacional para usuarios, estudiantes, sesiones, reportes, resultados BDI-II y resúmenes conductuales."
            variant="diagram"
            className="database-diagram-figure"
          />
        </motion.div>

        <motion.div className="database-summary-column" variants={staggerContainer}>
          <motion.div className="database-summary-card" variants={fadeUp}>
            <div className="database-card-header">
              <motion.div
                className="database-icon"
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
                <Database size={22} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span className="database-kicker">MySQL</span>
                <h3>Datos estructurados</h3>
              </div>
            </div>

            <p>
              Almacena entidades relacionales como usuarios, estudiantes,
              sesiones, resultados BDI-II, reportes psicológicos, estados y
              alertas.
            </p>
          </motion.div>

          <motion.div className="database-summary-card" variants={fadeUp}>
            <div className="database-card-header">
              <motion.div
                className="database-icon"
                animate={{
                  opacity: [0.76, 1, 0.76],
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                <FileJson size={22} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span className="database-kicker">Firebase</span>
                <h3>Telemetría conductual JSON</h3>
              </div>
            </div>

            <p>
              Guarda eventos flexibles del videojuego: acciones, tiempos,
              interacción, exploración, pausas y otros registros de sesión.
            </p>
          </motion.div>

          <motion.div className="database-benefit-card" variants={fadeUp}>
            <div className="database-card-header">
              <motion.div
                className="database-icon"
                animate={{
                  opacity: [0.74, 1, 0.74],
                  scale: [1, 1.035, 1],
                }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
              >
                <GitBranch size={22} strokeWidth={1.7} />
              </motion.div>

              <div>
                <span className="database-kicker">Separación funcional</span>
                <h3>Trazabilidad + flexibilidad</h3>
              </div>
            </div>

            <div className="database-benefits-grid">
              <div>
                <ShieldCheck size={16} strokeWidth={1.7} />
                <span>Integridad relacional</span>
              </div>

              <div>
                <FileJson size={16} strokeWidth={1.7} />
                <span>Flexibilidad analítica</span>
              </div>

              <div>
                <GitBranch size={16} strokeWidth={1.7} />
                <span>Trazabilidad de sesiones</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Slide>
  );
}
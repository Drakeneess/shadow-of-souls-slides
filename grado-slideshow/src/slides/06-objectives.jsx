import {
  Activity,
  BrainCircuit,
  ClipboardCheck,
  Gamepad2,
  ListChecks,
  Target,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide06.css";

export default function ObjectivesSlide() {
  return (
    <Slide
      eyebrow="Objetivos de la investigación"
      title="Objetivo general y objetivos específicos"
      className="objectives-slide"
    >
      <div className="objective-main objective-main-hero">
        <div className="objective-heading">
          <div className="objective-icon objective-icon-main">
            <Target size={30} strokeWidth={1.7} />
          </div>

          <div>
            <span className="objective-kicker">Objetivo general</span>
            <h3>Dirección principal del proyecto</h3>
          </div>
        </div>

        <p>
          Desarrollar un sistema para apoyar la detección temprana de depresión
          en estudiantes de tercero a sexto de secundaria de la Unidad Educativa
          Técnico Humanística Pater Noster de la ciudad de La Paz, aplicando
          análisis de patrones conductuales mediante el uso del videojuego Shadow
          of Souls.
        </p>
      </div>

      <div className="specific-objectives-header">
        <div className="objective-icon">
          <ListChecks size={24} strokeWidth={1.7} />
        </div>

        <h3>Objetivos específicos</h3>
      </div>

      <div className="specific-objectives-grid">
        <div className="specific-objective-card">
          <div className="specific-objective-top">
            <span className="objective-number">01</span>
            <BrainCircuit size={24} strokeWidth={1.7} />
          </div>

          <p>
            Establecer criterios conductuales basados en los ítems del
            Inventario de Depresión de Beck (BDI-II) que puedan ser observados
            en un entorno interactivo.
          </p>
        </div>

        <div className="specific-objective-card">
          <div className="specific-objective-top">
            <span className="objective-number">02</span>
            <Gamepad2 size={24} strokeWidth={1.7} />
          </div>

          <p>
            Analizar la capacidad de la narrativa y las decisiones dentro de un
            videojuego serio para reflejar indicadores de riesgo emocional en
            estudiantes de secundaria.
          </p>
        </div>

        <div className="specific-objective-card">
          <div className="specific-objective-top">
            <span className="objective-number">03</span>
            <Activity size={24} strokeWidth={1.7} />
          </div>

          <p>
            Describir patrones conductuales asociados a indicadores de depresión
            en el comportamiento de los jugadores.
          </p>
        </div>

        <div className="specific-objective-card">
          <div className="specific-objective-top">
            <span className="objective-number">04</span>
            <ClipboardCheck size={24} strokeWidth={1.7} />
          </div>

          <p>
            Evaluar el funcionamiento del sistema propuesto mediante su
            aplicación en estudiantes de tercero a sexto de secundaria de la
            Unidad Educativa Técnico Humanística Pater Noster, a través del
            análisis técnico de los resultados conductuales generados.
          </p>
        </div>
      </div>
    </Slide>
  );
}
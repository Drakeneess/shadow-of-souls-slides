import Slide from "../components/Slide.jsx";
import IshikawaDiagram from "../components/IshikawaDiagram.jsx";

import "../styles/slides/Slide04.css";

export default function InstitutionalProblemSlide() {
  return (
    <Slide
      eyebrow="Problema institucional"
      title="Dificultad en la detección temprana dentro del contexto escolar"
      className="institutional-problem-slide"
    >
      <div className="institutional-problem-layout">
        <div className="problem-summary">
          <div className="mini-panel">
            <h3>Situación observada</h3>
            <p>
              Los estudiantes de secundaria suelen ocultar sus emociones y
              mostrar resistencia a ser evaluados psicológicamente.
            </p>
          </div>

          <div className="mini-panel">
            <h3>Efecto</h3>
            <p>
              Esto dificulta diferenciar entre comportamientos adolescentes
              típicos y señales de riesgo emocional.
            </p>
          </div>
        </div>

        <IshikawaDiagram />
      </div>
    </Slide>
  );
}
import {
  GraduationCap,
  HeartPulse,
  MapPin,
  SearchCheck,
} from "lucide-react";

import Slide from "../components/Slide.jsx";
import "../styles/slides/Slide05.css";

export default function ResearchQuestionSlide() {
  return (
    <Slide
      eyebrow="Formulación del problema"
      title="Pregunta de investigación"
      className="research-question-slide"
    >
      <div className="question-context">
        <div className="question-chip">
          <HeartPulse size={22} strokeWidth={1.7} />
          <span>Apoyo</span>
        </div>

        <div className="question-line" />

        <div className="question-chip">
          <SearchCheck size={22} strokeWidth={1.7} />
          <span>Detección temprana</span>
        </div>

        <div className="question-line" />

        <div className="question-chip">
          <GraduationCap size={22} strokeWidth={1.7} />
          <span>Estudiantes de secundaria</span>
        </div>
      </div>

      <div className="question-box">
        <p className="question-text">
          ¿Cómo se puede apoyar en la detección temprana de la depresión en
          estudiantes de tercero a sexto de secundaria de la Unidad Educativa
          Pater Noster de la ciudad de La Paz, Bolivia?
        </p>
      </div>

      <div className="question-location">
        <MapPin size={18} strokeWidth={1.7} />
        <span>Unidad Educativa Pater Noster · La Paz, Bolivia</span>
      </div>
    </Slide>
  );
}
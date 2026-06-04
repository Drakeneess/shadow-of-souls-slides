import Slide from "../components/Slide.jsx";

export default function CoverSlide() {
  return (
    <Slide eyebrow="Proyecto de grado" className="cover-slide compact-cover">
      <div className="cover-frame">
        <div className="cover-noise" />
        <div className="cover-ring cover-ring-one" />
        <div className="cover-ring cover-ring-two" />

        <div className="cover-header">
          <p className="institution-label">UNIVERSIDAD PRIVADA DEL VALLE</p>
          <p className="career-label">
            FACULTAD DE INFORMÁTICA Y ELECTRÓNICA · LICENCIATURA EN INGENIERÍA DE
            SISTEMAS INFORMÁTICOS
          </p>
        </div>

        <div className="title-stack">
          <div className="title-kicker">Shadow of Souls</div>

          <h1 className="thesis-title compact-thesis-title">
            SISTEMA PARA EL APOYO EN LA DETECCIÓN TEMPRANA DE DEPRESIÓN EN
            ESTUDIANTES DE SECUNDARIA APLICANDO ANÁLISIS DE PATRONES CONDUCTUALES
            MEDIANTE EL USO DEL VIDEOJUEGO SHADOW OF SOULS
          </h1>

          <p className="case-line">
            CASO: UNIDAD EDUCATIVA PATER NOSTER
          </p>
        </div>

        <div className="compact-meta-grid">
          <div className="meta-card">
            <span className="meta-label">Postulante</span>
            <span className="meta-value">FABIO SEBASTIAN ROMERO PARDO</span>
          </div>

          <div className="meta-card">
            <span className="meta-label">Tutor</span>
            <span className="meta-value">M.SC. RODMY ORELLANA ILLANES</span>
          </div>

          <div className="meta-card">
            <span className="meta-label">Lugar</span>
            <span className="meta-value">La Paz– Bolivia</span>
          </div>

          <div className="meta-card">
            <span className="meta-label">Gestión</span>
            <span className="meta-value">2026</span>
          </div>
        </div>
      </div>
    </Slide>
  );
}
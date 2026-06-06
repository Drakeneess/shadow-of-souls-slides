import "../styles/IshikawaDiagram.css";

const groups = [
  {
    key: "personal",
    title: "Factores\npersonales",
    box: { x: 60, y: 28, w: 180, h: 54 },
    branch: { x1: 270, y1: 260, x2: 180, y2: 94 },
    items: [
      { x1: 205, y: 138, x2: 360, labelX: 372, text: "Ocultamiento\nemocional" },
      { x1: 225, y: 178, x2: 360, labelX: 372, text: "Resistencia a hablar" },
      { x1: 245, y: 218, x2: 360, labelX: 372, text: "Normalización del malestar" },
    ],
  },
  {
    key: "family",
    title: "Factores\nfamiliares",
    box: { x: 60, y: 420, w: 180, h: 54 },
    branch: { x1: 270, y1: 260, x2: 180, y2: 426 },
    items: [
      { x1: 205, y: 330, x2: 360, labelX: 372, text: "Baja comunicación familiar" },
      { x1: 225, y: 370, x2: 360, labelX: 372, text: "Falta de seguimiento" },
      { x1: 245, y: 410, x2: 360, labelX: 372, text: "Conflictos en el hogar" },
    ],
  },
  {
    key: "school",
    title: "Factores escolares",
    box: { x: 385, y: 28, w: 180, h: 54 },
    branch: { x1: 585, y1: 260, x2: 495, y2: 94 },
    items: [
      { x1: 520, y: 138, x2: 675, labelX: 687, text: "Sobrecarga docente" },
      { x1: 540, y: 178, x2: 675, labelX: 687, text: "Poco tiempo de observación" },
      { x1: 560, y: 218, x2: 675, labelX: 687, text: "Ausencia de alertas\ntempranas" },
    ],
  },
  {
    key: "social",
    title: "Factores sociales y\ntecnológicos",
    box: { x: 385, y: 420, w: 180, h: 54 },
    branch: { x1: 585, y1: 260, x2: 495, y2: 426 },
    items: [
      { x1: 520, y: 330, x2: 675, labelX: 687, text: "Uso excesivo de redes" },
      { x1: 540, y: 370, x2: 675, labelX: 687, text: "Aislamiento social" },
      { x1: 560, y: 410, x2: 675, labelX: 687, text: "Cambios de conducta invisibles" },
    ],
  },
];

function BoxLabel({ x, y, w, h, text, className = "" }) {
  const lines = text.split("\n");

  return (
    <foreignObject x={x} y={y} width={w} height={h}>
      <div className={`ishikawa-box ${className}`}>
        {lines.map((line, index) => (
          <span key={index}>{line}</span>
        ))}
      </div>
    </foreignObject>
  );
}

export default function IshikawaDiagram() {
  return (
    <div className="ishikawa-card" aria-label="Diagrama de Ishikawa">
      <svg
        className="ishikawa-svg"
        viewBox="0 0 980 500"
        role="img"
        aria-labelledby="ishikawa-title ishikawa-desc"
      >
        <title id="ishikawa-title">
          Diagrama de Ishikawa sobre la detección temprana de depresión
        </title>
        <desc id="ishikawa-desc">
          Diagrama causa-efecto con factores personales, familiares, escolares y sociales-tecnológicos.
        </desc>

        {/* Eje principal */}
        <line className="fishbone-main" x1="95" y1="260" x2="805" y2="260" />
        <polygon className="fishbone-arrow" points="805,246 838,260 805,274" />

        {/* Problema */}
        <BoxLabel
          x={845}
          y={195}
          w={120}
          h={130}
          text={"Dificultad en la\ndetección temprana\nde depresión en\nestudiantes"}
          className="ishikawa-problem"
        />

        {/* Grupos */}
        {groups.map((group) => (
          <g key={group.key}>
            <line
              className="fishbone-branch"
              x1={group.branch.x1}
              y1={group.branch.y1}
              x2={group.branch.x2}
              y2={group.branch.y2}
            />

            <BoxLabel
              x={group.box.x}
              y={group.box.y}
              w={group.box.w}
              h={group.box.h}
              text={group.title}
              className="ishikawa-category"
            />

            {group.items.map((item, index) => (
              <g key={`${group.key}-${index}`}>
                <line
                  className="fishbone-subcause"
                  x1={item.x1}
                  y1={item.y}
                  x2={item.x2}
                  y2={item.y}
                />
                <text
                  className="ishikawa-item"
                  x={item.labelX}
                  y={item.y}
                  dominantBaseline="middle"
                >
                  {item.text.split("\n").map((line, lineIndex) => (
                    <tspan
                      key={line}
                      x={item.labelX}
                      dy={lineIndex === 0 ? "-0.35em" : "1.2em"}
                    >
                      {line}
                    </tspan>
                  ))}
                </text>
              </g>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}
import {
  Database,
  Gamepad2,
  LayoutDashboard,
  ServerCog,
  BrainCircuit,
  UserRound,
  ClipboardCheck,
  Cloud,
} from "lucide-react";

import "../styles/SystemArchitectureDiagram.css";

const NODE_W = 200;
const NODE_H = 86;

const nodes = [
  {
    id: "student",
    label: "Jugador",
    detail: "Estudiante",
    icon: UserRound,
    x: 70,
    y: 112,
  },
  {
    id: "unity",
    label: "Cliente del juego",
    detail: "Unity",
    icon: Gamepad2,
    x: 350,
    y: 112,
  },
  {
    id: "api",
    label: "API REST",
    detail: "PHP",
    icon: Cloud,
    x: 660,
    y: 112,
  },
  {
    id: "mysql",
    label: "MySQL",
    detail: "Datos estructurados",
    icon: Database,
    x: 300,
    y: 332,
  },
  {
    id: "firebase",
    label: "Firebase",
    detail: "Telemetría",
    icon: Database,
    x: 770,
    y: 332,
  },
  {
    id: "orchestrator",
    label: "Orquestador",
    detail: "Node.js",
    icon: ServerCog,
    x: 535,
    y: 500,
  },
  {
    id: "analysis",
    label: "Análisis",
    detail: "Python",
    icon: BrainCircuit,
    x: 770,
    y: 500,
  },
  {
    id: "panel",
    label: "Panel web",
    detail: "React",
    icon: LayoutDashboard,
    x: 300,
    y: 655,
  },
  {
    id: "psychology",
    label: "Gabinete",
    detail: "Psicológico",
    icon: ClipboardCheck,
    x: 70,
    y: 655,
  },
];

const edges = [
  {
    d: "M 270 155 H 350",
    label: "interactúa",
    labelX: 310,
    labelY: 141,
  },
  {
    d: "M 550 155 H 660",
    label: "envía eventos",
    labelX: 605,
    labelY: 141,
  },

  /* API REST -> MySQL */
  {
    d: "M 760 198 V 248 H 400 V 332",
    label: "registra",
    labelX: 555,
    labelY: 234,
  },

  /* API REST -> Firebase */
  {
    d: "M 760 198 V 248 H 870 V 332",
    label: "sincroniza",
    labelX: 815,
    labelY: 234,
  },

  /* MySQL -> Orquestador */
  {
    d: "M 400 418 V 455 H 635 V 500",
    label: "consulta",
    labelX: 518,
    labelY: 446,
  },

  /* Firebase -> Orquestador */
  {
    d: "M 870 418 V 455 H 735 V 500",
    label: "consulta",
    labelX: 802,
    labelY: 446,
  },

  /* Orquestador -> Análisis */
  {
    d: "M 735 543 H 770",
    label: "procesa",
    labelX: 752,
    labelY: 529,
  },

  /* Orquestador -> Panel web */
  {
    d: "M 635 586 V 622 H 400 V 655",
    label: "resultados",
    labelX: 520,
    labelY: 611,
  },

  /* Panel web -> Gabinete */
  {
    d: "M 300 698 H 270",
    label: "visualiza",
    labelX: 285,
    labelY: 684,
  },
];

function Node({ node }) {
  const Icon = node.icon;

  return (
    <g className="architecture-node">
      <rect
        className="architecture-node-rect"
        x={node.x}
        y={node.y}
        width={NODE_W}
        height={NODE_H}
        rx="18"
      />

      <circle
        className="architecture-node-icon-bg"
        cx={node.x + 40}
        cy={node.y + NODE_H / 2}
        r="23"
      />

      <Icon
        x={node.x + 27}
        y={node.y + 31}
        size={25}
        strokeWidth={1.8}
        className="architecture-node-icon"
      />

      <text
        className="architecture-node-label"
        x={node.x + 80}
        y={node.y + 35}
      >
        {node.label}
      </text>

      <text
        className="architecture-node-detail"
        x={node.x + 80}
        y={node.y + 60}
      >
        {node.detail}
      </text>
    </g>
  );
}

function Edge({ edge }) {
  return (
    <g className="architecture-edge-group">
      <path
        className="architecture-edge"
        d={edge.d}
        markerEnd="url(#architecture-arrow)"
      />
      <text
        className="architecture-edge-label"
        x={edge.labelX}
        y={edge.labelY}
        textAnchor="middle"
      >
        {edge.label}
      </text>
    </g>
  );
}

export default function SystemArchitectureDiagram() {
  return (
    <section
      className="system-architecture-card"
      aria-label="Diagrama general del sistema Shadow of Souls"
    >
      <svg
        className="system-architecture-svg"
        viewBox="0 0 1100 820"
        role="img"
        aria-label="Arquitectura general del sistema Shadow of Souls"
      >
        <defs>
          <marker
            id="architecture-arrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L8,3 z" className="architecture-arrow" />
          </marker>
        </defs>

        {/* Capas */}
        <rect
          className="architecture-layer"
          x="45"
          y="72"
          width="900"
          height="180"
          rx="24"
        />
        <rect
          className="architecture-layer"
          x="255"
          y="288"
          width="720"
          height="165"
          rx="24"
        />
        <rect
          className="architecture-layer"
          x="505"
          y="462"
          width="470"
          height="145"
          rx="24"
        />
        <rect
          className="architecture-layer"
          x="45"
          y="615"
          width="505"
          height="135"
          rx="24"
        />

        {/* Títulos */}
        <text className="architecture-layer-title" x="70" y="100">
          Entrada e interacción
        </text>
        <text className="architecture-layer-title" x="280" y="316">
          Almacenamiento
        </text>
        <text className="architecture-layer-title" x="530" y="490">
          Procesamiento
        </text>
        <text className="architecture-layer-title" x="70" y="643">
          Revisión institucional
        </text>

        {/* Gabinete -> Jugador */}
        <path
          className="architecture-edge architecture-edge-soft"
          d="M 170 655 C 95 540, 95 280, 170 198"
          markerEnd="url(#architecture-arrow)"
        />
        <text
          className="architecture-edge-label"
          x="125"
          y="400"
          textAnchor="middle"
        >
          evalúa
        </text>

        {edges.map((edge, index) => (
          <Edge edge={edge} key={`${edge.label}-${index}`} />
        ))}

        {nodes.map((node) => (
          <Node node={node} key={node.id} />
        ))}
      </svg>
    </section>
  );
}
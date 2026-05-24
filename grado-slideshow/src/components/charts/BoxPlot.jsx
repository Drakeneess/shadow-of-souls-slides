import { motion } from "framer-motion";

export default function BoxPlot({ title, yLabel, clusters, maxValue }) {
  const chartWidth = 620;
  const chartHeight = 260;
  const padding = {
    top: 34,
    right: 24,
    bottom: 42,
    left: 54,
  };

  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;

  const y = (value) =>
    padding.top + plotHeight - (value / maxValue) * plotHeight;

  const xStep = plotWidth / clusters.length;

  return (
    <div className="custom-chart-card">
      <div className="custom-chart-title">{title}</div>

      <svg
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        className="custom-chart-svg"
        role="img"
        aria-label={title}
      >
        {Array.from({ length: 5 }).map((_, index) => {
          const value = (maxValue / 4) * index;
          const yPos = y(value);

          return (
            <g key={value}>
              <line
                x1={padding.left}
                x2={chartWidth - padding.right}
                y1={yPos}
                y2={yPos}
                className="chart-grid-line"
              />
              <text
                x={padding.left - 12}
                y={yPos + 4}
                textAnchor="end"
                className="chart-axis-label"
              >
                {Math.round(value)}
              </text>
            </g>
          );
        })}

        <text
          x={18}
          y={chartHeight / 2}
          textAnchor="middle"
          className="chart-axis-label"
          transform={`rotate(-90 18 ${chartHeight / 2})`}
        >
          {yLabel}
        </text>

        {clusters.map((cluster, index) => {
          const centerX = padding.left + xStep * index + xStep / 2;
          const boxWidth = 70;

          return (
            <g key={cluster.label}>
              <motion.line
                x1={centerX}
                x2={centerX}
                y1={y(cluster.min)}
                y2={y(cluster.max)}
                className="boxplot-whisker"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.12 }}
              />

              <motion.rect
                x={centerX - boxWidth / 2}
                y={y(cluster.q3)}
                width={boxWidth}
                height={Math.max(2, y(cluster.q1) - y(cluster.q3))}
                rx={7}
                className={`boxplot-box ${cluster.variant ?? ""}`}
                initial={{ opacity: 0, scaleY: 0.6 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.55, delay: 0.22 + index * 0.12 }}
                style={{ transformOrigin: "center" }}
              />

              <motion.line
                x1={centerX - boxWidth / 2}
                x2={centerX + boxWidth / 2}
                y1={y(cluster.median)}
                y2={y(cluster.median)}
                className="boxplot-median"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 + index * 0.12 }}
              />

              <line
                x1={centerX - 24}
                x2={centerX + 24}
                y1={y(cluster.min)}
                y2={y(cluster.min)}
                className="boxplot-cap"
              />

              <line
                x1={centerX - 24}
                x2={centerX + 24}
                y1={y(cluster.max)}
                y2={y(cluster.max)}
                className="boxplot-cap"
              />

              {cluster.outliers?.map((outlier, outlierIndex) => (
                <motion.circle
                  key={`${cluster.label}-${outlier}`}
                  cx={centerX + 14 + outlierIndex * 10}
                  cy={y(outlier)}
                  r={4}
                  className="boxplot-outlier"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + outlierIndex * 0.08 }}
                />
              ))}

              <text
                x={centerX}
                y={chartHeight - 16}
                textAnchor="middle"
                className="chart-axis-label"
              >
                {cluster.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
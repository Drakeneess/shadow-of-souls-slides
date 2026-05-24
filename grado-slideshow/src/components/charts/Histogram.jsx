export default function Histogram({
  title,
  xLabel,
  bins = [],
  mean = null,
}) {
  const width = 520;
  const height = 180;

  const margin = {
    top: 18,
    right: 18,
    bottom: 34,
    left: 38,
  };

  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const maxFrequency = Math.max(...bins.map((bin) => bin.frequency), 1);

  const xMin = Math.min(...bins.map((bin) => bin.from));
  const xMax = Math.max(...bins.map((bin) => bin.to));

  const xScale = (value) => {
    return margin.left + ((value - xMin) / (xMax - xMin)) * chartWidth;
  };

  const yScale = (value) => {
    return margin.top + chartHeight - (value / maxFrequency) * chartHeight;
  };

  const meanX = mean !== null ? xScale(mean) : null;

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((ratio) =>
    Math.round(maxFrequency * ratio)
  );

  return (
    <div className="custom-chart-card histogram-chart-card">
      <h4 className="custom-chart-title">{title}</h4>

      <svg
        className="custom-chart-svg histogram-chart-svg"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={title}
        preserveAspectRatio="none"
      >
        {yTicks.map((tick) => {
          const y = yScale(tick);

          return (
            <g key={tick}>
              <line
                className="chart-grid-line"
                x1={margin.left}
                x2={width - margin.right}
                y1={y}
                y2={y}
              />

              <text
                className="chart-axis-label"
                x={margin.left - 10}
                y={y + 4}
                textAnchor="end"
              >
                {tick}
              </text>
            </g>
          );
        })}

        {bins.map((bin, index) => {
          const x = xScale(bin.from);
          const nextX = xScale(bin.to);
          const barWidth = Math.max(nextX - x - 3, 2);
          const barHeight = chartHeight - (yScale(bin.frequency) - margin.top);
          const y = yScale(bin.frequency);

          return (
            <rect
              key={`${bin.from}-${bin.to}-${index}`}
              className="histogram-bar"
              x={x + 1.5}
              y={y}
              width={barWidth}
              height={barHeight}
            />
          );
        })}

        {meanX !== null && (
          <g>
            <line
              className="histogram-mean-line"
              x1={meanX}
              x2={meanX}
              y1={margin.top}
              y2={margin.top + chartHeight}
            />

            <text
              className="chart-axis-label histogram-mean-label"
              x={meanX + 6}
              y={margin.top + 12}
            >
              media
            </text>
          </g>
        )}

        <text
          className="chart-axis-label"
          x={margin.left + chartWidth / 2}
          y={height - 7}
          textAnchor="middle"
        >
          {xLabel}
        </text>
      </svg>
    </div>
  );
}
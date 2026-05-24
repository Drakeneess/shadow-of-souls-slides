export default function Slide({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`slide ${className}`}>
      <div className="slide-shell">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h1>{title}</h1>}
        <div className="slide-content">{children}</div>
      </div>
    </section>
  );
}
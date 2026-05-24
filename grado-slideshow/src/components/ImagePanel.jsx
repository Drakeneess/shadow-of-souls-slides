export default function ImagePanel({
  src,
  alt,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`image-panel ${className}`}>
      <div className="image-panel-media">
        <img src={src} alt={alt} />
      </div>

      {(title || description) && (
        <div className="image-panel-content">
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      )}
    </div>
  );
}
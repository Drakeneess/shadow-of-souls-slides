export default function Figure({
  src,
  alt,
  caption,
  className = "",
  variant = "default",
}) {
  return (
    <figure className={`figure figure-${variant} ${className}`}>
      <div className="figure-image-wrap">
        <img src={src} alt={alt} className="figure-image" />
      </div>

      {caption && <figcaption className="figure-caption">{caption}</figcaption>}
    </figure>
  );
}
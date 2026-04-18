import './Section.css';

const Section = ({ id, eyebrow, title, description, children, className = '' }) => {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <div className="container section-frame">
        {(eyebrow || title || description) && (
          <header className="section-header" data-animate="fade-up">
            {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
            {title ? <h2>{title}</h2> : null}
            {description ? <p className="section-description">{description}</p> : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

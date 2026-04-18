import './Background.css';

const Background = () => {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-orb orb-one" />
      <div className="ambient-orb orb-two" />
      <div className="ambient-orb orb-three" />
      <div className="ambient-glow" />
    </div>
  );
};

export default Background;

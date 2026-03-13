import { useEffect, useState } from "react";
import "../styles/stats.css";

function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        start = target;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return <h2>{count}+</h2>;
}

function Stats() {
  return (
    <section className="stats" data-aos="zoom-in">

      <div className="stats-container">

        <div className="stat">
          <Counter target={500} />
          <p>Photoshoots</p>
        </div>

        <div className="stat">
          <Counter target={120} />
          <p>Weddings</p>
        </div>

        <div className="stat">
          <Counter target={50} />
          <p>Events</p>
        </div>

        <div className="stat">
          <Counter target={10} />
          <p>Years Experience</p>
        </div>

      </div>

    </section>
  );
}

export default Stats;
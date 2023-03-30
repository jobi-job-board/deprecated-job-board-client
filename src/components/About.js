const About = () => {
  return (
    <section className="about">
      <div className="wrapper flex">
        <div className="about-image">
          <img src="#" alt="Photos of people" />
          <h2>Get the job of your dreams quickly.</h2>
        </div>
        <div className="about-text flex-col">
          <h2 className="secondary-header">Get the job of your dreams quickly.</h2>
          <p>
            Inciddnt ut labore et dolor magna aliu. enim ad mim venam, quis
            nostru
          </p>
          <ul>
            <li><h6>✔ Seamless searching</h6></li>
            <li><h6>✔ Protected payments, every time</h6></li>
            <li><h6>✔ Wide range of job categories</h6></li>
          </ul>
          <button className="btn-square">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;

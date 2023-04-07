import aboutOne from '../assets/homepage-section/man-on-phone.jpeg';
import aboutTwo from '../assets/homepage-section/woman.jpeg';
import aboutThree from '../assets/homepage-section/woman-with-coffee.jpeg';

const About = () => {
  return (
    <section className="about">
      <div className="wrapper flex">
        <div className="about-image">
          <div className="col-one flex">
            <img src={aboutOne} alt="Photos of people" />
          </div>
          <div className="col-two flex">
            <img src={aboutTwo} alt="Photos of people" />
            <img src={aboutThree} alt="Photos of people" />
          </div>
        </div>
        <div className="about-text flex-col">
          <h2 className="secondary-header">
            Get the job of your dreams quickly.
          </h2>
          <p>
            Inciddnt ut labore et dolor magna aliu. enim ad mim venam, quis
            nostru
          </p>
          <ul>
            <li>
              <h6>✔ Seamless searching</h6>
            </li>
            <li>
              <h6>✔ Protected payments, every time</h6>
            </li>
            <li>
              <h6>✔ Wide range of job categories</h6>
            </li>
          </ul>
          <button className="btn-square">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;

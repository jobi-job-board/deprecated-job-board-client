import woman from '../assets/homepage-section/female.png';
import labels from '../assets/homepage-section/labels.png';

import Navbar from './Navbar';
const Hero = () => {
  return (
    <header className="hero">
      <Navbar />
      <div className="wrapper">
        <div className="hero-col-left">
          <h1>
            <span className="display-block">Find & Hire</span>
            <span className="display-block">Top 3% of expert</span>
            <span className="display-block">on jobi.</span>
          </h1>
          <h5>
            With the largest professional creative community online, simply
            search through from our website
          </h5>
          <form>
            <input type="text" />
            <button type="submit" className="btn-round">
              Search
            </button>
          </form>
          <p>
            <strong className="bold">Popular:</strong> Design, Art, Business,
            Video Editing
          </p>
        </div>
        <div className="hero-col-right"></div>
        <img className="hero-image-female" src={woman} alt="woman" />
        <img className="labels" src={labels} alt="labels" />
      </div>
    </header>
  );
};

export default Hero;

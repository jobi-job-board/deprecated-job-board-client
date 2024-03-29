import aboutOne from '../assets/about/man-on-phone.jpg';
import aboutTwo from '../assets/about/woman.jpg';
import aboutThree from '../assets/about/woman-with-coffee.jpg';
import playButton from '../assets/icons/play-button.png';
import stripedSquare from '../assets/icons/striped-square.png';
import { GoCheck } from 'react-icons/go';

const About = () => {
  return (
    // <section className="about">
    //   <div className="wrapper flex">
    //     <div className="about-image">
    //       <div className="col-one flex">
    //         <img src={aboutOne} alt="Photos of people" />
    //       </div>
    //       <div className="col-two flex">
    //         <img src={aboutTwo} alt="Photos of people" />
    //         <img src={aboutThree} alt="Photos of people" />
    //       </div>
    //     </div>
    //     <div className="about-text flex-col">
    //       <h2 className="secondary-header">
    //         Get the job of your dreams quickly.
    //       </h2>
    //       <p>
    //         Inciddnt ut labore et dolor magna aliu. enim ad mim venam, quis
    //         nostru
    //       </p>
    //       <ul>
    //         <li>
    //           <h6>✔ Seamless searching</h6>
    //         </li>
    //         <li>
    //           <h6>✔ Protected payments, every time</h6>
    //         </li>
    //         <li>
    //           <h6>✔ Wide range of job categories</h6>
    //         </li>
    //       </ul>
    //       <button className="btn-square">Learn More</button>
    //     </div>
    //   </div>
    // </section>
    <section>
      <div className="wrapper flex">
        <div className="about-left">
          <div className="overlap-group">
            <div className="image-3">
              <img src={aboutThree} alt="Photos of people" />
            </div>
            <div className="image-2">
              <img src={aboutTwo} alt="Photos of people" />
            </div>
            <div className="image-1">
              {' '}
              <img src={aboutOne} alt="Photos of people" />
            </div>
            <div className="video-button">
              {' '}
              <img className="icon-play" src={playButton} alt="icon-play" />
            </div>
          </div>
          <img className="shape" src={stripedSquare} alt="Square" />
        </div>
        <div className="about-text flex-col">
          <h2>Get the job of your dreams quickly.</h2>
          <h5>
            Inciddnt ut labore et dolor magna aliu. enim ad mim venam, quis
            nostru
          </h5>
          <ul>
            <li>
              <h6 className="about-text-h6">
                <GoCheck size={16} /> &nbsp; Seamless searching
              </h6>
            </li>
            <li>
              <h6 className="about-text-h6">
                <GoCheck size={16} /> &nbsp; Protected payments, every time
              </h6>
            </li>
            <li>
              <h6 className="about-text-h6">
                <GoCheck size={16} /> &nbsp; Wide range of job categories
              </h6>
            </li>
          </ul>
          <button className="btn-square btn-square-mt">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;

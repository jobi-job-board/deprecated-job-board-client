import { useState, useEffect } from 'react';
import { testimonialData } from '../constants';
import quote from '../assets/icons/quote.png';
import stars from '../assets/icons/rating.png';

const timeDelay = 10000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     return setIndex((prevIndex) =>
  //       prevIndex === testimonialData.length - 1
  //         ? 0
  //         : (prevIndex + 1) % testimonialData.length
  //     );
  //   }, timeDelay);
  //   return () => {};
  // }, [index]);

  return (
    <section className="testimonials">
      <div className="wrapper flex">
        <div className="testimonials-left">
          <p className="small">TESTIMONIAL</p>
          <h2>Clients loves jobi</h2>
          <h4 className="testimonials-left-rating h4">A+ Rating</h4>
          <p>Avg rating 4.8 makes us best market place</p>
        </div>
        <div className="testimonials-right">
          <div className="slideshow">
            <ul
              className="slideshow-slider flex"
              style={{ transform: `translate3d(${-index * 50}%, 0, 0)` }}
            >
              {testimonialData.map((person, index) => (
                <li key={person.id} className="slide flex-col">
                  <h5 className="testimonial-title">{person.title}</h5>
                  <img src={stars} className="testimonial-stars" alt="stars" />
                  <h6 className="testimonial-quote-h6">{person.quote}</h6>
                  <hr />
                  <div className="flex-start testimonial-author-mt">
                    <div className="testimonial-avatar">
                      <img
                        src={person.avatar}
                        alt={`${person.name} avatar`}
                        width={50}
                      />
                    </div>
                    <div>
                      <div className="testimonial-name">{person.name}</div>
                      <div>{person.location}</div>
                    </div>
                    <div>
                      <img src={quote} alt="quote mark" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="slideshow-dots">
            {testimonialData.map((person, personIndex) => (
              <div
                key={person.id}
                className={`slideshow-dot ${
                  index === personIndex ? 'active-dot' : ''
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

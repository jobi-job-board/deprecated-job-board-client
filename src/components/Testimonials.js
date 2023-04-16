import React from 'react';
import { testimonialData } from '../constants';
import quote from '../assets/icons/quote.png';
//

const Testimonials = () => {
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
          <ul className="carousel flex">
            {testimonialData.map((person, index) => (
              <li key={person.id}>
                <h5 className="testimonial-title">{person.title}</h5>
                <p>⭐️⭐️⭐️⭐️⭐️</p>
                <h6>{person.quote}</h6>
                <hr />
                <div className="flex-start">
                  <div className="testimonial-avatar">
                    <img
                      src={person.avatar}
                      alt={`${person.name} avatar`}
                      width={50}
                    />
                  </div>
                  <div>
                    <div>{person.name}</div>
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
      </div>
    </section>
  );
};

export default Testimonials;

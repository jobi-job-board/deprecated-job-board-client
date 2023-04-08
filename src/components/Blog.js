import React from 'react';
import blogOne from '../assets/blog-images/blog-1.png';
import blogTwo from '../assets/blog-images/blog-2.png';
import blogThree from '../assets/blog-images/blog-3.png';

const Blog = () => {
  return (
    <>
      <div className="wrapper">
        <section className="blog">
          <h2>Our Blog</h2>
          <div className="blog-container flex">
            <div className="col-one">
              <div className="card-image">
                <img
                  className="blog-image1"
                  src={blogOne}
                  alt="blog image one"
                />
                <div className="card-text">
                  <p className="date">23 Apr, 2020 </p>
                  <h6>
                    A discount cartridge dsu
                    <span className="new-line"> is better ever"</span>
                  </h6>
                  <button className="btn-small-round">Read More </button>
                </div>
              </div>
            </div>

            <div className="col-two">
              <div className="card-image">
                <img
                  className="blog-image2"
                  src={blogTwo}
                  alt="blog image two"
                />
                <div className="card-text">
                  <p className="date">23 Apr, 2020 </p>
                  <h6>
                    A discount cartridge dsu
                    <span className="new-line"> is better ever"</span>
                  </h6>
                  <button className="btn-round-outline">Read More </button>
                </div>
              </div>
            </div>

            <div className="col-three">
              <div className="card-image">
                <img
                  className="blog-image3"
                  src={blogThree}
                  alt="blog image three"
                />
                <div className="card-text">
                  <p className="date">23 Apr, 2020 </p>
                  <h6>
                    A discount cartridge dsu
                    <span className="new-line"> is better ever"</span>
                  </h6>
                  <button className="btn-round-outline">Read More </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;

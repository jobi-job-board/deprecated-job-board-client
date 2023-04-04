import blogOne from '../assets/blog-images/blog-1.png';
import blogTwo from '../assets/blog-images/blog-2.png';
import blogThree from '../assets/blog-images/blog-3.png';

const Blog = () => {
  return (
    <>
      <div className="wrapper">
        <section className="blog">
          <h2>Our Blog</h2>
          <div className="flex">
            <div className="col-one">
              <img className="blog-image1" src={blogOne} alt="blog image one" />
              <p className="date">23 Apr, 2020 </p>
              <h4>
                A discount cartridge dsu
                <span className="new-line"> is better ever"</span>
              </h4>
              <button className="btn-round">read more </button>
            </div>
            <div className="col-two">
              <img className="blog-image2" src={blogTwo} alt="blog image two" />
              <p className="date">23 Apr, 2020 </p>
              <h4>
                A discount cartridge dsu
                <span className="new-line"> is better ever"</span>
              </h4>
              <button className="btn-round-outline">read more </button>
            </div>
            <div className="col-three">
              <img
                className="blog-image3"
                src={blogThree}
                alt="blog image three"
              />
              <p className="date">23 Apr, 2020 </p>
              <h4>
                A discount cartridge dsu
                <span className="new-line"> is better ever"</span>
              </h4>
              <button className="btn-round-outline">read more </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;

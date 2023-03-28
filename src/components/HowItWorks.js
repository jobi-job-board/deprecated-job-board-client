import icon1 from "../assets/icons/icon-1.png";
import icon2 from "../assets/icons/icon-2.png";
import icon3 from "../assets/icons/icon-3.png";

const HowItWorks = () => {
  return (
    <section>
      <div className="wrapper how-it-works">
        <h2>How it works!</h2>
        <div>
          <ul className="flex how-it-works-list">
            <li className="box">
              <img src={icon1} alt="icon one" />
              <h5>Create Account</h5>
              <p>It's very easy to open an account and start your journey.</p>
            </li>
            <li className="box">
              <img src={icon2} alt="icon two" />
              <h5>Complete your Profile</h5>
              <p>
                Complete your profile with all the info to get attention of
                client.
              </p>
            </li>
            <li className="box">
              <img src={icon3} alt="icon three" />
              <h5>Apply or Hire</h5>
              <p>
                Apply & get your preferable jobs with all the requirments and
                get it.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

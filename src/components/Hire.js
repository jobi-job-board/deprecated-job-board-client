import React from "react";
import { peopleToHire } from "../constants";
import HireCards from "./HireCards";

const Hire = () => {
  return (
    <section className="hire">
      <div className="wrapper flex flex-50 gap">
        <div className="hire-left">
          <HireCards peopleToHire={peopleToHire} />
        </div>
        <div className="hire-right">
          <p>FIND FREELANCER</p>
          <h2>Hire top talents</h2>
          <div className="accordion">
            <ul>
              <li>
                <h6 className="about-text-h6  mt-30">Seamless Search</h6>
                <p className="mb-3">
                  It only takes 5 minutes. Set-up is smooth and simple, with
                  fully customisable page design to reflect your brand.
                </p>
                <hr />
              </li>

              <li>
                <h6 className="about-text-h6 ">Hire top talents</h6>
                {/* <p>
                  It only takes 5 minutes. Set-up is smooth and simple, with
                  fully customisable page design to reflect your brand.
                </p> */}
                <hr />
              </li>
            </ul>
            <button className="btn-square">Explorer All</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;

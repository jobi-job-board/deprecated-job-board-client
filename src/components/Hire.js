import React from "react";
import { peopleToHire, accordionData } from "../constants";
import Accordion from "./Accordion";
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
            <Accordion accordionData={accordionData} />
            <button className="btn-square">Explorer All</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;

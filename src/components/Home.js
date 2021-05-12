import React from "react";
import date from "../config/date";
// import aos from "aos";

function Home({ detail }) {
  return (
    <>
      <div className="card-container" data-aos="zoom-in" data-aos-delay="500">
        <img className="round" src={detail.picture.large} alt="user" />
        <h3>
          {detail.name.first} {detail.name.last}
        </h3>
        <h3>D.O.B::{date(detail.dob.date)}</h3>
        <div className="skills">
          <h4>{detail.email}</h4>
        </div>
      </div>
    </>
  );
}

export default Home;

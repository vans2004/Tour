import React, { useState } from "react";

const Tour = ({ info, removeTour }) => {
  return (
    <>
      <article className="single-tour">
        <img src={info.image} alt="PIC" />
        <footer>
          <div className="tour-info">
            <h4>{info.name}</h4>
            <h4 className="tour-price">${info.price}</h4>
          </div>
          <p>{info.info}</p>
          <button className="delete-btn" onClick={() => removeTour(info.id)}>
            NO
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;

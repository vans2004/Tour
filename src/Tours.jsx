import React from "react";
import Tour from "./Tour";
const Tours = ({ data, setTourData }) => {
  function removeTour(id) {
    const afterRemoval = data.filter((i) => i.id !== id);
    setTourData(afterRemoval);
  }

  return (
    <>
      <section>
        <div>
          {data.map((i) => {
            return <Tour info={i} removeTour={removeTour} key={i.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;

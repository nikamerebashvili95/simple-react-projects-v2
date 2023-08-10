import React, { useState } from "react";
/*
const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}`}...
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};
*/

const Tour = ({ id, image, name, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-price">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
          <p>
            {readMore ? info : `${info.substring(0, 200)}`}...
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "Show Less" : "Read More"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </div>
      </footer>
    </article>
  );
};
export default Tour;

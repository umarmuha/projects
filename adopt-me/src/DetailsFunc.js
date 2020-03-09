import React, { useState, useEffect } from "react";
import Pet from "@frontendmasters/pet";

const DetailsFunc = ({ id }) => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    Pet.animal(id).then(({ animal }) => {
      const detailInfo = {
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: [animal.photos],
        breed: animal.breeds.primary
      };
      setDetail(detailInfo);
    });
  }, [id]);

  let { name, animal, location, description, breed } = detail;

  return (
    <div className="details">
      <div>
        {/* <img src={hero} alt="A cute dog" /> */}
        <h3>{`${name}, ${description}`}</h3>
        <h2>{breed}</h2>
        <h2>{location}</h2>
        <h2>{animal}</h2>
      </div>
    </div>
  );
};

export default DetailsFunc;

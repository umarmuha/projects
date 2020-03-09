import React from "react";
import { Link } from "@reach/router";
export default function Pet({ name, animal, breed, media, location, id }) {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, animal),
  //     React.createElement("h2", {}, breed)
  //   ]);
  // Converting the above to JSX format
  // return (
  //   <div>
  //     <h1>{name}</h1>
  //     <h2>{animal}</h2>
  //     <h2>{breed}</h2>
  //   </div>
  // );

  // Updating the pet component to work with SearchParams to display the pets from API

  // A placeholder image in case there is no image pulled from petFinder api
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal}-${breed}-${location}`}</h2>
        <h3>{id}</h3>
        {/* <DetailsFunc id={id} /> */}
      </div>
    </Link>
  );
}

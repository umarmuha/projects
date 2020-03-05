import React, { useState, useEffect } from "react";
import Results from "./Results";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  //   const location = "Seattle, WA";

  // ** State and hooks should never go inside statements like if or for loops**
  const [location, setLocation] = useState("Seattle, WA");
  //   const [animal, setAnimal] = useState("dog");
  //   const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    setPets(animals || []);

    console.log(animals);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds: breedsFromApi }) => {
      const breedStrings = breedsFromApi.map(({ name }) => name);
      setBreeds(breedStrings);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
            onBlur={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

/**
 * The result below shows after we make the Animal API request
 * 0:
id: 41569882
organization_id: "WA56"
url: "https://www.petfinder.com/dog/odie-41569882/wa/burlington/spot-saving-pets-one-at-a-time-wa56/?referrer_id=44e48166-8259-4b23-8420-bbd2dc9c2079"
type: "Dog"
species: "Dog"
breeds: {primary: "Affenpinscher", secondary: null, mixed: true, unknown: false}
colors: {primary: "Black", secondary: "Gray / Blue / Silver", tertiary: "White / Cream"}
age: "Young"
gender: "Male"
size: "Small"
coat: "Medium"
attributes: {spayed_neutered: true, house_trained: true, declawed: null, special_needs: false, shots_current: true}
environment: {children: true, dogs: true, cats: true}
tags: []
name: "ODIE"
description: "Odie is a very sweet little guy.  He is a young dog that needs some co sistency in his life...."
photos: (4) [{…}, {…}, {…}, {…}]
status: "adopted"
published_at: "2018-05-07T00:10:05+0000"
contact: {email: "ninajo101@msn.com", phone: "360-336-5388", address: {…}}
_links: {self: {…}, type: {…}, organization: {…}}
__proto__: Object
 */

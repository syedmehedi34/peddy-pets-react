/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PetCard from "../PetCard/PetCard";

const PetCards = ({ handleSelectPet, searchedPet }) => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (searchedPet) {
      fetch(
        `https://openapi.programming-hero.com/api/peddy/category/${searchedPet}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPets(data.data); // Set fetched data

          // Wait for 2 seconds (or any duration you want)
          setTimeout(() => {
            setLoading(false); // After 2 seconds, hide the spinner
          }, 500);
        });
    } else {
      fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then((res) => res.json())
        .then((data) => {
          setPets(data.pets); // Set fetched data

          // Wait for 2 seconds (or any duration you want)
          setTimeout(() => {
            setLoading(false); // After 2 seconds, hide the spinner
          }, 500);
        });
    }
  }, [searchedPet]);

  if (loading) {
    return (
      <div className="col-span-8 flex justify-center">
        <span className="loading loading-bars loading-md"></span>
      </div>
    );
  }

  if (pets.length) {
    console.log(pets.length);
    return (
      <div className="h-fit col-span-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {pets.map((pet) => (
            <PetCard
              key={pet.petId}
              pet={pet}
              handleSelectPet={handleSelectPet}
              searchedPet={searchedPet}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-fit col-span-8">
        <h1>Content</h1>
      </div>
    );
  }
};

export default PetCards;

/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PetCard from "../PetCard/PetCard";

const PetCards = ({ handleSelectPet, searchedPet }) => {
  // console.log(handlePetsData);
  const [pets, setPets] = useState([]);
  useEffect(() => {
    if (searchedPet) {
      fetch(
        `https://openapi.programming-hero.com/api/peddy/category/${searchedPet}`
      )
        .then((res) => res.json())
        .then((data) => setPets(data.data));
    } else {
      fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then((res) => res.json())
        .then((data) => setPets(data.pets));
    }
  }, [searchedPet]);

  return (
    <div className="h-fit col-span-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {pets.map((pet) => (
          <PetCard
            key={pet.petId}
            pet={pet}
            handleSelectPet={handleSelectPet}
            searchedPet={searchedPet}
          ></PetCard>
        ))}
      </div>
    </div>
  );
};

export default PetCards;

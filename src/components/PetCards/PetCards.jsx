/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PetCard from "../PetCard/PetCard";

const PetCards = ({ handleSelectPet, searchedPet }) => {
  // console.log(handlePetsData);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (searchedPet) {
      fetch(
        `https://openapi.programming-hero.com/api/peddy/category/${searchedPet}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPets(data.data);
          setTimeout(function () {
            setLoading(false);
          }, 3000);
        });
    } else {
      fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
        .then((res) => res.json())
        .then((data) => {
          setPets(data.pets);
          setTimeout(function () {
            setLoading(false);
          }, 2000);
        });
    }
  }, [searchedPet]);
  if (loading) {
    return (
      <div className="col-span-8 flex items-center justify-center">
        <span className="loading loading-bars loading-md"></span>
      </div>
    );
  }

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

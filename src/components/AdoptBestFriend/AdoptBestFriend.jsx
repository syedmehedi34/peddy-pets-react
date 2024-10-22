/* eslint-disable react/prop-types */
// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Category from "../Category/Category";

const AdoptBestFriend = ({ handleSearchPet }) => {
  //
  //   fetch the categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  //-----------------------
  //-----------------------
  return (
    <div>
      <div>
        <h1 className="text-[38px] font-[900] text-text text-center">
          Adopt Your Best Friend
        </h1>
        <p className="text-text70 w-4/5 lg:w-2/3 text-center mx-auto mt-4">
          Adopt your best friend today! Discover the joy and companionship pets
          bring to your life. At Paws & Claws, we’ll guide you through a
          seamless adoption process.
        </p>

        {/* categories button start  */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-12 gap-x-5 gap-y-2">
          {categories.map((category) => (
            <Category
              key={category.id}
              category={category}
              handleSearchPet={handleSearchPet}
            ></Category>
          ))}
        </div>
        {/* categories button start  */}
      </div>
    </div>
  );
};

export default AdoptBestFriend;

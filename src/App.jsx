/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import AdoptBestFriend from "./components/AdoptBestFriend/AdoptBestFriend";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Narbar/Navbar";
import PetCards from "./components/PetCards/PetCards";
import PetSelected from "./components/PetSelected/PetSelected";
import Footer from "./components/Footer/Footer";

function App() {
  //
  // PetSelected options starts
  const [selected, setSelected] = useState([]);
  const handleSelectPet = (pet) => setSelected([...selected, pet]);

  // category search starts
  const [searchedPet, setSearchedPet] = useState("");
  const handleSearchPet = (category) => setSearchedPet(category);

  //-----------------------------
  //-----------------------------

  const [sortedPets, setSortedPets] = useState([]);
  const handleSortByPrice = () => {
    console.log("clicked");
  };

  //____________________________________________
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto">
        <Hero></Hero>
        <AdoptBestFriend
          handleSearchPet={handleSearchPet}
          handleSortByPrice={handleSortByPrice}
        ></AdoptBestFriend>

        {/* adoption cards section  */}
        <section className="grid grid-cols-1 md:grid-cols-11 gap-5 my-16">
          <PetCards
            handleSelectPet={handleSelectPet}
            searchedPet={searchedPet}
          ></PetCards>
          <PetSelected selected={selected}></PetSelected>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;

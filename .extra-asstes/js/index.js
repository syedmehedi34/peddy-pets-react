//* load the categories

const fetchCategories = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/peddy/categories`
  );
  const data = await res.json();
  displayCategories(data.categories);
};
//

// * load/ fetch all the pets

const loadCategoryCards = async (category) => {
  // fetch all the pets
  if (category) {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${category}`
    );
    const pets = await res.json();
    showCategoryCards(pets.data);
  } else {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/pets`
    );
    const pets = await res.json();
    showCategoryCards(pets.pets);
  }
};
// *
//

// global variable
let isClicked = "";
let isActive = false;

//*  load the clicked button
const loadClickedButton = (data) => {
  // apply clicked styles
  applyClick(data);

  //spinner work
  const petsSection = document.getElementById("pets-section");
  petsSection.classList.add("hidden");
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");

  //   console.log(data);
  const receivedData = JSON.parse(data.getAttribute("data-post"));
  const category = receivedData.category;
  //   console.log(data);

  // set time
  setTimeout(function () {
    spinner.classList.add("hidden");
    petsSection.classList.remove("hidden");
    loadCategoryCards(category);
    isClicked = category;
    sortedFunction(category);
  }, 2000);
};

///////////////////////////////////////
function bypassSpin() {
  const petsSection = document.getElementById("pets-section");
  petsSection.classList.add("hidden");
  const spinner = document.getElementById("spinner");
  spinner.classList.remove("hidden");
  //
  //
  setTimeout(function () {
    spinner.classList.add("hidden");
    petsSection.classList.remove("hidden");
    loadCategoryCards("");
  }, 2000);
}
//
// call all the functions
fetchCategories();
bypassSpin();

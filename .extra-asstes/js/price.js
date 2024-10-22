// call the sorting function
document.getElementById("sort-button").addEventListener("click", () => {
  isActive = true;
  sortedFunction();
});

const sortedFunction = async (sortButton) => {
  if (!isActive) return;
  //
  // console.log(isClicked, isActive, "ok");
  //fetch again for sorting
  if (isClicked) {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/category/${isClicked}`
    );
    const pets = await res.json();
    //
    const data = pets.data;
    const sortedItems = data.sort((a, b) => {
      if (a.price === undefined) return 1;
      if (b.price === undefined) return -1;
      return b.price - a.price;
    });

    console.log(sortedItems);
    showCategoryCards(sortedItems);
  } else {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/peddy/pets`
    );
    const pets = await res.json();
    //
    //
    const data = pets.pets;
    const sortedItems = data.sort((a, b) => {
      if (a.price === undefined) return 1;
      if (b.price === undefined) return -1;
      return b.price - a.price;
    });

    console.log(sortedItems);
    showCategoryCards(sortedItems);
    //
    //
    // sort the values

    console.log(sortedItems);
    showCategoryCards(sortedItems);
    // console.log(pets.pets);
  }
  isActive = false;
};

/* eslint-disable no-unused-vars */
// * show cards using conditions

const showCategoryCards = (pets) => {
  const petsCardContainer = document.getElementById("pets-card-container");
  petsCardContainer.innerHTML = ``;
  petsCardContainer.classList.add("grid");

  // show no data available sign
  //   console.log(pets);s
  if (pets.length === 0) {
    // console.log("ok");
    petsCardContainer.classList.remove("grid");

    const div = document.createElement("div");
    div.innerHTML = `
     
     <div class="flex flex-col justify-center items-center">
        <div class="w-36 h-36">
          <img
            class="w-full h-full object-cover"
            src="assets/no-items.png"
            alt=""
          />
        </div>
        <h1 class="text-first text-[1.75rem] font-bold text-center">
          No Information Available
        </h1>
        <p class="text-first70 text-center w-4/5">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a.
        </p>
      </div>
    
    `;
    petsCardContainer.appendChild(div);
  }

  //   if data available
  pets.forEach((pet) => {
    // object destruction
    const {
      petId,
      breed,
      category,
      date_of_birth,
      price,
      image,
      gender,
      pet_details,
      vaccinated_status,
      pet_name,
    } = pet;

    const div = document.createElement("div");
    div.classList =
      "card shadow-xl border border-[#1313131A] rounded-xl w-full mx-auto";
    div.innerHTML = `
    
    <div class="mx-5 mt-5 h-42 rounded-lg">
    <img
        src="${image}"
        alt="Shoes"
        class="rounded-lg w-full h-full object-cover"/>

    </div>
    <div class="px-5 mt-5">
    <h2 class="font-Inter text-first font-bold text-xl font-Inter mb-2">
        ${pet_name ? pet_name : "Not Mentioned"}
    </h2>

    <div class="text-first70 text-[1rem] flex items-center gap-2">
        <i class="fa-solid fa-qrcode"></i>
        <p class="text-first70">Breed: ${breed ? breed : "Not mentioned"}</p>
    </div>

    <div
    class="text-first70 text-[1rem] flex items-center gap-2 py-2">
        <i class="fa-solid fa-calendar-days"></i>
        <p>Birth: ${date_of_birth ? date_of_birth : "Not mentioned"}</p>
    </div>

    <div class="text-first70 text-[1rem] flex items-center gap-2">
        <i class="fa-solid fa-mercury"></i>
        <p>Gender: ${gender ? gender : "Not mentioned"}</p>
    </div>

    <div
    class="text-first70 text-[1rem] flex items-center gap-2 pt-2 pb-4">
        <i class="fa-solid fa-dollar-sign"></i>
        <p>Price : ${price ? price + " $" : "Negotiable"} </p>
    </div>

    <div class="border-t py-2 border-[#1313131A]"></div>
    </div>

            <!-- buttons  -->

    <div class="flex justify-between items-center px-5 pb-5">

<div

    onclick="likeButtonClicked(this)"
    data-post='${JSON.stringify(pet)
      .replace(/'/g, "&apos;")
      .replace(/"/g, "&quot;")}'

    class="btn bg-white border border-[#0E7A8126] text-first60 text-[15px] font-bold rounded-lg"
    >
    <i class="fa-regular fa-thumbs-up"></i>
    </div>
<div
    onclick="openCountModal(this)"
    class="adopt-btn btn bg-white border border-[#0E7A8126] text-primary text-[15px] font-bold rounded-lg"
>
        Adopt
</div>

<div
    onclick="detailsButtonClicked(this)"
    data-post='${JSON.stringify(pet)
      .replace(/'/g, "&apos;")
      .replace(/"/g, "&quot;")}'
    class="btn bg-white border border-[#0E7A8126] text-primary text-[15px] font-bold rounded-lg"
>
                  Details
</div>
</div>

              <!-- buttons  -->
<!-- </div>  -->
    
    
    `;
    petsCardContainer.appendChild(div);
  });
};

// * modal card edit
const modalFunctions = (pet) => {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = ``;
  //   console.log(modalContainer);
  const div = document.createElement("div");
  div.innerHTML = `

  <div class="h-[250px] w-full rounded-lg">
                  <img
                    class="h-full w-full object-cover rounded-lg"
                    src="${pet.image}"
                    alt=""
                  />
                </div>
                <h1 class="text-first text-[22px] font-bold mt-5 mb-2">
                  ${pet.pet_name ? pet.pet_name : "Not mentioned"}
                </h1>

                <!-- main div  -->
                <div class="flex items-start gap-10">
                  <!-- left div  -->
                  <div class="space-y-2">
                    <div
                      class="text-first70 text-[1rem] flex items-center gap-2"
                    >
                      <i class="fa-solid fa-qrcode"></i>
                      <p class="text-first70">Breed: ${
                        pet.breed ? pet.breed : "Not mentioned"
                      }</p>
                    </div>
                    <div
                      class="text-first70 text-[1rem] flex items-center gap-2"
                    >
                      <i class="fa-solid fa-mercury"></i>
                      <p>Gender: ${
                        pet.gender ? pet.gender : "Not mentioned"
                      }</p>
                    </div>
                    <div
                      class="text-first70 text-[1rem] flex items-center gap-2"
                    >
                      <i class="fa-solid fa-syringe"></i>
                      <p class="text-first70">Vaccinated status: ${
                        pet.vaccinated_status
                          ? pet.vaccinated_status
                          : "Not mentioned"
                      }</p>
                    </div>
                  </div>

                  <!-- right div  -->
                  <div class="space-y-2">
                    <div
                      class="text-first70 text-[1rem] flex items-center gap-2"
                    >
                      <i class="fa-solid fa-calendar-days"></i>
                      <p>Birth: ${
                        pet.date_of_birth ? pet.date_of_birth : "Not mentioned"
                      }</p>
                    </div>
                    <div
                      class="text-first70 text-[1rem] flex items-center gap-2"
                    >
                      <i class="fa-solid fa-dollar-sign"></i>
                      <p>Price : ${
                        pet.price ? pet.price + " $" : "Negotiable"
                      } </p>
                    </div>
                  </div>
                </div>
                <div class="border-t my-4 border-[#1313131A]"></div>
                <h1 class="text-first font-semibold mb-3">
                  Details Information
                </h1>
                <p class="text-first70">
                  ${pet.pet_details ? pet.pet_details : "Not mentioned"}
                </p>
  
  `;
  modalContainer.appendChild(div);
  // my_modal_1.showModal();
};

// * apply Click bg and css .
const applyClick = (button) => {
  //   console.log(button);
  const buttons = document.getElementsByClassName("category-button");
  //   console.log(buttons);
  for (const btn of buttons) {
    // console.log(btn);
    btn.classList.remove(
      "border-[#0E7A81]",
      "rounded-[120px]",
      "bg-[#0E7A811A]"
    );
    btn.classList.add("border-[#0E7A8126]", "rounded-xl");
  }

  //
  //
  button.classList.remove("border-[#0E7A8126]", "rounded-xl");
  button.classList.add("border-[#0E7A81]", "rounded-[120px]", "bg-[#0E7A811A]");
};

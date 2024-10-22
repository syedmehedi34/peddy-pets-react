// * details button clicked functions
function detailsButtonClicked(element) {
  const data = element.getAttribute("data-post");

  const pet = JSON.parse(data.replace(/&quot;/g, '"').replace(/&apos;/g, "'"));
  //   console.log(pet);
  modalFunctions(pet);
}

// ? like button clicked functions

const likeButtonClicked = (element) => {
  const data = element.getAttribute("data-post");

  const pet = JSON.parse(data.replace(/&quot;/g, '"').replace(/&apos;/g, "'"));
  //   console.log(pet);

  //
  const pickedPhotoContainer = document.getElementById(
    "picked-photo-container"
  );
  const div = document.createElement("div");
  div.classList = "border w-full h-24 rounded-lg";
  div.innerHTML = `
 
        <img src="${pet.image}" alt="" class="w-full h-full object-cover rounded-lg">

  `;
  pickedPhotoContainer.appendChild(div);
};

//? count down function
function openCountModal(button) {
  const modal = document.getElementById("modal");
  //   const adoptButton = button.querySelector("div.adopt-btn");
  const countdownElement = document.getElementById("countdown");
  //   console.log(button);

  // Show the modal
  modal.style.display = "block";

  // Start the countdown
  let timeLeft = 3;
  countdownElement.textContent = timeLeft;

  const countdown = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      modal.style.display = "none"; // Close modal after countdown
      button.classList.add("btn-disabled");
      button.innerText = "Adopted";
    }
  }, 1000);
}

// Close modal when clicked outside (optional)
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// * view more button clicked .
function scrollFunction() {
  const adoptFriend = document.getElementById("adopt-best-friend");
  const targetPosition = adoptFriend.offsetTop;
  window.scroll({
    top: targetPosition,
    behavior: "smooth",
  });
}

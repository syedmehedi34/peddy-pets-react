// import countDownFunction from "../../utilities/modalCountDown";

const AdoptModal = () => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="flex items-center justify-center h-full space-y-3">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          <div className="w-fit mx-auto">
            <img src="assets/handshake.png" alt="" />
          </div>
          <p className="text-text text-[24px] text-center font-extrabold">
            Congrates
          </p>
          <p className="text-text text-center py-2">
            Adoption Process is Start For your Pet
          </p>

          <p id="countdown" className="text-center text-5xl font-bold">
            3
          </p>

          {/*  */}
          <div className="modal-action">
            <form method="dialog" className="w-full">
              <button
                id="closeBtn"
                className="btn w-full border border-[#0E7A8133] bg-[#0E7A811A]"
              >
                Close
              </button>
            </form>
          </div>
          {/*  */}
        </div>
      </div>
    </dialog>
  );
};

export default AdoptModal;

/*
 <div className="modal-action">
            <form method="dialog" className="w-full">
              <button className="btn w-full border border-[#0E7A8133] bg-[#0E7A811A]">
                Close
              </button>
            </form>
          </div>
*/

/*
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
*/

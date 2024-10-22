const PetDetails = () => {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <section id="modal-container">
          <div className="h-[250px] w-full rounded-lg">
            <img
              className="h-full w-full object-cover rounded-lg"
              src="${pet.image}"
              alt=""
            />
          </div>
          <h1 className="text-first text-[22px] font-bold mt-5 mb-2">
            pet name
          </h1>

          <div className="flex items-start gap-10">
            <div className="space-y-2">
              <div className="text-first70 text-[1rem] flex items-center gap-2">
                <i className="fa-solid fa-qrcode"></i>
                <p className="text-first70">Breed:</p>
              </div>
              <div className="text-first70 text-[1rem] flex items-center gap-2">
                <i className="fa-solid fa-mercury"></i>
                <p>Gender: </p>
              </div>
              <div className="text-first70 text-[1rem] flex items-center gap-2">
                <i className="fa-solid fa-syringe"></i>
                <p className="text-first70">Vaccinated status: $</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-first70 text-[1rem] flex items-center gap-2">
                <i className="fa-solid fa-calendar-days"></i>
                <p>Birth: $</p>
              </div>
              <div className="text-first70 text-[1rem] flex items-center gap-2">
                <i className="fa-solid fa-dollar-sign"></i>
                <p>Price :</p>
              </div>
            </div>
          </div>
          <div className="border-t my-4 border-[#1313131A]"></div>
          <h1 className="text-first font-semibold mb-3">Details Information</h1>
          <p className="text-first70">pet details</p>
        </section>

        <div className="modal-action">
          <form method="dialog" className="w-full">
            <button className="btn w-full border border-[#0E7A8133] bg-[#0E7A811A]">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default PetDetails;
// my_modal_1.showModal();

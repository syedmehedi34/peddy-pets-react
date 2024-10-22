/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaQrcode } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { PiGenderFemaleBold } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { useState } from "react";
import PetDetails from "../Modals/PetDetails";
import AdoptModal from "../Modals/AdoptModal";
import PetSelected from "../PetSelected/PetSelected";

const PetCard = ({ pet, handleSelectPet }) => {
  const {
    bread,
    category,
    date_of_birth,
    price,
    image,
    gender,
    pet_details,
    vaccinated_status,
    pet_name,
  } = pet;

  //
  return (
    <div className="card shadow-xl border border-[#1313131A] rounded-xl w-full mx-auto">
      <div className="mx-5 mt-5 h-42 rounded-lg">
        <img
          src={image}
          alt="Shoes"
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
      <div className="px-5 mt-5">
        <h2 className="font-Inter text-text font-bold text-xl mb-2">
          {pet_name}
        </h2>

        <div className="text-text70 text-[1rem] flex items-center gap-2">
          <span className="text-sm">
            <FaQrcode />
          </span>
          <p className="text-text70">Bread: {bread}</p>
        </div>

        <div className="text-text70 text-[1rem] flex items-center gap-2 py-2">
          <span>
            <MdDateRange />
          </span>
          <p>Birth: {date_of_birth}</p>
        </div>

        <div className="text-first70 text-[1rem] flex items-center gap-2">
          <span className="text-lg">
            <PiGenderFemaleBold />
          </span>
          <p>Gender: {gender}</p>
        </div>

        <div className="text-first70 text-[1rem] flex items-center gap-2 pt-2 pb-4">
          <span>
            <FaDollarSign />
          </span>
          <p>Price: {price} $</p>
        </div>

        <div className="border-t py-2 border-[#1313131A]"></div>
      </div>

      <div className="flex justify-between items-center px-5 pb-5">
        <div
          onClick={() => handleSelectPet(image)}
          className="btn bg-white border border-[#0E7A8126] text-first60 text-[15px] font-bold rounded-lg"
        >
          {/* <i className="fa-regular fa-thumbs-up"></i> */}
          <span className="text-xl">
            <AiOutlineLike />
          </span>
        </div>
        <div
          onClick={() => {
            document.getElementById("my_modal_1").showModal();
          }}
          className="adopt-btn btn bg-white border border-[#0E7A8126] text-primary text-[15px] font-semibold rounded-lg"
        >
          Adopt
        </div>
        <AdoptModal></AdoptModal>

        <div
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="btn bg-white border border-[#0E7A8126] text-primary text-[15px] font-semibold rounded-lg"
        >
          Details
        </div>
        <PetDetails></PetDetails>
      </div>
    </div>
  );
};

export default PetCard;

import PetShow from "./PetShow";

/* eslint-disable react/prop-types */
const PetSelected = ({ selected }) => {
  // console.log(selected);
  return (
    <div className="h-screen w-full col-span-3 border rounded-xl">
      {/*  */}
      <div>
        {selected.map((pet, idx) => (
          <PetShow key={idx} pet={pet}></PetShow>
        ))}
      </div>
      {/*  */}
    </div>
  );
};

export default PetSelected;

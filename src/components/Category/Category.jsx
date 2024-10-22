/* eslint-disable react/prop-types */
const Categories = ({ category, handleSearchPet }) => {
  return (
    <div
      onClick={() => handleSearchPet(category.category)}
      className="
    font-Inter btn category-button min-h-0 h-full flex items-center gap-3 border border-[#0E7A8126] rounded-xl px-7 py-4 w-ful"
    >
      <img className="w-8 h-8" src={category.category_icon} alt="" />
      <p className="text-text text-[1.5rem] font-bold">{category.category}</p>
    </div>
  );
};

export default Categories;
//

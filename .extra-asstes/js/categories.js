// display categories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  //   console.log(categoryContainer);
  //   console.log(categories);
  categories.forEach((category) => {
    // console.log(category);
    const div = document.createElement("div");
    div.innerHTML = `

      <!-- border-[#0E7A81] rounded-[120px] bg-[#0E7A811A]  -->

<div
    onclick="loadClickedButton(this)"
    data-post='${JSON.stringify(category)}'
    class="font-Inter btn category-button min-h-0 h-full flex items-center gap-3 border border-[#0E7A8126] rounded-xl px-7 py-4 w-ful" >

    <img class="w-8 h-8" src="${category.category_icon}" alt="" />
    <p class="text-first text-[1.5rem] font-bold">${category.category}</p>

</div>
        

    `;
    categoryContainer.appendChild(div);
  });
};

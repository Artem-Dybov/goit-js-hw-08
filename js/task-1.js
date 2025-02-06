const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

const categoryItems = document.querySelectorAll("#categories .item");

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;

  const categoryListItems = item.querySelectorAll("ul li");

  console.log(
    `Category: ${categoryTitle}, Elements: ${categoryListItems.length}`
  );
});

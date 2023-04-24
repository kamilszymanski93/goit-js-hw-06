const listItems = document.querySelectorAll("ul#categories li.item");
const categories = listItems.length;
console.log(`Number of categories: ${categories}`);
listItems.forEach((item) => {
  const headerName = item.querySelector("h2").innerText;
  const countList = item.querySelectorAll("li").length;
  console.log(`Category: ${headerName}`);
  console.log(`Elements: ${countList}`);
});

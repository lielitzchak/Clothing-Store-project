const expensive_to__cheap = document.getElementById("expensive_to__cheap");
const cheap_to_expensive = document.getElementById("cheap_to_expensive");
const shopping_img_cart_add = document.getElementById("shopping_img_cart_add");
let the_form = document.getElementById("the_form");

// ! its work
expensive_to__cheap.onclick = (e) => {
  e.preventDefault();
  item.sort((a, b) => {
    div_for_main.innerHTML += b.price - a.price;
  });
  console.log(
    item.sort((a, b) => {
      return b.price - a.price;
    })
  );
};
// ! its work
cheap_to_expensive.onclick = (e) => {
  e.preventDefault();
  console.log(
    item.sort((a, b) => {
      return a.price - b.price;
    })
  );
};

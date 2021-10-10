let the_form = document.getElementById("the_form");
const expensive_to__cheap = document.getElementById("expensive_to__cheap");
const cheap_to_expensive = document.getElementById("cheap_to_expensive");
const shopping_img_cart_add = document.getElementById("shopping_img_cart_add");








// ! its work
cheap_to_expensive.onclick = (e) => {
  e.preventDefault();
  item.sort((a, b) => {
    return a.price - b.price;
  });
};

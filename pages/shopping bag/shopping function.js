function clickMenu() {
  let header_nav_home_page_for_mobile = document.getElementById(
    "header_nav_home_page_for_mobile"
  );
  if (header_nav_home_page_for_mobile.style.display === "block") {
    header_nav_home_page_for_mobile.style.display = "none";
  } else {
    header_nav_home_page_for_mobile.style.display = "block";
  }
}
td_class1.innerHTML += `
  <tr class= "the_section"><td><img src="${item_for_cart[0].picture[0]}"</td></tr>
  <tr class= "the_section"><td>${item_for_cart[0].itemName}</td></tr>
  <tr class= "the_section"><td>${item_for_cart[0].description}</td></tr>
  <tr class= "the_section"><td class = "price_to_pay">${item_for_cart[0].price}$</td></tr>
  <tr class= "the_section"><td>${item_for_cart[0].category}</td></tr>
  <tr class= "the_section"><td>${item_for_cart[0].id}</td></tr>
  <tr  class= "the_section"><button class = "btn_class" id="btn_remove">remove</button></tr>
</tr>`;
td_class2.innerHTML += `

<tr><td><img src="${item_for_cart[1].picture[0]}"</td></tr>
<tr><td>${item_for_cart[1].itemName}</td></tr>
<tr><td>${item_for_cart[1].description}</td></tr>
<tr><td class = "price_to_pay">${item_for_cart[1].price}$</td></tr>
<tr><td>${item_for_cart[1].category}</td></tr>
<tr><td>${item_for_cart[1].id}</td></tr>
<tr><button class = "btn_class">remove</button></tr>
</tr>`;
td_class3.innerHTML += `

<tr><td><img src="${item_for_cart[2].picture[0]}"</td></tr>
<tr><td>${item_for_cart[2].itemName}</td></tr>
<tr><td>${item_for_cart[2].description}</td></tr>
<tr><td class = "price_to_pay">${item_for_cart[2].price}$</td></tr>
<tr><td>${item_for_cart[2].category}</td></tr>
<tr><td>${item_for_cart[2].id}</td></tr>
<tr><button class = "btn_class">remove</button></tr>
</tr>`;
td_class4.innerHTML += `

<tr><td><img src="${item_for_cart[3].picture[0]}"</td></tr>
<tr><td>${item_for_cart[3].itemName}</td></tr>
<tr><td>${item_for_cart[3].description}</td></tr>
<tr><td class = "price_to_pay">${item_for_cart[3].price}$</td></tr>
<tr><td>${item_for_cart[3].category}</td></tr>
<tr><td>${item_for_cart[3].id}</td></tr>
<tr><button class = "btn_class">remove</button></tr>
</tr>`;

function removeOne(num) {
  let the_remove = (num.length -= 1);
  if (the_remove == 0) {
    alert("you have nothing in the cart");
  }
  return the_remove;
}

let sumToShow = 0;
function sum_to_pay() {
  sumToShow = item_for_cart[0].price + item_for_cart[1].price;
  item_for_cart[2].price + item_for_cart[3].price;
  return sumToShow;
}

let all = 268 + 54 + 50 + 174;
console.log(all);

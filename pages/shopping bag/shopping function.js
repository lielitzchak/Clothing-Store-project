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

  <tr><td><img src="${item_for_cart[0].picture[0]}"</td></tr>
  <tr><td>${item_for_cart[0].itemName}</td></tr>
  <tr><td>${item_for_cart[0].description}</td></tr>
  <tr><td class = "price_to_pay">${item_for_cart[0].price}$</td></tr>
  <tr><td>${item_for_cart[0].category}</td></tr>
<tr><td>${item_for_cart[0].id}</td></tr>
<td><button id="btn_remove">remove</button></td>
</tr>`;
td_class2.innerHTML += `

<tr><td><img src="${item_for_cart[1].picture[0]}"</td></tr>
<tr><td>${item_for_cart[1].itemName}</td></tr>
<tr><td>${item_for_cart[1].description}</td></tr>
<tr><td class = "price_to_pay">${item_for_cart[1].price}$</td></tr>
<tr><td>${item_for_cart[1].category}</td></tr>
<tr><td>${item_for_cart[1].id}</td></tr>
<td><button>remove</button></td>
</tr>`;
td_class3.innerHTML += `

<tr><td><img src="${item_for_cart[2].picture[0]}"</td></tr>
<tr><td>${item_for_cart[2].itemName}</td></tr>
<tr><td>${item_for_cart[2].description}</td></tr>
<tr><td class = "price_to_pay">${item_for_cart[2].price}$</td></tr>
<tr><td>${item_for_cart[2].category}</td></tr>
<tr><td>${item_for_cart[2].id}</td></tr>
<td><button>remove</button></td>
</tr>`;
td_class4.innerHTML += `

<tr><td><img src="${item_for_cart[3].picture[0]}"</td></tr>
<tr><td>${item_for_cart[3].itemName}</td></tr>
<tr><td>${item_for_cart[3].description}</td></tr>
<tr><td class = "price_to_pay">${item_for_cart[3].price}$</td></tr>
<tr><td>${item_for_cart[3].category}</td></tr>
<tr><td>${item_for_cart[3].id}</td></tr>
<td><button>remove</button></td>
</tr>`;

let my_array = [
  {
    id: "52",
    itemName: "MOTF PREMIUM 100% SILK GRADE 6A 22MM BLOUSE",
    price: 268,
    description: "",
    category: "Shirts",
    picture: ["https://did.li/sHfaa", "https://did.li/JSHNf"],
  },
  {
    id: "49",
    itemName: "Contrast Mesh Ruffle One Piece Swimsuit",
    price: 54,
    description: "",
    category: "Swimwear",
    picture: ["https://did.li/Z40ql", "https://did.li/gfC5q"],
  },
  {
    id: "50",
    itemName: "SXY High Waist Bleach Wash Skinny Jeans",
    price: 50,
    description: "",
    category: "pants",
    picture: ["https://did.li/D0SfT", "https://did.li/UklTY"],
  },
  {
    id: "51",
    itemName: "Appliques Maxi Chiffon Prom Dress",
    price: 174,
    description: "",
    category: "dresses",
    picture: ["https://did.li/140ql", "https://did.li/hfC5q"],
  },
];
function removeOne(num) {
  let x = (num.length -= 1);
  if (x == 0) {
    alert("you have nothing in the cart");
  }
  return x;
}

btn_remove.onclick = () => {
  removeOne(my_array);
  console.log(removeOne(my_array));
  console.log(my_array);
};

let sum = 0;
function sum_to_pay() {
  sum = item_for_cart[0].price + item_for_cart[1].price;
  item_for_cart[2].price + item_for_cart[3].price;
  return sum;
}

console.log((btn_remove.innerHTML = sum_to_pay()));
let all = 268 + 54 + 50 + 174;
console.log(all);

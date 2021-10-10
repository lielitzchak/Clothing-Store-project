let divForPants = document.getElementById("divForPants");
let divForShirts = document.getElementById("divForShirts");
let divForSwimwear = document.getElementById("divForSwimwear");
let divForDresses = document.getElementById("divForDresses");
function printToWindowByCategory(div, category) {
  for (let i = 0; i < item.length; i++) {
    if (item[i].category == category && div !== null) {
      div.innerHTML += `
        <div class="div_for_sections">
          <section  class="section_category_mobile">
              <img onclick="toggleImage(event)" data-img2="${item[i].picture[1]}" class="img_category_mobile first" src="${item[i].picture[0]}" alt="">
              <div class="add-link">
              <p class="item_name"> <b>Item name:</b> ${item[i].itemName}</p>
              <p class="click_to_add_to_the_cart item_name"><b>id:</b> ${item[i].id}</p>
              <p class="item_price"><b>Item price:</b> $${item[i].price}</p>
              <p class="item_price"><b>Item description:</b> ${item[i].description}</p>
              </div>
              <div>
              <a onclick="addingProductFromTheShoppingCart(${item[i].price},'${item[i].description}' ,'${item[i].category}' ,'${item[i].picture[0]}' ,'${item[i].itemName}' , ${item[i].id} , event)" href="#" id="${item[i].id}"><img src="../media/photos/icons8-shopping-cart-64.png" class="shopping_img_cart_add add_${item[i].id}"> </a>
              <a onclick="deletingProductFromTheShoppingCart(${item[i].id}, event)" href="#"><img src="../media/photos/icons8-delete-50.png" class="shopping_img_cart_remove"> </a>
              <p class="text_on_img">Click on the image to see more</p>
          
              </div>
              </section>
      </div>`;
    }
  }
}
printToWindowByCategory(divForPants, "pants");
printToWindowByCategory(divForShirts, "Shirts");
printToWindowByCategory(divForSwimwear, "Swimwear");
printToWindowByCategory(divForDresses, "dresses");

function toggleImage(e) {
  e.stopPropagation();
  const src1 = e.target.getAttribute("src");
  const dataAttrImgUrl = e.target.getAttribute("data-img2");
  e.target.setAttribute("src", dataAttrImgUrl);
  e.target.setAttribute("data-img2", src1);
}
function addingProductFromTheShoppingCart(
  the_price,
  descriptions,
  category,
  pictures,
  Name,
  id,
  e
) {
  e.preventDefault();
  let added = { id, Name, the_price, descriptions, category, pictures };
  for (let i = 0; i < item.length; i++) {
    if (item[i].id == id) {
      items_for_cart.push(added);
    }
  }
  console.log(items_for_cart);
  return added;
}
function deletingProductFromTheShoppingCart(ids, e) {
  e.preventDefault();
  for (let i = 0; i < items_for_cart.length; i++) {
    if (items_for_cart[i].id === ids) {
      items_for_cart.splice(i, 1);
    }
  }
  console.log(items_for_cart);
}

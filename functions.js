let divForPants = document.getElementById("divForPants");
let divForShirts = document.getElementById("divForShirts");
let divForSwimwear = document.getElementById("divForSwimwear");
let divForDresses = document.getElementById("divForDresses");
let divFooter = document.getElementById("divFooter");
let the_form = document.getElementById("the_form");
let expensive_to__cheap = document.getElementById("expensive_to__cheap");
let sortBy = document.getElementById("sortBy");
const shopping_img_cart_add = document.getElementById("shopping_img_cart_add");
let items_for_cart = [];
function printToWindowByCategory(div, category) {
  if (div) {
    div.innerHTML = "";
  }
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

function DisplayFooterAllPages(div) {
  div.innerHTML = `
    <div id="footer_div_home_page">
    <section class="footer_section_home_page">
      <ul class="footer_ul_home_page">
        <h5 class="footer_h5_home_page footer_h5_home_page_for_mobile">category</h5>
        <br />
        <li class="footer_li_home_page footer_li_home_page_for_mobile">
          <a href="../page/shirts.html"><p>shirt</p></a>
        </li>
        <li class="footer_li_home_page footer_li_home_page_for_mobile">
          <a href="../page/Swimwear.html"><p>swimwear</p></a>
        </li>
        <li class="footer_li_home_page footer_li_home_page_for_mobile">
          <a href="#"><p>accessories</p></a>
        </li>
        <li class="footer_li_home_page footer_li_home_page_for_mobile">
          <a href="#"><p>bags</p></a>
        </li>
        <li  class="footer_li_home_page footer_li_home_page_for_mobile">
          <a href="#"><p>shoes</p></a>
        </li>
        <li  class="footer_li_home_page footer_li_home_page_for_mobile">
          <a href="../page/dresses.html"><p>dresses</p></a>
        </li>
        <li class="footer_li_home_page footer_li_home_page_for_mobile">
          <a href="../page/pants.html"><p>pants</p></a>
        </li>
      </ul>
    </section>
    <section class="footer_section_home_page">
      <h5 class="footer_h5_home_page">help & support & Customer care</h5>
      <br />
      <ul class="footer_ul_home_page">
        <a href=""> <li>privacy & cookie policy</li></a>
        <a href=""> <li>terms & conditions</li></a>
        <a href=""> <li>privacy & center</li></a>
        <a href=""> <li>copyright notice</li></a>
        <a href=""> <li>Customer Service</li></a>
        <a href=""> <li>help</li></a>
      </ul>
    </section>
    <section class="footer_section_home_page">
      <h5 class="footer_h5_home_page"> conect us:</h5>
      <br />
      <a href="https://github.com/lielitzchak" ><img src="../media/photos/github_logo.png" class="footer_img_home_page" alt="" /></a>
      <a href="https://www.linkedin.com/in/liel-itzchak-b663b0211/" ><img src="../media/photos/linkdin_logo.png" class="footer_img_home_page" alt="" /></a>
      <a href="https://www.facebook.com/liel.izchaak/" ><img src="../media/photos/facebook_logo.png" class="footer_img_home_page" alt=""/></a>
      <a href="https://www.instagram.com/lielitzchak/" ><img src="../media/photos/instagram_logo.png" class="footer_img_home_page" alt="" /></a>
    </section>
    <section class="footer_section_home_page">
      <form  id="the_form">
        <h5 class="footer_h5_home_page">for our Newsletter:</h5>
        <br />
        <label class="footer_ladel_home_page"  for="user_name">full name:</label><br />
        <input class="footer_input_home_page" required id="user_name"  type="text" />
        <br />
        <label class="footer_label_home_page" for="user_email">email:</label><br />
        <input  class="footer_input_home_page" required id="user_email" type="email" name=""/>
        <br>
        <label class="footer_label_home_page" for="user_email_test">write your email again:</label><br />
        <input class="footer_input_home_page" required id="user_email_test"  type="email" name=""/>
      
        <br /><br>
        <button id="btn_Newsletter" class="footer_btn_home_page footer_butn">send</button>
      <div id="for_massage"></div>
    </form>
    </section>
    </div>
    <br />
    <h5 id="All_rights_reserved">	&copy; All rights reserved- liel itzchak</h5> 
      `;
}
DisplayFooterAllPages(divFooter);

let test = document.getElementById("test");
let options = document.getElementsByTagName("option");
sortBy.onchange = () => {
  switch (sortBy.value) {
    case "cheap to expensive":
      item.sort((a, b) => {
        return a.price - b.price;
      });
      break;
    case "expensive to cheap":
      item.sort((a, b) => {
        return b.price - a.price;
      });
      break;
    default:
      return;
  }

  printToWindowByCategory(divForPants, "pants");
  printToWindowByCategory(divForShirts, "Shirts");
  printToWindowByCategory(divForSwimwear, "Swimwear");
  printToWindowByCategory(divForDresses, "dresses");
};

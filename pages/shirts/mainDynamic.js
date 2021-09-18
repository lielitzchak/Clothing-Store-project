for (let i = 0; i < item.length; i++) {
  if (item[i].category == "Shirts") {
    div_for_main.innerHTML += `
          <div class="div_for_sections">
            <section  class="section_category_mobile">
                <img onclick="toggleImage(event)" data-img2="${item[i].picture[1]}" class="img_category_mobile first" src="${item[i].picture[0]}" alt="">
                <a href="" class="add-link">
                <p class="item_name"> Item name: ${item[i].itemName}</p>
                <p class="item_price">Item price: $${item[i].price}</p>
               </a>
               <a href="/pages/shopping bag/shoppingBag.html" class="shopping_a_bag"> <img src="${shopping_cart_img}"  class="shopping_img_cart"> </a>
                <a href="/pages/shopping bag/shoppingBag.html" class="shopping_a_bag"><img src="${delete_item}"  class="shopping_img_cart"> </a>
                <p class="text_on_img">Click on the image to see more</p>
            </section>
        </div>`;
  }
}

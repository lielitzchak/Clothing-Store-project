for (let i = 0; i < item.length; i++) {
  if (item[i].category == "Shirts") {
    div_for_main.innerHTML += `
          <div class="div_for_sections">
            <section  class="section_category_mobile">
                <img onclick="toggleImage(event)" data-img2="${item[i].picture[1]}" class="img_category_mobile first" src="${item[i].picture[0]}" alt="">
                <a href="" class="add-link">
                <p class="item_name"> Item name: ${item[i].itemName}</p>
                <p>id: ${item[i].id}</p>
                <p class="item_price">Item price: $${item[i].price}</p></a>
                <a href="javascript:void(0)" onclick="addToCart(${item[i].id} );" id="add_${item[i].id}"> <img src="${shopping_cart_img}"  class="shopping_img_cart_add"> </a>
                <a href="javascript:void(0)" onclick="addToCart(${item[i].id} );" id="remove_${item[i].id}"><img src="${delete_item}"  class="shopping_img_cart_remove"> </a>
                <p class="text_on_img">Click on the image to see more</p>
            </section>
        </div>`;
  }
  function addToCart(id_item, event) {
    event.preventDefault();
    cart.push(id_item);
  }

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
}

cheap_to_expensive.onclick = (e) => {
  e.preventDefault();
  console.log(
    item.sort((a, b) => {
      return a.price - b.price;
    })
  );
};

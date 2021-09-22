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
for (let i = 0; i < item.length; i++) {
  if (item[i].category == "Shirts") {
    div_for_main.innerHTML += `
          <div class="div_for_sections">
            <section  class="section_category_mobile">
                <img onclick="toggleImage(event)" data-img2="${item[i].picture[1]}" class="img_category_mobile first" src="${item[i].picture[0]}" alt="">
                <div class="add-link">
                <p class="item_name"> <b>Item name:</b> ${item[i].itemName}</p>
                <p class="click_to_add_to_the_cart item_name"><b>id:</b> ${item[i].id}</p>
                <p class="item_price"><b>Item price:</b> $${item[i].price}</p>
                </div>
                <div>
                <a onclick="add('${item[i].id}', '${item[i].itemName}', ${item[i].price}, '${item[i].category}')" href="#" id="add_${item[i].id}">
                 <img src="${shopping_cart_img}" class="shopping_img_cart_add add_${item[i].id}"> </a>
                <a onclick=" remove_$(${item[i].id},${item[i].id}, '${item[i].itemName}', ${item[i].price}, '${item[i].category}')" href="#" id="remove_${item[i].id}"><img src="${delete_item}" class="shopping_img_cart_remove"> </a>
                <p class="text_on_img">Click on the image to see more</p>
            
                </div>
                </section>
        </div>`;
  }
}


// console.log(item_for_cart);
// ! its work
//! add to cart array
function add(id, itemName, price, category) {
  let added = { id, itemName, price, category };
  item_for_cart.push(added);
  console.log(item_for_cart);
}

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
// ! its work
function toggleImage(e) {
  e.stopPropagation();
  const src1 = e.target.getAttribute("src");
  const dataAttrImgUrl = e.target.getAttribute("data-img2");
  e.target.setAttribute("src", dataAttrImgUrl);
  e.target.setAttribute("data-img2", src1);
}

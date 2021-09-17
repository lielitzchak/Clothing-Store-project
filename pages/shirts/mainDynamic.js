for (let i = 0; i < item.length; i++) {
  if (item[i].category == "Shirts") {
    div_for_main.innerHTML += `
          <div class="div_for_sections">
            <section  class="section_category_mobile">
                <img onclick="toggleImage(event)" data-img2="${item[i].picture[1]}" class="img_category_mobile first" src="${item[i].picture[0]}" alt="">
              <a href="" class="add-link">
                <p>${item[i].itemName}</p>
                <p>$ ${item[i].price}</p>
                <p>add/delete from shopping bag</p>
              </a>
            </section>
        </div>`;
  }
}

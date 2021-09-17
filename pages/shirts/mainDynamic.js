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
        <section class="section_category_mobile"> 
          <a href="">
          <img class="img_category_mobile" src="${item[i].picture[0]}"    alt=""> 
          <p>${item[i].itemName}</p>
          <p>$ ${item[i].price}</p>
          <p>add/delete from shopping bag</p></a>
        </section>
        <section class="section_category_mobile"> 
          <a href="">
          <img class="img_category_mobile"  src="${item[i].picture[0]}" alt=""> 
          <p>${item[i].itemName}</p>
          <p>$ ${item[i].price}</p>
          <p>add/delete from shopping bag</p></a>
        </section>
      </div>
    `;
  }
}

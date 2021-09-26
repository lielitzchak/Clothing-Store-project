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

for (let i = 0; i < item_for_cart.length; i++) {
  tTable.innerHTML += `
   <tr id ="${item_for_cart[i].id}">
        <td>
           <img src="${item_for_cart[i].picture[0]}">
         </td>
         <td>
            <p>${item_for_cart[i].itemName}</p>  
          </td>   
          <td>  
              <h2>${item_for_cart[i].price}$</h2>
          </td>
          <td>
                  ${item_for_cart[i].description}
          </td>
          <td>
            <button onclick="remove_from_the_cart(${item_for_cart[i].id})" style = "cursor: pointer;" id = "btn_remove">remove</button>
          </td>
     </tr> 
`;

  the_sum.innerHTML = `<h1> Total: ${Total_calculation()}$</h1>`;
}
function Total_calculation() {
  let sum = 0;
  for (let i = 0; i < item_for_cart.length; i++) {
    sum += item_for_cart[i].price;
  }
  return sum;
}

function remove_from_the_cart(ids) {
  for (let i = 0; i < item_for_cart.length; i++) {
    if (item_for_cart[i].id == ids) {
      item_for_cart.splice(i, 1);
      document.getElementById(ids).innerHTML = "";
      the_sum.innerHTML = `<h3>Total: ${Total_calculation() + "$"}</h3>`;
      console.log(item_for_cart);
    }
  }
}

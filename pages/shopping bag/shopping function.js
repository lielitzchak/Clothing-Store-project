let myarr = [
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
    console.log("you have nothing in the cart");
  }
  return x;
}
console.log(myarr);

const btn = document.getElementById("btn");
btn.onclick = () => {
  console.log(removeOne(myarr));
  console.log(myarr);
};

{
  /* <tr>
       <th>id</th>
       <th>picture:</th>
        <th>description:</th>  
        <th> category:</th>
       <th>price:</th>
       <th>*</th>
    </tr>
   <td id =""></td>
   <td id=""></td>
   <td id=""></td>
   <td id=""></td>
   <td id=""></td>
   <td id=""></td> */
}

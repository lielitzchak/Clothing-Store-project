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

const item = [
  {
    id: "1",
    itemName: "Notch Neck Puff Sleeve Ditsy Floral Blouse",
    price: 30,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/ORHNf", "https://did.li/630ql"],
  },
  {
    id: "2",
    itemName: "Paperbag Waist Dual Pocket Belted Skinny Pants",
    price: 60,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/4jlTY", "https://did.li/kvNw5"],
  },
  {
    id: "3",
    itemName: "Solid Slant Pocket Wide Leg Shorts",
    price: 40,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/BGfaa", "https://did.li/030ql"],
  },
  {
    id: "4",
    itemName: "Cut-out One Shoulder Bikini Swimsuit",
    price: 49,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/fMYYH", "https://did.li/N9SfT"],
  },
  {
    id: "5",
    itemName: "Satin Solid Button Through Drop Shoulder Blouse",
    price: 60,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/J9SfT", "https://did.li/hvNw5"],
  },
  {
    id: "6",
    itemName: "Geo Print Ruffle Hem Shirt Dress",
    price: 80,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/5jlTY", "https://did.li/lvNw5"],
  },
  {
    id: "7",
    itemName: "Tropical Bandeau High Waisted Bikini Swimsuit",
    price: 39,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/b40ql", "https://did.li/URHNf"],
  },
  {
    id: "8",
    itemName: "Pleated Belted Shirt Dress",
    price: 69,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/seC5q", "https://did.li/Jp5Hw"],
  },
  {
    id: "9",
    itemName: "Notched Landscape Print Dress Without Belt",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/1AwlC", "https://did.li/hMYYH"],
  },
  {
    id: "10",
    itemName: "Cut-out Side Bikini Swimsuit",
    price: 39,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/EGfaa", "https://did.li/VRHNf"],
  },
  {
    id: "11",
    itemName: "High Waist Ripped Jeans",
    price: 79,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/8jlTY", "https://did.li/Q9SfT"],
  },
  {
    id: "12",
    itemName: "Stonewash Distressed Skinny Jeans",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/FGfaa", "https://did.li/WRHNf"],
  },
  {
    id: "13",
    itemName: "High Waisted Ripped Skinny Jeans",
    price: 95,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/jMYYH", "https://did.li/AXqCN"],
  },
  {
    id: "14",
    itemName: "High Waist High Stretch Slant Pocket Jeans",
    price: 79,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/9jlTY", "https://did.li/pvNw5"],
  },
  {
    id: "15",
    itemName: "Keyhole Back Allover Print Peplum Top",
    price: 40,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/yGfaa", "https://did.li/PRHNf"],
  },
  {
    id: "16",
    itemName: "Contrast Mesh High Waisted Bikini Swimsuit",
    price: 39,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/GGfaa", "https://did.li/XRHNf"],
  },
  {
    id: "17",
    itemName: "Cartoon Cat Print Drop Shoulder Blouse",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/VAwlC", "https://did.li/tXqCN"],
  },
  {
    id: "18",
    itemName: "Leopard Trim Bandeau High Waisted Bikini Swimsuit",
    price: 50,
    description: "car",
    category: "Swimwear",
    picture: ["https://did.li/veC5q", "https://did.li/e40ql"],
  },
  {
    id: "19",
    itemName: "Solid High Rise Straight Leg Pants",
    price: 69,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/4AwlC", "https://did.li/Mp5Hw"],
  },
  {
    id: "20",
    itemName: "Leaf Pattern High Waisted Bikini Swimsuit",
    price: 39,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/HGfaa", "https://did.li/BXqCN"],
  },
  {
    id: "21",
    itemName: "Stonewash Distressed Skinny Jeans",
    price: 59,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/YRHNf", "https://did.li/f40ql"],
  },
  {
    id: "22",
    itemName: "Highest-Rise Ripped Skinny Jeans",
    price: 59,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/weC5q", "https://did.li/Np5Hw"],
  },
  {
    id: "23",
    itemName: "Geo Print Button Up Blouse",
    price: 40,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/2jlTY", "https://did.li/ivNw5"],
  },
  {
    id: "24",
    itemName: "Tie Dye High Waisted Bikini Swimsuit",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/lMYYH", "https://did.li/CXqCN"],
  },
  {
    id: "25",
    itemName: "One Shoulder Split Cuff Bodycon Dress",
    price: 39,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/JGfaa", "https://did.li/1RHNf"],
  },
  {
    id: "26",
    itemName: "Solid Flared Cami Dress",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/h40ql", "https://did.li/yeC5q"],
  },
  {
    id: "27",
    itemName: "Solid High Cut Bikini Swimsuit",
    price: 39,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/9RHNf", "https://did.li/p40ql"],
  },
  // {
  //   id: "28",
  //   itemName: "Lapel Collar Pocket Blouse",
  //   price: 60,
  //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  //   category: "Shirts",
  //   picture: ["https://did.li/830ql", "https://did.li/oeC5q"],
  // },
  {
    id: "29",
    itemName: "Sheer Mesh Overlay Hem Bustier Cami Dress",
    price: 69,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/Xp5Hw", "https://did.li/eBwlC"],
  },
  {
    id: "30",
    itemName: "Highest-Rise High Stretch Skinny Jeans",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/U9SfT", "https://did.li/bklTY"],
  },
  {
    id: "31",
    itemName: " Cheetah Print One-Shoulder Top",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/WAwlC", "https://did.li/dMYYH"],
  },
  {
    id: "32",
    itemName: "Floral Tie Side One Piece Swimsuit",
    price: 39,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/vMYYH", "https://did.li/MXqCN"],
  },
  {
    id: "33",
    itemName: "BASICS Single Breasted Solid Satin Blouse",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/uXqCN", "https://did.li/L9SfT"],
  },
  {
    id: "34",
    itemName: "MOTF PREMIUM MIDI WRAP BELTED DRESS",
    price: 119,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/Yp5Hw", "https://did.li/fBwlC"],
  },
  {
    id: "35",
    itemName: "Joyfunear Off Shoulder Split Bell Sleeve Dress",
    price: 69,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/49SfT", "https://did.li/kklTY"],
  },
  {
    id: "36",
    itemName: "High Waisted Ripped Skinny Jeans",
    price: 79,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/BvNw5", "https://did.li/SGfaa"],
  },
  {
    id: "37",
    itemName: "Dual Pocket Button Up Blouse",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/3jlTY", "https://did.li/jvNw5"],
  },
  {
    id: "38",
    itemName: "Rib Cut-out One Piece Swimsuit",
    price: 47,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/q40ql", "https://did.li/HeC5q"],
  },
  {
    id: "39",
    itemName: "Twist Front Tie Back Crop Top",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/AGfaa", "https://did.li/RRHNf"],
  },
  {
    id: "40",
    itemName: "Rib Cut-out One Shoulder One Piece Swimsuit",
    price: 38,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/MBwlC", "https://did.li/4MYYH"],
  },
  {
    id: "41",
    itemName: "Solid Shirred Waist Dress",
    price: 53,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/kYqCN", "https://did.li/0vNw5"],
  },
  {
    id: "42",
    itemName: "Knot Side Shoulder Pads Fitted Dress",
    price: 41,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/qHfaa", "https://did.li/HSHNf"],
  },
  {
    id: "43",
    itemName: "Tie Back Leopard Top",
    price: 20,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/930ql", "https://did.li/peC5q"],
  },
  {
    id: "44",
    itemName: "Curvy Distressed Skinny Jeans",
    price: 60,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/NBwlC", "https://did.li/wq5Hw"],
  },
  {
    id: "45",
    itemName: "Floral & Tropical One Piece Swimsuit",
    price: 49,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/C0SfT", "https://did.li/lYqCN"],
  },
  {
    id: "46",
    itemName: "Ruffle Sleeve One Piece Swimsuit",
    price: 57,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/rHfaa", "https://did.li/awNw5"],
  },
  {
    id: "47",
    itemName: "MOTF PREMIUM ASYMMETRICAL FLOWY DRESS",
    price: 129,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/NXqCN", "https://did.li/wMYYH"],
  },
  {
    id: "48",
    itemName: "Tie Neck Geo Print Blouse",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/Gp5Hw", "https://did.li/eMYYH"],
  },
  {
    id: "49",
    itemName: "Contrast Mesh Ruffle One Piece Swimsuit",
    price: 54,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/Z40ql", "https://did.li/gfC5q"],
  },
  {
    id: "50",
    itemName: "SXY High Waist Bleach Wash Skinny Jeans",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/D0SfT", "https://did.li/UklTY"],
  },
  {
    id: "51",
    itemName: "Appliques Maxi Chiffon Prom Dress",
    price: 174,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/140ql", "https://did.li/hfC5q"],
  },
  {
    id: "52",
    itemName: "MOTF PREMIUM 100% SILK GRADE 6A 22MM BLOUSE",
    price: 268,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/sHfaa", "https://did.li/JSHNf"],
  },
];
const item_for_cart = [
  {
    id: "52",
    itemName: "MOTF PREMIUM 100% SILK GRADE 6A 22MM BLOUSE",
    price: 268,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Shirts",
    picture: ["https://did.li/sHfaa", "https://did.li/JSHNf"],
  },
  {
    id: "49",
    itemName: "Contrast Mesh Ruffle One Piece Swimsuit",
    price: 54,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "Swimwear",
    picture: ["https://did.li/Z40ql", "https://did.li/gfC5q"],
  },
  {
    id: "50",
    itemName: "SXY High Waist Bleach Wash Skinny Jeans",
    price: 50,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "pants",
    picture: ["https://did.li/D0SfT", "https://did.li/UklTY"],
  },
  {
    id: "51",
    itemName: "Appliques Maxi Chiffon Prom Dress",
    price: 174,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    category: "dresses",
    picture: ["https://did.li/140ql", "https://did.li/hfC5q"],
  },
];

// const div_for_scrip = document.getElementById("div_for_scrip");
const shopping_img_cart_add = document.getElementById("shopping_img_cart_add");
// let theHeader = document.getElementsByTagName("header");
let imgLogoHome = document.getElementById("imgLogoHome");
// let div_for_mobile_pic = document.getElementById("div_for_mobile_pic");
let mobile_container = document.getElementById("mobile_container");
let user_name_input = document.getElementById("user_name");
let user_email_input = document.getElementById("user_email");
let for_massage = document.getElementById("for_massage");
let div_for_main = document.getElementById("div_for_main");
let img_category_mobile = document.getElementById("img_category_mobile");
let enterJS = document.getElementById("enterJS");
const the_table = document.getElementById("the_table");
const td_class = document.getElementsByClassName("td_class");
let div_sum = document.getElementById("theSum");
let btn_remove = document.getElementById("btn_remove");
const btn_class = document.getElementsByClassName("btn_class");
let the_section = document.getElementById("the_section");
let tTable = document.getElementById("the_table");
let total = document.getElementById("totalSum");
let the_sum = document.getElementById("the_sum");
const click_to_add_to_the_cart = document.getElementById(
  "click_to_add_to_the_cart"
);
const items_for_cart = [];

clickMenu();
toggleImage();
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

function toggleImage(evt) {
  evt.stopPropagation();

  const src1 = evt.target.getAttribute("src");
  const dataAttrImgUrl = evt.target.getAttribute("data-img2");
  evt.target.setAttribute("src", dataAttrImgUrl);
  evt.target.setAttribute("data-img2", src1);
  console.log({ src1, dataAttrImgUrl });
}

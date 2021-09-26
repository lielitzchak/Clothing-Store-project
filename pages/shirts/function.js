

function toggleImage(e) {
  e.stopPropagation();
  const src1 = e.target.getAttribute("src");
  const dataAttrImgUrl = e.target.getAttribute("data-img2");
  e.target.setAttribute("src", dataAttrImgUrl);
  e.target.setAttribute("data-img2", src1);
}


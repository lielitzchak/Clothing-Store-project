let footerDiv = document.getElementById("footerDiv");
let the_Form = document.getElementById("the_form");
footerDiv.innerHTML = `<div id="footer_div_home_page">
<section class="footer_section_home_page">
  <ul class="footer_ul_home_page">
    <h5 class="footer_h5_home_page footer_h5_home_page_for_mobile">category</h5>
    <br />
    <li class="footer_li_home_page footer_li_home_page_for_mobile">
      <a href="page/shirts.html"><p>shirt</p></a>
    </li>
    <li class="footer_li_home_page footer_li_home_page_for_mobile">
      <a href="page/Swimwear.html"><p>swimwear</p></a>
    </li>
    <li class="footer_li_home_page footer_li_home_page_for_mobile">
      <a href="#"><p>accessories</p></a>
    </li>
    <li class="footer_li_home_page footer_li_home_page_for_mobile">
      <a href="#"><p>bags</p></a>
    </li>
    <li  class="footer_li_home_page footer_li_home_page_for_mobile">
      <a href="#"><p>shoes</p></a>
    </li>
    <li  class="footer_li_home_page footer_li_home_page_for_mobile">
      <a href="page/dresses.html"><p>dresses</p></a>
    </li>
    <li class="footer_li_home_page footer_li_home_page_for_mobile">
      <a href="page/pants.html"><p>pants</p></a>
    </li>
  </ul>
</section>
<section class="footer_section_home_page">
  <h5 class="footer_h5_home_page">help & support & Customer care</h5>
  <br />
  <ul class="footer_ul_home_page">
    <a href=""> <li>privacy & cookie policy</li></a>
    <a href=""> <li>terms & conditions</li></a>
    <a href=""> <li>privacy & center</li></a>
    <a href=""> <li>copyright notice</li></a>
    <a href=""> <li>Customer Service</li></a>
    <a href=""> <li>help</li></a>
  </ul>
</section>
<section class="footer_section_home_page">
  <h5 class="footer_h5_home_page"> conect us:</h5>
  <br />
  <a href="https://github.com/lielitzchak" ><img src="./media/photos/github_logo.png" class="footer_img_home_page" alt="" /></a>
  <a href="https://www.linkedin.com/in/liel-itzchak-b663b0211/"><img src="./media/photos/linkdin_logo.png" class="footer_img_home_page" alt="" /></a>
  <a href="https://www.facebook.com/liel.izchaak/" ><img src="./media/photos/facebook_logo.png" class="footer_img_home_page" alt=""/></a>
  <a href="https://www.instagram.com/lielitzchak/" ><img src="./media/photos/instagram_logo.png" class="footer_img_home_page" alt="" /></a>
</section>
<section class="footer_section_home_page">
  <form  id="the_form">
    <h5 class="footer_h5_home_page">for our Newsletter:</h5>
    <br />
    <label class="footer_ladel_home_page"  for="user_name">full name:</label><br />
    <input class="footer_input_home_page" required id="user_name"  type="text" />
    <br />
    <label class="footer_label_home_page" for="user_email">email:</label><br />
    <input  class="footer_input_home_page" required id="user_email" type="email" name=""/>
    <br>
    <label class="footer_label_home_page" for="user_email_test">write your email again:</label><br />
    <input class="footer_input_home_page" required id="user_email_test"  type="email" name=""/>
  
    <br /><br>
    <button id="btn_Newsletter" class="footer_btn_home_page footer_butn">send</button>
  <div id="for_massage"></div>
</form>
</section>
</div>
<br />
<h5 id="All_rights_reserved">	&copy; All rights reserved- liel itzchak</h5> 
`;
let user_name_input = document.getElementById("user_name").value;
let user_email_input = document.getElementById("user_email").value;
let for_massage = document.getElementById("for_massage");
function Check_if_similar(testOne, test_two) {
  if (testOne === test_two) {
    for_massage.innerHTML =
      "<p>your details saves and <br> you in our Newsletter</p>";
    let new_user = { name: user_name_input, email: user_email_input };
    User_details.push(new_user);
  } else {
    alert("your email is not the same ,please write again ");
  }
}
let the_Form = document.getElementById("the_form");

the_Form.onsubmit = (e) => {
  e.preventDefault();
  let user_email_test = document.getElementById("user_email_test");
  Check_if_similar(user_email_input, user_email_test);
};

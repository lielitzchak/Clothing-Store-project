// להעביר את הפונקציה הזו לטלפון , אם זה רלוונטי

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

the_form.onsubmit = (event) => {
  event.preventDefault();
  let user_email_test = document.getElementById("user_email_test");

  Check_if_similar(user_email_input, user_email_test);
};

function Check_if_similar(testOne, test_two) {
  if (testOne.value === test_two.value) {
    for_massage.innerHTML =
      "<p>your details saves and <br> you in our Newsletter</p>";
    let new_user = { name: user_name_input, email: user_email_input };
    User_details.push(new_user);
  } else {
    alert("your email is not the same ,please write again ");
  }
}

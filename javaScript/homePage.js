let the_Form = document.getElementById("the_form");
let user_name_input = document.getElementById("user_name");
let user_email_input = document.getElementById("user_email");
let for_massage = document.getElementById("for_massage");
const USER_DETAILS = [];
function Check_if_similar(testOne, test_two) {
  if (testOne.value == test_two.value) {
    for_massage.innerHTML =
      "<p>your details saves and <br> you in our Newsletter</p>";
    let new_user = {
      name: user_name_input.value,
      email: user_email_input.value,
    };
    USER_DETAILS.push(new_user);
    console.log(USER_DETAILS);
  } else {
    // alert("your email is not the same ,please write again ");
  }
}
the_Form.onsubmit = (e) => {
  e.preventDefault();
  let user_email_test = document.getElementById("user_email_test");
  Check_if_similar(user_email_input, user_email_test);
};

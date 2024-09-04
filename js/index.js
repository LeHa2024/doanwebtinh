const bagForm = document.querySelector(".badge");
const closeForm = document.querySelector(".close-button");
const bagForm1 = document.querySelector(".badge-danger");
bagForm.addEventListener("click", function () {
  document.querySelector(".bag-form").style.display = "flex";
});
closeForm.addEventListener("click", function () {
  document.querySelector(".bag-form").style.display = "none";
});
bagForm1.addEventListener("click", function () {
  document.querySelector(".bag-form1").style.display = "flex";
});

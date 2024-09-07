function changeMainImage(smallImg) {
  // Cập nhật hình ảnh chính
  const mainImage = document.getElementById("mainImage");
  mainImage.src = smallImg.src;

  // Xóa viền của tất cả hình ảnh nhỏ
  const allThumbnails = document.querySelectorAll(".product-image img");
  allThumbnails.forEach((img) => {
    img.classList.remove("selected");
  });

  // Thêm viền cho hình ảnh được chọn
  smallImg.classList.add("selected");
}
let productNumber = 0;
const subtraction = document.getElementById("subtraction");
const addition = document.getElementById("addition");

subtraction.addEventListener("click", function () {
  if (productNumber > 0) {
    document.getElementById("ko").innerHTML = --productNumber;
  }
});

addition.addEventListener("click", function () {
  document.getElementById("ko").innerHTML = ++productNumber;
});
/*-----------ingredient---- */
document.addEventListener("DOMContentLoaded", function () {
  const detailsElements = document.querySelectorAll(".details");

  detailsElements.forEach(function (element) {
    element.addEventListener("click", function () {
      // Xóa lớp 'active' khỏi tất cả các phần tử
      detailsElements.forEach((el) => el.classList.remove("actived"));

      // Thêm lớp 'active' vào phần tử được nhấp
      this.classList.add("actived");
    });
  });
});

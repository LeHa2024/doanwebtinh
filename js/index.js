/*-----------sticker-name---- */
document.addEventListener("DOMContentLoaded", function () {
  const detailsShopby = document.querySelectorAll(".sticker-name");

  detailsShopby.forEach(function (element) {
    element.addEventListener("click", function () {
      // Xóa lớp 'active1' khỏi tất cả các phần tử
      detailsShopby.forEach((el) => el.classList.remove("active1"));

      // Thêm lớp 'active1' vào phần tử được nhấp
      this.classList.add("active1");
    });
  });
});

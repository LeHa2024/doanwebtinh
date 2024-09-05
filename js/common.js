// // Config Axios client
// const client = axios.create({
//   baseURL: "https://dummyjson.com/",
// });

// // CATEGORY
// async function getCategories() {
//   const res = await client.get("products/categories");

//   return res.data;
// }

// function renderCategories(categories = []) {
//   const $categories = $(".categories-dropdown");

//   categories.forEach((cat) =>
//     $(
//       `<div><a class="dropdown-item list-style-none" href="collection.html?category=${cat.slug}">${cat.name}</a></div>`
//     ).appendTo($categories)
//   );
// }

// // SEARCH
// function onSearchFormSubmit(e) {
//   e.preventDefault();

//   const $searchInput = $(".search-input");
//   const query = $searchInput.val().trim();

//   if (query.length === 0) {
//     return;
//   }

//   $searchInput.val("");
//   window.location.href = `search.html?q=${query}`;
// }

// // PRODUCTS
// async function getProductsBySlug(slug) {
//   const res = await client.get(`products/category/${slug}`);

//   return res.data;
// }

// async function getProductById(id) {
//   const res = await client.get(`products/${id}`);

//   return res.data;
// }

// function renderProducts(target, products) {
//   const $target = $(target);
//   $target.empty();

//   products.forEach((p) => {
//     $(
//       [
//         `<div class="card">`,
//         `<img src="${p.thumbnail}" class="card-img-top" alt="${p.title}">`,
//         `<div class="card-body">`,
//         `<h5 class="card-title">${p.title}</h5>`,
//         `<a href="product.html?product-id=${p.id}" class="btn btn-primary">Show detail</a>`,
//         `</div>`,
//         `</div>`,
//       ].join("")
//     ).appendTo($target);
//   });
// }

// // SHOPING CART

// $(function () {
//   getCategories().then(renderCategories);
//   $(".header .search-form").submit(onSearchFormSubmit);
// });
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1) {
      // Thay đổi 50 theo nhu cầu của bạn
      $(".header").addClass("scrolled");
    } else {
      $(".header").removeClass("scrolled");
    }
  });
});
const bagForm = document.querySelector(".badge");
const closeForm = document.querySelector(".close-button");
const closeForm1 = document.querySelector(".close-button1");
const bagForm1 = document.querySelector(".badge1");
const openSearch = document.querySelector(".open-search");
const closeSearch = document.querySelector(".close-icon");
bagForm.addEventListener("click", function () {
  document.querySelector(".bag-form").style.display = "flex";
});
closeForm.addEventListener("click", function () {
  document.querySelector(".bag-form").style.display = "none";
});
closeForm1.addEventListener("click", function () {
  document.querySelector(".bag-form1").style.display = "none";
});
bagForm1.addEventListener("click", function () {
  document.querySelector(".bag-form1").style.display = "flex";
});
openSearch.addEventListener("click", function () {
  document.querySelector(".search").style.display = "flex";
});
closeSearch.addEventListener("click", function () {
  document.querySelector(".search").style.display = "none";
});

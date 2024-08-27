function renderCarousel(product) {
  const $mainCarousel = $(".main-carousel .embla__container");
  const $thumbCarousel = $(".thumb-carousel .embla__container");

  product.images.forEach((image) =>
    $(
      [
        `<div class="embla__slide">`,
        `<div class="product-image">`,
        `<img src="${image}" alt="${product.title}" />`,
        `</div>`,
        `</div>`,
      ].join("")
    )
      .appendTo($mainCarousel)
      .clone()
      .appendTo($thumbCarousel)
  );
}

function setupCarousel() {
  // MAIN
  const mainRootNode = document.querySelector(".main-carousel .embla");
  const mainViewportNode = mainRootNode.querySelector(".embla__viewport");

  // Grab button nodes
  const mainPrevButtonNode = mainRootNode.querySelector(".embla__prev");
  const mainNextButtonNode = mainRootNode.querySelector(".embla__next");

  const mainEmbla = EmblaCarousel(mainViewportNode, {
    dragFree: false,
    align: "start",
  });

  // Add click listeners
  mainPrevButtonNode.addEventListener("click", mainEmbla.scrollPrev, false);
  mainNextButtonNode.addEventListener("click", mainEmbla.scrollNext, false);

  // THUMB
  const thumbRootNode = document.querySelector(".thumb-carousel .embla");
  const thumbViewportNode = thumbRootNode.querySelector(".embla__viewport");

  // Grab button nodes
  const thumbPrevButtonNode = thumbRootNode.querySelector(".embla__prev");
  const thumbNextButtonNode = thumbRootNode.querySelector(".embla__next");

  const thumbEmbla = EmblaCarousel(
    thumbViewportNode,
    {
      dragFree: true,
      align: "start",
    },
    [EmblaCarouselClassNames()]
  );

  // Add click listeners
  thumbPrevButtonNode.addEventListener("click", thumbEmbla.scrollPrev, false);
  thumbNextButtonNode.addEventListener("click", thumbEmbla.scrollNext, false);

  const slidesThumbs = thumbEmbla.slideNodes();

  const toggleThumbBtnsState = () => {
    thumbEmbla.scrollTo(mainEmbla.selectedScrollSnap());
    const previous = mainEmbla.previousScrollSnap();
    const selected = mainEmbla.selectedScrollSnap();
    slidesThumbs[previous].classList.remove("embla-thumbs__slide--selected");
    slidesThumbs[selected].classList.add("embla-thumbs__slide--selected");
  };

  mainEmbla.on("select", toggleThumbBtnsState);
  thumbEmbla.on("init", toggleThumbBtnsState);
}

function renderProductInfo(product) {}

function renderProduct(product) {
  renderCarousel(product);
  setupCarousel();
}

$(function () {
  const searchParams = new URLSearchParams(location.search);

  const productId = searchParams.get("product-id");

  if (productId) {
    getProductById(productId).then(renderProduct);
  } else {
    // Hiển thị lỗi | không có sản phẩm
  }
});

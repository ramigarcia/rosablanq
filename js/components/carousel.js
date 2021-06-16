window.addEventListener("load", () => {
  new Glider(document.querySelector(".carousel__list"), {
    slidesToScroll: 1,
    slidesToShow: 1.2,
    draggable: true,
    dots: ".carousel_indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
  });
});

new Glider(document.querySelector(".carousel__list"), {
  slidesToScroll: 1,
  slidesToShow: 1.3,
  draggable: true,
  dots: ".carousel_indicadores",
  arrows: {
    prev: ".carousel__anterior",
    next: ".carousel__siguiente",
  },
});

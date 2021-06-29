import STRIPE_KEYS from "./components/stripeKeys.js";

const d = document,
  $productos = d.getElementById("productos"),
  $template = d.getElementById("card").content,
  $fragment = d.createDocumentFragment(),
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };

let products, prices;

const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`;

Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((json) => {
    products = json[0].data;
    prices = json[1].data;

    prices.forEach((element) => {
      let productData = products.filter(
        (product) => product.id === element.product
      );

      // console.log(productData);

      $template.querySelector(".card").setAttribute("data-price", element.id);
      $template.querySelector(".card").setAttribute("id", element.id);
      $template.querySelector("img").src = productData[0].images[0];
      $template.querySelector("img").alt = productData[0].name;
      $template.querySelector(".title").innerHTML = `
      <h4 class="title-product-carousel">
      ${productData[0].name}
      </h4>
      `;
      $template.querySelector(".producto").innerHTML = `
        <p class="description-product-carousel">
          ${productData[0].description}
        </p>
      `;
      $template.querySelector(".precio").innerHTML = `
      <span class="price-product-carousel" id="price-product-carousel">
        ${moneyFormat(element.unit_amount_decimal)} ${element.currency}
      </span>
      `;
      let $clone = d.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $productos.appendChild($fragment);
  })
  .catch((err) => {
    let message =
      err.statusText || "Ocurrio un error al conectarse con la API de Stripe";
    $productos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
  });

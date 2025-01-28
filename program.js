fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    productCart(data);
    // console.log(data);
  });

function productCart(product) {
  //console.log(product);
  const root = document.getElementById("root");

  product.forEach((element) => {
    root.innerHTML += htmlCode(element);
  });

  // console.log(htmlCode(product));
  function htmlCode(info) {
    const { category, id, name, price, rating, stock } = info;

    const html = `
    <div>
    <h1>${category}</h1>
    <p>${name}</p>
    <p>${id}</p>
    <p>${price}</p>
    <p>${rating}</p>
    <p>${stock}</p>
     </div>
    `;

    return html;
  }
}

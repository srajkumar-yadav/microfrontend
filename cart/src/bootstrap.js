import faker from "faker";
console.log("in card mount called")
const mount = (el) => {
  const cartText = `You have following number of items in cart ${faker.random.number()}`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV == "development") {
  const el = document.querySelector("#cart-container");
  console.log("sdsd" , el)

  if (el) {
    mount(el);
  }
}

export { mount };

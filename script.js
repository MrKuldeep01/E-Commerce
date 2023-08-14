const items = document.getElementById("box");
const cartValue = document.getElementById('cartValue')

const store = [
  {
    name: "Android",
    author: "sonu",
    img: "images/eCbg.jpg",
    price: "300",
    description: "this is the best book for Android",
  },
  {
    name: "AI",
    author: "sonu",
    img: "images/eCbg.jpg",
    price: "300",
    description: "this is the best book for Android",
  },
  {
    name: "DWM",
    author: "sonu",
    img: "images/eCbg.jpg",
    price: "300",
    description: "this is the best book for Android",
  },
  {
    name: "NP",
    author: "sonu",
    img: "images/eCbg.jpg",
    price: "300",
    description: "this is the best book for Android",
  },
  {
    name: "CD",
    author: "sonu",
    img: "images/eCbg.jpg",
    price: "300",
    description: "this is the best book for Android",
  },

  // ... (other items)
];

const addToCart = (item) => {
  // console.log('Adding to cart:', item.name);
  // Implement your cart logic here

  const cartItem = document.createElement("div");
  cartItem.innerHTML = `
        
            <section id="about-sec">
            <div class="about flex-center max-heigth">
                <div id="intro-1" class="max-heigth flex-center">
                    <h4>It's me</h4>
                    <h3 id="name "> KULDEEP KUMAR <br> <i>with my dear brother</i><br> SONU SAINI</h3>
                    <img src="/images/eCbg2.jpg" alt="it's me">
                    <P >BCA <br>Graduated from MDU </P>
                </div>
                <div id="intro-2" class="max-heigth flex-center">
                    <h4 id="work">dream WEB DEVELOPER</h4>
                </div>
            </div>
            </section>
    `;
    cartValue.appendChild(cartItem)
};

const createItemElement = (item, index) => {
  const box = document.createElement("div");
  box.classList.add("storeItem");
  box.innerHTML = `
        <h2>${item.name}</h2>
        <strong>${item.author}</strong>
        <img src="${item.img}" alt="${item.name}">
        <button class="cartBtn" data-index="${index}">Add to cart</button>
    `;
  return box;
};

store.forEach((item, index) => {
  const itemElement = createItemElement(item, index);
  items.appendChild(itemElement);
});

items.addEventListener("click", (event) => {
  if (event.target.classList.contains("cartBtn")) {
    const itemIndex = parseInt(event.target.getAttribute("data-index"));
    const selectedItem = store[itemIndex];
    addToCart(selectedItem);
  }
});

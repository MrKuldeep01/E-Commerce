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
        
              <section id="selected-product">
            <div class="about flex-center max-heigth">
                <div id="intro-1" class="max-heigth flex-center">
                    <h4>The book for </h4>
                    <h2 id="name ">" ${item.name} "</h2>
                    <img src="${item.img}" alt="it's your book">
                    <P >price : $ ${item.price}<br>${item.description}</P>
                </div>
                <div id="intro-2" class="max-heigth flex-center">
                    <h3 id="work" class="upper-text">author :- " ${item.author} "</h3>
                </div>
            </div>
            </section>
            `;
            
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

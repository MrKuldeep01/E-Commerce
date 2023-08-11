const items = document.getElementById('box')
const cartValue = document.getElementById('cartValue')

const store = [
    {
        name: "Android",
        author: "sonu",
        img: "images/eCbg.jpg",
        price: "300",
        descrption: "this is best book for android"
    },
    {
        name: "AI",
        author: "sonu",
        img: "images/eCbg.jpg",
        price: "300",
        descrption: "this is best book for android"
    }, {
        name: "NP",
        author: "sonu",
        img: "images/eCbg.jpg",
        price: "300",
        descrption: "this is best book for android"
    }, {
        name: "SQA",
        author: "sonu",
        img: "images/eCbg.jpg",
        price: "300",
        descrption: "this is best book for android"
    }, {
        name: "DWN",
        author: "sonu",
        img: "images/eCbg.jpg",
        price: "300",
        descrption: "this is best book for android"
    }, {
        name: "DN",
        author: "sonu",
        img: "images/eCbg.jpg",
        price: "300",
        descrption: "this is best book for android"
    }, {
        name: "CD",
        author: "sonu",
        img: "images/eCbg.jpg",
        price: "300",
        descrption: "this is best book for android"
    },
]
const showItem = (item) => {
    let box = document.createElement('div');
    box.classList.add('storeItem');
    box.innerHTML = `
     <h2>${item.name}</h2>
     <strong> ${item.author}</strong>
     <img src=${item.img} alt={item.name}>
     <button class="cartBtn" data-item =${JSON.stringify(item)}>Add to cart</button>
     `
    items.appendChild(box);
    const cartBtns = document.querySelectorAll('.cartBtn');
    cartBtns.forEach(cartBtn => {
        cartBtn.addEventListener('click', ()=>{showCart(item)});
    })

}
// show cart items
const showCart = (item) => {
    
    const itemData = cartBtn.getAttribute('data-item');
    const data = JSON.parse(itemData);
    showCart(data);

    const cartItem = document.createElement('div')
    cartItem.innerHTML=`
        <h1>${item.name}</h1>
    `

    cartValue.appendChild(cartItem)
}

store.map(showItem);







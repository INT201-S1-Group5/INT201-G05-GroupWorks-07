import product from "./uniqloProduct.js";

const productEle = document.querySelector('#products');

for (let i = 0; i < product.length; i++) {
    let createDiv = document.createElement('div');
    createDiv.className = 'product';
    createDiv.id = product[i].productId;
    let append = productEle.appendChild(createDiv);
    let createP = document.createElement('h2');
    createP.id = 'name';
    createP.textContent = product[i].productname;
    let createT = document.createElement('p');
    createT.textContent = product[i].productType;
    let createS = document.createElement('p');
    createS.textContent = product[i].productSize;
    let createD = document.createElement('p');
    createD.textContent = product[i].productDesc;
    let createPr = document.createElement('p');
    createPr.textContent = product[i].productPrice;
    let createI = document.createElement('img');
    createI.src = product[i].img;
    let createSt = document.createElement('p');
    createSt.textContent = product[i].stock;
    let createI2 = document.createElement('img');
    createI2.className = 'Add';
    createI2.id = product[i].productId;
    createI2.src = './image/icon/addToCart.png';

    append.appendChild(createI)
    append.appendChild(createP);
    append.appendChild(createT);
    append.appendChild(createS);
    append.appendChild(createD);
    append.appendChild(createPr);
    append.appendChild(createSt);
    append.appendChild(createI2);
}

let addCart = document.querySelectorAll(".Add");
let cartNumbers = document.querySelector("#cart");
let createCart = document.createElement("p");
createCart.id = 'a'

cartNumbers.appendChild(createCart);




let amount = 0;
cartNumbers.innerHTML = `${amount}`;
for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener("click", () => {
        alert(`เพิ่ม ${addCart[i].id} 1 ชิ้น`)
        amount += 1;
        cartNumbers.innerHTML = `${amount}`;
    })
}

// let cartEle = document.querySelector('#incart')
let count = 0;
cartNumbers.textContent = count;
let incart = [];
cartNumbers.addEventListener("click", () => {
    let a = [];
    incart = a;
    cartNumbers.textContent = count = 0;
    console.log(incart);
})

export * from './productList.js';
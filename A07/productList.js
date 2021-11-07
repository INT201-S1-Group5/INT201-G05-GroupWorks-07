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

// createCart.id = 'a'

cartNumbers.appendChild(createCart);

// let cartEle = document.querySelector('#incart');
// let amount = 0;
// cartEle.innerHTML = `${amount}`
// for (let i = 0; i < addCart.length; i++) {
//     addCart[i].addEventListener("click", () => {
//         amount += 1;
//         alert(`เพิ่ม ${addCart[i].id} 1 ชิ้น`);
//         cartEle.innerHTML = `${amount}`;
//     })
// }

let amount = 0;
let cartCollect = [];

cartNumbers.addEventListener("click", 
  () => {alert(cartCollect);},true)

cartEle.innerHTML = `${amount}`
for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", () => {
    amount += 1;
    alert(`เพิ่ม ${addCart[i].id} 1 ชิ้น`);
    cartEle.innerHTML = `${amount}`;
    // ยังใช้ไม่ได้ 
    // let addProduct = addCart.id;
    if(cartCollect.id.include(addCart[i].id) == false){
      let cartC = {};
      cartC.id = `${addCart[i].id}`;
      cartC.amount = 1;
      cartCollect.push(cartC);
    } else {
        if(cartCollect.filter(id == addCart[i].id)) {
            cartC.amount++;
        }
    }
    
  },true)
}



export * from './productList.js';
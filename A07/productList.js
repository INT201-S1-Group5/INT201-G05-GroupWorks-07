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
let cartEle = document.querySelector('#incart');

let amount = 0;
let cartCollect = {};

cartEle.innerHTML = `${amount}`;
for (let i = 0; i < addCart.length; i++) {
    addCart[i].addEventListener("click", () => {
        amount += 1;
        alert(`เพิ่ม ${addCart[i].id} 1 ชิ้น`); // แจ้งเตือน alert ว่าสินค้าที่พึ่งกดไปคืออะไร เพื่อให้กดตกลงและเพิ่มลงตะกร้า
        cartEle.innerHTML = `${amount}`; // โชว์เลขตะกร้าหลังกดเพิ่ม
        let addProductID = `${addCart[i].id}`; // กำหนด addProduct เป็นรหัสสินค้า
        if ((`${addCart[i].id}` in cartCollect) == false) { // พยายามให้เช็กว่ามีรหัสสินค้าใน cartCollect แล้วรึยัง [กรณีไม่มี]
            let cartC = {}; // สร้าง object สำหรับเก็บสินค้าแต่ละรหัส
            cartC.key = addProductID; // เก็บรหัสสินค้าเป็น key
            cartC.value = 1; // เพิ่มสินค้าครั้งแรกให้แสดงเท่ากับ 1 ชิ้นเลย
            Object.assign(cartCollect, cartC); // ส่ง cartC เข้าไปเพิ่มใน cartCollect
            for (let i = 0; i < addCart.length; i++) {
                localStorage.setItem('productLists', JSON.stringify(cartCollect)); // กำหนด productLists เป็น key และเก็บ cartCollect ไว้เป็น value
            }
        } else {
            if (cartCollect.cartC.key == `${addCart[i].id}`) {
                cartC.value += 1;
            }
        }
    }, true)
}

// เมื่อกดตะกร้าหลังเพิ่มสินค้าแล้ว จะแจ้งเตือน alert ว่าสินค้าล่าสุดที่เพิ่มคืออะไร
cartNumbers.addEventListener("click", () => {
    alert(localStorage.getItem('productLists'));
}, true);

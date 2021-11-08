const search = document.querySelector("#search");

let popSearch = true;

search.addEventListener("click", () => {
    popSearch = !popSearch; // ตั้งค่า popSearch ให้มีค่าเป็น ture เพื่อทำขั้นตอนต่อไปตั้งค่า popSearch ให้มีค่าเป็น ture เพื่อทำขั้นตอนต่อไป
    if (popSearch) {
        document.querySelector(
            "#searchBar" //จะส่ง string นี้ไปในไฟล์ html เพื่อแสดงช่อง search text box 
        ).innerHTML += `<input type="text" style="margin:10px;" class="form-control mb-2" placeholder="Search..." id="form">`;
        let log = document.getElementById("form");
        log.addEventListener("keyup", () => { //ตรวจจับการพิมพ์ของ user //ตรวจจับการพิมพ์ของ user
            let input = document.getElementById("form");
            let filter = input.value.toLowerCase(); //จะแปลงข้อความ string ให้อยู่ในรูปแบบของตัวอักษรพิมพ์เล็ก
            let divID = document.getElementById("products");
            let divClass = divID.getElementsByClassName("product");
            for (let i = 0; i < divClass.length; i++) { //วนลูปเข้าตัว product 
                let txtValue = divClass[i].textContent;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    divClass[i].style.display = ""; //ทำการแสดงผลในหน้า html
                } else {
                    divClass[i].style.display = "none"; //แท็กที่ไม่เข้าเงื่อนไขจะไม่ปรากฏบนหน้าเว็บเลย (แม้ว่าจะยังสามารถโต้ตอบกับมันผ่านทาง DOM)
                }
            }
        });
    } else document.querySelector("#searchBar").innerHTML = ""; //ถ้า False จะไม่แสดงผลหรือข้อความ
});

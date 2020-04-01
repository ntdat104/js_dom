/*
* Thay đổi clas (Thêm và Xóa)
* Thay đổi attribute (Sửa)
* Thêm mới một attribute cho một phần tử
* Bắt được sự kiện click chuột của người dùng...
* Thêm một phần tử mới gán vào trong cấu trúc HTML
* ...

* Phải xác dịnh được mình áp dụng công việc trên cho phần tử nào?
* => Làm hiệu ứng động cho phần tử đó.
*/

//TODO 1. Học cách truy xuất phần tử bằng Javascript
//* - Truy xuất bằng id của phần tử => trả về 1 phần tử
//* - Truy xuất bằng class của phần tử => trả về nhiều phần tử, vì nó có class giống nhau.
//* - Truy xuất bằng tên thẻ a, body, ... của phần tử
//* - Truy xuất bằng selector của CSS



//* - Truy xuất bằng id của phần tử
var demoId = document.getElementById("demo");
console.log("demoId = ", demoId);



//* - Truy xuất bằng class của phần tử
//! Lưu ý: HTMLCollectionOf không phải là Array. Chỉ gần giống một dạng Array, có thể truy xuất vào phần tử bằng index và có length.
//TODO Nếu muốn sử dụng những method, nhưng function giành riêng cho Array thì mình phải "ép kiểu" nó về Array.
//* => Dùng cú pháp: Array.from(HTMLCollectionOf)

var demoClass = document.getElementsByClassName("demo");
console.log("demoClass = ", demoClass);

var demoClassArray = Array.from(demoClass);
demoClassArray.push(123);
console.log(demoClassArray);
// console.log(demoClass[0]);
// console.log(demoClass[1]);
// console.log("demoClass.length = ", demoClass.length);

for(var index = 0; index < demoClass.length; index++){
    console.log("Phần tử thứ " + index, demoClass[index]);
}


//* - Truy xuất bằng tên thẻ a, body, ... của phần tử
var div = document.getElementsByTagName("div");
console.log("div = ", div);

var h1 = document.getElementsByTagName("h1");
console.log("h1 = ", h1);
console.log("h1[0] = ", h1[0]);
//* Truy xuất phần tử bằng Selector của CSS
//* - querySelector("#demo") => Trả về cho mình một phần tử đầu tiên tìm thấy được mà match với Selector.
//* - querySelectorAll(".demo") => Trả về cho mình nhiều phần tử mà match với selector truyền vào => Không phải Array => Ép kiểu Array.from().


var demoId = document.querySelector("#demo");
console.log(demoId);

//* Trả về class .demo đầu tiên nó tìm thấy.
console.log(document.querySelector(".demo"));

var demoClass = document.querySelectorAll(".demo");
console.log(demoClass);
console.log(Array.from(demoClass));



var btnModal = document.querySelector("[data-toggle='modal']");
console.log(btnModal);




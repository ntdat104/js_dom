var img = "https://lh3.googleusercontent.com/proxy/rEIZWnsmI9n_2KH2b0litksnWHsvMj4ahwQM8AHA3c5hPFkrxj3LRQyaHGRZtNxFdGPM-sbwCeZEZFfg9QjZdSJj74m8u1LnoOEPByG9HHx_";


var image = document.querySelector(".image");

//* Thay đổi thuộc tính có sẵn.
//* GET - lấy giữ liệu, thông tin. SET - thiết lập dữ liệu, thông tin mới.

//* SET
image.setAttribute("src", img);
image.setAttribute("alt", "This is a image");
image.setAttribute("width", 300);
image.setAttribute("title", "Tiêu đề của hình ảnh");

//* GET
var elementDataTitle = document.querySelector("[data-title]");

console.log(elementDataTitle.getAttribute("data-title"));
console.log(elementDataTitle);
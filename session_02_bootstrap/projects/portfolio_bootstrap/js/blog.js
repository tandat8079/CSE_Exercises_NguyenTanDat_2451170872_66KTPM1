// alert('Hello');
console.log("This is java script file");
console.log(document.getElementById("message").textContent);

var pMessage = document.getElementById("message");
let pMessage = document.getElementById("Message");
console.log(pMessage.textContent);

pMessage.textContent = "Xin  chao TLU";

let pMessages = document.getElementsByTagName("p");
console.log(pMessage[1].textContent);

let pClassesn = document.getElementsByClassName("message");
console.log(pClasses[0].textContent);

// querry Selector
let pSelector = document.querySelector(".message");
console.log(pSelector.textContent);

// querrySelectorALl

let pSelectorAll= document.querySelectorAll(".message");
console.log(pSelectorAll[0].textContent);
// qui trình trình3 bước
// B1: những gì sẽ tham gia khi tôi ấn nút click
let btnClick = ducument.getElementById("clickNow");
let pMessage = document.getElementById("message");
let parent = document.scrollingElement("parent")



// B2: Sự kiện gì sẽ xảy ra khi tôi ấn sự kiện này
btn.addEventLisstener("click", () => {
    let newElement = document.createElement("p");
    newElement.textContent = "Ban da nhan nut click now";
    parent.appendChild(newElement);
    parent.style.backgroundColor = "yellow";    

    parent.removeChild(child);
});

// B3: hành động sẽ xảy ra khi sự kiện click xảy ra: thay đổi màu nền, nội dung của thằng 
// function hamgido(){
//     pMessage.style.background = "yellow"
//     pMessage.textContent = "Ban da nhan nut click now"
// }



let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

var myImage = document.querySelector("img");
myImage.onclick = function () {
    var imgSrcs = ["images/firefox-icon.png", "images/edge-icon.png"];
    var mySrc = myImage.getAttribute("src");
    if (mySrc === imgSrcs[0]) {
        myImage.setAttribute("src", imgSrcs[1]);
    } else {
        myImage.setAttribute("src", imgSrcs[0]);
    }
};

var myButton = document.querySelector("button");
myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("请输入你的名字：");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla酷毙了，" + myName;
    }
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla酷毙了，" + storedName;
}
myButton.onclick = function () {
    setUserName();
};

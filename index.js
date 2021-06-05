function clicker() {
    console.log("you click to image")
}
function generateImage(image) {
    return `<img class="round" src=${image} onclick="clicker()"/>`
}
let imgURL = "https://estnn.com/wp-content/uploads/2019/11/Nigma-Esports-300x300.jpg"
document.querySelector("body").insertAdjacentHTML("beforeend", generateImage(imgURL))

console.log("kệ")

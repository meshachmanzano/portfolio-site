
const blur = document.querySelector(".blur-zone")
const menuswitch = document.querySelector(".menu-switch")

menuswitch.addEventListener("change", function () {
    if (menuswitch.checked)
        blur.style.display = "block"
    else
        blur.style.display = "none"
})

const hobbies = [...document.querySelectorAll("h1[data-hobby]")]
hobbies.map(function (e) {
    e.addEventListener("click", function () {
        (e.nextElementSibling).classList.toggle("show-section")
    })

})


function getRandomImage(images) {
    return images[Math.floor(Math.random() * images.length)]
}

function showOnceAndNeverAgain(selector) {
    if (!window.localStorage.getItem(selector)) {
        document.querySelector(selector).style.display = "flex"
        window.localStorage.setItem(selector, true)
        setTimeout(function(){
            document.querySelector(selector).style.display = "none"
        }, 1000)
    }

}
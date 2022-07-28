
const blur = document.querySelector(".blur-zone")
const menuswitch = document.querySelector(".menu-switch")

menuswitch.addEventListener("change", function () {
    if (menuswitch.checked)
        blur.style.display = "block"
    else
        blur.style.display = "none"
})

const hobbies=[...document.querySelectorAll("h1[data-hobby]")]
hobbies.map(function (e) {
    e.addEventListener("click", function () {
        (e.nextElementSibling) .classList.toggle("show-section")
    })
    
})


var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}
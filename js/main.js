var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var body = this.nextElementSibling;
        body.classList.toggle("faq-body-show")
        if (body.classList.contains("faq-body-show"))
            body.classList.remove("faq-body-hide")
        else body.classList.add("faq-body-hide")
    });
}
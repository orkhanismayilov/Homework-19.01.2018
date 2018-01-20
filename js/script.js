var cities = document.querySelectorAll(".city");

for (var i = 0; i < cities.length; i++) {
    cities[i].addEventListener("click", function () {
        var icons = this.querySelector("i");
        if (icons.classList.contains("fa-minus")) {
            icons.classList.remove("fa-minus");
            icons.classList.add("fa-plus");
        } else if (icons.classList.contains("fa-plus")) {
            icons.classList.remove("fa-plus");
            icons.classList.add("fa-minus");
        }
    })
}
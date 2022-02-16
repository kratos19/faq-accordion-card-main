const listItems = document.querySelectorAll(".faq-list-item");

listItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
        listItems.forEach(function (item2) {
            if (item === item2) {
                return false;
            }
            item2.classList.remove("active");
        });
        this.classList.toggle("active");
    });
});

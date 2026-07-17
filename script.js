function openBook(button){

    const row = button.closest(".book-row");

    const book = row.querySelector(".book");

    const panel = row.querySelector(".lesson-panel");

    book.classList.toggle("active");

    panel.classList.toggle("show");

}

function openTopic(button) {

const panel = button.parentElement.nextElementSibling;

if (panel.style.display === "block") {
panel.style.display = "none";
} else {
panel.style.display = "block";
}

}

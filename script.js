function openBook(button){

    const row = button.closest(".book-row");

    const book = row.querySelector(".book");

    const panel = row.querySelector(".lesson-panel");

    book.classList.toggle("active");

    panel.classList.toggle("show");

}

function openTopic(button){

    let panel = button.parentElement.nextElementSibling;

    panel.classList.toggle("open");

}

function toggleLesson(){

    const lesson = document.getElementById("lesson1");

    lesson.classList.toggle("show");

}

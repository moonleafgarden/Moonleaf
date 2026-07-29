function openBook(button){

    const row = button.closest(".book-row");

    const book = row.querySelector(".book");

    const panel = row.querySelector(".lesson-panel");

    book.classList.toggle("active");

    panel.classList.toggle("show");
}


function openLesson(id) {

    const lesson = vocabularyLessons[id];

    const container = document.getElementById("lesson-container");

    if (!lesson) {
        container.innerHTML = "<h2>Lesson not found</h2>";
        return;
    }

    container.innerHTML = `
        <div class="lesson-content show">
            <h2>${lesson.title}</h2>

            ${lesson.description}

            <button onclick="finishChapter(${id})">
                🌸 Finish Chapter
            </button>
        </div>
    `;
}

function finishChapter(id){
    alert("Chapter " + id + " completed!");
}

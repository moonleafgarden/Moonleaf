// =====================================
// Moonleaf
// =====================================

// ---------- Open Book ----------

function openBook(button) {

    const row = button.closest(".book-row");

    const book = row.querySelector(".book");

    const panel = row.querySelector(".lesson-panel");

    book.classList.toggle("active");

    panel.classList.toggle("show");

}

// ---------- Open Lesson ----------

function openLesson(id) {

    const container = document.getElementById("lesson-container");

    // Close the lesson if it is already open
    if (container.dataset.lessonId == id) {

        container.innerHTML = "";
        container.dataset.lessonId = "";

        return;

    }

    container.dataset.lessonId = id;

    const lesson = vocabularyLessons[id];

    if (!lesson) {

        container.innerHTML = `
            <h2>Lesson not found.</h2>
        `;

        return;

    }

function openLesson(id) {

    const container = document.getElementById("lesson-container");

    // Если этот урок уже открыт — закрываем
    if (container.dataset.lesson == id) {

        container.innerHTML = "";
        container.dataset.lesson = "";

        return;
    }

    const lesson = vocabularyLessons[id];

    if (!lesson) {

        container.innerHTML = "<h2>❌ Lesson not found</h2>";
        return;

    }

    container.dataset.lesson = id;

    let vocabularyRows = "";

    lesson.vocabulary.forEach(word => {

        vocabularyRows += `
        <tr>
            <td>${word.word}</td>
            <td>${word.meaning}</td>
            <td>${word.example}</td>
        </tr>
        `;

    });

    container.innerHTML = `
<div class="lesson-content show">

<h2>${lesson.title}</h2>

${lesson.description}

<table>
<tr>
<th>Word</th>
<th>Meaning</th>
<th>Example</th>
</tr>

${vocabularyRows}

</table>

</div>
`;

    container.scrollIntoView({
        behavior: "smooth"
    });

}
}
// ---------- Finish Chapter ----------

function finishChapter(id) {

    localStorage.setItem(`VocabularyChapter${id}`, "completed");

    alert("🎉 Chapter Completed!");

    unlockNextChapter(id);

}

// ---------- Unlock Next ----------

function unlockNextChapter(id) {

    const chapters = document.querySelectorAll(".chapter-card");

    if (chapters[id]) {

        chapters[id].classList.remove("locked");

        const text = chapters[id].querySelector(".locked-text");

        if (text) {

            text.className = "opened-text";

            text.innerHTML = "📖 Opened";

        }

    }

}

// ---------- Load Progress ----------

window.onload = function () {

    const chapters = document.querySelectorAll(".chapter-card");

    chapters.forEach((chapter, index) => {

        const completed = localStorage.getItem(`VocabularyChapter${index}`);

        if (completed === "completed") {

            const text = chapter.querySelector(".locked-text");

            if (text) {

                text.className = "opened-text";

                text.innerHTML = "📖 Opened";

            }

        }

    });

};

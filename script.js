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

    const lesson = vocabularyLessons[id];

    const container = document.getElementById("lesson-container");

    if (!lesson) {

        container.innerHTML = `
            <h2>❌ Lesson not found</h2>
        `;

        return;
    }

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

    let tips = "";

    lesson.tips.forEach(tip => {

        tips += `<p>🌱 ${tip}</p>`;

    });

    let mistakes = "";

    lesson.mistakes.forEach(item => {

        mistakes += `
        <li>
            ❌ ${item.wrong}<br>
            ✅ ${item.correct}
        </li>
        `;

    });

    let summary = "";

    lesson.summary.forEach(item => {

        summary += `<p>${item}</p>`;

    });

    container.innerHTML = `

<div class="lesson-content show">

<h2>${lesson.title}</h2>

${lesson.description}

<hr>

<h3>📚 Vocabulary</h3>

<table>

<tr>
<th>Word</th>
<th>Meaning</th>
<th>Example</th>
</tr>

${vocabularyRows}

</table>

<hr>

<h3>💬 Dialogue</h3>

<div class="dialogue-box">

${lesson.dialogue}

</div>

<hr>

<h3>💡 Tips</h3>

<div class="tip-box">

${tips}

</div>

<hr>

<h3>⚠ Common Mistakes</h3>

<ul>

${mistakes}

</ul>

<hr>

<h3>📝 Summary</h3>

<div class="summary-box">

${summary}

</div>

<br>

<button class="finish-btn" onclick="finishChapter(${id})">

🌸 Finish Chapter

</button>

</div>

`;

    container.scrollIntoView({
        behavior: "smooth"
    });

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

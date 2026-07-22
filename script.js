function openBook(button){

    const row = button.closest(".book-row");

    const book = row.querySelector(".book");

    const panel = row.querySelector(".lesson-panel");

    book.classList.toggle("active");

    panel.classList.toggle("show");

}

// =======================================
// Moonleaf Vocabulary Script
// =======================================

// Open lesson
function openLesson(id) {

    const lesson = vocabularyLessons[id];
    const container = document.getElementById("lesson-container");

    if (!lesson) {
        container.innerHTML = "<h2>Lesson not found.</h2>";
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

        tips += `<p>✅ ${tip}</p>`;

    });

    let mistakes = "";

    lesson.mistakes.forEach(mistake => {

        mistakes += `
        <li>❌ ${mistake.wrong}</li>
        <li>✅ ${mistake.correct}</li>
        <br>
        `;

    });

    let summary = "";

    lesson.summary.forEach(point => {

        summary += `<p>${point}</p>`;

    });

    container.innerHTML = `

    <div class="lesson-content">

        <h2>${lesson.title}</h2>

        <p class="lesson-intro">
            ${lesson.description}
        </p>

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

        <h3>💬 Example Dialogue</h3>

        ${lesson.dialogue}

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

        <div class="lesson-buttons">

            <button
                class="finish-btn"
                onclick="finishChapter(${id})">

                🌸 Finish Chapter

            </button>

        </div>

    </div>

    `;

}

// =======================================
// Finish Chapter
// =======================================

function finishChapter(id) {

    localStorage.setItem(`VocabularyChapter${id}`, "completed");

    alert("🎉 Chapter Completed!");

}

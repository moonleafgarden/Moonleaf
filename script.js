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

    alert("1");

    const lesson = vocabularyLessons[id];

    alert("2");

    const container = document.getElementById("lesson-container");

    alert("3");


    if (!lesson) {
        container.innerHTML = `
        <h2>❌ Lesson not found.</h2>
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

        tips += `
        <p>🌱 ${tip}</p>
        `;

    });



    let mistakes = "";

    lesson.mistakes.forEach(item => {

        mistakes += `
        <li>
            ❌ ${item.wrong}
            <br>
            ✅ ${item.correct}
        </li>
        `;

    });



    let summary = "";

    lesson.summary.forEach(item => {

        summary += `
        <p>${item}</p>
        `;

    });



    container.innerHTML = `

    <div class="lesson-content">


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


        <button 
        class="finish-btn"
        onclick="finishChapter(${id})">

        🌸 Finish Chapter

        </button>


    </div>

    `;



}





// Finish Chapter

function finishChapter(id) {

    localStorage.setItem(
        `VocabularyChapter${id}`,
        "completed"
    );


    unlockNextChapter(id);


    alert("🎉 Chapter Completed!");

}


    // =======================================
// Check completed chapters
// =======================================

function checkProgress(id) {

    const completed = localStorage.getItem(
        `VocabularyChapter${id}`
    );

    if (completed === "completed") {

        return true;

    }

    return false;

}


// =======================================
// Unlock next chapter
// =======================================

function unlockNextChapter(id) {

    const nextChapter = document.querySelector(
        `.chapter-card:nth-child(${id + 1})`
    );


    if (nextChapter) {

        nextChapter.classList.remove("locked");

        const lock = nextChapter.querySelector(".locked-text");

        if (lock) {

            lock.innerHTML = "📖 Opened";

        }

    }

}


alert("script.js loaded");

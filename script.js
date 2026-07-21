function openBook(button){

    const row = button.closest(".book-row");

    const book = row.querySelector(".book");

    const panel = row.querySelector(".lesson-panel");

    book.classList.toggle("active");

    panel.classList.toggle("show");

}

// ========================================
// Moonleaf Script
// Part 1
// ========================================

const chapterList = document.getElementById("chapter-list");
const lessonContainer = document.getElementById("lesson-container");

// ===============================
// Create Chapters
// ===============================

function createChapters() {

    if (!chapterList) return;

    chapterList.innerHTML = "";

    chapters.forEach(chapter => {

        const card = document.createElement("div");

        card.className = "chapter-card";

        card.innerHTML = `
            <h3>📖 Chapter ${chapter.id}</h3>

            <p>${chapter.title}</p>

            <span class="${chapter.status === "opened" ? "opened-text" : "locked-text"}">
                ${chapter.status === "opened" ? "📖 Opened" : "🔒 Locked"}
            </span>
        `;

        if (chapter.status === "opened") {

            card.addEventListener("click", () => {

                openLesson(chapter.id);

            });

        }

        chapterList.appendChild(card);

    });

}

// ===============================
// Open Lesson
// ===============================

function openLesson(id){

    const lesson = lessons[id];

    if(!lesson){

        lessonContainer.innerHTML = `
            <h2>Lesson not found</h2>
        `;

        return;

    }

    lessonContainer.innerHTML = `

        <div class="lesson-content show">

            <h2>${lesson.title}</h2>

            ${lesson.intro}

            <hr>

            ${lesson.theory}

            <hr>

            ${lesson.examples}

            <hr>

            ${lesson.tips}

            <hr>

            ${lesson.mistakes}

            <hr>

            ${lesson.summary}

            <hr>

            <div id="practice"></div>

            <br>

            <div class="lesson-buttons">

                <button
                    class="check-btn"
                    onclick="checkAnswers()">

                    ✅ Check Answers

                </button>

                <button
class="finish-btn"
id="finish-btn"
onclick="finishChapter()"
disabled>

🌸 Finish Chapter

</button>

            </div>

            <p id="practice-result"></p>

        </div>

    `;

    createPractice(id);

}

// ===============================
// Start
// ===============================

createChapters();


// ===============================
// Create Practice
// ===============================

function createPractice(id){

    const lesson = lessons[id];

    const practice = document.getElementById("practice");

    if(!lesson.practice || lesson.practice.length === 0){

        practice.innerHTML = "<p>No practice yet.</p>";

        return;

    }

    let html = "<h3>🎯 Practice</h3>";

    lesson.practice.forEach((question,index)=>{

        html += `

        <div class="practice-question">

            <p>${index+1}. ${question.question}</p>

            <div
                class="answer-group"
                data-answer="${question.correct}">

        `;

        question.answers.forEach((answer,i)=>{

            html += `

                <button
                    class="answer-btn"
                    onclick="selectAnswer(this)">

                    ${answer}

                </button>

            `;

        });

        html += `

            </div>

            <br>

        </div>

        `;

    });

    practice.innerHTML = html;

}

// ===============================
// Select Answer
// ===============================

function selectAnswer(button){

    const group = button.parentElement;

    group.querySelectorAll(".answer-btn").forEach(btn=>{

        btn.classList.remove("selected");

    });

    button.classList.add("selected");

}

// ===============================
// Check Answers
// ===============================

function checkAnswers(){

    let score = 0;

    const groups = document.querySelectorAll(".answer-group");

    groups.forEach(group=>{

        const correct =
        Number(group.dataset.answer);

        const buttons =
        group.querySelectorAll(".answer-btn");

        let selected = -1;

        buttons.forEach((button,index)=>{

            button.style.background = "";
            button.style.color = "";

            if(button.classList.contains("selected")){

                selected = index;

            }

        });

        if(selected === correct){

            score++;

            buttons[selected].style.background="#8FCB81";
            buttons[selected].style.color="white";

        }

        else if(selected !== -1){

            buttons[selected].style.background="#E67C73";
            buttons[selected].style.color="white";

            buttons[correct].style.background="#8FCB81";
            buttons[correct].style.color="white";

        }

    });

    const result =
    document.getElementById("practice-result");

    result.innerHTML =
    `⭐ Score: ${score}/${groups.length}`;

    if(score === groups.length){

        result.innerHTML +=
        "<br>🌸 +10 Peonies";

        document
        .getElementById("finish-btn")
        .disabled = false;

    }

}

// ===============================
// Finish Chapter
// ===============================

function finishChapter(){

    localStorage.setItem(
        "chapter1",
        "completed"
    );

    alert("🎉 Chapter I Completed!");

}

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


document.addEventListener("click", function(e){

    if(!e.target.classList.contains("answer-btn")) return;

    const group = e.target.parentElement;

    group.querySelectorAll(".answer-btn").forEach(btn=>{

        btn.classList.remove("selected");

    });

    e.target.classList.add("selected");

});

console.log("Script loaded!");

document.querySelectorAll(".answer-btn").forEach(button => {

    button.onclick = function(){

        console.log("Clicked:", button.textContent);

    };

});


function finishChapter(){

    localStorage.setItem("A1_Chapter1", "completed");

    alert("🎉 Chapter I Completed!");

    location.reload();

}

function checkAnswers(){

    let score = 0;

    const groups = document.querySelectorAll(".answer-group");

    groups.forEach(group=>{

        const correct = group.dataset.answer;

        const selected =
        group.querySelector(".selected");

        group.querySelectorAll(".answer-btn").forEach(btn=>{

            btn.style.background = "";
            btn.style.color = "";

        });

        if(selected){

            if(selected.textContent === correct){

                score++;

                selected.style.background = "#8FCB81";
                selected.style.color = "white";

            }

            else{

                selected.style.background = "#E67C73";
                selected.style.color = "white";

            }

        }

    });

    const result =
    document.getElementById("practice-result");

    result.innerHTML =
    `⭐ Score: ${score} / ${groups.length}`;

    if(score >= 4){

        result.innerHTML +=
        "<br>🌸 +10 Peonies";

        document
        .getElementById("finish-btn")
        .disabled = false;

    }

}


function loadProgress(){

    const chapter1 = localStorage.getItem("A1_Chapter1");

    if(chapter1 === "completed"){

        document.querySelector(".opened-text").textContent =
        "✅ Completed";

        const chapter2 =
        document.querySelectorAll(".chapter-card")[1];

        chapter2.innerHTML = `

        <h3>📖 Chapter II</h3>

        <span class="opened-text">
        📖 Opened
        </span>

        `;

    }

}

loadProgress();

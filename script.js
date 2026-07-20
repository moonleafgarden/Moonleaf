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

    alert("🎉 Chapter I Completed!");

}

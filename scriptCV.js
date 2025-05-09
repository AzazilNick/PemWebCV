$(document).ready(function () {
    $("#darkModeToggle").click(function () {
        $("body").toggleClass("dark-mode");
        $("h2").toggleClass("dark-mode-text");
        $("section").toggleClass("dark-mode-section");
    });

    $("#addTodo").click(function () {
        const todoText = $("#todoInput").val();
        if (todoText) {
            $("#todoList").append(
                `<li>
                    ${todoText}
                    <button class="deleteTodo">×</button>
                </li>`
            );
            $("#todoInput").val("");
        }
    });

    $(document).on("click", ".deleteTodo", function () {
        $(this).parent().remove();
        });

    $("#submitQuiz").click(function () {
        const answer = $('input[name="q1"]:checked').val();
        $("#quizResult").text(answer === "b" ? "Benar! 🎉" : "Salah, coba lagi!");
    });

    $("#celsius").on("input", function () {
        const celsius = $(this).val();
        $("#fahrenheit").val((celsius * 9) / 5 + 32);
    });

    $("#fahrenheit").on("input", function () {
        const fahrenheit = $(this).val();
        $("#celsius").val(((fahrenheit - 32) * 5) / 9);
    });

  // Accordion Effect
    $(".education-experience h2").click(function () {
        $(this).next().slideToggle();
    });

  // Rating System
    $(".skills").append(
        '<div class="rating">Kemampuan: <span class="star">☆</span><span class="star">☆</span><span class="star">☆</span><span class="star">☆</span><span class="star">☆</span></div>'
    );

    $(".star")
        .hover(
        function () {$(this).text("★").prevAll().text("★");},
        function () {$(this).text("☆").nextAll().text("☆");}
    ).click(function () {
        const rating = $(this).index() + 1;
        alert(`Terima kasih! Rating diberikan: ${rating} bintang`);
    });
});

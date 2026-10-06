// Mark study tasks as completed

var taskCheckboxes =
    document.querySelectorAll(".task-checkbox");


for (var i = 0; i < taskCheckboxes.length; i++) {

    taskCheckboxes[i].addEventListener(
        "change",
        function() {

            var task =
                this.parentElement.parentElement;

            var message =
                task.querySelector(".task-message");


            if (this.checked) {

                task.classList.add("completed");

                message.textContent = "Completed";

            } else {

                task.classList.remove("completed");

                message.textContent = "";

            }

        }
    );

}


// Simple study-time calculator

var studyForm =
    document.getElementById("studyForm");


if (studyForm) {

    studyForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            var studyHours =
                document.getElementById(
                    "studyHours"
                ).value;


            var breakTime =
                document.getElementById(
                    "breakTime"
                ).value;


            var result =
                document.getElementById(
                    "calculatorResult"
                );


            result.textContent =
                "Your planned study time is " +
                studyHours +
                " hours with a " +
                breakTime +
                " minute break.";

        }
    );

}
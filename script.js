function addTask() {
    var taskText = document.getElementById("newTask").value;

    if (taskText.trim() !== "") {
        var taskList = document.getElementById("taskList");

        var taskDiv = document.createElement("div");
        taskDiv.className = "task";

        var taskTextDiv = document.createElement("div");
        taskTextDiv.textContent = taskText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        deleteButton.onclick = function() {
            taskDiv.remove();
        };

        taskDiv.appendChild(taskTextDiv);
        taskDiv.appendChild(deleteButton);
        taskList.appendChild(taskDiv);

        document.getElementById("newTask").value = "";
    }
}
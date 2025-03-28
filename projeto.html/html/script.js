document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');

        li.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Concluir';
        completeButton.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(completeButton);
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Por favor, insira uma tarefa.');
    }
});
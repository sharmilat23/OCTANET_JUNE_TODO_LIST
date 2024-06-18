document.getElementById('add-task').addEventListener('click', function() {
    const taskName = document.getElementById('task-name').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const category = document.getElementById('category').value;

    if (taskName === '') {
        alert('Task name cannot be empty');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.classList.add(priority);

    taskItem.innerHTML = `
        <span>${taskName} (Due: ${dueDate}, Category: ${category}, Priority: ${priority})</span>
        <div class="task-actions">
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);

    document.getElementById('task-name').value = '';
    document.getElementById('due-date').value = '';
    document.getElementById('priority').value = 'low';
    document.getElementById('category').value = '';

    taskItem.querySelector('.complete').addEventListener('click', function() {
        taskItem.classList.toggle('complete');
    });

    taskItem.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
});
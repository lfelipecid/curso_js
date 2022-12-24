const inputTask = document.querySelector('#inputTask')
const btnSend = document.querySelector('#send')
const tasks = document.querySelector('.tasks')

/*
    Capture Actions
*/
inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) createTask(inputTask.value)
})

btnSend.addEventListener('click', function (e) {
    createTask(inputTask.value)
})

document.addEventListener('click', function (e) {
    if (e.target.classList == 'apagar') {
        e.target.parentElement.remove()
        saveTask()
    }
})

// Create Task
function createTask(task) {
    if (!task) return
    addLi(task)
    saveTask()
    clearInput()
}

// Create LI from TASK
function addLi(text) {
    const li = document.createElement('li')
    li.innerText = text + ' '
    li.appendChild(createDel())
    tasks.appendChild(li)
}

// Limpa Input
function clearInput() {
    inputTask.value = ''
    inputTask.focus()
}

// Create Del Btn
function createDel() {
    const delBtn = document.createElement('button')
    delBtn.innerText = 'Apagar'
    delBtn.setAttribute('class', 'apagar')
    delBtn.setAttribute('title', 'Apagar esta tarefa')
    return delBtn
}

// Export Tasks
function saveTask() {
    const alltasks = tasks.querySelectorAll('li')
    const listTasks = []

    for (let t of alltasks) {
        let task = t.innerText.replace('Apagar', '').trim()
        listTasks.push(task)
    }

    const tasksJson = JSON.stringify(listTasks)
    localStorage.setItem('tasks', tasksJson)
}

// Import Tasks
function importTasks() {
    const tasks = localStorage.getItem('tasks')
    
    const taskList = JSON.parse(tasks)
    for (let t of taskList) {
        createTask(t)
    }
}

importTasks()
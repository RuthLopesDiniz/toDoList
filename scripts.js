const button = document.querySelector('.buttum-add-task')
const input = document.querySelector('.input-task')
const completList = document.querySelector('.list')

let myListItens = []

function addNewTask(){
    myListItens.push(input.value)

    input.value = ''
    showTasks()
}

function showTasks(task){
    let newLi = ''

myListItens.forEach((task) => {
    newLi = newLi + `
            <li class="task">
                <img src="./img/checked.png" alt="check-na-tarefa">
                <p>${task}</p>
                <img src="./img/trash.png" alt="tarefa-para-o-lixo">
            </li>
            `
})
completList.innerHTML = newLi
}


button.addEventListener('click', addNewTask)
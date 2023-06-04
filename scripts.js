const button = document.querySelector('.buttum-add-task')//mapear elemento
const input = document.querySelector('.input-task')
const completList = document.querySelector('.list')
 

let myListItens = []

function addNewTask(){
    myListItens.push({
        task: input.value,
        finished: false,
    })

    input.value = ''
    showTasks()
}

function showTasks(){
    let newLi = ''


myListItens.forEach((item, index) => {//percorre item por item da lista
    newLi = newLi + `
            <li class="task ${item.finished && 'done'}">
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="finishTask(${index})">
                <p>${item.task}</p>
                <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deletItem(${index})">
            </li>
            `
})

completList.innerHTML = newLi
}


function finishTask(index){
    myListItens[index].finished = !myListItens[index].finished
    showTasks()
}

function deletItem(index){
    myListItens.splice(index, 1)
    showTasks()
}


button.addEventListener('click', addNewTask)
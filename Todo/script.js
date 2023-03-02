



document.querySelector('#push').onclick = function () {


    if (document.querySelector('#newtask input').value.length == 0) {
        alert('Palase enter Task')
    } else {

        document.querySelector("#tasks").innerHTML
            += `
        <div class="task">
        <span id="taskname">
        ${document.querySelector('#newtask input').value}
        </span>
        <button class="delete">
        <i class="fa-sharp fa-solid fa-trash"></i>
        </button>

        </div>
        `;


        let currenTask = document.querySelectorAll(".delete");
        for (let i = 0; i < currenTask.length; i++) {
            currenTask[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }


    var tasks = document.querySelectorAll('.task');

    for (let i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
            this.classList.toggle('complited')
        }
    }
    document.querySelector('#newtask input').value = '';
}
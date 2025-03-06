document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length ==0){
        alert("Please enter a Task")
    }
    else{
        document.querySelector('#task').innerHTML +=`
        <div class="task">
            <span id ="taskname">
            ${document.querySelector('#newtask input').value}
            </span>

            <button class="delete">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
        </div>
        `;
    }
}
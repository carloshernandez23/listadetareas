// Seleccionar elementos a usar

const taskInput = document.querySelector('#task-input');
const form = document.querySelector('.container');
const list = document.querySelector('#lista');
const btn = document.querySelector('.btn-add');
const deletedCount = document.querySelector('#deleted-count');
const completedCount = document.querySelector('#completed-count');
const pendingCount = document.querySelector('#pending-count');
const btnTrash = document.querySelectorAll('.btn-trash');
const btnComplete = document.querySelectorAll('.btn-complete');




// guardar en local storage
const getTasks = () => {
    list.innerHTML = localStorage.getItem('savetask');
}

getTasks();


const totalCount = () => {
	const howMany = document.querySelector('ul').children.length; 
	pendingCount.innerHTML = howMany;
};

const completeCount = () => {
	const howMany = document.querySelectorAll('.line-through').length;
	completedCount.innerHTML = howMany;
};

const incompletedCount = () => {
	const howMany = document.querySelectorAll('li p:not(.line-through)').length; 
	deletedCount.textContent = howMany;
};

const todoCount = () => {
	totalCount();
	completeCount();
	incompletedCount();
};



// // Regex del input
// const TASK_REGEX = /^[A-Za-ñz 0-9]*$/;



// // cambiar el color del input dependiendo del regex
// const validation = (validation, input) => {
//     if (validation) {
//         taskInput.classList.remove('wrong');
//         taskInput.classList.add('correct');
      
//     } else {
//         taskInput.classList.add('wrong');
//         taskInput.classList.remove('correct');
        
//     }
    
// }


// taskInput.addEventListener('input', e =>{
//     const taskValidation = TASK_REGEX.test (e.target.value);
//     validation(taskValidation, taskInput);


//     todoCount();
// });


// Añadir tareas nuevas 


form.addEventListener('submit', e => {
e.preventDefault();
const newTask = {
    task: taskInput.value,

}
    


const listItem = document.createElement('li');
listItem.innerHTML= `

<button class="btn-trash">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  </svg>
</button>
<p class="li-p">${newTask.task}</p>
<button class="btn-complete">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard-check" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="2" />
    <path d="M9 14l2 2l4 -4" />
  </svg>
</button>
`;

listItem.classList.add('li');
list.append(listItem);
localStorage.setItem('savetask', list.innerHTML);
// vaciar input
taskInput.value = ''

todoCount();
});        

// Eliminar tareas
  
list.addEventListener('click', e => {
    if(e.target.classList.contains('btn-trash')){
    e.target.parentElement.remove();
    localStorage.setItem('savetask', list.innerHTML);
    } 
    todoCount();
    });

	    
// Habilitar boton agregar 



    function validar(){
       let deshabilitar = false;

        if(taskInput.value ==='')
        {
        deshabilitar = false; 
        }
         if (taskInput.value !== '' ){
            deshabilitar = true;
         }
           if (deshabilitar == true)
           {
            btn.removeAttribute('disabled');
           } else {
            btn.setAttribute('disabled', true);
           }
           taskInput != ''
           todoCount();
        
    }

    form.addEventListener("keyup", validar);





// tachar tareas

list.addEventListener('click', e => {
    if(e.target.classList.contains('btn-complete')){

        if(e.target.parentElement.children[1].classList.contains('line-through')){
        e.target.parentElement.children[1].classList.add('li-p');
        e.target.parentElement.children[1].classList.remove('line-through');
        } else {
            e.target.parentElement.children[1].classList.remove('li-p');
            e.target.parentElement.children[1].classList.add('line-through');
        }
    };


    // Save in local storage
    todoCount();
    localStorage.setItem('savetask', list.innerHTML);
});



// Guardar en local storage
	
        (() => {
            if (localStorage.getItem('savetask')) {
                list.innerHTML = localStorage.getItem('savetask');
                todoCount();
            } else {
                todoCount();
            }
        })();



       
    
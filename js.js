const input =document.querySelector('#input');
const btn = document.querySelector('.addTask > button');
const priorityInput = document.querySelector('#priority');
const dueDateInput = document.querySelector('#dueDate')

btn.addEventListener('click', addList);
input.addEventListener('keyof', (e) =>{
    (e.keycCode === 13 ? addList(e) : null); 
})

function addList(e){
    const notComplated = document.querySelector('.notComplated');
    const Complated = document.querySelector('.Complated');
    const priority = priorityInput.value;
    const dueDate = dueDateInput.value;

    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    const toDo = document.createElement('p');
    const setPriority = document.createElement('h2');
    const setDueDate = document.createElement('h2');


    checkBtn.innerHTML = '<img src="./assets/check-icon.png">';
    delBtn.innerHTML = '<img src="./assets/uncheck-icon.jpg" alt="">';
    setPriority.innerHTML = priority;
    setDueDate.innerHTML = dueDate;



    if(input.value !== ''){

        if(input.value === ''){
            alert('input yout to do');
            return false;
        };

        if(priorityInput.value === ''){
            alert('input your priority');
            return false;
        };

        if(dueDate === ''){
            alert('input your deadline');
            return false;
        };

        toDo.textContent = input.value;
        notComplated.appendChild(newLi);
        newLi.appendChild(toDo);
        toDo.classList.add('to-do')
        newLi.appendChild(setPriority);
        newLi.appendChild(setDueDate);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);

        input.value = '';
        priorityInput.value = 'low';
        dueDateInput.value = '';
    };

    checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Complated.appendChild(parent);
        checkBtn.style.display = 'none'
        toDo.style.textDecoration = 'line-through'

    });

    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    }) ;   
};

const deleteAll= document.querySelector('#delete-all');

deleteAll.addEventListener('click', function(){
    const notComplated = document.querySelector('.notComplated > li');
    const Complated = document.querySelector('.Complated > li');
    notComplated.remove();
    Complated.remove();
})


const buttonAdd = document.querySelector('.send');
const input = document.querySelector('.input');
const container = document.querySelector('.container')
const ul = document.createElement('ul');
const li = document.createElement('li');

const showAllArr = document.querySelector('.show_all');
const showActiveArr = document.querySelector('.show_active')
const showCompletedArr = document.querySelector('.show_completed')

const clearCompleted = document.querySelector('.clearToDo');

const amountItems = document.querySelector('.amount_items');

let arr = [];

amountItems.innerText = arr.length

arr.map((el) => { // might be deleted
    let li = document.createElement('li');
    const close = document.createElement('button'); 
    close.innerText = 'x';
    li.innerHTML=`${el.name}`;
    li.appendChild(close)
    ul.appendChild(li);
});

const createEl = (str) => {
    const item = {
        id: Math.floor(Math.random() * 99),
        isDone: false,
        name: str,
    } 
    arr.push(item);
    const li = document.createElement('li');
    li.innerHTML=`${str}`;

    const close = document.createElement('button');
    close.innerText = 'x';

    li.appendChild(close)
    ul.append(li);
    console.log(arr)

    li.addEventListener('click', () => {
        item.isDone = !item.isDone;
        li.classList.toggle("active");

        console.log(arr)
    });

    close.addEventListener('click', () => {
        const index = arr.findIndex(n => n.id === item.id);
        if(index !== -1) {
            arr.splice(index, 1)
        }
        console.log(arr);
        li.remove();

        amountItems.innerText = arr.length; 
    })
    
}

container.appendChild(ul);


buttonAdd.addEventListener('click', () => {
    if(!input.value.length) {
        alert("Enter the task");
    } else {
        createEl(input.value);
        amountItems.textContent = arr.length;
        input.value = '';
    }

})

showAllArr.addEventListener('click', () => {
    let liItems = document.querySelectorAll('li');
    Array.from(liItems).map(item => item.style.display = 'flex');
    
    console.log('all', arr);
    
    amountItems.innerText = liItems.length;    
});


showActiveArr.addEventListener('click', () => {

    let activeItems = document.querySelectorAll('li');
   const newArr =  Array.from(activeItems).filter(item => {
        if(item.className == 'active') {
            item.style.display = 'none'
        } else {
            item.style.display = 'flex'
            return true
        }
    })
    
    amountItems.innerText = newArr.length;
});


showCompletedArr.addEventListener('click', () => {

    let activeItems = document.querySelectorAll('li');
    const newArr =   Array.from(activeItems).filter(item => {
        if(item.className == 'active') {
            item.style.display = 'flex'
            return true
        } else {
            item.style.display = 'none'
        }
    });

    console.log(newArr)

    amountItems.innerText = newArr.length;
})

clearCompleted.addEventListener('click', () => {
    let activeEl = document.querySelectorAll('li.active');

    Array.from(activeEl).map(item => ul.removeChild(item));
    arr = arr.filter(el => !el.isDone)
    console.log(arr)


  
    amountItems.innerText = arr.length;
})
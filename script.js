const addItem = document.querySelector('.send');
const input = document.querySelector('.input');
const container = document.querySelector('.container')
const ul = document.createElement('ul');
ul.className = 'ul_list';
const li = document.createElement('li');

const showAllArray = document.querySelector('.show_all');
const showActiveArray = document.querySelector('.show_active')
const showCompletedArray = document.querySelector('.show_completed')
const clearCompleted = document.querySelector('.clearToDo');

const amountItems = document.querySelector('.amount_items');

const form = document.querySelector('.enter_bar');

let todoArray = [];

amountItems.innerText = todoArray.length

const createEl = (elName) => {
    const item = {
        id: Math.floor(Math.random() * 99),
        isDone: false,
        name: elName,
    }
    todoArray.push(item);
    const li = document.createElement('li');
    li.innerHTML = `${elName}`;

    const closeBtn = document.createElement('button');
    closeBtn.innerText = 'x';

    li.appendChild(closeBtn)
    ul.append(li);

    li.addEventListener('click', () => {
        item.isDone = !item.isDone;
        li.classList.toggle("active");
    });

    closeBtn.addEventListener('click', () => {
        const index = todoArray.findIndex(n => n.id === item.id);
        if (index !== -1) {
            todoArray.splice(index, 1)
        }
        li.remove();

        amountItems.innerText = todoArray.length;
    })

}

container.appendChild(ul);


addItem.addEventListener('click', () => {
    if (!input.value.length) {
        alert("Enter the task");
    } else {
        createEl(input.value);
        amountItems.textContent = todoArray.length;
        input.value = '';
    }
})


input.addEventListener('keyup', (e) => {
    if (!input.value.length) {
        alert("Enter the task");
    } else if (e.keyCode === 13) {
        createEl(input.value);
        amountItems.textContent = todoArray.length;
        input.value = '';
    }
})

form.addEventListener('click', (e) => {
    e.preventDefault()
})

form.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault()
    }
})

showAllArray.addEventListener('click', () => {
    let liItems = document.querySelectorAll('li');
    Array.from(liItems).map(item => item.style.display = 'flex');

    console.log('all', todoArray);

    amountItems.innerText = liItems.length;
});


showActiveArray.addEventListener('click', () => {

    let activeItems = document.querySelectorAll('li');
    const newArr = Array.from(activeItems).filter(item => {
        if (item.className == 'active') {
            item.style.display = 'none'
        } else {
            item.style.display = 'flex'
            return true
        }
    })

    amountItems.innerText = newArr.length;
});


showCompletedArray.addEventListener('click', () => {
    let activeItems = document.querySelectorAll('li');
    const newArr = Array.from(activeItems).filter(item => {
        if (item.className == 'active') {
            item.style.display = 'flex'
            return true
        } else {
            item.style.display = 'none'
        }
    });

    amountItems.innerText = newArr.length;
})

clearCompleted.addEventListener('click', () => {
    let activeEl = document.querySelectorAll('li.active');

    Array.from(activeEl).map(item => ul.removeChild(item));
    todoArray = todoArray.filter(el => !el.isDone)

    amountItems.innerText = todoArray.length;
})
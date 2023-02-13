// const li = document.querySelectorAll('li');

// for(let i=0; i < li.length; i++) {
//     let span = document.createElement('span');
//     let txt = document.createTextNode('\u00D7');

//     span.className = 'close';
//     span.appendChild(txt);
//     li[i].appendChild(span);
// }

// const close = document.querySelectorAll('.close')

// for(let i = 0; i < close.length; i++) {
//     close[i].onClick = function() {
//         let el = this.parentElement;
//         el.style.display = 'none'
//     }
// }

// const ul = document.querySelector('ul');
// ul.addEventListener('click', function(e) {
//     if(e.target.tagName == 'li') {
//         e.target.classList.toggle('checked');
//     }
// }, false);

// const newEl = () => {
//     const new_li = document.createElement('li');
//     const input = document.querySelector('.send');
//     const inputValue = input.value;

//     let text = document.createTextNode(inputValue);

//     li.appendChild(text);

//     if (inputValue === '') {
//         alert("You must write something!");
//       } else {
//         document.querySelector('ul').appendChild(li);
//       }
// }

// document.querySelector('.send').value = '';
// var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }

const button = document.querySelector('.send');
const input = document.querySelector('.input');
const container = document.querySelector('.container')
const ul = document.createElement('ul');
const li = document.createElement('li');



const arr = ['asd', 'adam', 'asd', 'cxv'];

arr.map((el) => {
    let li=document.createElement('li');
    const close = document.createElement('button');
    close.innerText = 'x'
    li.innerHTML=`${el}`;
    li.appendChild(close)
    ul.appendChild(li);
})

const createEl = (str) => {
    arr.push(str);
    let li=document.createElement('li');
    li.innerHTML=`${str}`;
    ul.append(li);


}

container.appendChild(ul)

button.addEventListener('click', () => {
    if(input.value.length == 0) {
        alert("Enter the task");

    } else {
        createEl(input.value);
    }

})
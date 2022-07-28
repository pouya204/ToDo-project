import {logger} from "./test.js";

// query to DOM forgetting elements
const todotitle = document.getElementById("title");
const tododesc = document.getElementById("desc");
const submitTodoButton = document.getElementById("submit");
const mainlist = document.getElementById("main");


const Alertbachegoh = document.getElementById("alert");
Alertbachegoh.style.display= 'none';
 const Alertbache = (msg) => {
    Alertbachegoh.style.display = "flex";
    Alertbachegoh.children[0].innerHTML = msg;
    Alertbachegoh.children[1].addEventListener("click" , () => {
        Alertbachegoh.style.display = "none";
    })
}



// make alert when click on todo
const heading = document.getElementsByTagName('h1')[0];
function headingClickHandler() {
    alert("something")
    };
heading.addEventListener("click" , headingClickHandler);


// handle add new todo
const handleCreatNewTodo = (event) => {
    // prevent to render page by form
    event.preventDefault();
    // validate todo form
    if (!todotitle.value) return (Alertbachegoh.style.display = "flex");
    // create an object form todo title and desc
    const NewTodo = {
        title: todotitle.value,
        desc: tododesc.value,
    };

    // create a list item for new todo
    const listItem = document.createElement('li');
    listItem.className = "list-item";
    // listItem.setAttribute("class", "list-item");
    const todoTitleHeading = document.createElement('h3');
    todoTitleHeading.innerHTML = NewTodo.title;
    const todoDescPara = document.createElement('p');
    todoDescPara.innerHTML = NewTodo.desc;
    //  put h3 and p into our list item
    listItem.appendChild(todoTitleHeading);
    listItem.appendChild(todoDescPara);

    console.log(listItem);

    mainlist.appendChild(listItem);
    // create action buttons for our todo
    const todoActions = `<div>
     <button>del</button>  
     <button>edit</button>
     <button>update</button>
     </div>`;
    // put action buttons to our list item
     listItem.innerHTML += todoActions
    //  put our list item into our main ul
     mainlist.appendChild(listItem);


// console.log(NewTodo , newTodoListItem);
};
submitTodoButton.addEventListener("click" , handleCreatNewTodo)


logger("pouya")



let isSecondInputFocused = false;

document.querySelector('span').addEventListener('click' , ()=>{
    document.getElementById('test2').focus()
    isSecondInputFocused = true;
})

document.querySelectorAll('button').forEach(function(item,index) {
    item.addEventListener('click' , ()=>{
    // if(isSecondInputFocused) document.getElementById("test2").value += index
    // else document.getElementById('test') .value += index
    isSecondInputFocused ? document.getElementById("test2").value += index : document.getElementById('test') .value += index;
    });
    
});

document.getElementById("strong").addEventListener('click' , ()=>{
    const result = parseInt(document.getElementById('test').vlaue) + parseInt (document.getElementById("test2").vlaue);
    document.getElementById("strong").innerHTML += result;
})
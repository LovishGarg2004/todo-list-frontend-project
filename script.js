// console.log(`Hello World`);

// let list = [];
// let choice = prompt(`Enter your choice :`);

// while(choice != "quit"){
//     if(choice == "list"){
//         console.log(list);
//     }
//     else if(choice == "add"){
//         let task = prompt(`Enter the task you want to add :`);
//         list.push(task);
//     }
//     else if(choice == "delete"){
//         let index = prompt(`Enter the index of the task to be deleted :`);
//         list.splice(index,1);
//     }

//     choice = prompt(`Enter your choice :`);
// }

// console.log(`You Quit!`)

let input = document.querySelector("input");
let button = document.querySelector("button");
let FlexStart = document.querySelector(".FlexStart");
FlexStart.classList.add("List");

input.addEventListener("change", function() {
    let FlexStart = document.querySelector(".FlexStart");
    FlexStart.classList.add("List");

    let list = document.createElement("li");
    list.classList.add("li");
    list.classList.add("PaddingLeft");
    let span = document.createElement("span");
    span.innerText = input.value;
    input.value = "";

    let icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash");
    list.appendChild(span);
    list.appendChild(icon);

    FlexStart.appendChild(list);
});

FlexStart.addEventListener("click", function(event) {
    // console.log(event.target);
    if(event.target.nodeName == "I"){
        event.target.parentElement.remove();
    }
})


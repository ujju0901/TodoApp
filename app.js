let input=document.querySelector("input");
let ul =document.querySelector("ul");
let addBtn =document.querySelector("#add");
let li =document.querySelector("li");
let container=document.querySelector(".container")



addBtn.addEventListener("click",function(){
console.log("Task added");
console.log(input.value);
let newli= document.createElement("li");

ul.appendChild(newli);
newli.innerText=input.value;
let compeleteBtn= document.createElement("button");
compeleteBtn.classList.add("Completed");
compeleteBtn.innerText="Completed";
newli.appendChild(compeleteBtn);
let deletBtn =document.createElement("button");
deletBtn.classList.add("delete");
newli.appendChild(deletBtn);
deletBtn.innerText="Delete";


});



ul.addEventListener("click",function(event){
    console.dir(event.target);
    let action= event.target.innerText
    console.log(action);
    if(action=="Completed"){
        let item= event.target.parentElement;
        console.dir(item);
        item.classList.add("line-through");
      
       
    
    }
    if(action=="Delete"){
        let item= event.target.parentElement;
        console.log(item);
        item.remove();
        
    }

});








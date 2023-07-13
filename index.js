const item=document.querySelector("#item")
const Todobox= document.querySelector("To-do-box")

item.addEventListener{
    "keyup",
    function(event) {
    if(event.key == "Enter") {
      addTodo(this.value)
      this.value=""
     }
    }
}
const addTodo = (item)=> {
    const listItem = document.createElement("li");
    listItem.innerHTML =
       $(item)
    <i class="fas fa-times"></i>  
    
   listItem.addEventListener{
    "click",
    function(){
        this.classlist.toggle("")
    }

   }
   listItem.querySelector("i").addEventListener{
    "click",
    function(){
        listItem.remove()
    }
   }
    Todobox.appendChild(listItem)
    
} 
const body = document.getElementById("bodyID"),
      button = document.getElementById("buttonID"),
      inputBox = document.getElementById("inputID");
      //container = document.getElementById("containerID"),
      //child = document.getElementById("childID");

//container.classList.add("test");

class Group{
    constructor() {
       this.element1 = null;
       this.element2 = null;  
    }

    createGroup() {
        this.element1 = document.createElement("li");
        this.element2 = document.createElement("span");

        this.element2.innerHTML = inputBox.value;

        this.element1.classList.add("container");
        this.element2.classList.add("child");

        this.element1.appendChild(this.element2);
        body.appendChild(this.element1);
        }
    }

const group = new Group();

button.addEventListener("click", function(){
    if(inputBox.value == ""){
        alert("Input box is empty!");
    }else{
        group.createGroup();
        inputBox.value = null;
    }
});






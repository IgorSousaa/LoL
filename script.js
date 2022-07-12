const [input1, input2] = document.querySelectorAll("input");
const button = document.querySelector(".btn-arrow");

function btn(){
    if(input1.value && input2.value.length >= 8){
        button.classList.add("btn-opacity");
        button.removeAttribute("disabled");
    }else{
        button.setAttribute("disabled","disabled")
        button.classList.remove("btn-opacity")
    }
}

input1.addEventListener("input", btn);
input2.addEventListener("input", btn);
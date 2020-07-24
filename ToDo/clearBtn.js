function clearBtn(){
    document.querySelector(".clear").addEventListener("click", function(){
        document.querySelector("ul").innerHTML = "";
            localStorage.setItem("todolist", document.querySelector("ul").innerHTML);
    });
}
export {clearBtn};
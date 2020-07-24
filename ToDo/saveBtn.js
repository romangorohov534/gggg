function saveBtn() {
    document.querySelector(".save").addEventListener("click", function(){
    localStorage.setItem("todolist", document.querySelector("ul").innerHTML);
    console.log(localStorage);
});
}
export {saveBtn};
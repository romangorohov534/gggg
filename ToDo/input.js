function input(call) {
    document.querySelector("input[type='text']").addEventListener("keypress", function (key) {
    if(key.which === 13) {

        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("i");
        if(this.value == ""){
            alert("You have not entered anything!");
        }
        else{
        var newTodo = this.value;
        this.value = "";

        icon.classList.add("fas", "fa-trash-alt");
        console.log(icon.classList);
        spanElement.append(icon);
        document.querySelector("ul").appendChild(li).append(spanElement, newTodo);

        call();
    }
}
});
}
export {input};
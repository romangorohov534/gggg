function pencil(){
    document.querySelector("#pencil").addEventListener("click", function(){
        document.querySelector("input[type='text']").classList.toggle("display");
    });
}
export {pencil};
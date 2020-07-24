function ul() {
    document.querySelector("ul").addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked")
        }
    })
}
export {ul};
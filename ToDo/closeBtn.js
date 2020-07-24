function closeBtn() {
    document.querySelector(".closebtn").addEventListener("click", function() {
    event.preventDefault();
    overlay.style.height = "0";
});
}
export {closeBtn};
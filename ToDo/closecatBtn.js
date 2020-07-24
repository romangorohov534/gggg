function closecatbtn() {
    document.querySelector(".closecatbtn").addEventListener("click", function() {
    event.preventDefault();
    overlaycatfacts.style.height = "0";
});
}
export {closecatbtn};
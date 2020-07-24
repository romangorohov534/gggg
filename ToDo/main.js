//Import
import {pencil} from "./pencil.js";
import {tipsBtn} from "./tipsBtn.js";
import {closeBtn} from "./closeBtn.js";
import {input} from "./input.js";
import {ul} from "./ul.js";
import {clearBtn} from "./clearBtn.js";
import {saveBtn} from "./saveBtn.js";
import {cat_facts} from "./cat_facts.js";
import {catsBtn} from "./catsBtn.js";
import {closecatbtn} from "./closecatBtn.js";
// Document ready
$(document).ready(() => {
    var ul_cat_facts = document.querySelector(".cat-facts");
// Initialize
pencil();
tipsBtn();
closeBtn();
input(deleteTodo);
ul();
clearBtn();
saveBtn();
catsBtn();
closecatbtn();

//Load api data
cat_facts("https://cat-fact.herokuapp.com/facts/random?animal_type&amount=10")
.done(data => {
  console.log(data);
  setFactsData(data);
})
.fail(err => {
  console.log(err);
})

function deleteTodo() {
    for(let span of document.getElementsByTagName("span")) {
        span.addEventListener("click", function(){
            console.log(span.parentElement);
            span.parentElement.remove();
        });
    }
}

function loadTodos() {
    if (localStorage.getItem("todolist")) {
        document.querySelector("ul").innerHTML = localStorage.getItem("todolist");
    }
}

function setFactsData(cat_facts) {
    cat_facts.map(elem => {
      ul_cat_facts.append(document.createElement('li'), elem.text)
    })
    console.log(ul_cat_facts);
  }

loadTodos();
deleteTodo();

});
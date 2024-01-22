/* */

var table = document.getElementById("perTable");
if (table != null) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++)
      table.rows[i].cells[j].onclick = function () {
        tableText(this), tableTalk(this);
      };
  }
}

/* Jquery test functions */

$(document).ready(function () {
  $(".j-demo").html("Hello, World!");
});

$(document).ready(function () {
  $(".btn-jquery").click(function () {
    $(".j-demo").toggleClass("jquery_style");
  });
});

/* Jquery for element highlight toggle */
$(document).ready(function () {
  $(".alkali-btn").mouseleave(function () {
    $(".alkali").toggleClass("alkali-after");
  });
});


/* jQuery function to remove hover effect on cells, needs work */
$(document).ready(function () {
  $("hvr-btn").click(function () {
    $(".element_cell").removeClass("element_cell:hover");
  });
});

function tableText(tableCell) {
  alert(tableCell.innerHTML);
}

function tableTalk(tableCell) {
  document.getElementById("demo1").innerHTML = tableCell.innerHTML;
}

/* Pulls array data from hydrogen const and places into a div using DOM */
function hydrogenPress() {
  document.getElementById("demo").innerHTML = "Name: " + hydrogen[0];
  document.getElementById("demo1").innerHTML = hydrogen[1];
  document.getElementById("demo2").innerHTML = hydrogen[2];
  document.getElementById("demo3").innerHTML = hydrogenString;
}

function lithiumPress() {
  document.getElementById("demo").innerHTML = "Name: " + lithium[0];
  document.getElementById("demo1").innerHTML = lithium[1];
  document.getElementById("demo2").innerHTML = lithium[2];
  document.getElementById("demo3").innerHTML = lithiumString;
}

function sodiumPress() {
  document.getElementById("demo").innerHTML = "Name: " + sodium[0];
  document.getElementById("demo1").innerHTML = sodium[1];
  document.getElementById("demo2").innerHTML = sodium[2];
  document.getElementById("demo3").innerHTML = sodiumString;
}

function potasiumPress() {
  document.getElementById("demo").innerHTML = "Name: " + potasium[0];
  document.getElementById("demo1").innerHTML = potasium[1];
  document.getElementById("demo2").innerHTML = potasium[2];
  document.getElementById("demo3").innerHTML = potasiumString;
}

function caesiuimPress() {
  document.getElementById("demo").innerHTML = "Name: " + caesiuim[0];
  document.getElementById("demo1").innerHTML = caesiuim[1];
  document.getElementById("demo2").innerHTML = caesiuim[2];
  document.getElementById("demo3").innerHTML = caesiuimString;
}

function franciumPress() {
  document.getElementById("demo").innerHTML = "Name: " + francium[0];
  document.getElementById("demo1").innerHTML = francium[1];
  document.getElementById("demo2").innerHTML = francium[2];
  document.getElementById("demo3").innerHTML = franciumString;
}

function berylliumPress() {
  document.getElementById("demo").innerHTML = "Name: " + beryllium[0];
  document.getElementById("demo1").innerHTML = beryllium[1];
  document.getElementById("demo2").innerHTML = beryllium[2];
  document.getElementById("demo3").innerHTML = berylliumString;
}

function magnesiuimPress() {
  document.getElementById("demo").innerHTML = "Name: " + magnesiuim[0];
  document.getElementById("demo1").innerHTML = magnesiuim[1];
  document.getElementById("demo2").innerHTML = magnesiuim[2];
  document.getElementById("demo3").innerHTML = magnesiuimString;
}

function calciumPress() {
  document.getElementById("demo").innerHTML = "Name: " + calcium[0];
  document.getElementById("demo1").innerHTML = calcium[1];
  document.getElementById("demo2").innerHTML = calcium[2];
  document.getElementById("demo3").innerHTML = calciumString;
}

function strontiumPress() {
  document.getElementById("demo").innerHTML = "Name: " + strontium[0];
  document.getElementById("demo1").innerHTML = strontium[1];
  document.getElementById("demo2").innerHTML = strontium[2];
  document.getElementById("demo3").innerHTML = strontiumString;
}

function bariumPress() {
  document.getElementById("demo").innerHTML = "Name: " + barium[0];
  document.getElementById("demo1").innerHTML = barium[1];
  document.getElementById("demo2").innerHTML = barium[2];
  document.getElementById("demo3").innerHTML = bariumString;
}

function radiumPress() {
  document.getElementById("demo").innerHTML = "Name: " + radium[0];
  document.getElementById("demo1").innerHTML = radium[1];
  document.getElementById("demo2").innerHTML = radium[2];
  document.getElementById("demo3").innerHTML = radiumString;
}

function scandiumPress() {
  document.getElementById("demo").innerHTML = "Name: " + scandium[0];
  document.getElementById("demo1").innerHTML = scandium[1];
  document.getElementById("demo2").innerHTML = scandium[2];
  document.getElementById("demo3").innerHTML = scandiumString;
}

function yttriumPress() {
  document.getElementById("demo").innerHTML = "Name: " + yttrium[0];
  document.getElementById("demo1").innerHTML = yttrium[1];
  document.getElementById("demo2").innerHTML = yttrium[2];
  document.getElementById("demo3").innerHTML = yttriumString;
}

function lanthanumPress() {
  document.getElementById("demo").innerHTML = "Name: " + lanthanum[0];
  document.getElementById("demo1").innerHTML = lanthanum[1];
  document.getElementById("demo2").innerHTML = lanthanum[2];
  document.getElementById("demo3").innerHTML = lanthanumString;
}

function actiniumPress() {
  document.getElementById("demo").innerHTML = "Name: " + actinium[0];
  document.getElementById("demo1").innerHTML = actinium[1];
  document.getElementById("demo2").innerHTML = actinium[2];
  document.getElementById("demo3").innerHTML = actiniumString;
}


/* Pulls array data from helium const and places into DOM */
function heliumPress() {
  document.getElementById("demo1").innerHTML = helium;
}

/* Array data for various elements in the table */
const hydrogen = ["Hydrogen", "H", 1, 1.008];
const lithium = ["Lithium", "Li", 3, 6.9410];
const sodium = ["Sodium", "Na", 11, 22.990];
const potasium = ["Potasium", "K", 19, 39.098];
const rubidium = ["Rubidium", "Rb", 37, 85.468];
const caesiuim = ["Caesium", "Cs", 55, 132.91];
const francium = ["Francium", "Fr", 87, 223];
const beryllium = ["Beryllium", "Be", 4, 9.0122];
const magnesium = ["Magnesium", "Mg", 12, 24.305];
const calcium = ["Calcium", "Ca", 20, 40.078];
const strontium = ["Strongtium", "Sr", 38, 87.620];
const barium = ["Barium", "Ba", 56, 137.33];
const radium = ["Radium", "Ra", 88, 226];
const scandium = ["Scandium", "Sc", 21, 44.956];
const yttrium = ["Yttrium", "Y", 39, 88.906];
const lanthanum = ["Lanthanum", "La", 57, 138.91];
const actinium = ["Actinium", "Ac", 89, 227];
const hydrogenString = hydrogen.join(" , ");
const helium = ["Helium", "Gas"];

/* displays div with data from hydrogenPress function */
function testFunction() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
}

/* removes display of div with data from hydrogenPress function */
function testFunctionOut() {
  var T = document.getElementById("display_element");
  T.style.display = "none";
}

function testBtn() {
  let test = document.getElementsByClassName("test_div");

  for (var i = 0; i < test.length; i++) {
    test[i].style.backgroundColor = "red";
  }

  for (var i = 0; i < test.length; i++) {
    test[i].style.color = "yellow";
  }
}

function testBtnExit() {
  let test = document.getElementsByClassName("test_div");

  for (var i = 0; i < test.length; i++) {
    test[i].style.backgroundColor = "green";
  }
}

/* 

function noblePress() {
  document.getElementsByClassName("noble").className = " .noble_after";
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 0.4;
  }
}

function nobleExit() {
  document.getElementsByClassName("noble").className = "noble";

  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 1;
  }
} */


/* Need to change this function so it reverts to a css class not just an element
test_div is a good example of this 

NOBLE BEFORE I REDO THE FUNCTION */

function noblePress() {
    let myElement = document.querySelectorAll(".noble");
    let allElements = document.querySelectorAll(".element_cell");
    
    for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.opacity= .4;
    }
    
    for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor= "red";
        }
    
        for (let i = 0; i < myElement.length; i++) {
            myElement[i].style.opacity= .8;
                }
    }

function nobleExit() {
    let myElement = document.querySelectorAll(".noble");
    let allElements = document.querySelectorAll(".element_cell");
    
    for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity= 1;
    }
    
    for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor= "#ffb3b3";
    }
    
    for (let i = 0; i < myElement.length; i++) {
        myElement[i].style.opacity= 1;
            }
    }
    
    

function alkaliPress() {
  let myElement = document.querySelectorAll(".alkali");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 0.4;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "red";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 0.8;
  }
}

function alkaliExit() {
  let myElement = document.querySelectorAll(".alkali");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 1;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "#99e6ff";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 1;
  }
}

function metalloidsPress() {
  let myElement = document.querySelectorAll(".metalloids");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 0.4;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "red";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 0.8;
  }
}

function metalloidsExit() {
  let myElement = document.querySelectorAll(".metalloids");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 1;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "yellow";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 1;
  }
}

function alkaliEPress() {
  let myElement = document.querySelectorAll(".alkali-earth");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 0.4;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "red";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 0.8;
  }
}

function alkaliEExit() {
  let myElement = document.querySelectorAll(".alkali-earth");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 1;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "pink";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 1;
  }
}

function actPress() {
  let myElement = document.querySelectorAll(".act");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 0.4;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "red";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 0.8;
  }
}

function actExit() {
  let myElement = document.querySelectorAll(".act");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 1;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "orange";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 1;
  }
}

function unPress() {
  let myElement = document.querySelectorAll(".unknown");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 0.4;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "red";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 0.8;
  }
}

function unExit() {
  let myElement = document.querySelectorAll(".unknown");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 1;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "gray";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 1;
  }
}

function nonPress() {
  let myElement = document.querySelectorAll(".nonmetal");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 0.4;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "red";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 0.8;
  }
}

function nonExit() {
  let myElement = document.querySelectorAll(".nonmetal");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 1;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "#99b3ff";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 1;
  }
}

function tranPress() {
  let myElement = document.querySelectorAll(".transition");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 0.4;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "red";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 0.8;
  }
}

function tranExit() {
  let myElement = document.querySelectorAll(".transition");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 1;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "#b399ff";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 1;
  }
}

function postPress() {
  let myElement = document.querySelectorAll(".post-transition");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 0.4;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "red";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 0.8;
  }
}

function postExit() {
  let myElement = document.querySelectorAll(".post-transition");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 1;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "green";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 1;
  }
}

function lanPress() {
  let myElement = document.querySelectorAll(".lan");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 0.4;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "red";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 0.8;
  }
}

function lanExit() {
  let myElement = document.querySelectorAll(".lan");
  let allElements = document.querySelectorAll(".element_cell");

  for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.opacity = 1;
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.backgroundColor = "#66ffb3";
  }

  for (let i = 0; i < myElement.length; i++) {
    myElement[i].style.opacity = 1;
  }
}

/* original functioning testBtn
function testBtn() {
    document.getElementById("test").className = "test_div_after";
    }



/* Multiple functions that each pull in data from element such as id, class, title, etc.???*/
/* TableTalk in above function is new, original function was only talbeText */

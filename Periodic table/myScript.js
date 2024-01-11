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

/* Pulls array data from helium const and places into DOM */
function heliumPress() {
  document.getElementById("demo1").innerHTML = helium;
}

/* Array data for various elements in the table */
const hydrogen = ["Hydrogen", "H", 1, 1.008];
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

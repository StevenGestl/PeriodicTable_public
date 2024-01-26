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
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + lithium[0];
  document.getElementById("demo1").innerHTML = lithium[1];
  document.getElementById("demo2").innerHTML = lithium[2];
}

function sodiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + sodium[0];
  document.getElementById("demo1").innerHTML = sodium[1];
  document.getElementById("demo2").innerHTML = sodium[2];
}

function potasiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + potasium[0];
  document.getElementById("demo1").innerHTML = potasium[1];
  document.getElementById("demo2").innerHTML = potasium[2];

}

function caesiuimPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + caesiuim[0];
  document.getElementById("demo1").innerHTML = caesiuim[1];
  document.getElementById("demo2").innerHTML = caesiuim[2];

}

function franciumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + francium[0];
  document.getElementById("demo1").innerHTML = francium[1];
  document.getElementById("demo2").innerHTML = francium[2];

}
/* */

function berylliumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + beryllium[0];
  document.getElementById("demo1").innerHTML = beryllium[1];
  document.getElementById("demo2").innerHTML = beryllium[2];

}

function magnesiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + magnesium[0];
  document.getElementById("demo1").innerHTML = magnesium[1];
  document.getElementById("demo2").innerHTML = magnesium[2];

}

function calciumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + calcium[0];
  document.getElementById("demo1").innerHTML = calcium[1];
  document.getElementById("demo2").innerHTML = calcium[2];
 
}

function strontiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + strontium[0];
  document.getElementById("demo1").innerHTML = strontium[1];
  document.getElementById("demo2").innerHTML = strontium[2];

}

function bariumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + barium[0];
  document.getElementById("demo1").innerHTML = barium[1];
  document.getElementById("demo2").innerHTML = barium[2];

}

function radiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + radium[0];
  document.getElementById("demo1").innerHTML = radium[1];
  document.getElementById("demo2").innerHTML = radium[2];

}
/* */

function scandiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + scandium[0];
  document.getElementById("demo1").innerHTML = scandium[1];
  document.getElementById("demo2").innerHTML = scandium[2];

}

function yttriumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + yttrium[0];
  document.getElementById("demo1").innerHTML = yttrium[1];
  document.getElementById("demo2").innerHTML = yttrium[2];
  
}

function lanthanumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + lanthanum[0];
  document.getElementById("demo1").innerHTML = lanthanum[1];
  document.getElementById("demo2").innerHTML = lanthanum[2];

}

function actiniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + actinium[0];
  document.getElementById("demo1").innerHTML = actinium[1];
  document.getElementById("demo2").innerHTML = actinium[2];
 
}
/* */
function titaniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + titanium[0];
  document.getElementById("demo1").innerHTML = titanium[1];
  document.getElementById("demo2").innerHTML = titanium[2];
 
}

function zirconiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + zirconium[0];
  document.getElementById("demo1").innerHTML = zirconium[1];
  document.getElementById("demo2").innerHTML = zirconium[2];
 
}

function hafniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + hafnium[0];
  document.getElementById("demo1").innerHTML = hafnium[1];
  document.getElementById("demo2").innerHTML = hafnium[2];
 
}

function rutherfordiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + rutherfordium[0];
  document.getElementById("demo1").innerHTML = rutherfordium[1];
  document.getElementById("demo2").innerHTML = rutherfordium[2];
 
}
/* */

function vanadiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + vanadium[0];
  document.getElementById("demo1").innerHTML = vanadium[1];
  document.getElementById("demo2").innerHTML = vanadium[2];
 
}

function niobiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + niobium[0];
  document.getElementById("demo1").innerHTML = niobium[1];
  document.getElementById("demo2").innerHTML = niobium[2];
 
}

function tantalumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + tantalum[0];
  document.getElementById("demo1").innerHTML = tantalum[1];
  document.getElementById("demo2").innerHTML = tantalum[2];
 
}

function dubniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + dubnium[0];
  document.getElementById("demo1").innerHTML = dubnium[1];
  document.getElementById("demo2").innerHTML = dubnium[2];
 
}
/* */

function chromiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + chromium[0];
  document.getElementById("demo1").innerHTML = chromium[1];
  document.getElementById("demo2").innerHTML = chromium[2];
 
}

function molybdenumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + molybdenum[0];
  document.getElementById("demo1").innerHTML = molybdenum[1];
  document.getElementById("demo2").innerHTML = molybdenum[2];
 
}

function tungstenPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + tungsten[0];
  document.getElementById("demo1").innerHTML = tungsten[1];
  document.getElementById("demo2").innerHTML = tungsten[2];
 
}

function seaborgiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + seaborgium[0];
  document.getElementById("demo1").innerHTML = seaborgium[1];
  document.getElementById("demo2").innerHTML = seaborgium[2];
 
}
/* */

function manganesePress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + manganese[0];
  document.getElementById("demo1").innerHTML = manganese[1];
  document.getElementById("demo2").innerHTML = manganese[2];
 
}

function technetiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + technetium[0];
  document.getElementById("demo1").innerHTML = technetium[1];
  document.getElementById("demo2").innerHTML = technetium[2];
 
}

function rheniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + rhenium[0];
  document.getElementById("demo1").innerHTML = rhenium[1];
  document.getElementById("demo2").innerHTML = rhenium[2];
 
}

function bohriumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + bohrium[0];
  document.getElementById("demo1").innerHTML = bohrium[1];
  document.getElementById("demo2").innerHTML = bohrium[2];
 
}
/* */

function ironPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + iron[0];
  document.getElementById("demo1").innerHTML = iron[1];
  document.getElementById("demo2").innerHTML = iron[2];
 
}

function rutheniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + ruthenium[0];
  document.getElementById("demo1").innerHTML = ruthenium[1];
  document.getElementById("demo2").innerHTML = ruthenium[2];
 
}

function osmiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + osmium[0];
  document.getElementById("demo1").innerHTML = osmium[1];
  document.getElementById("demo2").innerHTML = osmium[2];
 
}

function hassiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + hassium[0];
  document.getElementById("demo1").innerHTML = hassium[1];
  document.getElementById("demo2").innerHTML = hassium[2];
 
}
/* */

function cobaltPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + cobalt[0];
  document.getElementById("demo1").innerHTML = cobalt[1];
  document.getElementById("demo2").innerHTML = cobalt[2];
 
}

function rhodiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + rhodium[0];
  document.getElementById("demo1").innerHTML = rhodium[1];
  document.getElementById("demo2").innerHTML = rhodium[2];
 
}

function iridiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + iridium[0];
  document.getElementById("demo1").innerHTML = iridium[1];
  document.getElementById("demo2").innerHTML = iridium[2];
 
}

function meitneriumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + meitnerium[0];
  document.getElementById("demo1").innerHTML = meitnerium[1];
  document.getElementById("demo2").innerHTML = meitnerium[2];
 
}
/* */
function nickelPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + nickel[0];
  document.getElementById("demo1").innerHTML = nickel[1];
  document.getElementById("demo2").innerHTML = nickel[2];
 
}

function palladiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + palladium[0];
  document.getElementById("demo1").innerHTML = palladium[1];
  document.getElementById("demo2").innerHTML = palladium[2];
 
}

function platinumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + platinum[0];
  document.getElementById("demo1").innerHTML = platinum[1];
  document.getElementById("demo2").innerHTML = platinum[2];
 
}

function darmstadtiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + darmstadtium[0];
  document.getElementById("demo1").innerHTML = darmstadtium[1];
  document.getElementById("demo2").innerHTML = darmstadtium[2];
 
}
/* */
function copperPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + copper[0];
  document.getElementById("demo1").innerHTML = copper[1];
  document.getElementById("demo2").innerHTML = copper[2];
 
}

function silverPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + silver[0];
  document.getElementById("demo1").innerHTML = silver[1];
  document.getElementById("demo2").innerHTML = silver[2];
 
}

function goldPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + gold[0];
  document.getElementById("demo1").innerHTML = gold[1];
  document.getElementById("demo2").innerHTML = gold[2];
 
}

function roentgeniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + roentgenium[0];
  document.getElementById("demo1").innerHTML = roentgenium[1];
  document.getElementById("demo2").innerHTML = roentgenium[2];
 
}
/* */

function zincPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + zinc[0];
  document.getElementById("demo1").innerHTML = zinc[1];
  document.getElementById("demo2").innerHTML = zinc[2];
 
}

function cadmiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + cadmium[0];
  document.getElementById("demo1").innerHTML = cadmium[1];
  document.getElementById("demo2").innerHTML = cadmium[2];
 
}

function mercuryPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + mercury[0];
  document.getElementById("demo1").innerHTML = mercury[1];
  document.getElementById("demo2").innerHTML = mercury[2];
 
}

function coperniciumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + copernicium[0];
  document.getElementById("demo1").innerHTML = copernicium[1];
  document.getElementById("demo2").innerHTML = copernicium[2];
 
}
/* */

function boronPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + boron[0];
  document.getElementById("demo1").innerHTML = boron[1];
  document.getElementById("demo2").innerHTML = boron[2];
 
}

function aluminiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + aluminium[0];
  document.getElementById("demo1").innerHTML = aluminium[1];
  document.getElementById("demo2").innerHTML = aluminium[2];
 
}

function galliumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + gallium[0];
  document.getElementById("demo1").innerHTML = gallium[1];
  document.getElementById("demo2").innerHTML = gallium[2];
 
}

function indiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + indium[0];
  document.getElementById("demo1").innerHTML = indium[1];
  document.getElementById("demo2").innerHTML = indium[2];
 
}

function thalliumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + thallium[0];
  document.getElementById("demo1").innerHTML = thallium[1];
  document.getElementById("demo2").innerHTML = thallium[2];
 
}

function nihoniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML = "Name: " + nihonium[0];
  document.getElementById("demo1").innerHTML = nihonium[1];
  document.getElementById("demo2").innerHTML = nihonium[2];
 
}
/* */

/* Pulls array data from helium const and places into DOM */
function heliumPress() {
  document.getElementById("demo1").innerHTML = helium;
}

/* Array data for various elements in the table
const element = [name, symbol, atomic number, atomic mass ] */
const hydrogen = ["Hydrogen", "H", 1, 1.008];
const lithium = ["Lithium", "Li", 3, 6.9410];
const sodium = ["Sodium", "Na", 11, 22.990];
const potasium = ["Potasium", "K", 19, 39.098];
const rubidium = ["Rubidium", "Rb", 37, 85.468];
const caesiuim = ["Caesium", "Cs", 55, 132.91];
const francium = ["Francium", "Fr", 87, 223];
/* */
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
/* */
const titanium = ["Titanium", "Ti", 22, 47.867];
const zirconium = ["Zirconium", "Zr", 40, 91.224];
const hafnium = ["Hafnium", "Hf", 72, 178.49];
const rutherfordium = ["Rutherfordium", "Rf", 104, 267];
/* */
const vanadium = ["Vanadium", "V", 23, 50.942];
const niobium = ["Niobium", "Nb", 41, 92.906];
const tantalum = ["Tantalum", "Ta", 73, 180.95];
const dubnium = ["Dubnium", "Db", 105, 262];
/* */
const chromium = ["Chromium", "Cr", 24, 51.996];
const molybdenum = ["Molybdenum", "Mo", 42, 95.950];
const tungsten = ["Tungsten", "W", 74, 183.84];
const seaborgium = ["Seaborgium", "Sg", 106, 269];
/* */
const manganese = ["Manganese", "Mn", 25, 54.938];
const technetium = ["Technetium", "Tc", 43, 98];
const rhenium = ["Rhenium", "Re", 75, 186.21];
const bohrium = ["Bohrium", "Bh", 107, 264];
/* */
const iron = ["Iron", "Fe", 26, 55.845];
const ruthenium = ["Ruthenium", "Ru", 44, 101.07];
const osmium = ["Osmium", "Os", 76, 190.23];
const hassium = ["Hassium", "Hs", 108, 269];
/* */
const cobalt = ["Cobalt", "Co", 27, 58.933];
const rhodium = ["Rhodium", "Rh", 45, 102.91];
const iridium = ["Iridium", "Ir", 77, 192.22];
const meitnerium = ["Meitnerium", "Mt", 109, 278];
/* */
const nickel = ["Nickel", "Ni", 28, 58.693];
const palladium = ["Palladium", "Pd", 46, 106.42];
const platinum = ["Platinum", "Pt", 78, 195.08];
const darmstadtium = ["Darmstadtium", "Ds", 110, 281];
/* */
const copper = ["Copper", "Cu", 29, 63.546];
const silver = ["Silver", "Ag", 47, 107.87];
const gold = ["Gold", "Au", 79, 196.97];
const roentgenium = ["Roetgenium", "Rg", 111, 282];
/* */
const zinc = ["Zinc", "Zn", 30, 65.380];
const cadmium = ["Cadmium", "Cd", 48, 112.41];
const mercury = ["Mercury", "Hg", 80, 200.59];
const copernicium = ["Copernicium", "Cn", 112, 285];
/* */
const boron = ["Boron", "B", 5, 10.811];
const aluminium = ["Aluminium", "Al", 13, 26.982];
const gallium = ["Gallium", "Ga", 31, 69.723];
const indium = ["Indium", "In", 49, 114.82];
const thallium = ["Thallium", "Ti", 81, 204.38];
const nihonium = ["Nihonium", "Nh", 113, 286];
/* */
const carbon = ["Carbon", "C", 6, 12.011];
const silicon = ["Silicon", "Si", 14, 28.086];
const germanium = ["Germanium", "Ge", 23, 72.640];
const tin = ["Tin", "Sn", 50, 118.71];
const lead = ["Lead", "Pb", 82, 207.20];
const flerovium = ["Flerovium", "Fl", 114, 289];
/* */
const nitrogen = ["Nitrogen", "N", 7, 14.007];
const phosphorus = ["Phosphorus", "P", 15, 30.974];
const arsenic = ["Arsenic", "As", 33, 74.922];
const antimony = ["Antimony", "Sb", 51, 121.76];
const bismuth = ["Bismuth", "Bi", 83, 208.98];
const moscovium = ["Moscovium", "Mc", 115, 289];
/* */
const oxygen = ["Oxygen", "O", 8, 15.999];
const sulfur = ["Sulfur", "S", 16, 32.065];
const selenium = ["Selenium", "Se", 34, 78.960];
const tellurium = ["Tellurium", "Te", 52, 127.60];
const polonium = ["Polonium", "Po", 84, 209];
const livermorium = ["Livermorium", "Lv", 116, 293];
/* */
const fluorine = ["Fluorine", "F", 9, 18.998];
const chlorine = ["Chlorine", "Cl", 17, 35.453];
const bromine = ["Bromine", "Br", 35, 79.904]
const iodine = ["Iodine", "I", 53, 126.90];
const astatine = ["Astatine", "At", 85, 210];
const tennessine = ["Tennessine", "Ts", 117, 294];
/* */
const helium = ["Helium", "He", 2, 4.0026];
const neon = ["Neon", "Ne", 10, 20.180];
const argon = ["Argon", "Ar", 18, 39.948];
const krypton = ["Krypton", "Kr", 36, 83.798];
const xenon = ["Xenon", "Xe", 54, 131.29];
const radon = ["Radon", "Rn", 86, 222];
const oganesson = ["Oganesson", "Og", 118, 294];
/* */
const cerium = ["Cerium", "Ce", 58, 140.12];
const praseodymium = ["Praseodymium", "Pr", 59, 140.91];
const neodymium = ["Neodymium", "Nd", 60, 144.24];
const samarium = ["Samarium", "Sm", 62, 150.36];
const europium = ["Europium", "Eu", 63, 151.96];
const gadolinium = ["Gadolinium", "Gd", 64, 157.25];
const terbium = ["Terbium", "Tb", 65, 158.93];
const dysprosium = ["Dysprosium", "Dy", 66, 162.5];
const holmium = ["Holmium", "Ho", 67, 164.93];
const erbium = ["Erbium", "Er", 68, 167.26];
const thulium = ["Thulium", "Tm", 69, 168.93];
const ytterbium = ["Ytterbium", "yb", 70, 173.04];
const lutetium = ["Lutetium", "Lu", 71, 174.97];
/* */
const thorium = ["Thorium", "Th", 90, 232.04];
const protactinium = ["Protactinium", "Pa", 91, 231.04];
const uranium = ["Uranium", "U", 92, 238.03];
const neptunium = ["Neptunium", "Np", 93, 237.05];
const plutonium = ["Plutonium", "Pu", 94, 244];
const americium = ["Americium", "Am", 95, 243];
const curium = ["Curium", "Cm", 96, 247];
const berkelium = ["Berkelium", "Bk", 97, 247];
const californium = ["Californium", "Cf", 98, 251];
const einsteinium = ["Einsteinium", "Es", 99, 252];
const fermium = ["Fermium", "Fm", 100, 257];
const mendelevium = ["Mendelevium", "Md", 101, 258];
const nobelium = ["Nobelium", "No", 102, 259];
const lawrencium = ["Lawrencium", "Lr", 103, 262];

const hydrogenString = hydrogen.join(" , ");


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

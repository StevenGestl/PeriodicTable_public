/* used to set up dom for table cells */

var table = document.getElementById("perTable");
if (table != null) {
  for (var i = 0; i < table.rows.length; i++) {
    for (var j = 0; j < table.rows[i].cells.length; j++)
      table.rows[i].cells[j].onclick = function () {
        tableText(this), tableTalk(this);
      };
  }
}

function tableText(tableCell) {
  alert(tableCell.innerHTML);
}

function tableTalk(tableCell) {
  document.getElementById("demo1").innerHTML = tableCell.innerHTML;
}


/* Array data for various elements in the table
const element = [name, symbol, atomic number, atomic mass ] */
const hydrogen = ["Hydrogen", "H", 1, 1.008];
const lithium = ["Lithium", "Li", 3, 6.9410];
const sodium = ["Sodium", "Na", 11, 22.990];
const potasium = ["Potasium", "K", 19, 39.098];
const rubidium = ["Rubidium", "Rb", 37, 85.468];
const caesium = ["Caesium", "Cs", 55, 132.91];
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

/* Pulls array data from hydrogen const and places into a div using DOM */
function hydrogenPress() {
  document.getElementById("demo").innerHTML =  hydrogen[0];
  document.getElementById("demo1").innerHTML = hydrogen[1];
  document.getElementById("demo2").innerHTML = hydrogen[2];
}

function lithiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  lithium[0];
  document.getElementById("demo1").innerHTML = lithium[1];
  document.getElementById("demo2").innerHTML = lithium[2];
}

function sodiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  sodium[0];
  document.getElementById("demo1").innerHTML = sodium[1];
  document.getElementById("demo2").innerHTML = sodium[2];
}

function potasiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  potasium[0];
  document.getElementById("demo1").innerHTML = potasium[1];
  document.getElementById("demo2").innerHTML = potasium[2];

}

function rubidiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  rubidium[0];
  document.getElementById("demo1").innerHTML = rubidium[1];
  document.getElementById("demo2").innerHTML = rubidium[2];

}

function caesiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  caesiuim[0];
  document.getElementById("demo1").innerHTML = caesiuim[1];
  document.getElementById("demo2").innerHTML = caesiuim[2];

}

function franciumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  francium[0];
  document.getElementById("demo1").innerHTML = francium[1];
  document.getElementById("demo2").innerHTML = francium[2];

}
/* */

function berylliumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  beryllium[0];
  document.getElementById("demo1").innerHTML = beryllium[1];
  document.getElementById("demo2").innerHTML = beryllium[2];

}

function magnesiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  magnesium[0];
  document.getElementById("demo1").innerHTML = magnesium[1];
  document.getElementById("demo2").innerHTML = magnesium[2];

}

function calciumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  calcium[0];
  document.getElementById("demo1").innerHTML = calcium[1];
  document.getElementById("demo2").innerHTML = calcium[2];
 
}

function strontiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  strontium[0];
  document.getElementById("demo1").innerHTML = strontium[1];
  document.getElementById("demo2").innerHTML = strontium[2];

}

function bariumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  barium[0];
  document.getElementById("demo1").innerHTML = barium[1];
  document.getElementById("demo2").innerHTML = barium[2];

}

function radiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  radium[0];
  document.getElementById("demo1").innerHTML = radium[1];
  document.getElementById("demo2").innerHTML = radium[2];

}
/* */

function scandiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  scandium[0];
  document.getElementById("demo1").innerHTML = scandium[1];
  document.getElementById("demo2").innerHTML = scandium[2];

}

function yttriumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  yttrium[0];
  document.getElementById("demo1").innerHTML = yttrium[1];
  document.getElementById("demo2").innerHTML = yttrium[2];
  
}

function lanthanumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  lanthanum[0];
  document.getElementById("demo1").innerHTML = lanthanum[1];
  document.getElementById("demo2").innerHTML = lanthanum[2];

}

function actiniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  actinium[0];
  document.getElementById("demo1").innerHTML = actinium[1];
  document.getElementById("demo2").innerHTML = actinium[2];
 
}
/* */
function titaniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  titanium[0];
  document.getElementById("demo1").innerHTML = titanium[1];
  document.getElementById("demo2").innerHTML = titanium[2];
 
}

function zirconiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  zirconium[0];
  document.getElementById("demo1").innerHTML = zirconium[1];
  document.getElementById("demo2").innerHTML = zirconium[2];
 
}

function hafniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  hafnium[0];
  document.getElementById("demo1").innerHTML = hafnium[1];
  document.getElementById("demo2").innerHTML = hafnium[2];
 
}

function rutherfordiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  rutherfordium[0];
  document.getElementById("demo1").innerHTML = rutherfordium[1];
  document.getElementById("demo2").innerHTML = rutherfordium[2];
 
}
/* */

function vanadiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  vanadium[0];
  document.getElementById("demo1").innerHTML = vanadium[1];
  document.getElementById("demo2").innerHTML = vanadium[2];
 
}

function niobiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  niobium[0];
  document.getElementById("demo1").innerHTML = niobium[1];
  document.getElementById("demo2").innerHTML = niobium[2];
 
}

function tantalumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  tantalum[0];
  document.getElementById("demo1").innerHTML = tantalum[1];
  document.getElementById("demo2").innerHTML = tantalum[2];
 
}

function dubniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  dubnium[0];
  document.getElementById("demo1").innerHTML = dubnium[1];
  document.getElementById("demo2").innerHTML = dubnium[2];
 
}
/* */

function chromiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  chromium[0];
  document.getElementById("demo1").innerHTML = chromium[1];
  document.getElementById("demo2").innerHTML = chromium[2];
 
}

function molybdenumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  molybdenum[0];
  document.getElementById("demo1").innerHTML = molybdenum[1];
  document.getElementById("demo2").innerHTML = molybdenum[2];
 
}

function tungstenPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  tungsten[0];
  document.getElementById("demo1").innerHTML = tungsten[1];
  document.getElementById("demo2").innerHTML = tungsten[2];
 
}

function seaborgiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  seaborgium[0];
  document.getElementById("demo1").innerHTML = seaborgium[1];
  document.getElementById("demo2").innerHTML = seaborgium[2];
 
}
/* */

function manganesePress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  manganese[0];
  document.getElementById("demo1").innerHTML = manganese[1];
  document.getElementById("demo2").innerHTML = manganese[2];
 
}

function technetiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  technetium[0];
  document.getElementById("demo1").innerHTML = technetium[1];
  document.getElementById("demo2").innerHTML = technetium[2];
 
}

function rheniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  rhenium[0];
  document.getElementById("demo1").innerHTML = rhenium[1];
  document.getElementById("demo2").innerHTML = rhenium[2];
 
}

function bohriumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  bohrium[0];
  document.getElementById("demo1").innerHTML = bohrium[1];
  document.getElementById("demo2").innerHTML = bohrium[2];
 
}
/* */

function ironPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  iron[0];
  document.getElementById("demo1").innerHTML = iron[1];
  document.getElementById("demo2").innerHTML = iron[2];
 
}

function rutheniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  ruthenium[0];
  document.getElementById("demo1").innerHTML = ruthenium[1];
  document.getElementById("demo2").innerHTML = ruthenium[2];
 
}

function osmiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  osmium[0];
  document.getElementById("demo1").innerHTML = osmium[1];
  document.getElementById("demo2").innerHTML = osmium[2];
 
}

function hassiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  hassium[0];
  document.getElementById("demo1").innerHTML = hassium[1];
  document.getElementById("demo2").innerHTML = hassium[2];
 
}
/* */

function cobaltPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  cobalt[0];
  document.getElementById("demo1").innerHTML = cobalt[1];
  document.getElementById("demo2").innerHTML = cobalt[2];
 
}

function rhodiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  rhodium[0];
  document.getElementById("demo1").innerHTML = rhodium[1];
  document.getElementById("demo2").innerHTML = rhodium[2];
 
}

function iridiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  iridium[0];
  document.getElementById("demo1").innerHTML = iridium[1];
  document.getElementById("demo2").innerHTML = iridium[2];
 
}

function meitneriumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  meitnerium[0];
  document.getElementById("demo1").innerHTML = meitnerium[1];
  document.getElementById("demo2").innerHTML = meitnerium[2];
 
}
/* */
function nickelPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  nickel[0];
  document.getElementById("demo1").innerHTML = nickel[1];
  document.getElementById("demo2").innerHTML = nickel[2];
 
}

function palladiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  palladium[0];
  document.getElementById("demo1").innerHTML = palladium[1];
  document.getElementById("demo2").innerHTML = palladium[2];
 
}

function platinumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  platinum[0];
  document.getElementById("demo1").innerHTML = platinum[1];
  document.getElementById("demo2").innerHTML = platinum[2];
 
}

function darmstadtiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  darmstadtium[0];
  document.getElementById("demo1").innerHTML = darmstadtium[1];
  document.getElementById("demo2").innerHTML = darmstadtium[2];
 
}
/* */
function copperPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  copper[0];
  document.getElementById("demo1").innerHTML = copper[1];
  document.getElementById("demo2").innerHTML = copper[2];
 
}

function silverPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  silver[0];
  document.getElementById("demo1").innerHTML = silver[1];
  document.getElementById("demo2").innerHTML = silver[2];
 
}

function goldPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  gold[0];
  document.getElementById("demo1").innerHTML = gold[1];
  document.getElementById("demo2").innerHTML = gold[2];
 
}

function roentgeniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  roentgenium[0];
  document.getElementById("demo1").innerHTML = roentgenium[1];
  document.getElementById("demo2").innerHTML = roentgenium[2];
 
}
/* */

function zincPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  zinc[0];
  document.getElementById("demo1").innerHTML = zinc[1];
  document.getElementById("demo2").innerHTML = zinc[2];
 
}

function cadmiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  cadmium[0];
  document.getElementById("demo1").innerHTML = cadmium[1];
  document.getElementById("demo2").innerHTML = cadmium[2];
 
}

function mercuryPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  mercury[0];
  document.getElementById("demo1").innerHTML = mercury[1];
  document.getElementById("demo2").innerHTML = mercury[2];
 
}

function coperniciumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  copernicium[0];
  document.getElementById("demo1").innerHTML = copernicium[1];
  document.getElementById("demo2").innerHTML = copernicium[2];
 
}
/* */

function boronPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  boron[0];
  document.getElementById("demo1").innerHTML = boron[1];
  document.getElementById("demo2").innerHTML = boron[2];
 
}

function aluminiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  aluminium[0];
  document.getElementById("demo1").innerHTML = aluminium[1];
  document.getElementById("demo2").innerHTML = aluminium[2];
 
}

function galliumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  gallium[0];
  document.getElementById("demo1").innerHTML = gallium[1];
  document.getElementById("demo2").innerHTML = gallium[2];
 
}

function indiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  indium[0];
  document.getElementById("demo1").innerHTML = indium[1];
  document.getElementById("demo2").innerHTML = indium[2];
 
}

function thalliumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  thallium[0];
  document.getElementById("demo1").innerHTML = thallium[1];
  document.getElementById("demo2").innerHTML = thallium[2];
 
}

function nihoniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  nihonium[0];
  document.getElementById("demo1").innerHTML = nihonium[1];
  document.getElementById("demo2").innerHTML = nihonium[2];
 
}
/* */

function carbonPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  carbon[0];
  document.getElementById("demo1").innerHTML = carbon[1];
  document.getElementById("demo2").innerHTML = carbon[2];
 
}

function siliconPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  silicon[0];
  document.getElementById("demo1").innerHTML = silicon[1];
  document.getElementById("demo2").innerHTML = silicon[2];
 
}

function germaniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  germanium[0];
  document.getElementById("demo1").innerHTML = germanium[1];
  document.getElementById("demo2").innerHTML = germanium[2];
 
}

function tinPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  tin[0];
  document.getElementById("demo1").innerHTML = tin[1];
  document.getElementById("demo2").innerHTML = tin[2];
 
}

function leadPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  lead[0];
  document.getElementById("demo1").innerHTML = lead[1];
  document.getElementById("demo2").innerHTML = lead[2];
 
}

function fleroviumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  flerovium[0];
  document.getElementById("demo1").innerHTML = flerovium[1];
  document.getElementById("demo2").innerHTML = flerovium[2];
 
}
/* */

function nitrogenPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  nitrogen[0];
  document.getElementById("demo1").innerHTML = nitrogen[1];
  document.getElementById("demo2").innerHTML = nitrogen[2];
 
}

function phosphorusPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  phosphorus[0];
  document.getElementById("demo1").innerHTML = phosphorus[1];
  document.getElementById("demo2").innerHTML = phosphorus[2];
 
}

function arsenicPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  arsenic[0];
  document.getElementById("demo1").innerHTML = arsenic[1];
  document.getElementById("demo2").innerHTML = arsenic[2];
 
}

function antimonyPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  antimony[0];
  document.getElementById("demo1").innerHTML = antimony[1];
  document.getElementById("demo2").innerHTML = antimony[2];
 
}

function bismuthPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  bismuth[0];
  document.getElementById("demo1").innerHTML = bismuth[1];
  document.getElementById("demo2").innerHTML = bismuth[2];
 
}

function moscoviumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  moscovium[0];
  document.getElementById("demo1").innerHTML = moscovium[1];
  document.getElementById("demo2").innerHTML = moscovium[2];
 
}
/* */
function oxygenPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  oxygen[0];
  document.getElementById("demo1").innerHTML = oxygen[1];
  document.getElementById("demo2").innerHTML = oxygen[2];
 
}

function sulfurPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  sulfur[0];
  document.getElementById("demo1").innerHTML = sulfur[1];
  document.getElementById("demo2").innerHTML = sulfur[2];
 
}

function seleniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  selenium[0];
  document.getElementById("demo1").innerHTML = selenium[1];
  document.getElementById("demo2").innerHTML = selenium[2];
 
}

function telluriumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  tellurium[0];
  document.getElementById("demo1").innerHTML = tellurium[1];
  document.getElementById("demo2").innerHTML = tellurium[2];
 
}

function poloniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  polonium[0];
  document.getElementById("demo1").innerHTML = polonium[1];
  document.getElementById("demo2").innerHTML = polonium[2];
 
}

function livermoriumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  livermorium[0];
  document.getElementById("demo1").innerHTML = livermorium[1];
  document.getElementById("demo2").innerHTML = livermorium[2];
 
}
/* */
function fluorinePress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  fluorine[0];
  document.getElementById("demo1").innerHTML = fluorine[1];
  document.getElementById("demo2").innerHTML = fluorine[2];
 
}

function chlorinePress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  chlorine[0];
  document.getElementById("demo1").innerHTML = chlorine[1];
  document.getElementById("demo2").innerHTML = chlorine[2];
 
}

function brominePress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  bromine[0];
  document.getElementById("demo1").innerHTML = bromine[1];
  document.getElementById("demo2").innerHTML = bromine[2];
 
}

function iodinePress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  iodine[0];
  document.getElementById("demo1").innerHTML = iodine[1];
  document.getElementById("demo2").innerHTML = iodine[2];
 
}

function astatinePress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  astatine[0];
  document.getElementById("demo1").innerHTML = astatine[1];
  document.getElementById("demo2").innerHTML = astatine[2];
 
}

function tennessinePress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  tennessine[0];
  document.getElementById("demo1").innerHTML = tennessine[1];
  document.getElementById("demo2").innerHTML = tennessine[2];
 
}
/* */
function heliumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  helium[0];
  document.getElementById("demo1").innerHTML = helium[1];
  document.getElementById("demo2").innerHTML = helium[2];
 
}

function neonPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  neon[0];
  document.getElementById("demo1").innerHTML = neon[1];
  document.getElementById("demo2").innerHTML = neon[2];
 
}

function argonPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  argon[0];
  document.getElementById("demo1").innerHTML = argon[1];
  document.getElementById("demo2").innerHTML = argon[2];
 
}

function kryptonPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  krypton[0];
  document.getElementById("demo1").innerHTML = krypton[1];
  document.getElementById("demo2").innerHTML = krypton[2];
 
}

function xenonPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  xenon[0];
  document.getElementById("demo1").innerHTML = xenon[1];
  document.getElementById("demo2").innerHTML = xenon[2];
 
}

function radonPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  radon[0];
  document.getElementById("demo1").innerHTML = radon[1];
  document.getElementById("demo2").innerHTML = radon[2];
 
}

function oganessonPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  oganesson[0];
  document.getElementById("demo1").innerHTML = oganesson[1];
  document.getElementById("demo2").innerHTML = oganesson[2];
 
}
/* */

function ceriumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  cerium[0];
  document.getElementById("demo1").innerHTML = cerium[1];
  document.getElementById("demo2").innerHTML = cerium[2];
 
}

function praseodymiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  praseodymium[0];
  document.getElementById("demo1").innerHTML = praseodymium[1];
  document.getElementById("demo2").innerHTML = praseodymium[2];
 
}

function neodymiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  neodymium[0];
  document.getElementById("demo1").innerHTML = neodymium[1];
  document.getElementById("demo2").innerHTML = neodymium[2];
 
}

function promethiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  promethium[0];
  document.getElementById("demo1").innerHTML = promethium[1];
  document.getElementById("demo2").innerHTML = promethium[2];
 
}

function samariumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  samarium[0];
  document.getElementById("demo1").innerHTML = samarium[1];
  document.getElementById("demo2").innerHTML = samarium[2];
 
}

function europiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  europium[0];
  document.getElementById("demo1").innerHTML = europium[1];
  document.getElementById("demo2").innerHTML = europium[2];
 
}

function gadoliniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  gadolinium[0];
  document.getElementById("demo1").innerHTML = gadolinium[1];
  document.getElementById("demo2").innerHTML = gadolinium[2];
 
}

function terbiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  terbium[0];
  document.getElementById("demo1").innerHTML = terbium[1];
  document.getElementById("demo2").innerHTML = terbium[2];
 
}

function dysprosiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  dysprosium[0];
  document.getElementById("demo1").innerHTML = dysprosium[1];
  document.getElementById("demo2").innerHTML = dysprosium[2];
 
}

function holmiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  holmium[0];
  document.getElementById("demo1").innerHTML = holmium[1];
  document.getElementById("demo2").innerHTML = holmium[2];
 
}

function erbiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  erbium[0];
  document.getElementById("demo1").innerHTML = erbium[1];
  document.getElementById("demo2").innerHTML = erbium[2];
 
}

function thuliumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  thulium[0];
  document.getElementById("demo1").innerHTML = thulium[1];
  document.getElementById("demo2").innerHTML = thulium[2];
 
}

function ytterbiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  ytterbium[0];
  document.getElementById("demo1").innerHTML = ytterbium[1];
  document.getElementById("demo2").innerHTML = ytterbium[2];
 
}

function lutetiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  lutetium[0];
  document.getElementById("demo1").innerHTML = lutetium[1];
  document.getElementById("demo2").innerHTML = lutetium[2];
 
}
/* */
function thoriumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  thorium[0];
  document.getElementById("demo1").innerHTML = thorium[1];
  document.getElementById("demo2").innerHTML = thorium[2];
 
}

function protactiniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  protactinium[0];
  document.getElementById("demo1").innerHTML = protactinium[1];
  document.getElementById("demo2").innerHTML = protactinium[2];
 
}

function uraniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  uranium[0];
  document.getElementById("demo1").innerHTML = uranium[1];
  document.getElementById("demo2").innerHTML = uranium[2];
 
}

function neptuniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  neptunium[0];
  document.getElementById("demo1").innerHTML = neptunium[1];
  document.getElementById("demo2").innerHTML = neptunium[2];
 
}

function plutoniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  plutonium[0];
  document.getElementById("demo1").innerHTML = plutonium[1];
  document.getElementById("demo2").innerHTML = plutonium[2];
 
}

function americiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  americium[0];
  document.getElementById("demo1").innerHTML = americium[1];
  document.getElementById("demo2").innerHTML = americium[2];
 
}

function curiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  curium[0];
  document.getElementById("demo1").innerHTML = curium[1];
  document.getElementById("demo2").innerHTML = curium[2];
 
}

function berkeliumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  berkelium[0];
  document.getElementById("demo1").innerHTML = berkelium[1];
  document.getElementById("demo2").innerHTML = berkelium[2];
 
}

function californiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  californium[0];
  document.getElementById("demo1").innerHTML = californium[1];
  document.getElementById("demo2").innerHTML = californium[2];
 
}

function einsteiniumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  einsteinium[0];
  document.getElementById("demo1").innerHTML = einsteinium[1];
  document.getElementById("demo2").innerHTML = einsteinium[2];
 
}

function fermiumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  fermium[0];
  document.getElementById("demo1").innerHTML = fermium[1];
  document.getElementById("demo2").innerHTML = fermium[2];
 
}

function mendeleviumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  mendelevium[0];
  document.getElementById("demo1").innerHTML = mendelevium[1];
  document.getElementById("demo2").innerHTML = mendelevium[2];
 
}

function nobeliumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  nobelium[0];
  document.getElementById("demo1").innerHTML = nobelium[1];
  document.getElementById("demo2").innerHTML = nobelium[2];
 
}

function lawrenciumPress() {
  var T = document.getElementById("display_element");
  T.style.display = "block";
  document.getElementById("demo").innerHTML =  lawrencium[0];
  document.getElementById("demo1").innerHTML = lawrencium[1];
  document.getElementById("demo2").innerHTML = lawrencium[2];
 
}

/* removes display of div with data from hydrogenPress function */
function testFunctionOut() {
  var T = document.getElementById("display_element");
  T.style.display = "none";
}


/* functions for the legend that select and highlight elements by types */
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



/* TableTalk in above function is new, original function was only tableText */

//  js main file
import { randrest, random_item } from './index.js'
//  html code for the FOOTER
var foot1 = '<footer>\
    <a href="home.html">Home</a><a href="about.html">About Us</a><a href="license.html">Licensing</a><br>\
   <p>\
      Ozarks Technical Community College 2021. Unless otherwise \
      indicated, all content on this web site is licensed under a \
      Creative Commons License.**\
   </p>\
</footer>';
//  When the user clicks anywhere outside of the modal, close it
function loadFoot() {//loads footer
	document.getElementById("foot1").innerHTML = foot1;}
//function navButton(){let x = document.getElementById("x");} //for later?
//window.onclick = function(event){random_item(randrest);}
function modalExit() {window.onclick = function(event) {if (event.target == document.getElementById('resultsModal')) {
  document.getElementById('resultsModal').style.display = "none";}}}
function etAl(){
  loadFoot();modalExit();
}
random_item(randrest) 
{
  let randomness = randrest[Math.floor(Math.random()*randrest.length)];
  //console.log(random_item(randrest));
  //console.log(randomness.Rname);

  document.getElementById("restNameLoad").innerHTML  = randomness.Rname;
  document.getElementById("restPhoneLoad").innerHTML  = randomness.Phone;
  document.getElementById("restPriceLoad").innerHTML  = randomness.Price;
  document.getElementById("restDistLoad").innerHTML  = randomness.GPS;
}

import { make_element } from "./docbuild";


function getLang() {
  if (navigator.languages !== undefined) 
    return navigator.languages[0]; 
  return navigator.language;
}
var lang = getLang();
function main() {
  window.onload = function() {
    var a  = document.getElementsByClassName("webpage-loading");
    a[0].remove();
    a[0].id
    document.title = "Mindstart";
  };
  var a = make_element(document.body,"div",null,"");
  a.innerHtml = "Hello";
  
}

main();
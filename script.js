""==document.querySelector('input[type="text"]').value&&(document.querySelector("label").className="dyn"),document.querySelector('input[type="text"]').addEventListener("focus",function(){document.querySelector("label").className=""}),document.querySelector('input[type="reset"]').addEventListener("click",function(){document.querySelector("h2").remove(),document.querySelector("ul").remove()}),document.querySelector('input[type="text"]').addEventListener("blur",function(){""==document.querySelector('input[type="text"]').value&&(document.querySelector("label").className="dyn")}),document.querySelector("form").addEventListener("submit",function(e){if(window.fetch){e.preventDefault(),e.stopPropagation();var t=new Headers;t.set("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),fetch("attributes.php",{method:"POST",headers:t,body:"element="+document.getElementById("element").value}).then(function(e){e.text().then(function(e){document.querySelector("ul")&&(document.querySelector("ul").outerHTML=""),document.querySelector("h2")&&(document.querySelector("h2").outerHTML=""),document.querySelector(".err")&&(document.querySelector(".err").outerHTML=""),document.querySelector("form").insertAdjacentHTML("afterend",e)})})}});

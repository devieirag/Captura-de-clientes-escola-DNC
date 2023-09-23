
var setaesq = window.document.getElementById("setaesq")
var leo = window.document.getElementById("leo")
var sama = window.document.getElementById("sama")
var brun = window.document.getElementById("brun")
var setadir = window.document.getElementById("setadir")


function roldir () {
leo.style = "display:none"
brun.style = "display:flex" 
setadir.style = "display:flex; margin-top: 50%"
setaesq.style = "display:none"

}

function rolesq () {
    leo.style = "display:flex"
    brun.style = "display:none" 
    setadir.style = "display:none; margin-top: 50%"
    setaesq.style = "display:flex"
    
    }
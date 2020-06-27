function tyu(nj){
    var ui = document.getElementById("vgt")
    ui.value +=nj
}

function op(){
    var jk = document.getElementById("vgt")
    jk.value = " "
}

function yhb(){
    var sw = document.getElementById("vgt")
    sw.value = eval(sw.value)

}
function aq(){
    var sq =document.getElementById("vgt")
    vgt.value = Math.sqrt(sq.value)
}
function factorial(){
    var n = document.getElementById("vgt")
fact =1 ;
for(i=1;i<n.value;i++){
    fact+=fact*i
}
n.value = fact
}

function powr(){
    var wq = document.getElementById("vgt")

 wq.value = Math.pow(wq.value,2)
}
function al(){
    var za = document.getElementById("vgt")
    za.value = Math.log(za.value)
}

function jo(){
    var ws = document.getElementById("vgt")
ws.value+= Math.PI

}
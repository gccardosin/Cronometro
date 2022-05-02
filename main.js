var dvTempo
var btnStart
var btnPause
var btnReset
var tempo = 0
var id

init()

function init(){
    dvTempo = document.getElementById("tempo")

    btnStart = document.getElementById("start")
    btnStart.onclick = start

    btnPause = document.getElementById("pause")
    btnPause.disabled = true
    btnPause.onclick = pause
    
    btnReset = document.getElementById("reset")
    btnReset.disabled = true
    btnReset.onclick = reset
}

function pause(){
    btnReset.disabled = false
    btnPause.disabled = true
    btnStart.disabled = false
    clearInterval(id)

}

function reset(){
    btnReset.disabled = true
    btnPause.disabled = true
    btnStart.disabled = false
    clearInterval(id)
    tempo = 0
    dvTempo.innerHTML = tempo.toFixed(1) + "s"
    
}




function start(){
     id = setInterval(update,100)
    btnReset.disabled = false
    btnPause.disabled = false
    btnStart.disabled = true
}

function update(){
    tempo = tempo +0.1
    dvTempo.innerHTML = tempo.toFixed(1) + "s"
}
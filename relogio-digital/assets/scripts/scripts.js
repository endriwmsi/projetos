function relogio(){
  let data = new Date();
  let hora = data.getHours();
  let min = data.getMinutes();
  let seg = data.getSeconds();

  if(hora < 10){
    hora = "0" + hora;
  }
  if(min < 10){
    min = "0" + min;
  }
  if(seg < 10){
    seg = "0" + seg;
  }

  document.getElementById('txt').innerHTML =  hora + ":" + min + ":" + seg;
  setTimeout(startTime, 1000);
}

var tempo = setInterval(relogio, 1000);
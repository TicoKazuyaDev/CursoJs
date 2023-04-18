function carregar(){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
if(hora >=0 && hora <=12){
    //bom dia
    img.src = 'manha.png'
    window.document.body.style.background = '#F0E68C'
}else if(hora >=12 && hora <= 18){
    //Boa tarde
    img.src = 'tarde.png'
    window.document.body.style.background ='#e2725b'
}else{
    //boa noite
    img.src = 'noite.png'
    window.document.body.style.background ='#4682B4'
}
}
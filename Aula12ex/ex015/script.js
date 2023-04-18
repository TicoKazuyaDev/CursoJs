function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dadmos e tente novamente.')
    }else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criancamenino.png')
            }else if(idade <21){
                //jovemm
                img.setAttribute('src', 'homemjovem.png')
            }else if(idade <60){
                //adulto
                img.setAttribute('src', 'homemjovem.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }
       }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criancamenina.png')
            }else if(idade <21){
                //jovemm
                img.setAttribute('src', 'mulherjovem.png')
            }else if(idade <60){
                //adulto
                img.setAttribute('src', 'mulherjovem.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosamulher.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}
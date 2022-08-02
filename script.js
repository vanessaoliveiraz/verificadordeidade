function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) { // Se idade for maior que 0 e menor do que 13 é uma CRIANÇA
                img.setAttribute('src', 'bebe-menino.png')
                
                
            } else if (idade <= 24 ) { // Se idade for menor ou igual a 21 é um JOVEM
                img.setAttribute('src', 'jovem-menino.png')
                
            } else if (idade < 55) { // Se idade for menor do que 50 é umADULTO
                img.setAttribute('src', 'homem.png')
                
                
            } else { // IDOSO // Senão é idoso
                img.setAttribute('src', 'idoso-homem.png')
                
            }
        }else if  (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) { // Se idade for maior que 0 e menor que 13 é uma CRIANÇA
                img.setAttribute('src', 'bebe-menina.png')

            } else if (idade <= 22) { // Se a idade for menor ou igual a 22 é um JOVEM 
                
                img.setAttribute('src', 'jovem-menina.png')

            }else if (idade < 50) { // Se a idade for menor que 50 é um ADULTO
                //Adulto
                img.setAttribute('src', 'mulher-adulta.png')

            } else { // Senão é um IDOSO 
                
                img.setAttribute('src', 'idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos! `
        res.appendChild(img)
    }
}
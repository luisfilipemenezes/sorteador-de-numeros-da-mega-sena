/*EM QUE TIPO DE JOGO VOCE VAI APOSTAR ?
- MEGA SENA
QUANTOS NUMEROS VOCE VAI APOSTAR ?
-6
*/

function preenche (){
    let valor = document.querySelector(".input")
    valor.setAttribute("value" ,6)
}

function sortear (){
    let volante  =[]
    let cartao = document.querySelector("input")
    let qtd =  cartao.value

    for (let i = 0 ; i < qtd ; i++){
        let numero = (parseInt(Math.random() * 61))
        if (numero ==0){
            i -=1
        }
        else{
            let tamanho = volante.length
            let podeAdcionar = true
            if (tamanho >0){
                for(let j = 0; j < tamanho;j++){
                    if(numero == volante[j]){
                        podeAdcionar = false
                        i-=1
                    }
                }
                if(podeAdcionar == true){
                    volante.push(numero)
                }

            }else{
                volante.push(numero)
            }
            
        }
        
    }
    console.log(volante)

    let numeros =  document.querySelector("#result")
    numeros.value = volante

    if(volante.length >0){
        let boaSorte = document.querySelector(".invisivel")
        boaSorte.style.color = "black"
    }
    

    

}




/*EM QUE TIPO DE JOGO VOCE VAI APOSTAR ?
- MEGA SENA
QUANTOS NUMEROS VOCE VAI APOSTAR ?
-6
*/

function preenche (){
    let valor = document.querySelector(".input")
    valor.setAttribute("value" ,6)
}

function clicar (){
    let volante  =[]
    let cartao = document.querySelector("input")
    let qtd =  cartao.value

    for (let i = 0 ; i < qtd ; i++){
        let numero = (parseInt(Math.random() * 60))
        if (numero ==0){
            i--
        }
        else{
            let tamanho = volante.length
            let podeAdcionar = true
            if (tamanho >0){
                for(let i = 0; i < tamanho;i++){
                    if(numero == volante[i]){
                        podeAdcionar = false
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
    numeros.innerHTML = volante

    

}










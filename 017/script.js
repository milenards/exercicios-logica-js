//Faça um Programa que peça dois números e imprima o maior deles.
function maiorNumero(n1=0, n2=0, n3=0){

    let maior
    
    maior = n1

    if(n2 > n1 )
    maior=n2

    if(n3 > maior)
    maior=n3      

    console.log ("O maior número é:", maior)

}
maiorNumero(7,3,10)

function Soma(n1=0, n2=0){
    let  total
    total = n1 + n2
    console.log(total)
}

Soma(2,3)

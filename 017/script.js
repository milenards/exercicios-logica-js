//Faça um Programa que peça dois números e imprima o maior deles.
function maiorNumero(n1=0, n2=0, n3=0){

   /* let maior
    
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
    */
    n1= parseFloat(n1)
    n2= parseFloat(n2)
    n3= parseFloat(n3)
    
   if(n1 > n2 && n1 > n3){
       document.querySelector("#resultado").innerHTML = "O maior número é " + n1
   }

   else if(n2 > n1 && n2 > n3){
    document.querySelector("#resultado").innerHTML = "O maior número é " + n2
   }

   else if(n3 > n1 && n3 > n2){
    document.querySelector("#resultado").innerHTML = "O maior número é " + n3


   }
}



function salario(dinheiro=0, hora=0,dia=0){
    let total,resultado

    console.log("Quanto você recebe por hora trabalhada?")
    
    console.log("Quantas horas por dia você trabalha?")
    
    total = dinheiro*hora
    console.log("Quantos dias no mês você trabalha?")
   
    resultado = total * dia
    console.log("Seu salario no mês é de:",resultado)
}
salario(50,8,30)
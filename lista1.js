function exe1(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let sub = (n1 - n2)
    alert ("O resultado da subtração é: " + sub)
}

function exe2(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let n3 = Number (document.getElementById("n3").value)
    let mult = (n1*n2*n3)
    alert ("O resultado da multiplicação é: " + mult)
}

function exe3(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let div = (n1/n2)
    alert ("O resultado da divisão é: " + div)
}

function exe4(){
    let n1 = Number (document.getElementById("n1").value)
    let n2 = Number (document.getElementById("n2").value)
    let mdp = ((n1*2 + n2*3)/5)
    alert ("O resultado da média ponderada é: " + mdp)
}

function exe5(){
    let p = Number (document.getElementById("p").value)
    let pf = (p*0.9)
    alert ("O preço final do produto é: " + pf)
}

function exe6(){
    // let declara variavel
    // recupera o salario fixo informado pelo usuario
    let fixo = Number (document.getElementById("fixo").value)
    // recupera vendas informadas na caixa de texto
    let vendas = Number (document.getElementById("vendas").value)
    
    // calcular a comissão
    let comissao = (vendas*0.04)
    // calcular o salario final
    let total = (comissao + fixo)
    alert ("comissao " + comissao + "\nSalario total: " + total)
}

function exe7(){
    let peso = Number (document.getElementById("peso").value)
    let engorda = (peso*1.15)
    let emagrece = (peso*0.8)
    alert ("Se engordar: " + engorda + "\nSe emagrecer: " + emagrece)
}

function exe8(){
    
}

function exe9(){
    
}

function exe10(){
    
}

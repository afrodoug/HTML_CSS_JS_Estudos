var qtdItens = document.querySelector("#qtdItens");
// qtdItens.innerHTML=("teste")
var estoque1 = document.getElementById("estoque1")
// estoque1.innerHTML=("teste")
var qtdLikes1 = document.getElementById("qtdLikes1")
// qtdLikes1.innerHTML = ("teste")
var alteraValorTotal=document.getElementById("valorTotal")
//FAZER FUNCIONAR DAQUI PARA BAIXO

parseFloat(alteraValorTotal)
parseFloat(estoque1)
parseFloat(qtdItens)
console.log((alteraValorTotal) = (estoque1)+(qtdItens))

var qtdItens = document.getElementById("qtdItens")
let itens = 0
itens.parseFloat = qtdItens
// function btnTeste(){
//     const teste = document.getElementsByClassName("Teste")[0];
//     teste.classList.add("selecionado")
// }
// Altera CSS da transportadora Selecionada
function selecionaTransportadora1(){
    const alteraBtn = document.getElementById("selecionar1");
    const alteraborda=document.getElementById("trans1");
    alteraborda.style.borderColor=("#492BC4");
    alteraBtn.style.background = ("#10B981");
    alteraBtn.textContent="selecionado"
    // alteraValorTotal.innerHTML="R$ 1600,00"
    // qtdItens.backgroundColor=("black")
    alert("botaok")
}
// Altera CSS da transportadora Selecionada
function selecionaTransportadora2(){
    const alteraBtn = document.getElementById("selecionar2")
    const alteraborda=document.getElementById("trans2")    
    alteraborda.style.borderColor=("#492BC4");
    alteraBtn.style.background = ("#10B981");
    alteraBtn.textContent="selecionado"
    // alert('Botão funcioando');
}
// Inicio interage com a quantidade de produtos
function incrementapdt(){
        let qtdProduto = document.getElementById("qtdProduto");
        qtdProduto.innerHTML=Number(qtdProduto.innerHTML)+1   
}

function decrementapdt(){
    let qtdProduto = document.getElementById("qtdProduto");
    qtdProduto.innerHTML=Number(qtdProduto.innerHTML)-1
}
// Fim interage com a quantidade de produtos selecionados

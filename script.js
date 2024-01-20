var alteraValorTotal=document.getElementById("valorTotal")
var qtdItens = document.getElementsByClassName("main")
// Altera CSS da transportadora Selecionada
function selecionaTransportadora1(){
    const alteraBtn = document.getElementById("selecionar1");
    const alteraborda=document.getElementById("trans1");
    alteraborda.style.borderColor=("#492BC4");
    alteraBtn.style.background = ("#10B981");
    alteraBtn.textContent="selecionado"
    alteraValorTotal.innerHTML="R$ 1600,00"
    qtdItens.backgroundColor=("black")
}
// Altera CSS da transportadora Selecionada
function selecionaTransportadora2(){
    const alteraBtn = document.getElementById("selecionar2")
    const alteraborda=document.getElementById("trans2")
    
    alteraborda.style.borderColor=("#492BC4");
    alteraBtn.style.background = ("#10B981");
    alteraBtn.textContent="selecionado"
    alteraValorTotal.innerHTML="R$ 1580,00"
    alert('Botão funcioando');
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

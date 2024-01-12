var alteraValorTotal=document.getElementById("valorTotal")
var qtdItens = document.getElementsByClassName("main")
function selecionaTransportadora1(){
    const alteraBtn = document.getElementById("selecionar1");
    const alteraborda=document.getElementById("trans1");
    alteraborda.style.borderColor=("#492BC4");
    alteraBtn.style.background = ("#10B981");
    alteraBtn.textContent="selecionado"
    alteraValorTotal.innerHTML="R$ 1600,00"
    qtdItens.backgroundColor=("black")
}
function selecionaTransportadora2(){
    const alteraBtn = document.getElementById("selecionar2")
    const alteraborda=document.getElementById("trans2")
    
    alteraborda.style.borderColor=("#492BC4");
    alteraBtn.style.background = ("#10B981");
    alteraBtn.textContent="selecionado"
    alteraValorTotal.innerHTML="R$ 1580,00"
    alert('Botão funcioando');
}
function incrementapdt1(){
    const alteraQtdCarrinho = document.getElementById("qtdProduto");
    alteraQtdCarrinho.innerHTML=("2")
}
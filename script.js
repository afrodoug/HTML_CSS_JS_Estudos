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
        let qtdProduto = document.getElementById("qtdProduto");
        qtdProduto.innerHTML=Number(qtdProduto.innerHTML)+1
        let qtdEstoque = document.querySelector("#divlinhaProduto1 .qtdEstoque")
        qtdEstoque.innerHTML = Number(qtdEstoque.innerHTML) - Number(qtdProduto.innerHTML)
}

function decrementapdt1(){
    let qtdProduto = document.getElementById("qtdProduto");
    qtdProduto.innerHTML=Number(qtdProduto.innerHTML)-1
}

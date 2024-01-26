// Constantes globais de interação
const alteraBorda1=document.getElementById("trans1");
const alteraBtn1 = document.getElementById("selecionar1");
const alteraBorda2=document.getElementById("trans2");
const alteraBtn2 = document.getElementById("selecionar2");
const valorProduto2 = 25.00;
const valorProduto3 = 1500.00;
const valorCorreios = 40.00;
const valorTransportadora = 20.00
var qtdEstoque = 100;
let valorTotal = 0;
let valorProduto = 15;
let itensCarrinho = 0;
let qtdProduto = 0;
let carrinho = 0

carregaValores()

// fim constantes globais

function selecionaTransportadora1(){    
    alteraBtn1.classList.add('btnSelecionado');
    alteraBorda1.classList.add('bordaSelecionada')
    alteraBtn2.classList.remove('btnSelecionado');
    alteraBorda2.classList.remove('bordaSelecionada')
    alteraBtn.textContent="selecionado"
}
// Altera CSS da transportadora Selecionada
function selecionaTransportadora2(){
    alteraBtn1.classList.remove('btnSelecionado');
    alteraBorda1.classList.remove('bordaSelecionada')
    alteraBtn2.classList.add('btnSelecionado');
    alteraBorda2.classList.add('bordaSelecionada')
}
// Inicio interage com a quantidade de produtos
function incrementapdt(){
    qtdProduto+=1;
    qtdEstoque-=1;
    carregaValores()
}

function decrementapdt(){
    if (qtdProduto === 0) return;
    qtdProduto-=1;
    qtdEstoque+=1;
    carregaValores();
}
// Fim interage com a quantidade de produtos selecionados


function carregaValores(){
    document.getElementsByClassName("totalItem")[0].innerHTML=qtdProduto;
    // document.getElementsByClassName("totalItem")[1].innerHTML=qtdProduto;
    // document.getElementsByClassName("totalItem")[2].innerHTML=qtdProduto;
    carrinho = qtdProduto
    document.getElementById("valorTotal").innerHTML=(`${qtdProduto*valorProduto}`).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    document.getElementById("qtdItens").innerHTML=(carrinho)
    document.getElementById("estoque1").innerHTML=(qtdEstoque);
}

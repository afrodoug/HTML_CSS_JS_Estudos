// Constantes globais de interação
const alteraBorda1=document.getElementById("trans1");
const alteraBtn1 = document.getElementById("selecionar1");
const alteraBorda2=document.getElementById("trans2");
const alteraBtn2 = document.getElementById("selecionar2");
const valorProduto2 = 25.00;
const valorProduto3 = 1500.00;
const valorCorreios = 40;
const valorTransportadora = 20.00
let alteraTranportadora=0
var qtdEstoque = 100;
let valorTotal = 0;
let valorProduto = 15;
let itensCarrinho = 0;
let qtdProduto = 0;
let qtdProduto2 = 0;
let qtdProduto3 = 0;
let carrinho = 0
// fim constantes globais

carregaValores()

function selecionaTransportadora1(){    
    alteraBtn1.classList.add('btnSelecionado');
    alteraBorda1.classList.add('bordaSelecionada')
    alteraBtn2.classList.remove('btnSelecionado');
    alteraBorda2.classList.remove('bordaSelecionada')
    alteraBtn1.textContent="selecionado";
    alteraTranportadora=valorCorreios;
    carregaValores()
}
// Altera CSS da transportadora Selecionada
function selecionaTransportadora2(){
    alteraBtn1.classList.remove('btnSelecionado');
    alteraBorda1.classList.remove('bordaSelecionada')
    alteraBtn2.classList.add('btnSelecionado');
    alteraBorda2.classList.add('bordaSelecionada')
    alteraTranportadora=valorTransportadora;
    carregaValores();
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

function incrementapdt2(){
    qtdProduto2+=1;
    qtdEstoque2-=1;
    carregaValores()
}

function decrementapdt2(){
    if (qtdProduto2 === 0) return;
    qtdProduto2-=1;
    qtdEstoque2+=1;
    carregaValores();
}
// Fim interage com a quantidade de produtos selecionados


function carregaValores(){
    document.getElementsByClassName("totalItem")[0].innerHTML=qtdProduto;
    document.getElementsByClassName("totalItem2")[0].innerHTML=qtdProduto2;
    // document.getElementsByClassName("totalItem")[2].innerHTML=qtdProduto3;
    carrinho = qtdProduto
    document.getElementById("valorTotal").innerHTML=(`R$ ${(qtdProduto*valorProduto)+alteraTranportadora},00`).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
    document.getElementById("qtdItens").innerHTML=(carrinho)
    document.getElementById("estoque1").innerHTML=(qtdEstoque);
}

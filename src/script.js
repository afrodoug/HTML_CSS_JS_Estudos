// Constantes globais de interação
const alteraBorda1=document.getElementById("trans1");
const alteraBtn1 = document.getElementById("selecionar1");
const alteraBorda2=document.getElementById("trans2");
const alteraBtn2 = document.getElementById("selecionar2");

var qtdItens = document.querySelector("#qtdItens");
// qtdItens.innerHTML=("teste")
var estoque1 = document.getElementById("estoque1")
// estoque1.innerHTML=("teste")
var qtdLikes1 = document.getElementById("qtdLikes1")
// qtdLikes1.innerHTML = ("teste")
var alteraValorTotal=document.getElementById("valorTotal")
//FAZER FUNCIONAR DAQUI PARA BAIXO
var qtdItens = document.getElementById("qtdItens")
let itens = 0
itens.parseFloat = qtdItens

function selecionaTransportadora1(){    
    alteraBtn1.classList.add('btnSelecionado');
    alteraBorda1.classList.add('bordaSelecionada')
    alteraBtn2.classList.remove('btnSelecionado');
    alteraBorda2.classList.remove('bordaSelecionada')
    alteraBtn.textContent="selecionado"    
    alteraValorTotal.innerHTML="R$ 1600,00"
}
// Altera CSS da transportadora Selecionada
function selecionaTransportadora2(){
    alteraBtn1.classList.remove('btnSelecionado');
    alteraBorda1.classList.remove('bordaSelecionada')
    alteraBtn2.classList.add('btnSelecionado');
    alteraBorda2.classList.add('bordaSelecionada')
    alteraBtn.textContent="selecionado";
    alteraValorTotal.innerHTML="R$ 1580,00";

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



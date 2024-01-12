function selecionaTransportadora1(){
    const alteraBtn = document.getElementById("selecionar1");
    const alteraborda=document.getElementById("trans1");
    const alteraValorTotal=document.getElementById("valorTotal")
    alteraborda.style.borderColor=("#492BC4");
    alteraBtn.style.background = ("#10B981");
    alteraBtn.textContent="selecionado"
    alert('Botão funcioando');
    alteraValorTotal.innerHTML="R$ 1600,00"
}
function selecionaTransportadora2(){
    const alteraBtn = document.getElementById("selecionar2")
    const alteraborda=document.getElementById("trans2")
    const alteraValorTotal=document.getElementById("valorTotal")
    alteraborda.style.borderColor=("#492BC4");
    alteraBtn.style.background = ("#10B981");
    alteraBtn.textContent="selecionado"
    alteraValorTotal.innerHTML="R$ 1580,00"
    alert('Botão funcioando');
}
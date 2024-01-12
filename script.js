function selecionaTransportadora1(){
    const alteraBtn = document.getElementById("selecionar1")
    const alteraborda=document.getElementById("trans2")
    alteraBtn.style.background = ("#10B981");
    alteraBtn.textContent="selecionado"
    // alert('Botão funcioando');
}
function selecionaTransportadora2(){
    const alteraBtn = document.getElementById("selecionar2")
    const alteraborda=document.getElementById("trans2")
    alteraborda.style.borderColor=("#492BC4");
    alteraBtn.style.background = ("#10B981");
    alteraBtn.textContent="selecionado"
    alert('Botão funcioando');
}
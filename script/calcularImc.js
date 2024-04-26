const intext = document.getElementsByClassName("form-resultado")

function calcularimc(){
    // * puxando os dados do formulário 
    const peso = document.getElementById("form-value-peso").value;
    const altura = document.getElementById("form-value-altura").value;
    

    var textoresultado = document.getElementById("resultado-text")

    var imc = peso / (altura * altura);
    console.log(`o resultado do seu IMC foi : ${imc}`);
    textoresultado.innerText= ` o Resultado é ${imc.toFixed(2)}`
    $(intext).css("display", "block");
   
}





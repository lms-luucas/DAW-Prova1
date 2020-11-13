$(document).ready(function () {

    $("#cep").mask("00000-000", { placeholder: "_____-___" });

    $("#submit").click(function (event) {
        validarMask(event);
      });

    setMask("cpf");
  
});
  
  function setMask(type) {
    const mask = {
      cpf: "000.000.000-00",
      cnpj: "00.000.000/0000-00",
    };
  
    const placeholder = {
      cpf: "___.___.___-__",
      cnpj: "__.___.___/____-__",
    };
  
    const cpfCnpj = $("#cpf-cnpj");
  
    cpfCnpj[0].value = "";
  
    cpfCnpj.mask(mask[type], {
      placeholder: placeholder[type],
    });
  
    $("#cpf-cnpj-label")[0].innerText = `${type.toUpperCase()}:`;
  }
  
  function validarMask(event){
    const fisica = $("#pessoa-fisica")[0].checked;
    const juridica = $("#pessoa-juridica")[0].checked;

    console.log(fisica);

    const cpfCnpj = $("#cpf-cnpj")[0].value;
    const cep = $("#cep")[0].value;

    if (fisica && cpfCnpj && cpfCnpj.length != 14 ) {
      event.preventDefault();
  
      $("#msg").html('<div class="alert alert-danger">Preencha todos os valores corretamente!</div>')
  
      return;
    }
  
    if (juridica && cpfCnpj && cpfCnpj.length != 18) {
      event.preventDefault();
  
      $("#msg").html('<div class="alert alert-danger">Preencha todos os valores corretamente!</div>')
  
      return;
    }

    if (cep && cep.length != 9) {
      event.preventDefault();
  
      $("#msg").html('<div class="alert alert-danger">Preencha todos os valores corretamente!</div>')
  
      return;
    }
    
  }

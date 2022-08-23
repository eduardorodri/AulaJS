$('#inputOla').click(
    function(){
      //  cadastro =
      //  { 
           // 'nome':document.getElementById('inputNome').value,
         //   'endereco':document.getElementById('inputEndereco').value,
        //    'email':document.getElementById('inputEmail').value
    //    }

      //  alert('Meu nome é ' +cadastro.nome + ' sou de ' + cadastro.endereco);
  //  }
//)
calculo =
{
    'a':document.getElementById('inputA').value,
    'b':document.getElementById('inputB').value,
    'c':document.getElementById('inputC').value,
}
   let media = (parseInt(calculo.a) + parseInt(calculo.b) + parseInt(calculo.c))/3;

   if(media >=7) {
       alert('APROVADO');
   }else {
       let notaExame = 10 - media;
       alert('Voce ficou de exame precisa tirar ' +notaExame);
   }


}
)
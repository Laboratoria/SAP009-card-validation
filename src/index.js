import validator from './validator.js';

// Obter referências aos elementos HTML relevantes
const numeroCartaoInput = document.querySelector('.campos-numero-cartao');
const numCartaoImpressoInput = document.querySelector('.num-cartao-impresso');

// Adicionar um manipulador de eventos ao elemento de entrada "numero-cartao"
numeroCartaoInput.addEventListener('input', () => {
  // Obter o valor digitado pelo usuário
  const numeroCartao = numeroCartaoInput.value;

  // Formatar o número do cartão com pontos a cada 4 dígitos
  const numCartaoFormatado = numeroCartao.replace(/(\d{4})/g, '$1.').substring(0, 19);

  // Atualizar o valor do elemento de entrada "num-cartao-impresso"
  numCartaoImpressoInput.value = numCartaoFormatado;

});

 const nomeInputTitular = document.querySelector('.campo-nome-usuario');
 const nomeImpressoInput = document.querySelector('.nome-impresso');
 nomeInputTitular.addEventListener('input', () => {
    const nomeTitutlar =  nomeInputTitular.value;
    const nomeTitularFormatado = nomeTitutlar.toUpperCase();
    nomeImpressoInput.value = nomeTitularFormatado;
 });

 const anoInput = document.querySelector('.ano-vencimento');
 const anoImpressoInput = document.querySelector('.ano-impresso');
 anoInput.addEventListener('input', () => {
    const anoVencimento = anoInput.value;
    anoImpressoInput.value = anoVencimento;
 });

 const cvvInput = document.querySelector('.cvv-cartao');
 const cvvImpressoInput = document.querySelector('.cvv-impresso');
 cvvInput.addEventListener('input', () => {
    const cvvCartao = cvvInput.value;
    cvvImpressoInput.value = cvvCartao;
 });
 const mesVencimentoSelect = document.querySelector('.mes-vencimento');
 const mesVencimentoImpresso = document.querySelector('.mes-impresso');
 mesVencimentoSelect.addEventListener('change', () => {
    const mesVencimento = mesVencimentoSelect.value;
    mesVencimentoImpresso.value = mesVencimento;
 });


 
//  const camposDoFormulario = document.querySelectorAll('[required]');
//  camposDoFormulario.checkValidity() () =>
//  camposDoFormulario.forEach(() => {
//     const msgErroCampos = document.querySelector('.msg-erros-preenchimento');
//     if (numeroCartaoInput === '') {
//        return msgErroCampos.innerText = "Por favor, digite o número do seu cartão.";
//     }; 
// });


 console.log(validator);


const btnComprar = document.querySelector('.btn-compra');
btnComprar.addEventListener('click', () => alert('funcionou')
);


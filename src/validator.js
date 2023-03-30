const validator = {
  isValid: function(numeroDoCartao) {
    // Implemente a validação do cartão de crédito usando o algoritmo de Luhn
    
    // Passo 1: Converter o número do cartão em um array de dígitos
    const digitos = numeroDoCartao.split('').map(Number);
    
    // Passo 2: Inverter o array de dígitos
    digitos.reverse();
    
    // Passo 3: Multiplicar por 2 todos os dígitos em posições ímpares
    for (let i = 1; i < digitos.length; i += 2) {
      digitos[i] *= 2;
    }
    
    // Passo 4: Subtrair 9 de todos os dígitos maiores do que 9
    for (let i = 0; i < digitos.length; i++) {
      if (digitos[i] > 9) {
        digitos[i] -= 9;
      }
    }
    
    // Passo 5: Somar todos os dígitos
    const soma = digitos.reduce((total, atual) => total + atual, 0);
    
    // Passo 6: Verificar se a soma é um múltiplo de 10
    return soma % 10 === 0;
  },
  maskify: function(numeroDoCartao) {
    if (numeroDoCartao.length >= 4) {
      const quatroUltimosDigitos = numeroDoCartao.slice(-4)
      const simbolo = "•";
      const quantidadeDeSimbolos = numeroDoCartao.length - 4
      const numeroMascarado = simbolo.repeat(quantidadeDeSimbolos) + quatroUltimosDigitos
      return numeroMascarado
    } else {
      return numeroDoCartao
    }

  },
//   validandoDataVencimento: function(mesVencimento, anoVencimento) {
//     const dataAtual = new Date();
//     const mes = mesVencimento.parseInt();
//   const ano = anoVencimento.parseInt();
//     if(ano < dataAtual.getFullYear()){
//       return false;
//     }
//     if(ano === dataAtual.getFullYear() && mes < dataAtual.getMonth() +1){
//       return false;
//   }else{
//     return true;
//   }
// },
};
export default validator;

import * as funcoesMatematicas from './funcoes_matematicas.js';
import * as calculadora_idade from './calculadora_idade.js';

console.log('Soma: ', funcoesMatematicas.soma(10, 5));
console.log('Subtração: ', funcoesMatematicas.subtrai(10, 5));
console.log('Multiplicação: ', funcoesMatematicas.multiplica(10, 5));
console.log('Divisão: ', funcoesMatematicas.divide(10, 5));

console.log(calculadora_idade.idade('Ana', 1990));
function idade(nome,anoNasc){
    idade = 2025 - anoNasc;
    return "Olá, " + ${nome} + "! Você terá " + ${idade} + " anos em 2025.";
}
//exportando funcão
module.exports = {idade};
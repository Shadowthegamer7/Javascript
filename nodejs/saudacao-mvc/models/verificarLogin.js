module.exports = {
    verificarLogin: (login, senha) => {
    let acesso;

    if (login === "joedio" && senha === "12345"){
        acesso = "Logado";
    } else {
        acesso = "Negado";
    }
    return `Olá, ${login}, seu acesso foi: ${acesso}!`;
    }
};
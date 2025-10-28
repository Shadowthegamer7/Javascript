module.exports ={
    gerarMensagemLogin: (login, senha) => {
        let acesso;

        if (login === "joedio" && senha === "123456") {
            acesso = "Liberado";
        } else {
            acesso = "Negado";
        }

        return `Acesso ${acesso} para o usuário ${login}`;
    }
};
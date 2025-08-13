//função que recebe como parametros o cliente do Whatsapp, a mensagem e o objeto de estados os usuários (para que nós possamos alterar depois)
const fluxoInicial = async (client, chat, message, idConversa, mensagemAtivacao) =>{

    if(message.body === mensagemAtivacao){
        //obtém as informações do chat e contato, para puxar as informações
        chat = await message.getChat();
        contato = await chat.getContact();

        //simula digitação por 2 segundos
        await chat.sendStateTyping();
        await new Promise(resolve => setTimeout(resolve, 1500));

        //obtém a hora atual de Porto Velho - RO (GMT - 4)
        dataAtual = new Date();
        horaAtual = dataAtual.getUTCHours() - 4;
        if(horaAtual < 0) horaAtual += 24;

        //determina a saudação apropriada para o horário atual
        saudacao = ""
        if(horaAtual >= 6 && horaAtual < 13){
            saudacao = "Bom dia";
        } else if(horaAtual >= 13 && horaAtual < 19){
            saudacao = "Boa tarde";
        } else{
            saudacao = "Boa noite"
        }

        //envia primeira mensage: saudacao
        await client.sendMessage(
            idConversa,
            `Olá!\n${saudacao}, ${contato.pushname || "cidadão"}`
        )

        //Simula digitação por 3 segundos
        await chat.sendStateTyping();
        await new Promise(resolve => setTimeout(resolve, 4000));

        //Envia mensagem de apresentação e opções
        await client.sendMessage(
            idConversa,
            `Sou o robô correspondente da EMDUR, Como posso ajudar você hoje?\n\n` +
            `1. Solicitar um ponto de iluminação\n` +
            `2. Verificar andamento de pedido de iluminação\n` +
            `3. Falar com um atendente humano`
        );
    }
}

module.exports = fluxoInicial;
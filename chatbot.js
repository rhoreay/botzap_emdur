const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const fluxoInicial = require("./fluxos/inicial")

//Criando nova instancia de Client
const client = new Client({
    authStrategy: new LocalAuth()
});

//Quando o cliente estiver ok, vai rodar esse código, apenas uma vez
client.once('ready', ()=>{
    console.log('Client está ok !');
});

//Imprime QR Code quando pronto
client.once('qr', (qr)=>{
    qrcode.generate(qr, {small: true});
});

//Inicializa o bot
client.initialize();


//Definindo mensagem de ativação
const mensagemAtivacao = "ola EMDUR";

//Objeto em cache para armazenar info do cidadão (State da conversa, nome completo, cpf e tipo de reclamacao)
const estadoUsuarios = {} // a chave desse dicionário vai ser o Id do chat de cada cidadão (pegamos o Id usando message.from)

//Possiveis estados da conversa
const ESTADOS_CONVERSAS = {
    INICIAL: 'inicial, esperando a mensagem de ativação',
    ESPERA_DEMANDA: 'esperando usuário definir qual o tipo da demanda',
    ESPERA_NOMECOMPLETO: 'esperando o usuario retornar seu nome completo',
    ESPERA_CPF: 'espera usuario retornar seu cpf',
    ESPERA_DATANASC: 'espera usuario retornar sua data de nascimento'
}


//Recebendo e lendo mensagens
client.on("message", async (message) => {
    //Pega o Id da conversa e chat
    idConversa = message.from;
    chat = message.getChat()

    //Ignora a mensagem caso tenha sido enviada pelo proprio bot
    if(message.fromMe) return;

    //Verifica se existe registro desse chat no 'banco de dados', que nesse momento é o dict estadoUsuarios
    if(!estadoUsuarios[idConversa]){
        estadoUsuarios[idConversa] = {
            estado: ESTADOS_CONVERSAS.INICIAL,
            dados_usuario: {
                nome_completo: "",
                cpf: "",
                data_nasc: ""
            }
        }
    }

    //Pega o estado atual da conversa        
    const estadoAtual = estadoUsuarios[idConversa].estado

    //Logica para qual fluxo a conversa deve seguir
    switch(estadoAtual){
        //1. Estado inicial
        case ESTADOS_CONVERSAS.INICIAL:
            fluxoInicial(client, chat, message, idConversa, mensagemAtivacao, estadoUsuarios);
            break;
            
        case ESTADOS_CONVERSAS.ESPERA_DEMANDA:
            
    }

})
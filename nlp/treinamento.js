const { NlpManager } = require('node-nlp');
const fs = require('fs');

(async () => {
    const manager = new NlpManager({ languages: ['pt'], forceNER: true });

    // 1. Solicitar um ponto de iluminação
    manager.addDocument('pt', 'solicitar ponto de iluminação', 'solicitar_iluminacao');
    manager.addDocument('pt', 'quero um novo poste de luz', 'solicitar_iluminacao');
    manager.addDocument('pt', 'preciso de iluminação nova na minha rua', 'solicitar_iluminacao');
    manager.addDocument('pt', 'como faço para pedir um poste de luz?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'minha rua está escura, preciso de iluminação', 'solicitar_iluminacao');
    manager.addDocument('pt', 'desejo solicitar instalação de lâmpada pública', 'solicitar_iluminacao');
    manager.addDocument('pt', 'quero pedir um ponto de luz na minha área', 'solicitar_iluminacao');
    manager.addDocument('pt', 'esta região precisa de mais iluminação pública', 'solicitar_iluminacao');
    manager.addDocument('pt', 'como solicitar um novo ponto de iluminação?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'gostaria de pedir instalação de poste de luz', 'solicitar_iluminacao');
    manager.addDocument('pt', 'aqui está muito escuro à noite, precisamos de luz', 'solicitar_iluminacao');
    manager.addDocument('pt', 'quero registrar pedido de iluminação pública', 'solicitar_iluminacao');
    manager.addDocument('pt', 'o poste daqui ta piscando muito', 'solicitar_iluminacao');
    manager.addDocument('pt', 'o poste da minha casa ta ruim', 'solicitar_iluminacao');
    manager.addDocument('pt', 'minha casa ta escura', 'solicitar_iluminacao');
    manager.addDocument('pt', 'arruma a luz aqui da rua', 'solicitar_iluminacao');
    manager.addDocument('pt', 'ta muito escuro aqui', 'solicitar_iluminacao');
    manager.addDocument('pt', 'precisa de novo poste', 'solicitar_iluminacao');
    manager.addDocument('pt', 'nao tem luz', 'solicitar_iluminacao');
    manager.addDocument('pt', 'o poste esta apagado', 'solicitar_iluminacao');
    manager.addDocument('pt', 'o poste não está funcionando', 'solicitar_iluminacao');

    // Solicitação genérica
    manager.addDocument('pt', 'Gostaria de formalizar uma solicitação de instalação de ponto de iluminação', 'solicitar_iluminacao');
    manager.addDocument('pt', 'Como devo proceder para requisitar a implantação de iluminação pública?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'Desejo registrar oficialmente a necessidade de um novo poste de iluminação', 'solicitar_iluminacao');
    manager.addDocument('pt', 'Qual é o processo para solicitar pontos de luz adicional no meu bairro?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'Necessito acionar o serviço público para instalação de iluminação', 'solicitar_iluminacao');

    // Localização específica
    manager.addDocument('pt', 'Precisamos de iluminação na Rua das Flores, próximo ao número 50', 'solicitar_iluminacao');
    manager.addDocument('pt', 'Solicito poste de luz na Avenida Principal, altura do mercado', 'solicitar_iluminacao');
    manager.addDocument('pt', 'Falta iluminação no cruzamento da Rua A com Rua B', 'solicitar_iluminacao');
    manager.addDocument('pt', 'Todo o trecho da Estrada Velha necessita de novos pontos de luz', 'solicitar_iluminacao');
    manager.addDocument('pt', 'O Parque Municipal está muito escuro à noite, precisamos de postes', 'solicitar_iluminacao');

    // Problemas específicos
    manager.addDocument('pt', 'Os postes existentes estão com espaçamento muito grande', 'solicitar_iluminacao');
    manager.addDocument('pt', 'A iluminação atual é insuficiente para a extensão da via', 'solicitar_iluminacao');
    manager.addDocument('pt', 'Esta área foi urbanizada mas não recebeu iluminação pública', 'solicitar_iluminacao');
    manager.addDocument('pt', 'Com o novo loteamento, surgiu a necessidade de mais postes', 'solicitar_iluminacao');
    manager.addDocument('pt', 'A comunidade está se mobilizando para pedir melhor iluminação', 'solicitar_iluminacao');

    // Variações comuns
    manager.addDocument('pt', 'ô prefeitura, bota um poste aqui!', 'solicitar_iluminacao');
    manager.addDocument('pt', 'tá um breu danado aqui, cadê a luz?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'meu bairro tá parecendo caverna de tão escuro', 'solicitar_iluminacao');
    manager.addDocument('pt', 'nem vê a mão na frente do rosto aqui de noite', 'solicitar_iluminacao');
    manager.addDocument('pt', 'botem luz aqui pelo amor de deus', 'solicitar_iluminacao');
    manager.addDocument('pt', 'a prefeitura esqueceu da gente, sem luz nenhuma', 'solicitar_iluminacao');
    manager.addDocument('pt', 'quando que vão colocar luz nesse fim de mundo?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'tá na hora de iluminar essa área esquecida', 'solicitar_iluminacao');
    manager.addDocument('pt', 'aqui parece filme de terror de tão escuro', 'solicitar_iluminacao');
    manager.addDocument('pt', 'não aguento mais andar no escuro', 'solicitar_iluminacao');

    // Variações com gírias regionais
    manager.addDocument('pt', 'bota um facho aí, meu!', 'solicitar_iluminacao');
    manager.addDocument('pt', 'tá osso andar nesse trem escuro', 'solicitar_iluminacao');
    manager.addDocument('pt', 'mó paia ficar nesse breu', 'solicitar_iluminacao');
    manager.addDocument('pt', 'cê pode arrumar um poste pra nós?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'vamo clarar isso aqui, meu povo!', 'solicitar_iluminacao');

    // Erros comuns
    manager.addDocument('pt', 'preciso de um posti de luz', 'solicitar_iluminacao');
    manager.addDocument('pt', 'minha ru ta precizano de iluminasao', 'solicitar_iluminacao');
    manager.addDocument('pt', 'solissito um ponto de iluminaçao', 'solicitar_iluminacao');
    manager.addDocument('pt', 'kero um poste de luz na minha rua', 'solicitar_iluminacao');
    manager.addDocument('pt', 'a rua ta iscura presizo de luz', 'solicitar_iluminacao');
    manager.addDocument('pt', 'poste apagado na esquina da rua x', 'solicitar_iluminacao');
    manager.addDocument('pt', 'não tem iluminação na minha localidade', 'solicitar_iluminacao');
    manager.addDocument('pt', 'o poste da frente quebrou e está sem luz', 'solicitar_iluminacao');
    manager.addDocument('pt', 'quero reportar falta de iluminação pública', 'solicitar_iluminacao');
    manager.addDocument('pt', 'como faço para pedir um novo poste?', 'solicitar_iluminacao');

    // Variacoes perguntas
    manager.addDocument('pt', 'onde posso pedir instalação de poste?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'qual o telefone para solicitar iluminação?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'tem algum site para pedir poste novo?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'quem eu procuro pra resolver falta de luz pública?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'demora muito pra instalar um poste novo?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'preciso de iluminação, qual o primeiro passo?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'existe algum formulário para pedir poste?', 'solicitar_iluminacao');
    manager.addDocument('pt', 'a prefeitura fornece instalação de postes?', 'solicitar_iluminacao');



    // 2. Verificar andamento de pedido já feito
    manager.addDocument('pt', 'verificar andamento', 'verificar_andamento');
    manager.addDocument('pt', 'status do pedido', 'verificar_andamento');
    manager.addDocument('pt', 'como está meu pedido de iluminação?', 'verificar_andamento');
    manager.addDocument('pt', 'quero saber sobre minha solicitação', 'verificar_andamento');
    manager.addDocument('pt', 'consultar status de requisição', 'verificar_andamento');
    manager.addDocument('pt', 'onde está meu pedido de poste?', 'verificar_andamento');
    manager.addDocument('pt', 'como acompanhar minha solicitação', 'verificar_andamento');
    manager.addDocument('pt', 'qual o andamento do meu processo?', 'verificar_andamento');
    manager.addDocument('pt', 'já fiz um pedido, quero atualizações', 'verificar_andamento');
    manager.addDocument('pt', 'consultar andamento de serviço', 'verificar_andamento');
    manager.addDocument('pt', 'quero saber se meu pedido foi atendido', 'verificar_andamento');
    manager.addDocument('pt', 'como saber se já vão instalar o poste?', 'verificar_andamento');
    manager.addDocument('pt', 'status da minha reclamação', 'verificar_andamento');
    manager.addDocument('pt', 'queria saber como ta minha solicitacao', 'verificar_andamento');
    manager.addDocument('pt', 'nao vai arrumar nunca?', 'verificar_andamento');
    manager.addDocument('pt', 'ainda não arrumaram minha luz', 'verificar_andamento');
    manager.addDocument('pt', 'ainda ta escuro aqui', 'verificar_andamento');

    // Frases formais
    manager.addDocument('pt', 'Gostaria de verificar o status atual da minha solicitação de iluminação pública', 'verificar_andamento');
    manager.addDocument('pt', 'Como posso obter informações sobre o andamento do meu pedido de instalação de poste?', 'verificar_andamento');
    manager.addDocument('pt', 'Desejo consultar o estágio processual da minha requisição de iluminação', 'verificar_andamento');
    manager.addDocument('pt', 'Qual a situação atual do processo de instalação de iluminação que solicitei?', 'verificar_andamento');
    manager.addDocument('pt', 'Preciso de um feedback sobre o pedido de colocação de poste que realizei', 'verificar_andamento');
    manager.addDocument('pt', 'Como faço para acompanhar o desenvolvimento da minha solicitação?', 'verificar_andamento');
    manager.addDocument('pt', 'Existe alguma previsão para atendimento do meu pedido de iluminação?', 'verificar_andamento');
    manager.addDocument('pt', 'Gostaria de saber em que fase está a análise da minha demanda por iluminação', 'verificar_andamento');
    manager.addDocument('pt', 'Qual o prazo estimado para resolução do meu caso?', 'verificar_andamento');
    manager.addDocument('pt', 'Solicito informações atualizadas sobre o protocolo de iluminação pública', 'verificar_andamento');

    // Frases informais
    manager.addDocument('pt', 'e aí, já vai colocar o poste ou não?', 'verificar_andamento');
    manager.addDocument('pt', 'cadê meu poste que não chega?', 'verificar_andamento');
    manager.addDocument('pt', 'já faz tempo que pedi, quando vai resolver?', 'verificar_andamento');
    manager.addDocument('pt', 'tá demorando muito pra arrumar isso', 'verificar_andamento');
    manager.addDocument('pt', 'quando que vem consertar a luz aqui?', 'verificar_andamento');
    manager.addDocument('pt', 'já tão vindo instalar o poste ou não?', 'verificar_andamento');
    manager.addDocument('pt', 'ninguém vem resolver isso aqui', 'verificar_andamento');
    manager.addDocument('pt', 'tá em cima da hora de arrumarem isso', 'verificar_andamento');
    manager.addDocument('pt', 'quero saber se já tão vindo resolver', 'verificar_andamento');
    manager.addDocument('pt', 'cadê a promessa de colocar luz aqui?', 'verificar_andamento');
    manager.addDocument('pt', 'tá demorando mais que o normal', 'verificar_andamento');
    manager.addDocument('pt', 'quando vai sair do papel meu pedido?', 'verificar_andamento');
    manager.addDocument('pt', 'já devia ter vindo arrumar isso', 'verificar_andamento');
    manager.addDocument('pt', 'quero saber se esqueceram do meu caso', 'verificar_andamento');
    manager.addDocument('pt', 'isso aqui tá virando caso de esquecimento', 'verificar_andamento');

    // Frases com erros ortograficos
    manager.addDocument('pt', 'kero saber do meu pedido', 'verificar_andamento');
    manager.addDocument('pt', 'kandê a solução pro meu problema', 'verificar_andamento');
    manager.addDocument('pt', 'ja fes tempo q pedi', 'verificar_andamento');
    manager.addDocument('pt', 'ainda nao resolveram meu caso', 'verificar_andamento');
    manager.addDocument('pt', 'status da minha solisitação', 'verificar_andamento');
    manager.addDocument('pt', 'kual o andamento', 'verificar_andamento');
    manager.addDocument('pt', 'meu pedido ta emperrado', 'verificar_andamento');
    manager.addDocument('pt', 'ainda nao foi atentido', 'verificar_andamento');
    manager.addDocument('pt', 'quero atulização', 'verificar_andamento');
    manager.addDocument('pt', 'minha rua continua no escuru', 'verificar_andamento');
    manager.addDocument('pt', 'nunka mais vão resolver?', 'verificar_andamento');
    manager.addDocument('pt', 'esqueceram do meu posti', 'verificar_andamento');
    manager.addDocument('pt', 'ja devia tar resolvido isso', 'verificar_andamento');
    manager.addDocument('pt', 'quero sabr se vai demorar muito', 'verificar_andamento');
    manager.addDocument('pt', 'ta demorano demais', 'verificar_andamento');

    // Variacoes com numero de protocolo
    manager.addDocument('pt', 'qual o status do protocolo 123456?', 'verificar_andamento');
    manager.addDocument('pt', 'quero saber sobre meu pedido número 7890', 'verificar_andamento');
    manager.addDocument('pt', 'como está a solicitação AB1234?', 'verificar_andamento');
    manager.addDocument('pt', 'consultar andamento do protocolo XPTO567', 'verificar_andamento');
    manager.addDocument('pt', 'status da minha requisição 2023-456', 'verificar_andamento');
    manager.addDocument('pt', 'meu pedido de número 112233 está em que fase?', 'verificar_andamento');
    manager.addDocument('pt', 'atualização sobre o caso 445566', 'verificar_andamento');
    manager.addDocument('pt', 'informações sobre o protocolo ILUM-789', 'verificar_andamento');
    manager.addDocument('pt', 'já faz 15 dias que abri o pedido 98765', 'verificar_andamento');
    manager.addDocument('pt', 'meu protocolo 54321 está parado', 'verificar_andamento');

    // 3. Falar com um atendente humano
    manager.addDocument('pt', 'falar com atendente', 'falar_atendente');
    manager.addDocument('pt', 'quero falar com humano', 'falar_atendente');
    manager.addDocument('pt', 'atendimento humano por favor', 'falar_atendente');
    manager.addDocument('pt', 'posso conversar com uma pessoa?', 'falar_atendente');
    manager.addDocument('pt', 'não estou conseguindo resolver com o bot', 'falar_atendente');
    manager.addDocument('pt', 'chamar atendente', 'falar_atendente');
    manager.addDocument('pt', 'preciso de ajuda humana', 'falar_atendente');
    manager.addDocument('pt', 'bot não entendeu minha solicitação', 'falar_atendente');
    manager.addDocument('pt', 'quero ser atendido por uma pessoa', 'falar_atendente');
    manager.addDocument('pt', 'me transfira para um atendente', 'falar_atendente');
    manager.addDocument('pt', 'não encontrei o que precisava aqui', 'falar_atendente');
    manager.addDocument('pt', 'problema complexo, preciso de humano', 'falar_atendente');
    manager.addDocument('pt', 'opção para atendimento pessoal', 'falar_atendente');

    // Frases formais
    manager.addDocument('pt', 'Gostaria de ser atendido por um representante humano, por favor', 'falar_atendente');
    manager.addDocument('pt', 'Solicito transferência para o atendimento pessoal', 'falar_atendente');
    manager.addDocument('pt', 'Por gentileza, conecte-me com um agente humano', 'falar_atendente');
    manager.addDocument('pt', 'Desejo falar com um atendente qualificado', 'falar_atendente');
    manager.addDocument('pt', 'Preciso de assistência além do que este sistema pode fornecer', 'falar_atendente');
    manager.addDocument('pt', 'Este assunto requer intervenção humana', 'falar_atendente');
    manager.addDocument('pt', 'Gostaria de acessar o serviço de atendimento personalizado', 'falar_atendente');
    manager.addDocument('pt', 'Por favor, direcione meu chamado para um especialista', 'falar_atendente');
    manager.addDocument('pt', 'Solicito contato com um operador do serviço', 'falar_atendente');
    manager.addDocument('pt', 'Este caso exige atenção de um profissional', 'falar_atendente');
    manager.addDocument('pt', 'Não estou obtendo a ajuda necessária através deste canal automatizado', 'falar_atendente');
    manager.addDocument('pt', 'Por favor, me coloque em contato com seu supervisor', 'falar_atendente');
    manager.addDocument('pt', 'Necessito de orientação especializada que apenas um humano pode fornecer', 'falar_atendente');
    manager.addDocument('pt', 'Este problema não pode ser resolvido por sistema automatizado', 'falar_atendente');
    manager.addDocument('pt', 'Gostaria de registrar minha solicitação diretamente com um atendente', 'falar_atendente');

    // Frases informais
    manager.addDocument('pt', 'me bota com alguém aí, por favor!', 'falar_atendente');
    manager.addDocument('pt', 'chega de bot, quero gente de verdade!', 'falar_atendente');
    manager.addDocument('pt', 'cadê o humano nesse atendimento?', 'falar_atendente');
    manager.addDocument('pt', 'alô, tem alguém aí?', 'falar_atendente');
    manager.addDocument('pt', 'para com essa robótica e me passa um humano', 'falar_atendente');
    manager.addDocument('pt', 'tô cansado dessa conversa com máquina', 'falar_atendente');
    manager.addDocument('pt', 'me tira desse chat automático', 'falar_atendente');
    manager.addDocument('pt', 'não aguento mais falar com robô', 'falar_atendente');
    manager.addDocument('pt', 'só quero falar com uma pessoa real', 'falar_atendente');
    manager.addDocument('pt', 'para de enrolar e me passa pra alguém', 'falar_atendente');
    manager.addDocument('pt', 'já tentei de tudo, agora quero um humano', 'falar_atendente');
    manager.addDocument('pt', 'isso aqui não tá adiantando, me transfere', 'falar_atendente');
    manager.addDocument('pt', 'me ajuda, robô burro! chama alguém', 'falar_atendente');
    manager.addDocument('pt', 'tô há meia hora nisso, chega!', 'falar_atendente');
    manager.addDocument('pt', 'você não tá me ajudando, quero um humano', 'falar_atendente');
    manager.addDocument('pt', 'me tira dessa enrascada e chama gente', 'falar_atendente');
    manager.addDocument('pt', 'não é possível que não tenha ninguém pra me atender', 'falar_atendente');
    manager.addDocument('pt', 'meu problema é sério, quero atendimento humano', 'falar_atendente');
    manager.addDocument('pt', 'já desisti, só quero falar com pessoa agora', 'falar_atendente');
    manager.addDocument('pt', 'meu caso é complicado demais pra robô', 'falar_atendente');

    // Frases com erros ortograficos
    manager.addDocument('pt', 'fala cm um atendenti pfv', 'falar_atendente');
    manager.addDocument('pt', 'kero fala com jente', 'falar_atendente');
    manager.addDocument('pt', 'atendimentu humanu pur favô', 'falar_atendente');
    manager.addDocument('pt', 'robot num ta entendeno', 'falar_atendente');
    manager.addDocument('pt', 'precisu di um umanu', 'falar_atendente');
    manager.addDocument('pt', 'manda um atendenti pra mim', 'falar_atendente');
    manager.addDocument('pt', 'num quero mais fala com maquina', 'falar_atendente');
    manager.addDocument('pt', 'bot burro, chama alguem que presta', 'falar_atendente');
    manager.addDocument('pt', 'quero um atendente de verdade', 'falar_atendente');
    manager.addDocument('pt', 'para com essa frescura e me passa pra gente', 'falar_atendente');
    manager.addDocument('pt', 'ja tentei de tudo, chama um humano', 'falar_atendente');
    manager.addDocument('pt', 'isso aqui nao ta adiantando nada', 'falar_atendente');
    manager.addDocument('pt', 'me ajuda, chama alguem que resolva', 'falar_atendente');
    manager.addDocument('pt', 'to ha meia hora nessa, chega', 'falar_atendente');
    manager.addDocument('pt', 'voce nao ta me ajudando, quero humano', 'falar_atendente');

    // Frases com urgencia
    manager.addDocument('pt', 'URGENTE: preciso falar com atendente agora!', 'falar_atendente');
    manager.addDocument('pt', 'situação de emergência, transfira para humano', 'falar_atendente');
    manager.addDocument('pt', 'problema grave, necessito de atendimento imediato', 'falar_atendente');
    manager.addDocument('pt', 'isso não pode esperar, chame um supervisor', 'falar_atendente');
    manager.addDocument('pt', 'prioridade máxima: falar com atendente', 'falar_atendente');
    manager.addDocument('pt', 'meu caso é extremamente urgente', 'falar_atendente');
    manager.addDocument('pt', 'não tenho tempo para isso, preciso de humano', 'falar_atendente');
    manager.addDocument('pt', 'isso é emergência, pare o chatbot', 'falar_atendente');
    manager.addDocument('pt', 'me transfira imediatamente', 'falar_atendente');
    manager.addDocument('pt', 'sem tempo a perder, quero atendimento humano', 'falar_atendente');~

    // Frases com motivação
    manager.addDocument('pt', 'URGENTE: preciso falar com atendente agora!', 'falar_atendente');
    manager.addDocument('pt', 'situação de emergência, transfira para humano', 'falar_atendente');
    manager.addDocument('pt', 'problema grave, necessito de atendimento imediato', 'falar_atendente');
    manager.addDocument('pt', 'isso não pode esperar, chame um supervisor', 'falar_atendente');
    manager.addDocument('pt', 'prioridade máxima: falar com atendente', 'falar_atendente');
    manager.addDocument('pt', 'meu caso é extremamente urgente', 'falar_atendente');
    manager.addDocument('pt', 'não tenho tempo para isso, preciso de humano', 'falar_atendente');
    manager.addDocument('pt', 'isso é emergência, pare o chatbot', 'falar_atendente');
    manager.addDocument('pt', 'me transfira imediatamente', 'falar_atendente');
    manager.addDocument('pt', 'sem tempo a perder, quero atendimento humano', 'falar_atendente');

    // Treina e salva o modelo
    console.log("Treinando modelo NLP...");
    await manager.train();
    manager.save('./nlp/modelo.nlp');
    console.log("Modelo treinado e salvo em /nlp/modelo.nlp");
})();

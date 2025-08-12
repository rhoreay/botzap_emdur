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
    manager.addDocument('pt', 'como consigo um poste de iluminação na minha rua?', 'solicitar_iluminacao');

    // 2. Comunicar mal funcionamento de ponto de iluminação
    manager.addDocument('pt', 'lâmpada queimada', 'comunicar_problema');
    manager.addDocument('pt', 'poste apagado', 'comunicar_problema');
    manager.addDocument('pt', 'o poste da minha rua não está funcionando', 'comunicar_problema');
    manager.addDocument('pt', 'tem uma lâmpada piscando na avenida', 'comunicar_problema');
    manager.addDocument('pt', 'poste com defeito na minha região', 'comunicar_problema');
    manager.addDocument('pt', 'quero reportar um problema na iluminação', 'comunicar_problema');
    manager.addDocument('pt', 'a luz pública está queimada', 'comunicar_problema');
    manager.addDocument('pt', 'tem um poste quebrado no meu bairro', 'comunicar_problema');
    manager.addDocument('pt', 'como denunciar iluminação pública defeituosa?', 'comunicar_problema');
    manager.addDocument('pt', 'notificar defeito em poste de luz', 'comunicar_problema');
    manager.addDocument('pt', 'poste com fios expostos', 'comunicar_problema');
    manager.addDocument('pt', 'lâmpada pública intermitente', 'comunicar_problema');
    manager.addDocument('pt', 'iluminação da praça não está funcionando', 'comunicar_problema');

    // 3. Verificar andamento de pedido já feito
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

    // 4. Falar com um atendente humano
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

    // Treina e salva o modelo
    console.log("Treinando modelo NLP...");
    await manager.train();
    manager.save('./nlp/modelo.nlp');
    console.log("Modelo treinado e salvo em /nlp/modelo.nlp");
})();
const { NlpManager } = require("node-nlp")
const { Language, SpellCheck } = require("node-nlp")

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const manager = new NlpManager({
    languages: ['pt'],
    nlu: { useSpellCheck: true }, //corrige erros gramaticais
    threshold: 0.85 //nota de corte da semelhança para ser vinculado à um intent
})

manager.load('nlp/modelo.nlp');


//loop usando função recursiva
const perguntar = () => {
    rl.question('Digite a frase de teste: ', async (fraseTeste) => {
        if (fraseTeste.toLowerCase() === 'sair') {
            console.log('Encerrando...');
            rl.close();
            return;
        }
        
        const result = await manager.process(fraseTeste);
        console.log(result.intent)
        console.log(result.score)
        console.log(result)
        
        perguntar();
    });
};

perguntar();
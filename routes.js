const express = require('express');
const routes = express.Router();
//const apiCallFromRequest = require('./Request')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();
const turmaController = require('./controllers/turmaController')
const auxController = require('./controllers/auxController')
const questionarioController = require('./controllers/questionarioController')
const grmQuestionarioController = require('./controllers/grmQuestionarioController')
const webSocketController = require('./webSocketController')

routes.get('/ping', (req, res) => {
    res.status(200).send('pong');
});

//rota de retorno da turma
//funcionando
routes.get('/turma',turmaController.getTurma);
routes.get('/getTurmas',turmaController.getTurmas);
//funcionando
routes.get('/Questionarios',questionarioController.getQuestionario);
routes.get('/gerarCodigo',questionarioController.gerarCodigo);
routes.post('/carregaQuestionario',jsonParser,questionarioController.carregaQuestionario);
routes.post('/getTurmaTeste',jsonParser,turmaController.getTurmaTeste);
routes.post('/cadastraQuestionario',jsonParser,grmQuestionarioController.cadastraQuestionario);
routes.post('/updateQuestionario',jsonParser,grmQuestionarioController.atualizaQuestionario);
routes.post('/deletarQuestionario',jsonParser,grmQuestionarioController.deletarQuestionario);
routes.get('/getQuestionarioTeste',questionarioController.getQuestionarioTeste);
routes.get('/retornaQuestaoAtual',questionarioController.retornaQuestaoAtual);
routes.post('/conectarAluno',jsonParser,questionarioController.conectarAluno);
routes.post('/gravarRespostas',jsonParser,questionarioController.gravarRespostas );
routes.post('/enviaEmail',jsonParser,auxController.enviaEmail );
routes.post('/salvaPontuacao',jsonParser,questionarioController.salvaPontuacao);
routes.get('/alunosConectados',questionarioController.alunosConectados);
routes.get('/getQuestoes',questionarioController.getQuestoes);
routes.post('/getQuestionarioAluno',jsonParser,questionarioController.getQuestionarioAluno);
//routes.get('/proxQuestao',questionarioController.getProximaQuestao);
routes.post('/conectaQuestionario',jsonParser,questionarioController.liberaQuestionario);
//routes.get('/enableGetQuestionario',questionarioController.enableGetQuestionario);
routes.get('/iniciaQuestionario',questionarioController.iniciaQuestionario);
routes.get('/liberaProximaQuestao',questionarioController.liberaProximaQuestao);
//funcionando
routes.post('/carregaturma',jsonParser,questionarioController.carregaTurma);
routes.get('/retornaPodio',questionarioController.retornaPodio);
routes.get('/limparEstado',questionarioController.limparEstado);
routes.get('/getAssuntos',questionarioController.getAssuntos);


module.exports = routes;




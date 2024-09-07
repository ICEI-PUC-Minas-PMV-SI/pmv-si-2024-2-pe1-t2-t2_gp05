# Especificações do Projeto

Esta aplicação web serve para fornecer acessibilidade e transparência a pessoas que procurem servícios advocatícios, oferecendo um meio da pessoa poder acompanhar o trabalho do advogado e saber a qualquer momento como se encontra o estado do seu processo, sem precisar de entrar em contato com o advogado responsável.

## Personas

Felipe Henrique 

Advogado 

Idade: 27 anos

Felipe é um advogado júnior em início de carreira em um escritório de advocacia, onde lida com muitos processos. Ele precisa de uma plataforma que o ajude a organizar prazos, gerenciar demandas e manter contato eficiente com seus clientes. Com afinidade por tecnologia, Felipe busca ferramentas que simplifiquem sua rotina e aumentem sua produtividade, proporcionando controle sobre os casos. Ele valoriza soluções que otimizem seu tempo e facilitem a gestão interna dos processos, permitindo que ele mantenha os clientes atualizados e cumpra suas responsabilidades de maneira eficiente.

Roberto Gonçalves

Aposentado em Litígio Previdenciário 

Idade: 65 anos

Roberto é um aposentado do interior que trabalhou a vida toda na cidade grande, envolvido em uma disputa sobre a revisão de sua aposentadoria. Com pouca familiaridade com tecnologia, ele necessita de uma plataforma simples e intuitiva para acompanhar o processo e receber notificações por e-mail ou SMS. Seu principal objetivo é entender o andamento do caso de forma clara e objetiva, sem complicações. Roberto aprecia uma interface fácil de usar que lhe permita acessar as informações necessárias com rapidez, proporcionando segurança e compreensão durante o processo.

Ana Clara Almeida

Ação de Pensão Alimentícia

Idade: 38 anos

Ana Clara foi contratada por uma grande empresa como assistente administrativa, mas está com medo do processo de admissão por estar envolvida em um processo judicial relacionado à pensão alimentícia de seu filho. Ela procura uma plataforma que lhe permita acompanhar todas as etapas de forma detalhada e transparente. Ana Clara é uma pessoa organizada e deseja estar constantemente informada sobre o andamento do caso, apreciando uma comunicação clara e direta com seu advogado. Embora não seja especialista em tecnologia, ela utiliza aplicativos frequentemente e valoriza plataformas que sejam fáceis de usar, com uma interface clara para garantir sua confiança e tranquilidade durante o processo.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ana (Cliente)       | Rapidez e flexíbilidade            | Acompanhar seus processos              |
|Advogado(Empregado) | Facilidade nos serviços            | Economizar tempo                       |
| Empresa(Escritorio)| Agilizar os trabalhos da empresa   | Conseguir ter mais clientes            |
| Roberto(Cliente)   | Acompanhar de forma remota     | Nao precisar sair de casa              |
|Advogado(Empregado) | Se comunicar com o cliente         | Ter um controle melhor das informações |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | 
|------|-----------------------------------------|----| 
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | ALTA |  
|RF-002| A aplicação deve permitir a emissão de um relatório de tarefas realizadas no mês   | MÉDIA | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

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
|RF-001| O sistema deve permitir que os usuários se registrem e façam login, fornecendo nome, e-mail e dados de contato.  | ALTA |  
|RF-002| Enviar notificações automáticas aos usuários quando houver atualizações no processo, como novas datas ou documentos.   | ALTA | 
|RF-003| Deve permitir que os clientes conversem com seus advogados por mensagens e que essas mensagens fiquem registradas.   | MÉDIA |
|RF-004| Ter uma área onde o advogado consiga gerar relatórios simples sobre o andamento dos processos.   | MÉDIA |
|RF-005| Mostrar uma linha do tempo simples com as etapas do processo.  | ALTA |
|RF-006| Permitir que os advogados enviem documentos para os clientes, e os clientes possam baixá-los.  | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Deve ter suporte técnico com resposta em até 24 horas úteis. | MÉDIA | 
|RNF-002| Deve funcionar bem tanto em computadores quanto em celulares e tablets.  | ALTA |
|RNF-003| O site deve estar disponível a maior parte do tempo, com interrupções apenas para manutenção programada.  | ALTA |
|RNF-004| As tecnologias fundamentais para o sistema são HTML, CSS e Javascript. |  ALTA |
|RNF-005| O site deve funcionar bem em conexões lentas e dispositivos móveis.  | ALTA |
|RNF-006| O site deve garantir a segurança dos dados dos usuários e cumprir as regras da LGPD.  | ALTA |


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

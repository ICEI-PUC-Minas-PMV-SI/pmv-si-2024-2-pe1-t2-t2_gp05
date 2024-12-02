# Testes

Neste projeto serão realizados dois tipos de testes:
 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

A documentação dos testes é dividida nas seguintes seções:
 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Plano de Testes de Usabilidade](#plano-de-testes-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)
<br>

# Teste de Software

**Responsável pelo Planejamento dos Testes de Caso:** <br> Carolina Araujo <br>

**Responsável pela Execução dos Testes e Registro de Evidências:** <br> Carolina Araujo

<br>

## Plano de Testes de Software

Este documento apresenta os casos de teste desenvolvidos para o projeto de aplicação web, baseado na framework ATDD (Acceptance Test-Driven Development). Essa abordagem garante que os testes atendam rigorosamente aos critérios de aceitação definidos em cada User Story, promovendo alinhamento entre as expectativas dos stakeholders e o comportamento do sistema.

Os casos de teste estão documentados de forma detalhada, com foco na rastreabilidade e na validação dos requisitos. Cada caso de teste é composto pelas seguintes informações:

- **ID:**  Identificador único para rastreamento do caso de teste <br>
- **Título:**  Nome descritivo para o caso de teste <br>
- **User Story Associada:**  A User Story que originou o caso de teste, estabelecendo vínculo para rastreabilidade <br>
- **Descrição:**  Objetivo do caso de teste em relação à funcionalidade avaliada <br>
- **Pré-condições:**  Condições que devem ser atendidas antes da execução do teste <br>
- **Procedimento:**  Passos necessários para a execução do teste <br>
- **Dados de Entrada:**  Dados requeridos para a realização do teste <br>
- **Resultado Esperado:**  Comportamento esperado do sistema após a execução do teste <br>
- **Resultado Obtido:**  Resultado observado após a execução do teste <br>
  
<br>

**Caso de Teste** | **CT01 - Cadastrar Usuário com Dados Válidos**
 :--------------: | ------------
**User Story Associada** | US-01
**Descrição**     | Verificar se o sistema permite cadastrar um usuário corretamente ao preencher todos os campos do formulário de cadastro com dados válidos
**Pré-condições** | Usuário possuir acesso à aplicação
**Procedimento**  | 1) Abra o arquivo registration.html  <br> 2) Preencha todos os campos do formulário de cadastro com dados válidos <br> 3) Escolha um tipo de perfil <br> 4) Clique no botão "Criar Conta"
**Dados de Entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado Esperado** | O usuário é cadastrado corretamente, uma mensagem de sucesso é exibida ao usuário com o texto "Conta criada com sucesso!", e ele é redirecionado para a página de login
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT02 - Cadastrar Usuário com Dados Inválidos (Senhas Não Coincidem)**
 :--------------: | ------------
**User Story Associada** | US-01
**Descrição**     | Verificar se o sistema valida o cadastro ao tentar cadastrar um usuário com senhas que não coincidem
**Pré-condições** | Usuário possuir acesso à aplicação
**Procedimento**  |  1) Abra o arquivo registration.html  <br> 2) Preencha os campos "Nome", "Email" e "Tipo Perfil" com dados válidos <br> 3) Preencha o campos campos "Senha" e "Confirmação de Senha" com informações distintas <br> 4) Clique no botão "Criar Conta"
**Dados de Entrada** | Inserção de dados inválidos no formulário de cadastro com senha e repetição de senha que não coincidem
**Resultado Esperado** | O sistema não permite o cadastro e uma mensagem de erro é exibida ao utilizador, alertando que "As senhas não coincidem"
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT03 - Cadastrar Usuário com Dados Inválidos (Email Já Cadastrado)**
 :--------------: | ------------
**User Story Associada** | US-01
**Descrição**     | Verificar se o sistema valida o cadastro ao tentar cadastrar um usuário com email já cadastrado anteriormente
**Pré-condições** | Usuário possuir acesso à aplicação
**Procedimento**  |  1) Abra o arquivo registration.html  <br> 2) Preencha os campos "Nome", "Senha", "Repetição Senha" e "Tipo Perfil" com dados válidos<br> 3) Preencha o campo "Email" com dado já cadastrado anteriormente <br> 4) Clique no botão "Criar Conta"
**Dados de Entrada** | Inserção de dado inválido no formulário de cadastro com informação de email previamente cadastrado
**Resultado Esperado** | O sistema não permite o cadastro e uma mensagem de erro é exibida ao utilizador, alertando que "Email já está registrado"
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT04 - Cadastrar Usuário com Campos Obrigatórios Vazios**
 :--------------: | ------------
**User Story Associada** | US-01
**Pré-condições** | Usuário possuir acesso à aplicação
**Descrição**     | Verificar se o sistema valida os campos obrigatórios vazios no processo de cadastro
**Procedimento**  | 1) Abra o arquivo registration.html  <br> 2) Insira um arquivo jpg no campo "Foto perfil" <br> 3)  Deixe os campos "Nome", "Email", "Senha", "Confirmação Senha" e "Tipo de Perfil" vazios, omitindo um por vez <br> 3) Clique no botão "Criar Conta" a cada tentativa <br> 
**Dados de Entrada** | Dados incompletos, com um campo obrigatório vazio a cada tentativa ("Nome", "Email", "Senha", "Confirmação Senha" e "Tipo de Perfil")
**Resultado Esperado** | O sistema impede o cadastro a cada tentativa com o campo obrigatório vazio e exibe uma mensagem de erro ao usuário com o texto "Preencha todos os campos obrigatórios"
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT05 - Editar Informações de Cadastro com Sucesso**  
:--------------: | ------------  
**User Story Associada** | US-01  
**Descrição** | Verificar se o usuário consegue editar suas informações de cadastro, como nome, email e senha, a partir do menu suspenso no topbar e, em seguida, realizar login com as novas credenciais
**Pré-condições** | O usuário deve estar cadastrado e logado na aplicação
**Procedimento** | 1) Clique no ícone de expandir na topbar <br> 2) Selecione a opção de editar as informações de cadastro <br> 3) Altere os campos "Nome", "Email", "Senha" e repita a nova senha corretamente no campo "Repetição Senha" <br> 4) Clique no botão "Atualizar" para confirmar as alterações <br> 5) Realize o login na aplicação inserindo as novas credenciais 
**Dados de Entrada** | Alteração de dados previamente cadastrados, com inserção de novos dados nos campos "Nome", "Email", "Senha" e "Confirmação Senha" do formulário de cadastro
**Resultado Esperado** | O sistema salva as alterações realizadas no cadastro, exibindo uma mensagem de sucesso, e, após salvar, o usuário consegue realizar login com as novas credenciais de forma bem sucedida. Além disso, a informação de "Nome" é refletida corretamente no topbar após o login
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT06 - Realizar Login com Credenciais Válidas**
 :--------------: | ------------
**User Story Associada** | US-02
**Descrição**     | Verificar se o login é realizado com sucesso quando inserido credenciais válidas
**Pré-condições** | Usuário deve estar cadastrado na aplicação
**Procedimento**  | 1) Acesse a página de login <br> 2) Preencha os campos "Email" e "Senha" com dados válidos <br> 3) Clique no botão "Submeter"
**Dados de Entrada** | Inserção de dados válidos no formulário de login
**Resultado Esperado** | O login é realizado com sucesso, redirecionando o usuário para a página inicial. Além disso, a foto de perfil e o nome do usuário são exibidos corretamente no topbar
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT07 - Realizar Login com Credenciais Inválidas**
 :--------------: | ------------
**User Story Associada** | US-02
**Descrição**     | Verificar se o sistema bloqueia o login com credenciais inválidas
**Pré-condições** | Usuário deve estar cadastrado na aplicação
**Procedimento**  | 1) Acesse a página de login <br> 2) Preencha os campos "Email" e "Senha" com dados incorretos <br> 3) Clique no botão "Submeter"
**Dados de Entrada** | Inserção de dados inválidos no formulário de login, com "Email" e "Senha" incorretos
**Resultado Esperado** | O sistema não permite o login e uma mensagem de erro é exibida ao usuário com o texto "Email ou senha incorretos. Tente novamente"
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT08 - Realizar Login com Campos Vazios**
 :--------------: | ------------
**User Story Associada** | US-02
**Descrição**     | Verificar se o sistema bloqueia o login de usuários que não preencham os campos obrigatórios, testando um campo vazio por vez
**Pré-condições** | Usuário deve estar cadastrado na aplicação
**Procedimento**  | 1) Abra o arquivo login.html  <br> 2) Deixe os campos "Nome" e "Email" vazios, omitindo um por vez <br> 3) Clique no botão "Submeter" a cada tentativa
**Dados de Entrada** | Dados incompletos, com um campo obrigatório vazio a cada tentativa ("Email" e "Senha")
**Resultado Esperado** | O sistema deve impedir o login a cada tentativa com um campo vazio e exibir a mensagem de erro "Por favor, preencha todos os campos"
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT09 - Realizar Logout com Sucesso**  
:--------------: | ------------  
**User Story Associada** | US-03  
**Descrição** | Verificar se o usuário pode realizar o logout com sucesso a partir do topbar, confirmando a ação no prompt exibido  
**Pré-condições** | Usuário deve estar logado na aplicação 
**Procedimento** | 1) Clique no ícone de expandir no topbar <br> 2) Selecione a opção "Sair Sessão" no menu suspenso <br> 3) Confirme a ação no prompt de confirmação exibido 
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface
**Resultado Esperado** | O sistema exibe corretamente um prompt de confirmação com o texto "Tem certeza que deseja sair?" e, ao confirmar, o usuário é redirecionado para a página de login. Dessa forma, a sessão é encerrada com sucesso  
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT10 - Tentar Logout sem Confirmar**  
:--------------: | ------------  
**User Story Associada** | US-03  
**Descrição** | Verificar se o sistema impede o logout quando o usuário cancela o processo na mensagem de confirmação
**Pré-condições** | Usuário deve estar logado na aplicação
**Procedimento** | 1) Clique no ícone de expandir no topbar <br> 2) Selecione a opção "Sair Sessão" no menu suspenso <br> 3) No prompt de confirmação, clique em "Cancelar"  
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface
**Resultado Esperado** | O sistema deve cancelar o logout e manter o usuário na aplicação, sem redirecionamento para a página de login
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT11 - Criar Processo com Dados Válidos**  
:--------------: | ------------  
**User Story Associada** | US-04  
**Descrição** | Verificar se o advogado pode criar um processo com dados válidos de forma bem sucedida e se o novo processo é exibido na lista corretamente 
**Pré-condições** | Usuário deve estar logado com o perfil de advogado 
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Clique no botão "Novo Processo" <br> 3) Preencha todos os campos do formulário com dados válidos, com exceção do campo "Número Processo" que é bloqueado <br> 4) Clique no botão "Salvar"  
**Dados de Entrada** | Inserção de dados válidos no formulário de criação 
**Resultado Esperado** | O sistema exibe uma mensagem de sucesso "Processo criado com sucesso!", o usuário é redirecionado para a página de lista de processos e o novo processo é exibido de forma correta no final da lista com o número gerado automaticamente  
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT12 - Criar Processo com Campos Obrigatórios Vazios**  
:--------------: | ------------  
**User Story Associada** | US-04  
**Descrição** | Verificar se o sistema valida os campos obrigatórios durante o processo de criação e exibe mensagens de erro que orientem o utilizador
**Pré-condições** | Usuário deve estar logado com o perfil de advogado
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Clique no botão "Novo Processo" <br> 3) Deixe os campos obrigatórios (marcados com asterisco) vazios, omitindo um por vez <br> 4) Clique no botão "Salvar" a cada tentativa  
**Dados de Entrada** | Dados incompletos, com um campo obrigatório vazio a cada tentativa ("Advogado Responsável", "Data Entrada", "Nome Cliente" e "Assunto") 
**Resultado Esperado** | O sistema exibe mensagens de erro para os campos obrigatórios vazios, impedindo a criação do processo até que todos os campos sejam corretamente preenchidos  
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT13 - Incremento Automático do Número ao Criar Processo**  
:--------------: | ------------  
**User Story Associada** | US-04  
**Descrição** | Verificar se o número do processo é gerado automaticamente de forma auto-incremental, sendo único e sem possibilidade de alteração após a criação
**Pré-condições** | Usuário deve estar logado na aplicação com o perfil de advogado e deve existir processos previamente criados na lista
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Clique no botão "Novo Processo" <br> 3) Preencha todos os campos obrigatórios do formulário com dados válidos <br> 4) Clique no botão "Salvar" 
**Dados de Entrada** | Inserção de dados válidos nos campos obrigatórios  
**Resultado Esperado** | O número do processo é gerado automaticamente, aumentando de forma incremental com a criação de cada novo processo
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT14 - Tentar Inserir Informação em Campo Bloqueado**  
:--------------: | ------------  
**User Story Associada** | US-04  
**Descrição** | Verificar se o sistema impede a inserção de informação pelo usuário em campo bloqueado durante o processo de criação
**Pré-condições** | Usuário deve estar logado na aplicação com o perfil de advogado 
**Procedimento** | 1) Clique no botão "Novo Processo" <br> 2) Tente editar o campo "Número Processo" do formulário de criação
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface
**Resultado Esperado** | Durante o processo de criação, o campo "Número Processo" está bloqueado para interação com o utilizador 
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT15 - Editar Processo com Dados Válidos**  
:--------------: | ------------  
**User Story Associada** | US-05  
**Descrição** | Verificar se o advogado pode editar com dados válidos as informações de um processo nos campos permitidos, e se as alterações são refletidas corretamente  
**Pré-condições** | Usuário deve estar logado com o perfil de advogado e pelo menos um processo já deve existir na lista  
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Clique no ícone de edição ao lado de um processo existente <br> 3) Verifique se os dados atuais do processo são exibidos corretamente no formulário de edição <br> 4) Modifique os campos editáveis com novos dados válidos <br> 5) Clique no botão "Salvar" para aplicar as alterações  
**Dados de Entrada** | Alteração com a inserção de dados válidos nos campos editáveis do formulário de edição
**Resultado Esperado** | O sistema exibe uma mensagem de confirmação "Processo atualizado com sucesso!", o usuário é redirecionado para a lista de processos e as alterações realizadas são refletidas corretamente 
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT16 - Editar Processo com Campos Obrigatórios Vazios**  
:--------------: | ------------  
**User Story Associada** | US-05  
**Descrição** | Verificar se o sistema valida os campos obrigatórios durante o processo de edição e exibe mensagens de erro que orientem o utilizador
**Pré-condições** | Usuário deve estar logado com perfil de advogado e pelo menos um processo já deve existir na lista
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Clique no ícone de edição ao lado de um processo existente <br> 3) Deixe os campos obrigatórios (marcados com asterisco) vazios, omitindo um por vez <br> 4) Clique no botão "Salvar" a cada tentativa
**Dados de Entrada** | Dados incompletos, com um campo obrigatório vazio a cada tentativa ("Nome Cliente" e "Assunto") 
**Resultado Esperado** | O sistema exibe mensagens de erro para cada campo obrigatório vazio, impedindo a atualização do processo até que todos os campos sejam corretamente preenchidos  
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT17 - Tentar Editar Campos Bloqueados**  
:--------------: | ------------  
**User Story Associada** | US-05  
**Descrição** | Verificar se os campos "Número de Processo", "Advogado Responsável" e "Data Entrada" estão bloqueados para edição e não podem ser alterados 
**Pré-condições** | Usuário deve estar logado com o perfil de advogado e pelo menos um processo já deve existir na lista
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Clique no ícone de edição ao lado de um processo existente <br> 3) Tente editar os campos "Número de Processo", "Advogado Responsável" e "Data Entrada"  
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface
**Resultado Esperado** | Os campos "Número Processo", "Advogado Responsável" e "Data Entrada" estão bloqueados para edição e não são alterados com a interação do usuário
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT18 - Concluir Processo com Sucesso**  
:--------------: | ------------  
**User Story Associada** | US-06  
**Descrição** | Verificar se o advogado consegue concluir um processo com sucesso ao clicar no botão "Concluir", alterando o status do mesmo para "Concluído"
**Pré-condições** | O usuário deve estar logado como advogado e deve existir pelo menos um processo cadastrado com o status em andamento
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Clique no ícone de edição ao lado de um processo existente que possua status "Em Andamento" <br> 3) Clique no botão "Concluir" do formulário de edição
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface
**Resultado Esperado** | O sistema exibe uma mensagem de sucesso e redireciona o advogado para a lista de processos. Além disso, na lista o status do processo em questão é atualizado de "Em Andamento" para "Concluído" e é exibido com uma cor distinta
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT19 - Excluir Processo com Sucesso**  
:--------------: | ------------  
**User Story Associada** | US-07  
**Descrição** | Verificar se o advogado consegue excluir um processo com sucesso após confirmar a exclusão, removendo-o da lista
**Pré-condições** | Usuário deve estar logado na aplicação com o perfil de advogado e deve existir pelo menos um processo registrado na lista com o status "Em Andamento" 
**Procedimento** | 1) Localize um processo na lista de processos <br> 2) Clique no ícone ou botão de exclusão associado ao processo <br> 3) Confirme a exclusão na mensagem de confirmação exibida 
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface 
**Resultado Esperado** | Uma mensagem de sucesso é exibida e o processo é excluído de forma bem sucedida, não estando mais visível na lista de processos
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT20 - Cancelar Exclusão do Processo**  
:--------------: | ------------  
**User Story Associada** | US-07  
**Descrição** | Verificar se o processo permanece na lista de processos quando o advogado cancela a exclusão na mensagem de confirmação  
**Pré-condições** | Usuário deve estar logado na aplicação com o perfil de advogado e deve existir pelo menos um processo registrado na lista com o status "Em Andamento" 
**Procedimento** | 1) Localize um processo na lista de processos <br> 2) Clique no ícone ou botão de exclusão associado ao processo <br> 3) Clique em "Cancelar" na mensagem de confirmação 
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface
**Resultado Esperado** | A ação de exclusão é interrompida imediatamente e o processo não é removido, permanecendo visível na lista de processos  
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT21 - Visualizar Lista de Processos como Advogado**  
:--------------: | ------------  
**User Story Associada** | US-08  
**Descrição** | Verificar se o advogado consegue visualizar a lista completa de processos, incluindo os processos criados por ele e por outros advogados do escritório, sem restrições  
**Pré-condições** | Usuário deve estar cadastrado na aplicação com o perfil de advogado e deve existir múltiplos processos cadastrados previamente
**Procedimento** | 1) Faça login no sistema com um perfil de advogado <br> 2) Acesse a página Lista Processos <br> 3) Visualize a lista, verificando se todos os processos do escritório de advocacia estão visíveis  
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface
**Resultado Esperado** | O advogado visualiza corretamente na lista todos os processos do escritório de advocacia, sem qualquer restrição
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT22 - Visualizar Lista de Processos como Cliente**  
:--------------: | ------------  
**User Story Associada** | US-08  
**Descrição** | Verificar se o cliente consegue visualizar de forma restrita apenas os processos associados ao seu nome na lista de processos
**Pré-condições** | Usuário deve estar cadastrado na aplicação com o perfil de cliente e possuir processos registrados associados ao seu nome  
**Procedimento** | 1) Faça login no sistema com um perfil de cliente <br> 2) Acesse a página Lista Processos <br> 3) Visualize a lista, verificando se apenas os processos associados ao cliente estão visíveis  
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface  
**Resultado Esperado** | O cliente visualiza de forma correta na lista somente os processos associados ao seu nome, pela correspondência do campo “Nome” inserido no cadastro realizado pelo mesmo com o campo "Nome Cliente" do processo adicionado pelo advogado
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT23 - Visualizar Tooltips nos Ícones da Lista de Processos**  
:--------------: | ------------  
**User Story Associada** | US-08  
**Descrição** | Verificar se tooltips (dicas de ferramentas) são exibidos corretamente ao passar o mouse sobre os ícones da lista de processos, identificando claramente cada funcionalidade 
**Pré-condições** | Usuário deve estar logado na aplicação
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Passe o mouse sobre os ícones da lista <br> 3) Observe se um tooltip é exibido para cada ícone, com o texto adequado à funcionalidade correspondente 
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface  
**Resultado Esperado** | Os tooltips são exibidos corretamente ao passar o mouse sobre os ícones, com mensagens claras e precisas
**Resultado Obtido** | Sucesso  

---
<br><br>


**Caso de Teste** | **CT24 - Visualizar Detalhes do Processo**  
:--------------: | ------------  
**User Story Associada** | US-09
**Descrição** | Verificar se todos os campos do processo e seus dados correspondentes são exibidos corretamente na página de visualização de detalhes do mesmo  
**Pré-condições** | Existência de pelo menos um processo cadastrado previamente
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Clique no ícone de visualização de um processo na lista <br> 3) Visualize os detalhes do processo, verificando se todos os dados estão visíveis e coerentes com o que foi registrado 
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface  
**Resultado Esperado** | Todos os campos do processo e seus dados correspondentes são exibidos corretamente na página de visualização de detalhes do mesmo
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT25 - Tentar Editar Campos Bloqueados**  
:--------------: | ------------  
**User Story Associada** | US-09  
**Descrição** | Verificar se todos os campos exibidos na página de visualização de detalhes do processo estão bloqueados para edição, garantindo que nenhum dado possa ser alterado  
**Pré-condições** | Existência de pelo menos um processo cadastrado previamente
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Clique no ícone de visualização de um processo na lista <br> 3) Tente interagir com os campos exibidos para verificar se estão bloqueados para edição  
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface
**Resultado Esperado** | Todos os campos na página de visualização de detalhes do processo estão devidamente bloqueados para edição e interação com o usuário
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT26 - Aplicar Filtro à Lista de Processos (que traz resultados)**  
:--------------: | ------------  
**User Story Associada** | US-10 
**Descrição** | Verificar se a pesquisa geral filtra os resultados com base no conteúdo inserido, aplicando a lógica "contains" para todas as colunas da lista  
**Pré-condições** | Usuário deve estar logado na aplicação com perfil de advogado e deve existir múltiplos processos cadastrados no sistema com dados variados
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Insira um dado existente nas informações do processo no campo de pesquisa <br> 4) Clique no ícone de pesquisa ou tecle Enter, observando os resultados exibidos  
**Dados de Entrada** | Inserção de dado existente nas informações dos processos previamente cadastrados, como critério de filtro na pesquisa  
**Resultado Esperado** | A lista refina corretamente os resultados, exibindo somente os processos que possuem o dado inserido na pesquisa em qualquer das colunas 
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT27 - Aplicar Filtro à Lista de Processos (que não traz resultados)**  
:--------------: | ------------  
**User Story Associada** | US-10
**Descrição** | Verificar o comportamento do sistema ao realizar uma pesquisa geral na lista de processos inserindo um dado que não corresponde a nenhum outro dado registrado
**Pré-condições** | Usuário deve estar logado na aplicação com perfil de advogado e deve existir múltiplos processos cadastrados no sistema com dados variados
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Insira um dado de pesquisa inexistente no campo de texto <br> 3) Clique no ícone de pesquisa ou tecle Enter, observando os resultados exibidos  
**Dados de Entrada** | Inserção de dado inexistente nas informações dos processos previamente cadastrados, como um número de processo inválido ou nome aleatório 
**Resultado Esperado** | A lista é exibida com o conteúdo vazio, sem trazer nenhum processo como resultado 
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT28 - Desfazer Filtro Aplicado na Pesquisa**  
:--------------: | ------------  
**User Story Associada** | US-10 
**Descrição** | Verificar se o sistema retorna à exibição completa de todos os processos cadastrados, no estado original da lista, após a remoção do filtro de pesquisa
**Pré-condições** | Usuário deve estar logado na aplicação com perfil de advogado e deve existir múltiplos processos cadastrados no sistema com dados variados
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Insira um dado existente nas informações do processo no campo de pesquisa <br> 3) Clique no ícone de pesquisa ou tecle Enter <br> 4) Limpe o filtro aplicado e observe os resultados exibidos  
**Dados de Entrada** | Inserção de dado existente nas informações dos processos previamente cadastrados, como critério de filtro na pesquisa  
**Resultado Esperado** | Após limpar o filtro aplicado no campo de pesquisa, a lista de processos retorna ao seu estado original, exibindo todos os processos cadastrados no sistema
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT29 - Testar Insensibilidade da Pesquisa a Letras Maiúsculas e Minúsculas**  
:--------------: | ------------  
**User Story Associada** | US-10
**Descrição** | Verificar se a pesquisa geral é insensível a letras maiúsculas e minúsculas, retornando os mesmos resultados independentemente do formato do texto inserido  
**Pré-condições** | Usuário deve estar logado na aplicação com perfil de advogado e deve existir múltiplos processos cadastrados no sistema com dados variados, contendo tando letras maíusculas como minúsculas
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Insira o mesmo termo de pesquisa em formatos diferentes (ex.: "Maria", "maria", "MARIA") <br> 3) Clique no ícone de pesquisa ou tecle Enter, observando os resultados exibidos  
**Dados de Entrada** | Inserção de dado válido na pesquisa em diferentes formatos (maiúsculas e minúsculas)  
**Resultado Esperado** | A pesquisa retorna os mesmos resultados, independentemente do formato do texto inserido  
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT30 - Exibição da Lista Completa de Documentos**  
:--------------: | ------------  
**User Story Associada** | US-11 
**Descrição** | Verificar se ao clicar no ícone de visualização de documentos em um processo específico, o sistema exibe a lista completa de documentos associados ao processo  
**Pré-condições** | Existência de pelo menos um processo cadastrado no sistema com documentos do advogado e do requerente anexados 
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Clique no ícone de visualização de documentos em um processo específico <br> 3) Visualize a lista completa de documentos, verificando se as informações de todos os anexos são exibidas corretamente
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface  
**Resultado Esperado** | A lista completa de documentos anexados ao processo, bem como as informações dos documentos do advogado e do requerente, são exibidas corretamente 
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT31- Visualizar Tooltips nos Ícones da Lista de Documentos**  
:--------------: | ------------  
**User Story Associada** | US-08  
**Descrição** | Verificar se tooltips (dicas de ferramentas) são exibidos corretamente ao passar o mouse sobre os ícones da lista de documentos, identificando claramente cada funcionalidade 
**Pré-condições** | Usuário deve estar logado na aplicação
**Procedimento** | 1) Acesse a página Lista Processos <br> 2) Clique no ícone de visualização de documentos em um processo específico <br> 3) Passe o mouse sobre os ícones da lista de documentos <br> 3) Observe se um tooltip é exibido para cada ícone, com o texto adequado à funcionalidade correspondente 
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface  
**Resultado Esperado** | Os tooltips são exibidos corretamente ao passar o mouse sobre os ícones, com mensagens claras e precisas
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT32 - Realizar Upload na Lista de Documentos Com Sucesso**  
:--------------: | ------------  
**User Story Associada** | US-12
**Descrição** | Verificar se o sistema realiza o upload de um documento com sucesso, tanto na lista de "Documentos Advogado" quanto na lista de "Documentos Requerente", e se os dados são salvos corretamente
**Pré-condições** | Usuário deve estar logado na aplicação com o perfil de advogado e deve existir pelo menos um processo cadastrado previamente. <br> Além de pelo menos um arquivo no formato PDF menor que 2MB estar disponível para upload  
**Procedimento** | 1) Acesse a página Lista Documentos <br> 2) Clique no ícone (+) para adicionar um novo documento na lista de "Documentos Requerente" <br> 3) Preencha o campo obrigatório de "Tipo Documento" e selecione um arquivo PDF válido, menor que 2MB, no campo de "Documento" <br> 4) Clique no botão “Salvar" <br> 5) Repita o processo, adicionando um novo documento à lista de "Documentos Requerente"
**Dados de Entrada** | Seleção de arquivo PDF menor que 2MB no campo "Documento" e inserção de dado válido na opção de "Tipo Documento" 
**Resultado Esperado** | O sistema exibe uma mensagem de sucesso com o texto "O documento foi adicionado ao processo com sucesso.". O usuário é redirecionado para a lista de documentos, onde os dados referentes ao documento recém-adicionado, como a data de upload, tipo de documento e nome do arquivo, são exibidos de forma consistente e correta tanto na lista de "Documentos Advogado" quanto na lista de "Documentos Requerente"
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT33 - Verificar o Registro do Usuário Criador do Documento na Lista de Documentos**  
:--------------: | ------------  
**User Story Associada** | US-12 
**Descrição** | Verificar se o sistema exibe corretamente o nome do usuário da conta como criador do documento após o seu upload bem-sucedido  
**Pré-condições** | Usuário deve estar logado na aplicação com o perfil de advogado e deve existir pelo menos um processo cadastrado previamente   
**Procedimento** | 1) Acesse a página Lista Documentos <br> 2) Clique no ícone (+) para adicionar um novo documento <br> 3) Preencha o campo obrigatório de "Tipo Documento" e selecione um arquivo PDF válido, menor que 2MB, no campo de "Documento" <br> 4) Clique no botão “Salvar" <br> 5) Verifique se o campo “Criado Por” referente a este documento inserido na lista corresponde ao nome do usuário descrito no topbar da página
**Dados de Entrada** | Seleção de arquivo PDF menor que 2MB no campo "Documento" e inserção de dado válido na opção de "Tipo Documento" 
**Resultado Esperado** | O campo “Criado Por” referente ao documento recém-adicionado exibe o nome do utilizador corretamente conforme o username exibido no topbar  
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT34 - Validar Restrição de Upload de Aquivo Somente para Formato PDF**  
:--------------: | ------------  
**User Story Associada** | US-12
**Descrição** | Verificar se o sistema permite o upload apenas de arquivos no formato PDF, restringindo a seleção de outros formatos pelo usuário
**Pré-condições** | Usuário deve estar logado na aplicação e deve existir pelo menos um processo cadastrado previamente. <br> Além de arquivos no formato PDF e outros formatos distintos estarem disponíveis para upload
**Procedimento** | 1) Acesse a página Lista Documentos <br> 2) Clique no ícone (+) para adicionar um novo documento <br> 3) Preencha o campo obrigatório de "Tipo Documento" <br> 4) Ao tentar selecionar um arquivo no campo de "Documento", verifique se o sistema exibe apenas arquivos no formato PDF para seleção (arquivos DOCX, JPG ou outros formatos não são exibidos)
**Dados de Entrada** | Arquivos nos formatos PDF e formatos não permitidos
**Resultado Esperado** | O sistema restringe a seleção de arquivos à somente aqueles no formato PDF. Arquivos em formatos não permitidos (como DOCX, JPG, etc.) não são exibidos na janela de seleção de arquivos, impossibilitando que o usuário selecione outro formato. Não há exibição de mensagem de erro, pois a restrição ocorre na interface de seleção de arquivos
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT35 - Validar Restrição de Upload em Relação ao Tamanho do Arquivo**  
:--------------: | ------------  
**User Story Associada** | US-12 
**Descrição** | Verificar se o sistema aceita o upload apenas de arquivos com tamanho máximo de 2MB e exibe mensagem de erro orientando o utilizador  
**Pré-condições** | Usuário deve estar logado na aplicação e deve existir pelo menos um processo cadastrado previamente. <br> Além de um arquivo PDF com tamanho superior a 2MB estar disponível para upload
**Procedimento** | 1) Acesse a página Lista Documentos <br> 2) Clique no ícone (+) para adicionar um novo documento <br> 3) Preencha o campo obrigatório de "Tipo Documento" <br> 4) Selecione um arquivo em formato PDF com tamanho superior a 2MB no campo de "Documento" <br> 5) Clique no botão "Salvar"
**Dados de Entrada** | Seleção de rquivo PDF com tamanho superior a 2MB 
**Resultado Esperado** | O sistema não permite o upload do arquivo superior a 2MB e uma mensagem de erro é exibida informando que "O arquivo excede o limite de 2 MB. Por favor, selecione um arquivo menor.". O usuário permanece na página de upload sem redirecionamento, aguardando uma nova tentativa de envio de arquivo dentro do limite permitido
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT36 - Realizar Upload de Documento com Campos Obrigatórios Vazios**  
:--------------: | ------------  
**User Story Associada** | US-12
**Descrição** | Verificar se o sistema valida os campos obrigatórios vazios durante o upload
**Pré-condições** | Usuário deve estar logado na aplicação com o perfil de advogado e deve existir pelo menos um processo cadastrado previamente. <br> Além de pelo menos um arquivo no formato PDF menor que 2MB estar disponível para upload 
**Procedimento** | 1) Acesse a página Lista Documentos <br> 2) Clique no ícone (+) para adicionar um novo documento <br> 3) Deixe os campos "Tipo Documento" e "Documento" vazios, omitindo um por vez <br> 4) Clique no botão "Salvar" a cada tentativa
**Dados de Entrada** | Dados incompletos, com um campo obrigatório vazio a cada tentativa ("Tipo Documento" e "Documento")
**Resultado Esperado** | O sistema não permite que o documento seja salvo e exibe uma mensagem de erro indicando a falta de preenchimento dos campos obrigatórios. A mensagem de erro será específica para cada campo em branco, com o texto: "Por favor, preencha o campo {nome do campo}" 
**Resultado Obtido** | Sucesso

---
<br><br>

**Caso de Teste** | **CT37 - Tentar Inserir Informação em Campos Bloqueados no Upload**  
:--------------: | ------------  
**User Story Associada** | US-12
**Descrição** | Verificar se o sistema impede a inserção de informação pelo usuário em campos bloqueados durante o processo de upload
**Pré-condições** | Usuário deve estar logado na aplicação com o perfil de advogado e deve existir pelo menos um processo cadastrado previamente
**Procedimento** | 1) Acesse a página Lista de Documentos <br> 2) Clique no ícone (+) para adicionar um novo documento <br> 3) Tente editar campos os campos "Nº Processo", "Advogado Responsável" e "Nome Cliente" 
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface
**Resultado Esperado** | Os campos "Nº Processo", "Advogado Responsável" e "Nome Cliente" permanecem bloqueados para edição e interação com o utilizador
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT38 - Excluir Documento com Sucesso**  
:--------------: | ------------  
**User Story Associada** | US-13
**Descrição** | Verificar se o usuário consegue excluir um documento com sucesso após confirmar a exclusão, removendo-o da lista de documentos
**Pré-condições** | Usuário deve estar logado na aplicação com o perfil de advogado e deve existir pelo menos um processo cadastrado previamente, além de documentos adicionados nas listas de "Documentos Advogado" e "Documentos Requerente"
**Procedimento** | 1) Acesse a página Lista de Documentos <br> 2) Clique no ícone de exclusão associado ao documento na lista de "Documentos Advogado" <br> 3) Confirme a exclusão na mensagem de confirmação exibida <br> 4) Repita o processo para excluir um documento da lista de "Documentos Requerente"
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface  
**Resultado Esperado** | O sistema exibe uma mensagem de sucesso informando que o documento foi excluído com sucesso. O documento é removido imediatamente da lista de documentos e não é mais visível tanto na lista de "Documentos Advogado" como na lista de "Requerente"
**Resultado Obtido** | Sucesso   

---
<br><br>

**Caso de Teste** | **CT39 - Cancelar Exclusão de Documento**  
:--------------: | ------------  
**User Story Associada** | US-13 
**Descrição** | Verificar se o documento permanece na lista de documentos quando o usuário cancela o processo de exclusão na mensagem de confirmação
**Pré-condições** | Usuário deve estar logado na aplicação com o perfil de advogado, deve existir pelo menos um processo cadastrado previamente e um documento adicionado na lista
**Procedimento** | 1) Acesse a página Lista de Documentos <br> 2) Clique no ícone de exclusão associado a um documento na lista <br> 3) Clique em "Cancelar" na mensagem de confirmação 
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface   
**Resultado Esperado** | O documento em questão permanece na lista e nenhuma exclusão é realizada  
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT40 - Realizar Download de Documento com Sucesso**  
:--------------: | ------------  
**User Story Associada** | US-14 
**Descrição** | Verificar se o sistema realiza download de um documento da lista de forma bem-sucedida e se o arquivo baixado está íntegro, sendo aberto sem erros após o download
**Pré-condições** | Usuário deve estar logado na aplicação, deve existir pelo menos um processo cadastrado previamente e um documento adicionado na lista
**Procedimento** | 1) Acesse a página Lista de Documentos <br> 2) Clique no ícone de download associado a um documento na lista <br> 3) Clique em "Ok" na mensagem de sucesso <br> 4) Abra o arquivo no seu dispositivo
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface 
**Resultado Esperado** | Após o download, o sistema exibe uma mensagem com o texto "Download do documento {Tipo Documento} realizado com sucesso." e o arquivo baixado é aberto corretamente, sem corrompimento  
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT41 - Distinguir Visualização de Processos em Relação ao Tipo de Perfil do Usuário**  
:--------------: | ------------  
**User Story Associada** | US-15 
**Descrição** | Verificar se a aplicação permite a entrada alternada de contas com os cadastros de advogado e cliente, utilizando os dados armazenados no local storage, e se o sistema exibe a visualização correta dos processos conforme o tipo de perfil de usuário logado, garantindo que não haja conflitos de visualização entre os perfis
**Pré-condições** | Deve haver cadastro de pelo menos um usuário com o perfil de advogado e outro com o perfil de cliente, além de múltiplos processos cadastrados previamente, incluindo ao menos um processo com o nome do cliente que será utilizado no teste  
**Procedimento** | 1) Faça login na aplicação com o cadastro de um advogado <br> 2) Navegue até a lista de processos, verificando se todos os processos do escritório são exibidos, incluindo aqueles criados por outros advogados <br> 3) Efetue logout da conta de advogado <br> 4) Faça, em seguida, login na aplicação com a conta de um cliente <br> 5) Navegue até a lista de processos, verificando se apenas os processos cujo "Nome Cliente" corresponde ao nome registrado no cadastro estão visíveis, e que processos de outros clientes ou advogados não estão acessíveis
**Dados de Entrada** | Inserção de dados válidos nas credenciais do login com o tipo de perfil advogado e cliente 
**Resultado Esperado** | O sistema armazena corretamente os dados no local storage, permitindo alternar entre o cadastro de advogado e cliente, sem conflitos de visualização entre os perfis, de forma que a visualização de dados de processos permitida para cada tipo de perfil é realizada com sucesso 
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT42 - Testar Restrição de Funcionalidades para Perfil Cliente**  
:--------------: | ------------  
**User Story Associada** | US-15
**Descrição** | Verificar se botões e ícones não autorizados são ocultados quando logado com o perfil de cliente  
**Pré-condições** | Usuário deve estar cadastrado na aplicação com o perfil de cliente, deve existir pelo menos um processo cadastrado previamente e documentos adicionados nas listas de "Documentos Advogado" e "Documentos Requerente"
**Procedimento** | 1) Faça login na aplicação com o perfil de cliente <br> 2) Navegue pelas páginas da aplicação, verificando a exibição dos ícones e botões
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface   
**Resultado Esperado** | O cliente não consegue visualizar os seguintes elementos: <br> • Botão de criação de processos <br> • Ícones de edição e exclusão de processos <br> • Ícones de adição e exclusão de documentos da lista "Documentos Advogado"
**Resultado Obtido** | Sucesso  

---
<br><br>

**Caso de Teste** | **CT43 - Testar Acesso Total às Funcionaliodades para Perfil Advogado**  
:--------------: | ------------  
**User Story Associada** | US-15 
**Descrição** | Verificar se o perfil de advogado tem acesso total às funcionalidades da aplicação, com todos os ícones e botões correspondentes visíveis e acessíveis
**Pré-condições** | Usuário deve estar cadastrado na aplicação com o perfil de advogado, deve existir pelo menos um processo cadastrado previamente e documentos adicionados nas listas de "Documentos Advogado" e "Documentos Requerente"
**Procedimento** | 1) Faça login na aplicação com o perfil de advogado <br> 2) Navegue pelas páginas da aplicação, verificando a exibição dos ícones e botões
**Dados de Entrada** | Nenhum dado de entrada é necessário além da navegação pela interface   
**Resultado Esperado** | O advogado tem acesso total às funcionalidades, sem restrições, visualizando todos os botões e ícones disponíveis na aplicação
**Resultado Obtido** | Sucesso  

---
<br><br>

## Registro dos Testes de Software

Esta seção deve apresenta o relatório com as evidências dos testes de software realizados na aplicação, baseado no plano de testes pré-definido, comprovando o funcionamento adequado do sistema:

<br>

- US-01

----------
|**Caso de Teste**              |**CT01 - Cadastrar Usuário com Dados Válidos**              |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-01. Cadastro de Usuário e Seleção de Perfil             |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-01](videos/ScreenRecording.CT-01.mp4)  |
|                                                                                            |

<br>

----------
|**Caso de Teste**              |**CT02 - Cadastrar Usuário com Dados Inválidos (Senhas Não Coincidem)**    |
|-------------------------------|---------------------------------------------------------------------------|
|**User Story Associada**       | US-01. Cadastro de Usuário e Seleção de Perfil                            |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-02](videos/ScreenRecording.CT-02.mp4)                 |
|                                                                                                           |

<br>

----------
|**Caso de Teste**              |**CT03 - Cadastrar Usuário com Dados Inválidos (Email Já Cadastrado)**    |
|-------------------------------|--------------------------------------------------------------------------|
|**User Story Associada**       | US-01. Cadastro de Usuário e Seleção de Perfil                           |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-03](videos/ScreenRecording.CT-03.mp4)                |
|                                                                                                          |

<br>

----------
|**Caso de Teste**              |**CT04 - Cadastrar Usuário com Campos Obrigatórios Vazios** |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-01. Cadastro de Usuário e Seleção de Perfil             |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-04](videos/ScreenRecording.CT-04.mp4)  |
|                                                                                            |

<br>

----------
|**Caso de Teste**              |**CT05 - Editar Informações de Cadastro com Sucesso**       |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-01. Cadastro de Usuário e Seleção de Perfil             |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-05](videos/ScreenRecording.CT-05.mp4)  |
|                                                                                            |

<br><br>


- US-02

----------
|**Caso de Teste**              |**CT06 - Realizar Login com Credenciais Válidas**           |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-02. Login no Sistema                                    |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-06](videos/ScreenRecording.CT-06.mp4)  |
|                                                                                            |

<br>

----------
|**Caso de Teste**              |**CT07 - Realizar Login com Credenciais Inválidas**                        |
|-------------------------------|---------------------------------------------------------------------------|
|**User Story Associada**       | US-02. Login no Sistema                                                   |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-07](videos/ScreenRecording.CT-07.mp4)                 |
|                                                                                                           |

<br>

----------
|**Caso de Teste**              |**CT08 - Realizar Login com Campos Vazios**                               |
|-------------------------------|--------------------------------------------------------------------------|
|**User Story Associada**       | US-02. Login no Sistema                                                  |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-08](videos/ScreenRecording.CT-08.mp4)                |
|                                                                                                          |

<br><br>


- US-03

----------
|**Caso de Teste**              |**CT09 - Realizar Logout com Sucesso**                      |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-03. Logout do Sistema                                   |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-09](videos/ScreenRecording.CT-09.mp4)  |
|                                                                                            |

<br>

----------
|**Caso de Teste**              |**CT10 - Tentar Logout sem Confirmar**                      |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-03. Logout do Sistema                                   |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-10](videos/ScreenRecording.CT-10.mp4)  |
|                                                                                            | 

<br><br>


- US-04

----------
|**Caso de Teste**              |**CT11 - Criar Processo com Dados Válidos**                 |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-04. Criação de Processo                                 |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-11](videos/ScreenRecording.CT-11.mp4)  |
|                                                                                            |

<br>

----------
|**Caso de Teste**              |**CT12 - Criar Processo com Campos Obrigatórios Vazios**    |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-04. Criação de Processo                                 |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-12](videos/ScreenRecording.CT-12.mp4)  |
|                                                                                            | 

<br>

----------
|**Caso de Teste**              |**CT13 - Incremento Automático do Número ao Criar Processo**|
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-04. Criação de Processo                                 |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-13](videos/ScreenRecording.CT-13.mp4)  |
|                                                                                            |

<br>

----------
|**Caso de Teste**              |**CT14 - Tentar Inserir Informação em Campo Bloqueado**     |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-04. Criação de Processo                                 |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-14](videos/ScreenRecording.CT-14.mp4)  |
|                                                                                            | 

<br><br>


- US-05

----------
|**Caso de Teste**              |**CT15 - Editar Processo com Dados Válidos**                |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-05. Edição de Processo                                  |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-15](videos/ScreenRecording.CT-15.mp4)  |
|                                                                                            |

<br>

----------
|**Caso de Teste**              |**CT16 - Editar Processo com Campos Obrigatórios Vazios**   |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-05. Edição de Processo                                  |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-16](videos/ScreenRecording.CT-16.mp4)  |
|                                                                                            | 

<br>

----------
|**Caso de Teste**              |**CT17 - Tentar Editar Campos Bloqueados**                  |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-05. Edição de Processo                                  |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-17](videos/ScreenRecording.CT-17.mp4)  |
|                                                                                            |                                                  

<br><br>


- US-06


----------
|**Caso de Teste**              |**CT18 - Concluir Processo com Sucesso**                    |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-06. Conclusão de Processo                               |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-18](videos/ScreenRecording.CT-18.mp4)  |
|                                                                                            |

<br><br>


- US-07

----------
|**Caso de Teste**              |**CT19 - Excluir Processo com Sucesso**                     |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-07. Exclusão de Processo                                |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-19](videos/ScreenRecording.CT-19.mp4)  |
|                                                                                            | 

<br>

----------
|**Caso de Teste**              |**CT20 - Cancelar Exclusão do Processo**                    |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-07. Exclusão de Processo                                |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-20](videos/ScreenRecording.CT-20.mp4)  |
|                                                                                            |

<br><br>


- US-08

----------
|**Caso de Teste**              |**CT21 - Visualizar Lista de Processos como Advogado**      |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-08. Visualização da Lista de Processos                  |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-21](videos/ScreenRecording.CT-21.mp4)  |
|                                                                                            | 

<br>

----------
|**Caso de Teste**              |**CT22 - Visualizar Lista de Processos como Cliente**       |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-08. Visualização da Lista de Processos                  |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-22](videos/ScreenRecording.CT-22.mp4)  |
|                                                                                            |

<br>

----------
|**Caso de Teste**              |**CT23 - Visualizar Tooltips nos Ícones da Lista de Processos** |
|-------------------------------|----------------------------------------------------------------|
|**User Story Associada**       | US-08. Visualização da Lista de Processos                      |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-23](videos/ScreenRecording.CT-23.mp4)      |
|                                                                                                | 

<br><br>


- US-09

----------
|**Caso de Teste**              |**CT24 - Visualizar Detalhes do Processo**                  |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-09. Visualização de Detalhes do Processo                |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-24](videos/ScreenRecording.CT-24.mp4)  |
|                                                                                            | 

<br>

----------
|**Caso de Teste**              |**CT25 - Tentar Editar Campos Bloqueados**                  |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-09. Visualização de Detalhes do Processo                |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-25](videos/ScreenRecording.CT-25.mp4)  |
|                                                                                            | 

<br><br>


- US-10

----------
|**Caso de Teste**              |**CT26 - Aplicar Filtro à Lista de Processos (que traz resultados)**     |
|-------------------------------|-------------------------------------------------------------------------|
|**User Story Associada**       | US-10.Pesquisa de Processos (Filtro)                                    |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-26](videos/ScreenRecording.CT-26.mp4)               |
|                                                                                                         | 

<br>

----------
|**Caso de Teste**              |**CT27 - Aplicar Filtro à Lista de Processos (que não traz resultados)** |
|-------------------------------|-------------------------------------------------------------------------|
|**User Story Associada**       | US-10.Pesquisa de Processos (Filtro)                                    |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-27](videos/ScreenRecording.CT-27.mp4)               |
|                                                                                                         | 

<br>

----------
|**Caso de Teste**              |**CT28 - Desfazer Filtro Aplicado na Pesquisa**             |
|-------------------------------|------------------------------------------------------------|
|**User Story Associada**       | US-10.Pesquisa de Processos (Filtro)                       |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-28](videos/ScreenRecording.CT-28.mp4)  |
|                                                                                            | 

<br>

----------
|**Caso de Teste**              |**CT29 - Testar Insensibilidade da Pesquisa a Letras Maiúsculas e Minúsculas** |
|-------------------------------|-------------------------------------------------------------------------------|
|**User Story Associada**       | US-10.Pesquisa de Processos (Filtro)                                          |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-29](videos/ScreenRecording.CT-29.mp4)                     |
|                                                                                                               | 

<br><br>


- US-11

----------
|**Caso de Teste**              |**CT30 - Exibição da Lista Completa de Documentos**                      |
|-------------------------------|-------------------------------------------------------------------------|
|**User Story Associada**       | US-11. Visualização da Lista de Documentos Associados ao Processo       |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-30](videos/ScreenRecording.CT-30.mp4)               |
|                                                                                                         | 

<br>

----------
|**Caso de Teste**              |**CT31- Visualizar Tooltips nos Ícones da Lista de Documentos**          |
|-------------------------------|-------------------------------------------------------------------------|
|**User Story Associada**       | US-11. Visualização da Lista de Documentos Associados ao Processo       |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-31](videos/ScreenRecording.CT-31.mp4)               |
|                                                                                                         | 

<br><br>


- US-12

----------
|**Caso de Teste**              |**CT32 - Realizar Upload na Lista de Documentos Com Sucesso**               |
|-------------------------------|----------------------------------------------------------------------------|
|**User Story Associada**       | US-12. Upload de Documentos Relacionados ao Processo                       |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-32](videos/ScreenRecording.CT-32.mp4)                  |
|                                                                                                            | 

<br>

----------
|**Caso de Teste**              |**CT33 - Verificar o Registro do Usuário Criador do Documento na Lista de Documentos** |
|-------------------------------|---------------------------------------------------------------------------------------|
|**User Story Associada**       | US-12. Upload de Documentos Relacionados ao Processo                                  |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-33](videos/ScreenRecording.CT-33.mp4)                             |
|                                                                                                                       | 

<br>

----------
|**Caso de Teste**              |**CT34 - Validar Restrição de Upload de Aquivo Somente para Formato PDF**   |
|-------------------------------|----------------------------------------------------------------------------|
|**User Story Associada**       | US-12. Upload de Documentos Relacionados ao Processo                       |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-34](videos/ScreenRecording.CT-34.mp4)                  |
|                                                                                                            | 

<br>

----------
|**Caso de Teste**              |**CT35 - Validar Restrição de Upload em Relação ao Tamanho do Arquivo**                |
|-------------------------------|---------------------------------------------------------------------------------------|
|**User Story Associada**       | US-12. Upload de Documentos Relacionados ao Processo                                  |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-35](videos/ScreenRecording.CT-35.mp4)                             |
|                                                                                                                       | 

<br>

----------
|**Caso de Teste**              |**CT36 - Realizar Upload de Documento com Campos Obrigatórios Vazios**                 |
|-------------------------------|---------------------------------------------------------------------------------------|
|**User Story Associada**       | US-12. Upload de Documentos Relacionados ao Processo                                  |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-36](videos/ScreenRecording.CT-36.mp4)                             |
|                                                                                                                       | 

<br>

----------
|**Caso de Teste**              |**CT37 - Tentar Inserir Informação em Campos Bloqueados no Upload**                    |
|-------------------------------|---------------------------------------------------------------------------------------|
|**User Story Associada**       | US-12. Upload de Documentos Relacionados ao Processo                                  |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-37](videos/ScreenRecording.CT-37.mp4)                             |
|                                                                                                                       | 

<br><br>


- US-13

----------
|**Caso de Teste**              |**CT38 - Excluir Documento com Sucesso**                                    |
|-------------------------------|----------------------------------------------------------------------------|
|**User Story Associada**       | US-13. Exclusão de Documento Carregado                                     |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-38](videos/ScreenRecording.CT-38.mp4)                  |
|                                                                                                            | 

<br>

----------
|**Caso de Teste**              |**CT39 - Cancelar Exclusão de Documento**                                   |
|-------------------------------|----------------------------------------------------------------------------|
|**User Story Associada**       | US-13. Exclusão de Documento Carregado                                     |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-39](videos/ScreenRecording.CT-39.mp4)                  |
|                                                                                                            | 

<br><br>


- US-14

----------
|**Caso de Teste**              |**CT40 - Realizar Download de Documento com Sucesso**                                    |
|-------------------------------|----------------------------------------------------------------------------|
|**User Story Associada**       | US-14. Download de Documentos Carregado                                    |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-40](videos/ScreenRecording.CT-40.mp4)                  |
|                                                                                                            | 

<br><br>


- US-15

----------
|**Caso de Teste**              |**CT41 - Distinguir Visualização de Processos em Relação ao Tipo de Perfil do Usuário** |
|-------------------------------|----------------------------------------------------------------------------------------|
|**User Story Associada**       | US-15. Controle de Perfil de Acesso                                                    |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-41](videos/ScreenRecording.CT-41.mp4)                              |
|                                                                                                                        | 

<br>

----------
|**Caso de Teste**              |**CT42 - Testar Restrição de Funcionalidades para Perfil Cliente**                      |
|-------------------------------|----------------------------------------------------------------------------------------|
|**User Story Associada**       | US-15. Controle de Perfil de Acesso                                                    |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-42](videos/ScreenRecording.CT-42.mp4)                              |
|                                                                                                                        | 

<br>

----------
|**Caso de Teste**              |**CT43 - Testar Acesso Total às Funcionaliodades para Perfil Advogado**                 |
|-------------------------------|----------------------------------------------------------------------------------------|
|**User Story Associada**       | US-15. Controle de Perfil de Acesso                                                    |
|**Link Vídeo Teste Realizado** | [Evidência Teste CT-43](videos/ScreenRecording.CT-43.mp4)                              |
|                                                                                                                        | 

<br><br>



## Avaliação dos Testes de Software

Os testes realizados visaram validar uma aplicação web desenvolvida para escritórios de advocacia especializados em aquisição de nacionalidade. A solução tem como foco a otimização da gestão e comunicação entre advogados e clientes, proporcionando uma experiência ágil, eficiente e organizada.

Foram executados 43 casos de teste, abrangendo 15 User Stories previamente definidas. Essa abordagem garantiu uma cobertura abrangente das funcionalidades críticas e secundárias do sistema, assegurando também a verificação de sua adequação às regras de negócio. Os testes foram conduzidos com base na framework ATDD (Acceptance Test-Driven Development), que promove alinhamento com os requisitos e oferece rastreabilidade completa dos cenários validados.

Os resultados obtidos foram de de todos os casos de testes concluídos com sucesso e atendendo integralmente aos critérios de aceitação estabelecidos. Durante o processo nenhum bug foi identificado, o que evidencia o alto nível de conformidade da aplicação com os requisitos funcionais e não funcionais especificados. Esse desempenho não apenas garante a confiabilidade da solução no estado atual, mas também consolida uma base sólida para futuras expansões e melhorias.

Destaca-se, ainda, o potencial de evolução tecnológica da aplicação. Entre as oportunidades está a migração do armazenamento atual, baseado em local storage, para uma arquitetura mais robusta, fundamentada em APIs e banco de dados. Essa transição não apenas ampliará as capacidades do sistema, como também reforçará sua adequação a cenários de maior complexidade e escalabilidade.

Com uma taxa de sucesso de 100% nos testes realizados e uma cobertura abrangente das funcionalidades, a aplicação demonstrou ser uma solução robusta, confiável e de alta qualidade, contribuindo de forma eficiente para a gestão e comunicação no contexto jurídico.


<br>

# Testes de Usabilidade

**Responsável pelo Planejamento dos Testes de Usabilidade:** <br> Carolina Araujo <br>
**Responsável pela Execução dos Testes de Usabilidade e Registro de Comentários:** <br> Daniel Freitas

<br>

## Plano de Testes de Usabilidade
O Plano de Testes de Usabilidade teve como objetivo principal coletar informações sobre as expectativas dos usuários em relação à funcionalidade geral da aplicação, a fim de garantir que o sistema atenda às necessidades e preferências dos usuários finais.

Para a execução deste plano, foram elaborados quatro cenários de teste, cada um baseado nas definições estabelecidas nas User Stories do projeto. Esses cenários foram cuidadosamente formulados para cobrir os principais fluxos de uso da aplicação e avaliar a interação do usuário com as funcionalidades mais críticas.

Para execução dos testes de usabilidade foram selecionados três participantes que são advogados com experiência no uso de aplicações similares às que estão sendo desenvolvidas. Esses participantes são usuários que, em sua prática profissional, utilizam sistemas de gestão e acompanhamento de processos jurídicos. A escolha desses profissionais se baseou na necessidade de avaliar a aplicabilidade da solução em um ambiente de trabalho real, verificando se a ferramenta atende às demandas específicas de um escritório de advocacia.

O registro dos testes avaliou os seguintes indicadores de usabilidade:

- Taxa de Sucesso: Determina se o usuário conseguiu ou não completar a tarefa proposta com êxito.

- Satisfação Subjetiva: Avalia a percepção do usuário sobre a execução da tarefa, utilizando a seguinte escala de satisfação:

1. Péssimo 
2. Ruim
3. Regular
4. Bom
5. Ótimo

- Tempo para conclusão da tarefa: Mede em segundos, e em comparação com o tempo utilizado quando um especialista (Software QA Tester) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

<br>

**Tipo de Teste de Usabilidade**

Os testes de usabilidade realizados foram do tipo moderado presencial, com a presença de um mediador responsável por guiar os participantes durante a execução das tarefas. O mediador forneceu instruções claras e foi responsável por manter o fluxo de interação com os usuários, sem intervir diretamente nas ações dos participantes.

Além disso, foi utilizado um cronômetro para registrar o tempo que cada usuário levou para concluir as tarefas propostas. Esse dado é importante para avaliar a eficiência da aplicação e comparar os resultados com o desempenho esperado, utilizando como referência o tempo que um especialista, como um Software QA Tester, leva para realizar as mesmas tarefas. O mediador também registrou os comentários dos usuários, com o objetivo de identificar dificuldades e oportunidades de melhoria na interface da aplicação.

O uso de mediador presencial permitiu uma coleta de dados mais precisa sobre o tempo de execução das tarefas e proporcionou uma observação direta das interações dos usuários com a aplicação.

<br>

**Resumo dos Cenários**

| **Nº Cenário** | **Descrição Cenário** |
|---------------|----------------------|
| 1             | **Cadastro e Login:** O usuário realiza o cadastro escolhendo o perfil de advogado e, em seguida, faz login com as credenciais criadas |
| 2             | **Criação e Visualização de Processo:** O usuário cria um novo processo jurídico e verifica se o processo está visível na lista de processos |
| 3             | **Edição de Processo:** O usuário edita um processo, alterando campos como "Nome Cliente" e "Assunto", e visualiza as alterações realizadas na lista de processos |
| 4             | **Upload de Documento:** O usuário faz upload de um documento relacionado a um processo e verifica se o arquivo é exibido na lista de documentos |

Esses cenários cobrem funcionalidades essenciais do sistema, desde o cadastro até a gestão de documentos, garantindo uma experiência completa para o usuário. 


## Registro dos Testes de Usabilidade

**Contexto**
A aplicação foi desenvolvida para atender escritórios de advocacia especializados na área de aquisição de nacionalidade, com o propósito de otimizar a gestão e a comunicação entre advogados e clientes. Focada na eficiência e na experiência do usuário, a plataforma proporciona um acompanhamento ágil dos processos, aprimorando tanto a organização quanto a eficácia operacional do escritório. Além disso, a aplicação agiliza as tarefas dos advogados, garantindo que os clientes estejam sempre atualizados quanto ao status de seus processos, ao mesmo tempo em que promove uma gestão otimizada dos documentos associados a cada caso.
O teste de usabilidade a ser realizado visa avaliar a interação do usuário com o sistema, focando na execução de tarefas essenciais, como cadastro, login, criação e edição de processos, além do upload de documentos. O objetivo é verificar se o sistema proporciona uma experiência intuitiva e eficiente para os usuários, que neste caso serão testados com o perfil de advogado.

**Cenário 1 - Cadastro e Login** <br>
Neste cenário, realize o cadastro na plataforma, selecionando o tipo de perfil de advogado. Após concluir o cadastro com sucesso, efetue o login utilizando as credenciais recém-criadas.


| **Usuário** | **Taxa Sucesso (SIM/NÃO)** | **Satisfação Subjetiva (1-5)** | **Tempo Conclusão (Segundos)**  |
|-------------|------------------|--------------------------------|---------------------------------|
| 1           | SIM              | 5                              | 40                              |
| 2           | SIM              | 5                              | 64                              |
| 3           | SIM              | 5                              | 50                              |
| **Média**   | 100%             | 5                              | 51                                |
| **Tempo para conclusão pelo especialista** | SIM          | 5                   | 29              |


    Comentários dos Usuários: 
    - A tarefa de cadastro e login foi bem fácicl de realizar, o método é padrão relativamente ao habitual ao que se espera quando se realiza o cadastro e login em outros softwares.
    - Adorei que ele não deixa passar informações incompletas, isso é essencial no nosso trabalho.
    - Achei o visual muito moderno e bonito, diferente de outras ferramentas que já usei. Dá gosto de usar!

<br>

**Cenário 2 - Criação e Visualização de Processo** <br>
Após realizar o login, crie um novo processo jurídico e verifique se o processo recém-criado está corretamente exibido na lista de processos.


| **Usuário** | **Taxa Sucesso (SIM/NÃO)** | **Satisfação Subjetiva (1-5)** | **Tempo Conclusão (Segundos)**  |
|-------------|------------------|--------------------------------|---------------------------------|
| 1           | SIM              | 5                              | 100                             |
| 2           | SIM              | 5                              | 120                             |
| 3           | SIM              | 5                              | 102                             |
| **Média**   | 100%             | 5                              | 107                             |
| **Tempo para conclusão pelo especialista** | SIM          | 5                     | 50            |


    Comentários dos Usuários:
    - A criação de um novo processo jurídico foi bem intuitiva. 
    - As mensagens são muito claras, não fiquei com dúvidas sobre o que precisava fazer. 
    - Gostei bastante do design, é clean e atrativo.

<br>

**Cenário 3 - Edição de Processo Recém-Criado** <br>
Edite as informações do processo recém-criado, alterando os campos "Nome Cliente" e "Assunto". Após atualizar os dados, verifique se as alterações são refletidas corretamente na lista de processos.


| **Usuário** | **Taxa Sucesso (SIM/NÃO)** | **Satisfação Subjetiva (1-5)** | **Tempo Conclusão (Segundos)**  |
|-------------|------------------|--------------------------------|---------------------------------|
| 1           | SIM              | 5                              | 41                              |
| 2           | SIM              | 5                              | 50                              |
| 3           | SIM              | 5                              | 43                              |
| **Média**   | 100%             | 5                              | 45                              |
| **Tempo para conclusão pelo especialista** | SIM          | 5                     | 28            |


    Comentários dos Usuários: 
    - Mesmo sem saber usar antes, consegui encontrar tudo rápido, é bem intuitivo. Tudo funcionou de forma correta.
    - Foi fácil alterar os campos e salvar. Os botões estão no lugar certo, não precisei ficar procurando onde clicar.
    - Gostei que as mensagens de alerta aparecem bem destacadas, dá confiança de que tudo foi feito certo.

<br>

**Cenário 4 - Upload de Documento Associado ao Processo** <br>
Acesse a lista de documentos vinculado ao processo recém-criado e editado e, em seguida, realize o upload de um documento. Após o envio, verifique se o documento é exibido na lista de documentos.


| **Usuário** | **Taxa Sucesso (SIM/NÃO)** | **Satisfação Subjetiva (1-5)** | **Tempo Conclusão (Segundos)**  |
|-------------|------------------|--------------------------------|---------------------------------|
| 1           | SIM              | 5                              | 30                              |
| 2           | SIM              | 5                              | 33                              |
| 3           | SIM              | 5                              | 28                              |
| **Média**   | 100%             | 5                              | 30                              |
| **Tempo para conclusão pelo especialista** | SIM          | 5                     | 17            |


    Comentários dos Usuários: 
    - Achei fácil de entender como funciona, não precisa de treinamento para usar.
    - O carregamento de documentos é bem prático e funcionou corretamante.
    - É ótimo que o sistema avise quando tem algo errado nos dados, isso ajuda demais no dia a dia. A mensagem de que o documento foi baixado com sucesso e de que selecionei um documento muito grande foi muito importante.

<br><br>

## Avaliação dos Testes de Usabilidade

om base nos resultados obtidos, foi possível constatar que a aplicação web apresentou um desempenho positivo em termos de taxa de sucesso na interação dos usuários, já que todos os cenários propostos foram concluídos com êxito.

Quanto ao tempo para a conclusão de cada tarefa/cenário, observou-se uma discrepância significativa entre a média de tempo dos usuários e o tempo registrado pelo especialista/desenvolvedor em todos os cenários. Essa diferença, em certa medida, era esperada, considerando que o especialista possui conhecimento prévio da interface da aplicação, do posicionamento dos elementos e da lógica dos fluxos.

Em particular, destacou-se o cenário 2, onde a média de tempo dos usuários foi de 107 segundos, comparada aos 50 segundos registrados pelo especialista. Essa discrepância foi justificada pela necessidade de os usuários realizarem uma verificação detalhada dos dados salvos, ação que, embora esperada, demandou mais tempo durante os testes.

Além disso, a aplicação foi avaliada como intuitiva e operacional, com fluxos de navegação claros e uma estrutura que facilita a realização das tarefas. Os participantes relataram facilidade em localizar funcionalidades e compreender a lógica da interface, mesmo sem treinamento prévio.

Outro destaque foi o alto índice de satisfação subjetiva dos usuários durante a execução dos cenários propostos. Esse aspecto foi refletido nas avaliações médias, com todos os cenários recebendo a nota máxima de 5 (Ótimo).

Nos comentários gerais, os usuários destacaram como pontos fortes da aplicação:

- Atratividade da interface, considerada moderna e agradável;
- Intuitividade e operacionalidade, que contribuíram para uma experiência eficiente e fluida;
- Elevado nível de validações, alinhado às exigências práticas da atividade profissional;
- Clareza nas mensagens de sucesso, confirmação e erro, que foram fundamentais para orientar o uso e minimizar incertezas.

Em síntese, os resultados indicam que a aplicação é robusta, intuitiva e bem aceita pelos usuários, evidenciando sua capacidade de atender às demandas práticas do público-alvo com eficiência e usabilidade.




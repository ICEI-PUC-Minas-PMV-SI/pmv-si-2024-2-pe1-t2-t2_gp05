# Especificações Projeto


## Personas


**Dr. Marcelo Oliveira - Advogado**

- **Idade:** 42 anos 

- **Profissão:** Advogado especializado em nacionalidade e cidadania internacional

- **Perfil:** Dr. Marcelo trabalha há 15 anos no ramo de imigração, ajudando clientes a obter cidadania e nacionalidade estrangeira. Ele é organizado, proativo e valoriza a agilidade nos processos. Utiliza a tecnologia para facilitar a comunicação com clientes e melhorar a eficiência do escritório.

- **Objetivos:** Manter seus processos organizados, comunicar-se de forma eficaz com os clientes e garantir que os casos sejam resolvidos de forma precisa e dentro dos prazos estabelecidos.
<br><br>

**Ana Souza - Cliente**

- **Idade:** 28 anos

- **Profissão:** Designer Gráfica

- **Perfil:** Ana está buscando a cidadania de um país europeu para poder viver e trabalhar na área criativa sem restrições. Ela é digitalmente habilidosa, valoriza a praticidade e prefere resolver tudo de forma remota, sem precisar visitar o escritório do advogado.

- **Objetivos:** Acompanhar o processo de cidadania e fornecer todos os documentos necessários sem complicações, preferindo interações online e rápidas.
<br><br>

**João Pereira - Cliente**

- **Idade:** 55 anos

- **Profissão:** Empresário

- **Perfil:** João é empresário no ramo de importação e exportação e busca obter a cidadania de um país europeu para facilitar seus negócios e suas viagens de trabalho. Ele possui uma rotina muito agitada e, por isso, tem pouco tempo para entrar em contato direto com o advogado, preferindo recorrer ao sistema para se manter atualizado sobre seu processo, o que permite economizar tempo e ter mais agilidade no acompanhamento.

- **Objetivos:** Acompanhar detalhadamente o processo de forma eficiente, garantindo que todas as etapas sejam cumpridas corretamente e rapidamente, sem a necessidade de contato constante com o advogado, permitindo-lhe focar em seus negócios.
<br><br>

**Maria Oliveira - Cliente**

- **Idade:** 63 anos

- **Profissão:** Aposentada

- **Perfil:** Maria é uma aposentada que deseja obter a cidadania de um país europeu para poder viver mais perto dos seus filhos e netos, que já moram no exterior. Ela tem menos facilidade com tecnologia, preferindo interações pessoais ou assistência direta para lidar com plataformas digitais. Embora ela esteja disposta a aprender, possui menos facilidade com tecnologia.

- **Objetivos:** Obter a cidadania de forma tranquila e sem se sentir perdida durante o processo, garantindo que tudo esteja sendo bem conduzido pelo advogado.
<br><br><br>


## Histórias de Usuários (User Stories)

<br>

**US-01. Cadastro de Usuário e Seleção de Perfil**


**Como** Advogado ou Cliente <br>
**Quero** Me cadastrar na aplicação selecionando meu perfil, <br>
**Para** Garantir que o acesso às funcionalidades seja adequado ao meu tipo de perfil e credenciais de acesso. <br>

**Critérios de Aceitação:** 

1.	O formulário de cadastro deve exigir a obrigatoriedade dos campos “Nome”, “Email”, “Senha”, “Confirmação Senha” e “Tipo Perfil” (Advogado ou Cliente). 

2.	Todos os campos obrigatórios possuem asterisco na label para orientar o usuário e caso algum campo obrigatório não seja preenchido, o sistema deve exibir uma mensagem de erro.

3.	O sistema deve verificar se a senha e a sua confirmação se coincidem. Caso contrário, uma mensagem de erro deve ser exibida. 

4.	O usuário pode fazer o upload da sua “Foto” durante o cadastro, que será exibida como avatar ao lado do “Nome” do utilizador no topbar quando logado na aplicação. 

5.	Após o cadastro com sucesso, o usuário deve ser direcionado para a tela inicial. 

6.	O usuário pode editar suas informações de cadastro posteriormente através de um menu suspenso no topbar, conseguindo, sem seguida, realizar login com as novas credenciais. <br><br>

________________________________________
<br>


**US-02. Login no Sistema**

**Como** Advogado ou Cliente, <br>
**Quero** Fazer login com minhas credenciais cadastradas, <br> 
**Para** Acessar a aplicação conforme meu tipo de perfil. <br>

**Critérios de Aceitação:**

1.	O sistema deve permitir que o usuário faça login com nome de usuário e senha cadastrados previamente. 

2.	O login deve ser realizado com sucesso caso as credenciais fornecidas sejam válidas, direcionando o usuário para a página inicial da aplicação. 

3.	Após o login bem-sucedido, o avatar e o nome de usuário devem ser exibidos no topbar da aplicação. 

4.	Se as credenciais fornecidas forem inválidas, o sistema deve exibir uma mensagem de erro clara e impedir o acesso à aplicação. <br><br>

________________________________________
<br>

**US-03. Logout do Sistema**

**Como** Advogado ou Cliente, <br>
**Quero** Poder sair da minha conta na aplicação a qualquer momento, <br>
**Para** Garantir que minha sessão seja encerrada de maneira segura. <br>

**Critérios de Aceitação:**

1.	O usuário deve poder fazer logout clicando no ícone de expandir do topbar e em seguida, clicando na opção de “ Sair Sessão” do menu suspenso. 

2.	O sistema deve exibir uma mensagem de confirmação antes de encerrar a sessão, para garantir que o usuário realmente deseja sair.

3.	Após a confirmação do logout, a sessão deve ser encerrada e o utilizador redirecionado para a página de login. <br><br>

________________________________________
<br>

**US-04. Criação de Processo**

**Como** Advogado, <br>
**Quero** Criar processos de clientes, <br>
**Para** Registrar todos os casos dos clientes, mantendo a organização e eficiência do escritório. <br>

**Critérios de Aceitação:**

1.	O botão de criação deve estar visível na lista de processos somente para o advogado, visto que esta funcionalidade não é acessível para o perfil de cliente.

2.	O formulário deve estar disponível com campos obrigatórios claramente indicados com asterisco nas suas respectivas labels.

3.	O sistema deve validar todos os campos obrigatórios antes de salvar o processo, exibindo mensagens de erro caso não estiverem preenchidos.

4.	Uma mensagem de sucesso deve ser exibida após a criação do processo.

5.	O novo processo deve aparecer no final da lista de processos.

6.	O número do processo será gerado automaticamente como uma chave auto-incremental, que aumentará a cada novo processo criado, garantindo a sua unicidade.

7.	O campo "Número Processo" não pode ser alterado após a criação, assegurando a integridade referencial dos dados. <br><br>

________________________________________
<br>

**US-05. Edição de Processo**

**Como** Advogado, <br>
**Quero** Editar informações de um processo, <br>
**Para** Atualizar informações importantes e garantir a precisão do caso. <br>

**Critérios de Aceitação:**

1.	O ícone de edição deve estar visível na lista de processos somente para o advogado, visto que esta funcionalidade não é acessível para o perfil de cliente.

2.	O sistema deve exibir os dados atuais do processo no formulário de edição, permitindo que o advogado visualize as informações antes de realizar qualquer alteração.

3.	Os campos "Número Processo", "Advogado Responsável" e "Data Entrada" não podem ser editados, e deverão estar bloqueados para edição.

4.	O sistema deve validar os campos obrigatórios antes de salvar o processo, indicados com asterisco nas suas respectivas labels. Caso algum campo obrigatório não esteja preenchido, uma mensagem de erro deve ser exibida a fim de orientar o utilizador.

5.	Após a atualização com dados válidos, uma mensagem de sucesso deve ser exibida e as alterações devem ser refletidas corretamente na lista de processos. <br><br>

________________________________________
<br>

**US-06. Conclusão de Processo**

**Como** Advogado, <br>
**Quero** Concluir um processo, <br>
**Para** Alterar o status do processo de em andamento para concluído, indicando a sua finalização. <br>

**Critérios de Aceitação:**

1.	No formulário de edição, o advogado deve ter a opção de clicar no botão "Concluir", para alterar o status do processo que está em andamento para concluído, indicando a sua finalização.

2.	Ao clicar no botão "Concluído", uma mensagem de sucesso deve ser exibida e o usuário deve ser redirecionado de volta para a lista de processos.

3.	Após o processo de conclusão, o status do processo na lista deve ser atualizado para "Concluído" e exibido com uma cor distinta, para diferenciá-lo dos processos com o status "Em andamento". <br><br>

________________________________________
<br>

**US-07. Exclusão de Processo**

**Como** Advogado, <br>
**Quero** Excluir um processo, <br>
**Para** Remover processos errados ou suspensos. <br>

**Critérios de Aceitação:**

1.	O sistema deve solicitar uma confirmação antes de excluir um processo.

2.	O processo que for excluído não deve mais ser exibido na lista de processos.

3.	Uma mensagem de sucesso deve ser exibida após o utilizador confirmar a exclusão.

4.	Se o usuário cancelar a exclusão, o processo deve permanecer na lista e não ser removido. <br><br>

________________________________________
<br>

**US-08. Visualização da Lista de Processos**

**Como** Advogado ou Cliente, <br>
**Quero** Visualizar a lista de processos, <br>
**Para** Acompanhar os casos de forma eficiente, de acordo com meu perfil de acesso. <br>

**Critérios de Aceitação:**

1.	A lista de processos deve ser exibida conforme o perfil do usuário: <br>
   • O advogado deve visualizar todos os processos criados por ele ou por outros advogados do escritório de advocacia, incluindo processos de todos os clientes, sem nenhuma restrição; <br>
   • O cliente deve visualizar apenas a lista de processos associados a ele, na qual possuem correspondência com o seu nome.

2.	Os ícones exibidos na lista devem conter tooltips (dicas de ferramentas) que orientem o utilizador sobre suas funcionalidades. <br><br>

________________________________________
<br>

**US-09. Visualização de Detalhes do Processo**

**Como** Advogado ou Cliente, <br>
**Quero** Visualizar os detalhes de um processo, <br>
**Para** Consultar as informações relevantes de forma organizada. <br>

**Critérios de Aceitação:**

1.	O ícone de visualização deve estar disponível na lista de processos para ambos os perfis de usuários.

2.	Ao clicar no ícone de visualização, o sistema deve abrir uma página com os detalhes do processo.

3.	Todos os campos do processo devem ser exibidos corretamente, porém devem estar bloqueados para edição. <br><br>

________________________________________
<br>

**US-10. Pesquisa de Processos (Filtro)**

**Como** Advogado, <br>
**Quero** Realizar uma pesquisa geral na lista de processos, <br>
**Para** Localizar processos específicos de forma rápida e eficiente, independentemente da coluna na lista. <br>

**Critérios de Aceitação:**

1.	O sistema deve permitir a pesquisa geral utilizando um campo de texto que filtra a tabela com base no conteúdo de qualquer coluna, aplicando a lógica "contains".

2.	Após clicar em "Pesquisar", a lista deve exibir somente os processos que correspondem ao texto inserido no filtro.

3.	Após a limpeza do filtro, O sistema deve exibir todos os processos automaticamente no seu estado original.

4.	A pesquisa não deve ser case sensitive, permitindo localizar processos independentemente do uso de letras maiúsculas ou minúsculas. <br><br>

________________________________________
<br>

**US-11. Visualização da Lista de Documentos Associados ao Processo**

**Como** Advogado ou Cliente, <br>
**Quero** Visualizar a lista de documentos anexados a um processo específico, <br>
**Para** Consultar todos os documentos associados ao processo de forma clara e organizada.

**Critérios de Aceitação:**

1.	O ícone de visualização de documentos deve estar disponível tanto para o advogado quanto para o cliente na lista de processos.

2.	Ao clicar no ícone de visualização de documentos, o sistema deve exibir a lista completa de documentos anexados ao processo selecionado.

3.	Tanto o cliente como o advogado podem visualizar todos os documentos na lista de documentação.

4.	A lista de documentos deve exibir todos os arquivos carregados até o momento, com informações como “Tipo Documento”, “Criado Em” e “Criado Por”.

5.	Os ícones exibidos na lista devem conter tooltips (dicas de ferramentas) que orientem o utilizador sobre suas funcionalidades. <br><br>

________________________________________
<br>

**US-12. Upload de Documentos Relacionados ao Processo**

**Como** Advogado ou Cliente, <br>
**Quero** Realizar upload de documentos relacionados ao processo, <br>
**Para** Garantir que todas as informações necessárias estejam disponíveis conforme meu perfil de acesso.

**Critérios de Aceitação:**

1.	O upload é permitido apenas no formato PDF, restringindo a exibição de documentos em outro formato ao selecionar o arquivo para upload.

2.	O ícone para upload deve estar disponível na lista de documentos, sendo que advogado o visualiza tanto na lista de “Documentos Advogado” quanto da lista de “Documentos Requerente” e o cliente visualiza o ícone de upload apenas da lista de “Documentos Requerente”.

3.	Ao clicar no ícone de upload, o sistema redireciona o usuário para outra página onde o documento pode ser selecionado e, em seguida, enviado.

4.	Ao selecionar o documento, apenas arquivos com até 2MB são permitidos. Sendo que, se o arquivo for maior, uma mensagem de erro deverá ser exibida e o documento não será salvo.

5.	Os campos “Tipo Documento” e “Documento” na página de upload são de caráter obrigatório, apresentando asterisco (*) nas suas respectivas labels. Se o usuário tentar salvar o upload com algum destes campos vazios, o sistema deve exibir mensagens de erro, informando a necessidade de preenchimento.

6.	Os outros campos referentes ao processo não são editáveis durante o upload do documento.

7.	Após selecionar o arquivo e realizar o upload com sucesso, o usuário deve clicar em "Salvar" para confirmar o envio e adicionar o documento à lista de documentação do processo.

8.	Após o salvamento bem sucedido, o sistema deve exibir no campo “Criado Por” o nome do utilizador igual ao que consta no username do topbar. <br><br>

________________________________________
<br>

**US-13. Exclusão de Documento Carregado**

**Como** Advogado ou Cliente, <br>
**Quero** Excluir documentos carregados na lista de documentos, <br>
**Para** Corrigir erros e remover documentos desatualizados. <br>

**Critérios de Aceitação:**

1.	O ícone de exclusão deve estar disponível em cada linha de documento na lista de documentos.

2.	O advogado pode excluir tanto os documentos do advogado quanto os documentos do requerente (cliente), enquanto o cliente pode excluir apenas os documentos do requerente. Dessa forma, os ícones de exclusão da lista de “Documentos Advogado” não serão visíveis para o cliente.

3.	Ao clicar no ícone de exclusão, o sistema deve solicitar uma confirmação, exibindo uma mensagem perguntando se ele tem certeza de que deseja excluir o documento.

4.	Caso o usuário confirme a exclusão, o sistema deverá exibir uma mensagem de confirmação informando que o documento foi excluído com sucesso, e o mesmo será removido imediatamente da lista de documentos anexados ao processo.

5.	Caso o usuário cancele a exclusão, o documento deve permanecer na lista, sem ser removido. <br><br>

________________________________________
<br>

**US-14. Download de Documento Carregado**

**Como** Advogado ou Cliente, <br>
**Quero** Realizar download dos documentos incluídos na lista de documentos, <br>
**Para** Garantir acesso aos documentos necessários e manter o controle dos arquivos relacionados ao processo. <br>

**Critérios de Aceitação:**

1.	Todos os documentos, tanto os carregados pelo advogado quanto os carregados pelo cliente, devem estar disponíveis para download.

2.	Após o download ser concluído, o sistema deve exibir uma mensagem de sucesso indicando que o arquivo foi baixado corretamente.

3.	O sistema deve garantir que o arquivo seja carregado corretamente no dispositivo do usuário após o download, sem corrompimento.

4.	O sistema não deve impor restrições de permissão, permitindo que tanto advogado quanto cliente possam realizar a ação de download de qualquer documento disponível no processo. <br><br>

________________________________________
<br>

**US-15. Controle de Perfil de Acesso**

**Como** Advogado e Cliente, <br>
**Quero** Ter um tipo de acesso específico e adequado ao meu perfil de usuário, <br>
**Para** Garantir que eu tenha acesso apenas às funcionalidades e informações pertinentes ao meu papel dentro da aplicação. <br>

**Critérios de Aceitação:**

1.	No momento do cadastro, o tipo de perfil (Advogado ou Cliente) deve ser definido através de um campo de seleção (radio button).

2.	Advogados devem ter acesso a todos os processos do escritório de advocacia, incluindo aqueles criados por outros colegas, visualizando os processos de todos os clientes sem qualquer restrição.

3.	Clientes devem visualizar somente os processos associados a eles, definidos pela correspondência do campo “Nome” inserido no cadastro realizado pelo mesmo com o campo "Nome Cliente" do processo adicionado pelo advogado.

4.	O sistema deve ocultar ou desativar automaticamente botões e ícones não autorizados de acordo com o perfil do usuário. Sendo que os seguintes elementos não devem ser visíveis para os clientes: <br>
•	Botão de criação de processos; <br>
•	Ícones de editar e excluir processos; <br>
•	Ícones de adicionar e excluir documentos do advogado.

5.	Advogados devem ter acesso total às funcionalidades da aplicação, incluindo criação, edição e exclusão de processos, além do gerenciamento completo de documentos. <br><br>

________________________________________
<br>


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais, além das restrições do projeto.

<br>

### Requisitos Funcionais


| **ID** | **Descrição do Requisito** | **Prioridade** | 
|------|-----------------------------------------|----| 
| RF01 | Permitir o cadastro da conta, incluindo a escolha do tipo de perfil de acesso (Advogado ou Cliente) | ALTA |  
| RF02 | Permitir o login na aplicação utilizando credenciais válidas definidas no cadastro | ALTA | 
| RF03 | Permitir a edição do cadastro da conta pelos perfis de Advogado e Cliente | BAIXA | 
| RF04 | Permitir a visualização da lista de processos para os perfis de Advogado e Cliente | ALTA |
| RF05 | Permitir a pesquisa feral na lista de processos com a aplicação de filtros que possibilitem a busca por qualquer conteúdo presente na lista, para os perfis de Advogado e Cliente | MÉDIA |
| RF06 | Permitir a visualização de detalhes de um processo específico pelos perfis de Advogado e Cliente | ALTA |
| RF07 | Permitir a criação de um novo processo jurídico pelo perfil de Advogado | ALTA | 
| RF08 | Permitir a edição dos dados de um processo existente pelo perfil de Advogado  | ALTA |
| RF09 | Permitir a conclusão de um processo pelo perfil de Advogado, alterando seu status de "Em Andamento" para "Concluído"  | MÉDIA |
| RF10 | Permitir a exclusão de um processo pelo perfil de Advogado  | MÉDIA |
| RF11 | Permitir a visualização das listas de documentos associados a um processo pelo perfil de Advogado e Cliente  | ALTA |
| RF12 | Permitir o upload de documentos associados a um processo na lista de "Documentos Advogado" pelo perfil de Advogado | ALTA |
| RF13 | Permitir o upload de documentos associados a um processo na lista de "Documentos Requerente" pelos perfis de Advogado e Cliente | ALTA |
| RF14 | Permitir a exclusão de documentos da lista de "Documentos Advogado" pelo perfil de Advogado | MÉDIA |
| RF15 | Permitir a exclusão de documentos da lista de "Documentos Requerente" pelos perfis de Advogado e Cliente | MÉDIA |
| RF16 | Permitir o download de documentos das listas de "Documentos Advogado" e "Documentos Requerente" pelos perfis de Advogado e Cliente | ALTA |
| RF17 | Permitir o logout da aplicação | BAIXA |
| RF18 | Implementar controle de perfil que restrinja a visualização de processos e o acesso às funcionalidades de acordo com o tipo de perfil cadastrado, garantindo acesso total para o perfil de Advogado e acesso limitado para o perfil de Cliente | ALTA |



<br>

### Requisitos Não-Funcionais

| **ID**    | **Descrição do Requisito**  |  **Prioridade**  |
|-------|-------------------------|--------------|
| RNF01 | Usabilidade - A interface do usuário deve ser intuitiva, sendo fácil de operar mesmo para pessoas sem familiaridade com tecnologia  | ALTA  |
| RNF02 | Usabilidade - A interface da aplicação deve exibir tooltips (dicas de ferramentas) ao passar o cursor sobre os ícones, orientando o usuário sobre a funcionalidade de cada um, a fim de garantir uma experiência fluida e intuitiva | MÉDIA |
| RNF03 | Usabilidade - O sistema deve ter um design visual atraente, utilizando uma paleta de cores harmoniosa, tipografia legível e uma interface que promova uma experiência positiva   | MÉDIA |
| RNF04 | Compatibilidade - O sistema deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge) e suas versões mais recentes | MÉDIA |
| RNF05 | Performance - O sistema deve ser capaz de processar e responder a todas as solicitações dos usuários em até 3 segundos | ALTA |


<br>


## Restrições

O projeto se encontra limitado pelas restrições apresentados na tabela a seguir:

| **ID** | **Restrição**                                     |
|----|-------------------------------------------------------|
| 01 | Limitação na precisão e qualidade dos dados inseridos pelo usuário, que pode gerar problemas no andamento do processo | 
| 02 | Limitação de acessibilidade para usuários com deficiência, devido a dificuldade de aplicar exigências de padrões como WCAG, o que pode resultar em dificuldades desses usuários ao utilizar a aplicação | 
| 03 | Limitação de idioma, que pode afetar a compreensão e usabilidade do sistema para usuários que não falam o idioma principal da aplicação |
| 04 | Limitação de localização geográfica, que pode influenciar a adequação dos documentos e informações a serem preenchidos, dependendo da jurisdição específica |
| 06 | Funcionalidades restritas ao armazenamento em local storage, o que limita o desenvolvimento de funcionalidades mais complexas e personalizadas ao sistema |



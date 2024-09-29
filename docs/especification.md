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


## Histórias de Usuários


| EU COMO            | QUERO/PRECISO                      |PARA                                    |
|--------------------|------------------------------------|----------------------------------------|
| Advogado e Cliente | Realizar login e logout no sistema com credenciais válidas  | Ter acesso seguro à aplicação, garantindo a proteção dos dados pessoais e jurídicos |
| Advogado           | Criar processos de clientes        | Registrar todos os casos dos clientes, mantendo a organização e eficiência do escritório |
| Advogado           | Editar informações de um processo   | Atualizar informações importantes para garantir a precisão do caso e permitir que o cliente tenha acesso ao dados atualizados  |
| Advogado           | Excluir um processo                 | Remover processos que foram encerrados ou cancelados    |
| Advogado           | Visualizar lista e detalhes do processo     | Consultar todos os processos criados e visualizar campos preenchidos pelo cliente necessários para o andamento do processo |  
| Advogado           | Realizar upload de documentos de contrato e processo atualizado | Anexar documentos essenciais, garantindo que todas as informações relevantes estejam disponíveis para o cliente |
| Advogado           | Excluir documentos carregados por mim | Corrigir erros e excluir documentos desatualizados  |
| Advogado           | Realizar download dos documentos incluídos pelo cliente | Garantir acesso aos documentos pessoais do cliente para dar continuidade ao processo de forma eficiente   |
| Cliente            | Visualizar lista e detalhes do processo     | Acompanhar o status do seu caso e mantendo-se atualizado sobre as ações do advogado e etapas futuras do processo |  
| Cliente            | Editar informações de um processo | Atualizar documentos pessoais e garantir a precisão do caso |
| Cliente            | Realizar upload de documentos pessoais | Fornecer documentos para o advogado necessários ao andamento do processo de forma remota e organizada  |
| Cliente           | Excluir documentos pessoais carregados por mim | Remover documentos incorretos ou desatualizados |
| Cliente            | Realizar download dos documentos incluídos pelo advogado | Ter acesso a documentos importantes que o advogado disponibilizou para consulta |


<br>

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais do projeto.

<br>

### Requisitos Funcionais

|ID    | Descrição do Requisito | Prioridade | 
|------|-----------------------------------------|----| 
| RF01 | Permitir que o advogado faça login utilizando credenciais válidas | ALTA |  
| RF02 | Permitir que o advogado crie um novo processo jurídico | ALTA | 
| RF03 | Permitir que o advogado visualize a lista de todos os processos  | MÉDIA |
| RF03 | Permitir que o advogado visualize os detalhes de um processo específico | MÉDIA |
| RF04 | Permitir que o advogado edite informações de um processo existente  | ALTA |
| RF05 | Permitir que o advogado faça upload de documentos para um processo  | ALTA |
| RF06 | Permitir que o advogado faça download de documentos do cliente | ALTA |
| RF07 | Permitir que o advogado realize logout  | BAIXA |
| RF08 | Permitir que o cliente faça login utilizando credenciais válidas  | ALTA |
| RF09 | Permitir que o cliente visualize a lista dos seus processos  | MÉDIA |
| RF10 | Permitir que o cliente visualize os detalhes do seu processo | MÉDIA |
| RF11 | Permitir que o cliente faça upload de documentos pessoais  | ALTA |
| RF12 | Permitir que o cliente faça download dos documentos do processo | ALTA |
| RF13 | Permitir que o cliente realize logout | BAIXA |


<br>

### Requisitos Não-Funcionais

| ID    | Descrição do Requisito  |  Prioridade  |
|-------|-------------------------|--------------|
| RNF01 | Usabilidade - A interface do usuário deve ser intuitiva, sendo fácil de operar mesmo para pessoas sem familiaridade com tecnologia  | ALTA  |
| RNF02 | Usabilidade - O sistema deve ser responsivo, garantindo que a interface do usuário se adapte de forma fluida e sem distorções a qualquer tamanho de tela | BAIXA |
| RNF03 | Usabilidade - O sistema deve ter um design visual atraente, utilizando uma paleta de cores harmoniosa, tipografia legível e uma interface que promova uma experiência positiva   | MÉDIA |
| RNF04 | Compatibilidade - O sistema deve ser compatível com os principais navegadores (Chrome, Firefox, Safari, Edge) e suas versões mais recentes | MÉDIA |
| RNF05 | Performance - O sistema deve ser capaz de processar e responder a todas as solicitações dos usuários em até 3 segundos | ALTA |


<br>


## Restrições

O projeto se encontra limitado pelas restrições apresentados na tabela a seguir.

| ID | Restrição                                             |
|----|-------------------------------------------------------|
| 01 | Limitação na precisão dos dados inseridos pelo usuário, que pode gerar problemas no andamento do processo | 
| 02 | Limitação de acessibilidade para usuários com deficiência, devido a dificuldade de aplicar exigências de padrões como WCAG, o que pode resultar em dificuldades desses usuários ao utilizar a aplicação | 
| 03 | Limitação de idioma, que pode afetar a compreensão e usabilidade do sistema para usuários que não falam o idioma principal da aplicação |
| 04 | Limitação de localização geográfica, que pode influenciar a adequação dos documentos e informações a serem preenchidos, dependendo da jurisdição específica |
| 06 | Funcionalidades restritas a utilização framework bootstrap e ao armazenamento em local storage, o que limita o desenvolvimento de funcionalidades mais complexas e personalizadas ao sistema |



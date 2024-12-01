# Programação Funcionalidades

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |    
|------|------------------------|------------|-----------------|
| RF01 | Permitir a criação de cadastro da conta, incluindo a escolha do tipo de perfil de acesso (Advogado ou Cliente) | Carolina Araujo | registrationUser.html |  
| RF02 | Permitir o login na aplicação utilizando credenciais válidas definidas no cadastro | Carolina Araujo e Daniel Freitas | login.html | 
| RF03 | Permitir a edição do cadastro da conta pelos perfis de Advogado e Cliente | Carolina Araujo | registrationUser.html | 
| RF04 | Permitir a visualização da lista de processos pelos perfis de Advogado e Cliente | Carolina Araujo e Daniel Freitas | listProcess.html |
| RF05 | Permitir a pesquisa na lista de processos com a aplicação de filtros que possibilitem a busca por qualquer conteúdo presente na lista pelos perfis de Advogado e Cliente | Carolina Araujo | listProcess.html |
| RF06 | Permitir a visualização de detalhes de um processo específico pelos perfis de Advogado e Cliente | Carolina Araujo e Daniel Freitas | viewProcess.html |
| RF07 | Permitir a criação de um novo processo jurídico pelo perfil de Advogado | Carolina Araujo e Daniel Freitas | createProcess.html |
| RF08 | Permitir a edição de dados de um processo existente pelo perfil de Advogado | Carolina Araujo | updateProcess.html |
| RF09 | Permitir a conclusão de um processo pelo perfil de Advogado, alterando seu status de "Em Andamento" para "Concluído" | Carolina Araujo e Daniel Freitas | updateProcess.html |
| RF10 | Permitir a exclusão de um processo pelo perfil de Advogado | Carolina Araujo | listProcess.html |
| RF11 | Permitir a visualização das listas de documentos associados a um processo pelo perfil de Advogado e Cliente | Carolina Araujo e Daniel Freitas | viewDocuments.html |
| RF12 | Permitir o upload de documentos associados a um processo na lista de "Documentos Advogado" pelo perfil de Advogado | Carolinha Araujo | uploadLawyer.html|
| RF13 | Permitir o upload de documentos associados a um processo na lista de "Documentos Requerente" pelos perfis de Advogado e Cliente | Carolina Araujo | uploadCustomer.html |
| RF14 | Permitir a exclusão de documentos da lista de "Documentos Advogado" pelo perfil de Advogado | Carolina Araujo | viewDocuments.html |
| RF15 | Permitir a exclusão de documentos da lista de "Documentos Requerente" pelos perfis de Advogado e Cliente | Carolina Araujo | viewDocuments.html |
| RF16 | Permitir o download de documentos das listas de "Documentos Advogado" e "Documentos Requerente" pelos perfis de Advogado e Cliente | Carolina Araujo e Daniel Freitas | viewDocuments.html |
| RF17 | Permitir o logout da aplicação | Carolina Araujo e Daniel Freitas | listProcess.html |
| RF18 | Implementar controle de perfil que restrinja a visualização de processos e o acesso às funcionalidades de acordo com o tipo de perfil cadastrado, garantindo acesso total para o perfil de Advogado e acesso limitado para o perfil de Cliente | Carolina Araujo | registrationUser.html, listProcess.html e viewDocuments.html|

<br><br>

## Descrição Estruturas de Dados

### Usuário
|  **Nome**                | **Tipo**          | **Descrição**                                | **Exemplo**                                                                     |
|--------------------------|-------------------|----------------------------------------------|---------------------------------------------------------------------------------|
| Nome                     | Texto             | Nome completo do usuário (cliente/advogado)  | Maria Alice dos Santos                                                          |
| Email                    | Texto             | Endereço de email do usuário                 | maria.alice@gmail.com                                                           |
| Senha                    | Texto             | Senha para autenticação                      | senh@Segura7049#                                                                |

### Processo
|  **Nome**                | **Tipo**          | **Descrição**                                | **Exemplo**                                                                     |
|--------------------------|-------------------|----------------------------------------------|---------------------------------------------------------------------------------|
| Nº Processo              | Número (Inteiro)  | Identificador único do processo              | 1321                                                                            |
| Advogado Responsável     | Texto             | Advogado responsável por conduzir o caso     | Bruno Rodrigues da Silva                                                        |
| Data Entrada             | Data              | Data de entrada do processo                  | 2024-10-20                                                                      |
| Nome Cliente             | Texto             | Nome completo do(a) cliente                  | Maria Alice dos Santos                                                          |
| Nacionalidade Pretendida | Texto             | Nacionalidade que o(a) cliente deseja obter  | Portuguesa                                                                      |
| Documento Cliente        | Texto             | Documento de identificação do(a) cliente     | 343.343.343-93                                                                  |
| Endereço Cliente         | Texto             | Endereço completo do(a) cliente              | Av. da Saudade, 1934 - Ap 12, Vila Diamanete, São Paulo - SP                    |
| Assunto                  | Texto             | Assunto relacionado ao processo              | Nacionalidade Cônjuge                                                           |
| Descrição                | Texto             | Detalhes adicionais sobre o processo         | O processo refere-se à aquisição de nacionalidade portuguesa através de cônjuge |
| Estado                   | Texto             | Estado atual do processo (em andamento/concluído/suspenso) | Em Andamento                                                      |

### Documento
|  **Nome**                | **Tipo**          | **Descrição**                                | **Exemplo**                                                                     |
|--------------------------|-------------------|----------------------------------------------|---------------------------------------------------------------------------------|
| Nº Processo              | Número (Inteiro)  | Identificador único do processo              | 1321                                                                            |
| Advogado Responsável     | Texto             | Advogado responsável por conduzir o caso     | Bruno Rodrigues da Silva                                                        |
| Nome Cliente             | Texto             | Nome completo do(a) cliente                  | Maria Alice dos Santos                                                          |
| Criado Por               | Texto             | Nome da pessoa responsável pela criação do registro no sistema | Bruno Rodrigues da Silva                                      |
| Criado Em                | Data e Hora       | Data e hora em que o documento foi criado    | 2024-10-24 14:30                                                                |
| Tipo Documento           | Texto             | Categoria do documento a ser carregado       | Contrato                                                                        |
| Documento                | Arquivo           | Documento a ser carregado no formato PDF     | contrato.pdf                                                                    |

<br>

## Diagrama Entidade-Relacionamento

![Diagrama Entidade-Relacionamento](img/diagram.png)






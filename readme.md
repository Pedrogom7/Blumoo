# Projeto ODS 9: Indústria, Inovação e Infraestrutura

## Introdução

Este projeto tem como objetivo desenvolver uma aplicação web abrangente que ofereça suporte e recursos para impulsionar a construção de infraestruturas resilientes, promover uma industrialização inclusiva e sustentável, e fomentar a inovação em diversas áreas. Esta aplicação está alinhada ao Objetivo de Desenvolvimento Sustentável (ODS) 9 da ONU.

## Objetivos

- Desenvolver uma aplicação web que facilite o acesso a informações sobre projetos de infraestrutura.
- Promover a colaboração entre setores industriais diversos.
- Incentivar o desenvolvimento e adoção de soluções inovadoras.

## Funcionalidades

- CRUD de usuários (Create, Read, Update, Delete).
- Validação de criação de contas com autômato finito determinístico.
- Armazenamento de dados em banco de dados relacional.
- Utilização de técnicas de Machine Learning para análise de dados e identificação de padrões.

## Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript

### Back-end

- Node.js
- TypeScript
- Express

### Banco de Dados

- Banco de dados relacional (ex: PostgreSQL, MySQL)

### Outros

- TypeORM
- Machine Learning (biblioteca a ser definida)
- TypeScript
- Autômato finito determinístico para validação de entradas

## Estrutura de Dados

A aplicação utiliza uma estrutura de dados em Árvore para organização hierárquica dos projetos e informações associadas.

## Teoria da Computação

Desenvolvimento de um autômato finito determinístico para validação de criação de nomes de usuário e senhas de acordo com regras definidas na aplicação.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn
- Banco de dados relacional (ex: PostgreSQL, MySQL)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure o banco de dados:
   - Crie um banco de dados no seu sistema de gerenciamento de banco de dados.
   - Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente para corresponder ao seu banco de dados.

4. Execute as migrações do banco de dados:
    ```bash
    npm run typeorm migration:run
    ```

5. Inicie o servidor:
    ```bash
    npm run dev
    ```

## Uso

Após a instalação e configuração, a aplicação estará disponível em `http://localhost:3000`.

### Endpoints

- `POST /users` - Cria um novo usuário
- `GET /users` - Retorna todos os usuários
- `PUT /users/:id` - Atualiza um usuário existente
- `DELETE /users/:id` - Deleta um usuário

### Exemplos de Requisições

#### Criar Usuário

```bash
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json" \
-d '{"username": "exampleUser", "password": "examplePassword"}'
```
### Listar Usuários

```bash
curl -X GET http://localhost:3000/users
```

### Atualizar Usuário

```bash
curl -X PUT http://localhost:3000/users/1 \
-H "Content-Type: application/json" \
-d '{"username": "updatedUser", "password": "updatedPassword"}'
``` 

### Deletar Usuário

```bash
curl -X DELETE http://localhost:3000/users/1
```

### Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.


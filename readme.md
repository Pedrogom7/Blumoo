# Blumoo: A Nova Era de Conexão entre Investidores e Startups

## Introdução

Bem-vindo ao Blumoo, a rede social inovadora criada para revolucionar a forma como investidores e startups se conectam e colaboram. Em um mundo onde a inovação e o empreendedorismo estão em constante crescimento, Blumoo surge como a plataforma definitiva para unir aqueles que buscam oportunidades de investimento com as mentes mais brilhantes e as ideias mais promissoras.

### Perfis: Conecte-se com Visionários

Na aba de Perfis, você encontrará uma comunidade vibrante de empreendedores, investidores e mentores. Cada usuário possui um perfil detalhado que destaca suas experiências, habilidades e interesses. Startups podem exibir suas trajetórias, conquistas e metas, enquanto investidores compartilham suas áreas de interesse, histórico de investimentos e expectativas.

Nossa interface intuitiva permite que você navegue facilmente pelos perfis, filtrando por setores, estágios de desenvolvimento e localização geográfica. Encontre parceiros que compartilham sua visão e inicie conversas significativas que podem levar a colaborações frutíferas.

### Projetos: Inspire-se e Encontre a Próxima Grande Ideia

A aba de Projetos é o coração do Blumoo. Aqui, startups podem publicar detalhes abrangentes sobre seus projetos, desde conceitos iniciais até produtos prontos para o mercado. Cada projeto é apresentado de maneira visualmente atraente, com descrições claras, vídeos, gráficos e relatórios financeiros.

Os investidores podem explorar uma vasta gama de projetos, utilizando filtros avançados para identificar oportunidades que correspondam a seus critérios específicos. Quer você esteja interessado em tecnologia, saúde, energia renovável ou qualquer outro setor, Blumoo oferece uma diversidade de projetos inovadores aguardando seu apoio.

### Investidores: Oportunidades de Investimento ao Seu Alcance

Na aba de Investidores, oferecemos um espaço dedicado para aqueles que buscam expandir seus portfólios com investimentos em startups promissoras. Investidores podem criar perfis detalhados que destacam suas preferências de investimento, histórico e sucesso em investimentos anteriores.

Os empreendedores têm a oportunidade de conhecer investidores que se alinham com seus objetivos e valores. Utilize ferramentas de busca avançadas para encontrar investidores que estão ativamente procurando novas oportunidades em sua área de atuação. Estabeleça conexões diretas, marque reuniões e negocie os termos de investimento de forma transparente e segura.

### Segurança e Transparência

Blumoo valoriza a segurança e a transparência em todas as interações. Implementamos protocolos rigorosos de verificação para garantir que todas as startups e investidores cadastrados sejam legítimos e confiáveis. Nossos sistemas de comunicação são criptografados, garantindo que suas conversas e negociações permaneçam confidenciais.

### Suporte e Crescimento

Além de conectar investidores e startups, Blumoo oferece uma variedade de recursos de suporte para ajudar nossos usuários a crescerem e prosperarem. Desde webinars educacionais até consultorias personalizadas, estamos comprometidos em fornecer as ferramentas e o conhecimento necessários para que você alcance o sucesso.

Junte-se ao Blumoo Hoje

Blumoo é mais do que uma rede social; é uma comunidade de visionários, inovadores e investidores que estão moldando o futuro. Junte-se a nós hoje e descubra como Blumoo pode transformar suas ideias em realidade e suas aspirações em conquistas. Seja você um empreendedor buscando capital ou um investidor em busca da próxima grande ideia, Blumoo é o lugar onde suas ambições encontram oportunidades.


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


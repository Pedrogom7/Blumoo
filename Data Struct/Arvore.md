## Visão Geral
    A estrutura de dados em árvore é uma forma de organizar dados hierarquicamente, onde cada nó (exceto o nó raiz) tem exatamente um nó pai e zero ou mais nós filhos. Essa estrutura é adequada para representar relacionamentos hierárquicos, como os projetos de infraestrutura que podem ter subprojetos ou componentes associados.

### Explicação da Estrutura

    - Classe Project: Representa um projeto na árvore. Cada projeto tem um id, name, description, um ponteiro para o seu projeto pai (parent) e uma lista de projetos filhos (children).
    - Métodos addChild e removeChild: Permitem adicionar e remover projetos filhos, mantendo a integridade da estrutura hierárquica.
    - Método findProjectById: Implementa uma busca na árvore para encontrar um projeto pelo seu ID, percorrendo recursivamente todos os nós filhos.

### Vantagens

    - Hierarquia Clara: Facilita a representação de relações hierárquicas complexas entre projetos.
    - Flexibilidade: Permite fácil adição e remoção de projetos.
    - Busca Recursiva: A busca recursiva permite encontrar projetos de maneira eficiente, mesmo em estruturas complexas.

### Aplicação Prática
    Na aplicação web desenvolvida, essa estrutura de árvore pode ser utilizada para organizar e visualizar projetos de infraestrutura e seus componentes de maneira clara e estruturada. A API pode fornecer endpoints para adicionar, remover e buscar projetos, mantendo essa estrutura de árvore no banco de dados.



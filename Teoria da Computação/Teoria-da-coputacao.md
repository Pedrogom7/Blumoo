# Teoria da Computação: Autômato Finito Determinístico (DFA) e Gramática Regular

## Regras para Validação do Nome do Usuário e Senha

### Nome do Usuário:

- Deve começar com uma letra (maiúscula ou minúscula).
- Pode conter letras (maiúsculas ou minúsculas), números, underscores (_), e pontos (.).
- Deve ter entre 3 e 15 caracteres.


### Senha:

- Deve ter pelo menos uma letra maiúscula.
- Deve ter pelo menos uma letra minúscula.
- Deve ter pelo menos um número.
- Deve ter pelo menos um caractere especial (!@#$%^&*).
- Deve ter entre 8 e 20 caracteres.


## Autômato Finito Determinístico (DFA)

### Nome do Usuário

Vamos construir um DFA para validar o nome do usuário de acordo com as regras especificadas.

    Estados: q0 (inicial), q1 (aceitação), q2 (erro).
    Alfabeto: Σ = {a-z, A-Z, 0-9, _, .}
Transições:
De q0 para q1 com uma letra (a-z, A-Z).
De q1 para q1 com uma letra, número, underscore, ou ponto.
De q1 para q2 se o comprimento exceder 15 caracteres.

        
GRAMATICA REGULAR PARA O USUARIO:
    S -> A
    A -> aA | bA | ... | zA | A | B | ... | ZA | a | b | ... | z | A | B | ... | Z
    A -> A0 | A1 | ... | A9 | A_ | A.

### Senha
Vamos construir um DFA para validar a senha de acordo com as regras especificadas.

    Estados: q0 (inicial), q1 (tem minúscula), q2 (tem maiúscula), q3 (tem número), q4 (tem especial), q5 (aceitação), q6 (erro).
    Alfabeto: Σ = {a-z, A-Z, 0-9, !@#$%^&*}
    Transições:
    De q0 para q1 com uma letra minúscula.
    De q0 para q2 com uma letra maiúscula.
    De q0 para q3 com um número.
    De q0 para q4 com um caractere especial.
    De q1 para q1, q2, q3, ou q4 conforme os caracteres.
    De q2 para q2, q1, q3, ou q4 conforme os caracteres.
    De q3 para q3, q1, q2, ou q4 conforme os caracteres.
    De q4 para q4, q1, q2, ou q3 conforme os caracteres.
Transição para q5 (aceitação) quando todos os requisitos são atendidos e o comprimento está entre 8 e 20 caracteres.
De qualquer estado para q6 se o comprimento exceder 20 caracteres.

GRAMATICA REGULAR PARA A SENHA:
    S -> aA | bA | ... | zA | AA | ... | ZA | A1 | A2 | ... | A9 | A! | A@ | A# | A$ | A% | A^ | A& | A*
    A -> aA | bA | ... | zA | A | B | ... | ZA | 0 | 1 | ... | 9 | ! | @ | # | $ | % | ^ | & | *


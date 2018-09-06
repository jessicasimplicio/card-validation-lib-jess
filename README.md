# Validador de número de cartão de crédito

**Essa biblioteca serve para verificar se o conjunto de números de um cartão de
crédito é válido. Pode ser usado em diversas aplicações.**

A versão atual verifica se um conjunto de números inteiros é válido para cartão de crédito. Para a validação é usado o Algoritmo de Luhn.

## Os métodos utilizados na biblioteca são:

#### **cardValidator(num);**

Exemplo de uso:

```
$node
> let validation = require("card-validation-lib-jess")
> validation(36490102462661); //'true'
```


## versão 1.0.0

- funcionalidades: conversão de números de 0 a 999999999;
- conversão para texto em português brasileiro, com letras minúsculas.


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install card-validation-lib-jess`


## roadmap oficial do projeto

#### versão 2.0.0 (previsão outubro/2018)
- correção de bugs eventuais bugs;
- implementação de verificação somente para quantidade mínima e máxima
de dígitos que são usados em cartões(16 à 19 dígitos);

#### versão 1.0.0 (released)
- funcionalidades: verifica se um número inteiro com mais de 1 dígito é válido. 
Desafio 1
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

/*
Você está na feira com a sua sacola e parou em uma banca. 
O feirante lhe entregou pimentões amarelos e vermelhos. 
Agora iremos somar os pimetões amarelos e vermelhos para descobrir o total de pimentões na sacola.  
Você receberá 2 inteiros que devem ser lidos e armazenados nas variáveis A (pimentões amarelos) e B (pimentões vermelhos).
Faça a soma de A e B atribuindo o seu resultado na variável X (total de pimentões). 
Apresente X como descrito na mensagem de exemplo abaixo. 
Não apresente outra mensagem além da mensagem especificada.
*/

/*
Em JavaScript as funções de STDIN e STDOUT respectivamente sãogets e console.log, a função gets é implementada internamente para auxiliar a entrada dos dados.
Exemplo:
let line = gets(); // Retorna a próxima linha de entrada
console.log(line); // Imprime o dado
*/


Exemplo:
let line = gets(); // Retorna a próxima linha de entrada
console.log(line); // Imprime o dado

let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let total = A + B; 
print("X = " + total);


Desafio 2
/*
Você receberá dois valores inteiros. 
Faça a leitura e em seguida calcule o produto entre estes dois valores. 
Atribua esta operação à variável PROD, mostrando esta de acordo com a mensagem de saída esperada (exemplo abaixo). 

Entrada
A entrada contém 2 valores inteiros.

Saída
Exiba a variável PROD conforme exemplo abaixo, tendo obrigatoriamente um espaço em branco antes e depois da igualdade.

Exemplos de Entrada	Exemplos de Saída
3
9

PROD = 27

-30
10

PROD = -300

0
9

PROD = 0
*/

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar


let valor1 = parseInt(gets());
let valor2 = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let total = valor1 * valor2 ;
print("PROD = " +   total   );

Desafio 3
/*
Desafio
Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores, 
porém temos apenas a quantidade de horas trabalhadas e o valor hora. 
Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas, 
o valor que recebe por hora e calcula o salário desse colaborador. 
Em seguida, apresente o número e o salário do colaborador, com duas casas decimais.

Entrada
Você receberá 2 números inteiros e 1 número com duas casas decimais, representando o número, 
quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada.

Saída
Exiba o número e o salário do colaborador, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
No caso do salário, também deve haver um espaço em branco após o $.

Exemplos de Entrada
25
100
5.50
Exemplos de Entrada
NUMBER = 25
SALARY = U$ 550.00

Exemplos de Entrada
1
200
20.50
Exemplos de Entrada
NUMBER = 1
SALARY = U$ 4100.00

Exemplos de Entrada
6
145
15.55
Exemplos de Entrada
NUMBER = 6
SALARY = U$ 2254.75
*/

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());

//Complete os espaços em branco com uma possível solução para o problema

let parcial = valor1 ;
let Salary = (valor2 * valor3).toFixed(2) ;
print("NUMBER = " +   parcial  );
print("SALARY = " + " U$ " + Salary )
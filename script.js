//Mostre no console.log a mensagem "Ano novo está chegando!
console.log(`Ano novo chegando`);

//Crie uma variável que receba o nome da cantora Mariah Carey
//Crie uma variável que receba a idade dela
//Crie uma variável com o ano atual e subtraia pelo o valor da idade da Mariah Carey
let cantora = `Mariah Carey`;
let idade = 54;
let ano = 2023;
console.log(ano-idade);

//Crie uma variável para guardar a data de nascimento da Mariah Carey 
//Mostre no console a data de nascimento da Mariah Carey
const anoNascimento = ano-idade;
console.log(anoNascimento);

//Crie uma variável chamada “quartaFeira” e atribua à ela o valor booleano que representa verdadeiro ou falso e mostre a saída no console.log
//Exiba no console o tipo de dado da váriavel quartaFeira
let quartaFeira = true;
console.log(quartaFeira);
console.log (typeof quartaFeira);


//Crie uma condição  SE você for maior ou igual 18 retornará  a mensagem:  Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey. SENÃO for maior ou igual a 18,  retorne a seguinte mensagem:  "Sinto muito, mas assistirá da tv globo
let minhaIdade = 18;
if (minhaIdade>=18){
    console.log(`Você é maior de idade, poderá curtir o show`)
}
else{
    console.log(`Sinto muito, mas você assistirá da tv globo`);
}


//Crie uma condição que exiba uma mensagem no console se você fizer aniversário em Agosto OU Dezembro OU JUNHO. Caso seja verdadeira a informação, retorne essa mensagem: Uma ou mais opções estão corretas. O mês escolhido foi o mês tal. Caso a informação seja falsa, retorne a seguinte mensagem:  Algo de errado não está certo, o mês digitado foi o mês tal.
let niver = `Outubro`;
if (niver == `Agosto` || niver == `Dezembro` || niver ==`Junho`){
    console.log(`Uma ou mais opções estão incorretas`)
}else{
    console.log(`Algo de errado não está certo, o mês digitado foi ${niver}`)
}


    



//templateString   `${}`
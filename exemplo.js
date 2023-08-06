console.log("Exemplo Prático")

console.log("Dados do Tipo -----Primitivo-----Estrutural" );

console.log("Booleano :Undefined ::String :: Number");
console.log("1Nome com aspas duplas");
console.log('2Nome com "aspas" simples duplas');
console.log(`3Nome com a crase ${1 + 2}  chaves brace conta numerica  chaves brace (1+2)duplas`);

let Nome = "Aspas duplas";
let nome =  'Aspas simples duplas';
let nomE = `crase dupla ${1+3}` ;

console.log(Nome);
console.log(nome);
console.log(nomE);

console.log("Tabuada");

let RowOne = 'Calculo de 20 vezes 10';
let RowTwo = `Resultado ${20*10}`;

console.log(RowOne);
console.log(RowTwo);



console.log("Tipo Estrutural :::::::object:::::array ::::");
let Tipo_Estrutural_Array = ["Shoppin list ", `quantidade $(40*2)`, 12345 , true , (43*"produtos")];

console.log(Array);

const Tipo_Estrutural_Objeto= {

  //definindo atributos
  nome : "Cabelo",
  quantidade: 20,
  numero:2,
  //definindo os metodos
  função: function( ){

    console.log("Definindo-Atributos-E-Metodos");
    resultado :(quantidade * numero);
    console.log(resultado);
  }

}
console.log(Tipo_Estrutural_Objeto);
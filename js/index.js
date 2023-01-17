// Iteration 1: Names and Input

let hacker1 = "Nick";
  console.log(`El nombre del hacker es ${hacker1}`);
let hacker2 = "Nick";
  console.log(`El nombre del navegador es ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `El conductor ${hacker1} es el nombre mas largo, tiene ${hacker1.length} caracteres`
  );
} else if (hacker1.length < hacker2.length){
  console.log(
    `Parece que el navegador ${hacker2} tiene el nombre mas largo, tiene ${hacker2.length} caracteres`
  );
} else if(hacker1.length == hacker2.length){
  console.log(`Vaya, ambos tienen nombres igualmente largos ${hacker1.length} caracteres`)
}

// // Iteration 3: Loops

let nameUp= "";
let nameSpace = "";

  for (let i = 0; i < hacker1.length; i++){
   nameUp = hacker1.toUpperCase();
   nameSpace += nameUp[i] + " ";
}
console.log(nameSpace)




let cadena = "";

// i es = a el total de caracteres de hacker1
// 1- i=3 -- 3 >= 0?? true -- i = 2
// 2- i=2 -- 2 >=0?? true -- i= 1
for(let i = hacker1.length -1; i >=0; i-- ){
    cadena += hacker1[i]
  }
console.log(cadena)


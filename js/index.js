// Iteration 1: Names and Input

let hacker1 = "Nick";
console.log(`El nombre del hacker es ${hacker1}`);
let hacker2 = "Chrome";
console.log(`El nombre del navegador es ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `El conductor ${hacker1} es el nombre mas largo, tiene ${hacker1.length} caracteres`
  );
} else {
  console.log(
    `El conductor ${hacker2} es el nombre mas largo, tiene ${hacker2.length} caracteres`
  );
}

// Iteration 3: Loops

let nameUp= "";
let nameSpace = "";

  for (let i = 0; i < hacker1.length; i++){
   nameUp = hacker1.toUpperCase();
    // console.log(nameUp)
   nameSpace += nameUp[i] + " ";
}
console.log(nameSpace)




let cadena = "";

for(let i = hacker1.length -1; i >=0; i-- ){
    cadena += hacker1[i]
  }
console.log(cadena)
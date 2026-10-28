let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// temp = varA;
// varA = varB;
// varB = varC;
// varC = temp;

// ou

[varA, varB, varC] = [varB, varC, varA];


console.log(varA, varB, varC);
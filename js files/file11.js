// undefined
// null

let firstName;
console.log(typeof firstName);
firstName = "Harshit";
console.log(typeof firstName, firstName);

console.log(`${firstName} this is a ${typeof firstName}`);

// null
let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable);
// null ka type h object ye bug h
// bug , error

// bigInt
let myNumber = 123;
console.log(myNumber);

console.log(Number.MAX_SAFE_INTEGER);

let mybigInt = BigInt(214235457546776768676355634545465476865767654);
console.log(mybigInt);

"use strict";
let globalName = "global Name";
{
  let name = "dale";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name);
console.log(globalName);
const count = 17;
const size = 17.1;
console.log(`value:${count}, type: ${typeof count}`);
console.log(`value:${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity, negativeInfinity, nAn);

const bigInt = 12369178263918263917823n;
console.log(`value:${bigInt}, type: ${typeof bigInt}`);

let nothing = null;
console.log(`value:${nothing}, type: ${typeof nothing}`);

let x;
console.log(`value:${x}, type: ${typeof x}`);

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id2");
const gSymbol2 = Symbol.for("id2");
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1}`);

let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = 1 + "5";
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);

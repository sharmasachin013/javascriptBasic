console.log(String(10));
//"10"

(10).toString();
console.log((12).toString());
//"10"

String(true);
console.log(String(true));
//"true"

true.toString();
console.log(true.toString());
//"true"

String(false);
console.log(false.toString());
//"false"

false.toString();
console.log(false.toString());
//"false”

String(null);
console.log(String(null));
//"null"

String(undefined);
console.log(String(undefined));
//"undefined“

String(NaN);
console.log(String(NaN));
//"NaN”

NaN.toString();
console.log(typeof NaN.toString());
//"NaN”
// the method toString()
// doesn’t work with null and undefined types .
// Although it works with NaN

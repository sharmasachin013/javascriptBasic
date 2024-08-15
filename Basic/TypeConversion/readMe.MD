Converting Values To String
To convert a value to a string , JS provides 2 ways:

1. Using the global function called String( )
2. Using the method toString( ) on the value to be converted

Syntax Of String( )
String (value to be converted)

Syntax Of toString( )
value.toString( )
String(10)
//"10"

(10).toString()
//"10"

String(true)
//"true"

true.toString()
//"true"

String(false)
//"false"

false.toString()
//"false”

Remember , that the method toString()
doesn’t work with null and undefined types .
Although it works with NaN

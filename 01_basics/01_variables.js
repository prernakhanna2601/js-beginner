const accountId = 144553; //used for constants
let accountEmail = "khannaprerna@gmail.com";
var accountPassword = "12345"; // scope problem bascially we use let mostly
accountCity = "jaipur";// it is not a good practice but we can do it
let accountState;

 //accountId = 2 // not allowed

 accountEmail = "hc@hc.com";
 accountPassword = "21212121"
 accountCity = "Bengaluru";

 console.log(accountId);
 //console.log(accountEmail);
 //console.log(accountPassword);
 //console.log(accountCity);
 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

 /*
 prefer not to use var
 because of issue in block scope and functional scope
 */
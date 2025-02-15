const accountId = 2303
let accountEmail = "nisarg@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"

let accountState;

//accountId = 2 // not allowed

accountEmail = "nishh@gmail.com"
accountPassword = "773676"
accountCity = "Surat"

console.log(accountId);

/*  
    prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


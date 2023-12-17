const accountId = 31234;
let accountEmail = "bajuddinkhan@gmail.com";
var accountPassword = "Demo@123";
accountCity = "Jaipur"; // aesa bhi kar sakte hai

let accountState;

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState, // ye undefined dega because declare karke chod diya hai
]);

/*
const - for declaring contant


Note:- Please don't use var because it has block and functional scope issue.

*/

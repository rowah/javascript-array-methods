const accounts = [
  { accountName: "OptimisticPanda", noOfFollowers: 100 },
  { accountName: "SunshineSoul", noOfFollowers: 400 },
  { accountName: "GratefulHeart", noOfFollowers: 150 },
  { accountName: "DynamicDiva", noOfFollowers: 300 },
  { accountName: "SassyStarlet", noOfFollowers: 1200 },
  { accountName: "BelieveInYou", noOfFollowers: 56000 },
  { accountName: "PeacefulPlace", noOfFollowers: 426 },
  { accountName: "Rodenta", noOfFollowers: 12301 },
];

//FILTER METHOD
//returns a new array containing all elements of the calling array for which the provided filtering function returns true
const lessThan500Followers = accounts.filter((account) => {
  return account.noOfFollowers < 500;
});
console.log(lessThan500Followers);
// [
//   {
//     accountName: 'OptimisticPanda',
//     noOfFollowers: 100
//   },
//   {
//     accountName: 'SunshineSoul',
//     noOfFollowers: 400
//   },
//   {
//     accountName: 'GratefulHeart',
//     noOfFollowers: 150
//   },
//   {
//     accountName: 'DynamicDiva',
//     noOfFollowers: 300
//   },
//   {
//     accountName: 'PeacefulPlace',
//     noOfFollowers: 426
//   }
// ]
//logging accounts gives the original array
console.log(accounts);

//MAP METHOD
//takes an array and transforms it into a new array by invoking a function on every element in the original array which leads to a slight transformation of each element of the original array
const moreFollowers = accounts.map((account) => {
  return account.noOfFollowers + 10;
});
console.log(moreFollowers); //[110, 410, 160, 310, 1210, 56010, 436, 12311]

//FIND METHOD
const foundAcc = accounts.find((account) => {
  return account.accountName === "DynamicDiva";
});
console.log(foundAcc); //{accountName: 'DynamicDiva', noOfFollowers: 300}

//FOR EACH METHOD
//It works just like a for loop but takes a function instead which is called for each element in the array
accounts.forEach((account) => {
  console.log(account.accountName);
});
// 'OptimisticPanda'
// 'SunshineSoul'
// 'GratefulHeart'
// 'DynamicDiva'
// 'SassyStarlet'
// 'BelieveInYou'
// 'PeacefulPlace'
// 'Rodenta'

//SOME METHOD
//tests whether at least one element in the array passes the test implemented in the testing function and return true or false
const zeroFollowers = accounts.some((account) => {
  return account.noOfFollowers == 0;
});

console.log(zeroFollowers); //false

//EVERY METHOD
//works the same as some method except that it checks if every element in the array passes the test implemented in the testing function and if they all do, it returns true
console.log(
  accounts.every((account) => {
    return account.noOfFollowers >= 100;
  })
); //returns true

//REDUCE METHOD
//Performs reduction
const allFollowers = accounts.reduce(
  (previousTotal, currentAccount) =>
    previousTotal + currentAccount.noOfFollowers,
  0
);
console.log(allFollowers); // 70877

//INCLUDES METHOD
//determines if an array includes a certain value and returns either true or false depending on the availability of that element
const followers = [100, 400, 130, 300, 1200, 56000, 426, 12301];
console.log(followers.includes(12301)); //true

//SPLICE METHOD
//The splice method deletes, inserts, and/or replaces elements in an array
//Deletion
// accounts.splice(1, 1);
// console.log(accounts);

//Replacement
// const deletedAccounts = accounts.splice(
//   1,
//   2,
//   { accountName: "Tumbulu", noOfFollowers: 450 },
//   { accountName: "Bondo", noOfFollowers: 340 }
// );
// console.log(accounts);
// 0: {accountName: 'OptimisticPanda', noOfFollowers: 100}
// 1: {accountName: 'Tumbulu', noOfFollowers: 450}
// 2: {accountName: 'Bondo', noOfFollowers: 340}
// 3: {accountName: 'DynamicDiva', noOfFollowers: 300}
// 4: {accountName: 'SassyStarlet', noOfFollowers: 1200}
// 5: {accountName: 'BelieveInYou', noOfFollowers: 56000}
// 6: {accountName: 'PeacefulPlace', noOfFollowers: 426}
// 7: {accountName: 'Rodenta', noOfFollowers: 12301}
//console.log(deletedAccounts);
//0: {accountName: 'SunshineSoul', noOfFollowers: 400}
//1: {accountName: 'GratefulHeart', noOfFollowers: 150}

//Insertion
// from index 3
// delete 0
// then insert {accountName: 'Royman', noOfFollowers: 5000}
// accounts.splice(3, 0, { accountName: "Royman", noOfFollowers: 5000 });
// console.log(accounts);
// 0: {accountName: 'OptimisticPanda', noOfFollowers: 100}
// 1: {accountName: 'SunshineSoul', noOfFollowers: 400}
// 2: {accountName: 'GratefulHeart', noOfFollowers: 150}
// 3: {accountName: 'Royman', noOfFollowers: 5000}
// 4: {accountName: 'DynamicDiva', noOfFollowers: 300}
// 5: {accountName: 'SassyStarlet', noOfFollowers: 1200}
// 6: {accountName: 'BelieveInYou', noOfFollowers: 56000}
// 7: {accountName: 'PeacefulPlace', noOfFollowers: 426}
// 8: {accountName: 'Rodenta', noOfFollowers: 12301}

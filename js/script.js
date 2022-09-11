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
const zeroFollowers = accounts.some((account) => {
  return account.noOfFollowers == 0;
});

console.log(zeroFollowers); //false

//EVERY METHOD
console.log(
  accounts.every((account) => {
    return account.noOfFollowers >= 100;
  })
); //returns true

//REDUCE METHOD
const allFollowers = accounts.reduce(
  (previousTotal, currentAccount) =>
    previousTotal + currentAccount.noOfFollowers,
  0
);
console.log(allFollowers); // 70877

//INCLUDES METHOD
const followers = [100, 400, 130, 300, 1200, 56000, 426, 12301];
console.log(followers.includes(12301));

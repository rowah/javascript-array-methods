const accountNames = [
  { accountName: "OptimisticPanda", noOfFollowers: 100 },
  { accountName: "SunshineSoul", noOfFollowers: 200 },
  { accountName: "GratefulHeart", noOfFollowers: 150 },
  { accountName: "DynamicDiva", noOfFollowers: 300 },
  { accountName: "SassyStarlet", noOfFollowers: 1200 },
  { accountName: "BelieveInYou", noOfFollowers: 56000 },
  { accountName: "PeacefulPlace", noOfFollowers: 426 },
  { accountName: "PeacefulPlace", noOfFollowers: 12301 },
];

//Filter Method
const lessThan500Followers = accountNames.filter((account) => {
  return account.noOfFollowers < 500;
});
console.log(lessThan500Followers);

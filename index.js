// const mockData = {
//   data: [
//     {
//       first_name: "Ryun",
//       last_name: "Cobb",
//       age: 22,
//       gender: "F",
//       gender_interest: "M",
//       location: "city",
//       min_age_interest: 32,
//       max_age_interest: 82,
//     },
//   ],
// };
// let i = 55;
// let userFirstName = mockData.data[i].first_name;
// let userLastName = mockData.data[i].last_name;
// let userAge = mockData.data[i].age;
// let userGender = mockData.data[i].gender;
// let userGenderInterest = mockData.data[i].gender_interest;
// let userLocation = mockData.data[i].location;
// let userMinAgeInterest = mockData.data[i].min_age_interest;
// let userMaxAgeInterest = mockData.data[i].max_age_interest;

const yourProfile = {};

let yourName = prompt("What is your name?");
yourProfile.first_name = yourName;

let yourLastName = prompt("What is your last name?");
yourProfile.last_name = yourLastName;

let yourAge = prompt("What is your age?");
yourProfile.age = yourAge;

let yourGender = prompt("What is your gender? (Please enter F, M or X)");
yourProfile.gender = yourGender;

let yourGenderInterest = prompt(
  "Which gender are you interested in? (Please enter F, M or X)"
);
yourProfile.gender_interest = yourGenderInterest;

let yourLocation = prompt("What is your location?");
yourProfile.location = yourLocation;

let yourMinAgeInterest = prompt(
  "What is the minimum age you're interested in?"
);
yourProfile.min_age_interest = yourMinAgeInterest;

let yourMaxAgeInterest = prompt(
  "What is the maximum age you're interested in?"
);
yourProfile.max_age_interest = yourMaxAgeInterest;

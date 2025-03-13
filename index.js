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
let i = 55;
let userFirstName = mockData.data[i].first_name;
let userLastName = mockData.data[i].last_name;
let userAge = mockData.data[i].age;
let userGender = mockData.data[i].gender;
let userGenderInterest = mockData.data[i].gender_interest;
let userLocation = mockData.data[i].location;
let userMinAgeInterest = mockData.data[i].min_age_interest;
let userMaxAgeInterest = mockData.data[i].max_age_interest;

const userProfile = {
  first_name: userFirstName,
  last_name: userLastName,
  age: userAge,
  gender: userGender,
  gender_interest: userGenderInterest,
  location: userLocation,
  min_age_interest: userMinAgeInterest,
  max_age_interest: userMaxAgeInterest,
};

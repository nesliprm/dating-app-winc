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

// NAME BLOCK

let yourName = "";
let yourLastName = "";

while (!yourName) {
  yourName = prompt("What is your name?");

  if (yourName === null || yourName === "") {
    yourName = prompt("Please enter a valid name:");
  } else {
    yourName = yourName.trim();
  }
}
yourProfile.first_name = yourName;

while (!yourLastName) {
  yourLastName = prompt(`Hello ${yourName}, what is your last name?`);

  if (yourLastName === null || yourLastName === "") {
    yourLastName = prompt("Please enter a valid last name:");
  } else yourLastName = yourLastName.trim();
}

yourProfile.last_name = yourLastName;

//

// AGE BLOCK

let yourAge = "";

while (!yourAge || yourAge < 18) {
  yourAge = prompt("What is your age? (Must be 18 or older)");

  if (yourAge !== null) {
    yourAge = Number(yourAge);
  }

  if (yourAge < 18) {
    alert("You must be at least 18! Redirecting you to Disney...");
    window.location.href = "https://www.disney.com";
    throw new Error("User is under 18. Script stopped.");
  }
}

yourProfile.age = yourAge;

//

// GENDER BLOCK

let yourGender = "";
let yourGenderInterest = "";

while (
  !yourGender ||
  (yourGender !== "F" && yourGender !== "M" && yourGender !== "X")
) {
  yourGender = prompt("What is your gender? (Please enter F, M, or X)");

  if (yourGender === null) {
    alert("Please enter F, M, or X.");
    continue;
  }

  yourGender = yourGender.trim().toUpperCase();
}

yourProfile.gender = yourGender;

while (
  !yourGenderInterest ||
  (yourGenderInterest !== "F" &&
    yourGenderInterest !== "M" &&
    yourGenderInterest !== "X")
) {
  yourGenderInterest = prompt(
    "Which gender are you interested in? (Please enter F, M or X)"
  );

  if (yourGenderInterest === null) {
    alert("Please enter F, M, or X.");
    continue;
  }

  yourGender = yourGender.trim().toUpperCase();
}

yourProfile.gender_interest = yourGenderInterest;

//

// LOCATION BLOCK

let yourLocation = "";

while (!yourLocation || (yourLocation !== "city" && yourLocation !== "rural")) {
  yourLocation = prompt("What is your location, city or rural?");

  if (yourLocation === null) {
    alert("Please enter a valid location.");
    continue;
  }

  yourLocation = yourLocation.trim().toLowerCase();
}
yourProfile.location = yourLocation;

//

// AGE INTEREST BLOCK

let yourMinAgeInterest = "";
let yourMaxAgeInterest = "";

while (!yourMinAgeInterest || yourMinAgeInterest < 18) {
  yourMinAgeInterest = Number(
    prompt(
      "What is the minimum age you're interested in? (Must be 18 or older)"
    )
  );

  if (yourMinAgeInterest === null) {
    alert("Please enter a valid age.");
    continue;
  }
}

yourProfile.min_age_interest = yourMinAgeInterest;

while (!yourMaxAgeInterest || yourMaxAgeInterest < yourMinAgeInterest) {
  yourMaxAgeInterest = Number(
    prompt(
      `What is the maximum age you're interested in? (Must be older than ${yourMinAgeInterest})`
    )
  );
  if (yourMaxAgeInterest === null || yourMaxAgeInterest < yourMinAgeInterest) {
    alert(`Please enter an age older than ${yourMinAgeInterest}`);
    continue;
  }
}

yourProfile.max_age_interest = yourMaxAgeInterest;

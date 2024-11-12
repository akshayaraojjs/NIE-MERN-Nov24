const orderFood = () => {
  return new Promise((resolve, reject) => {
    console.log("Order placed. Waiting for confirmation...");

    setTimeout(() => {
      const isAvailable = Math.random() > 0.5; // Simulating a 50/50 chance
      if (isAvailable) {
        resolve("Your food is on its way!");
      } else {
        reject("Sorry, your order couldn't be completed.");
      }
    }, 2000); // Simulate waiting time
  });
};

// Use the promise with arrow functions
orderFood()
  .then((message) => console.log("Success:", message)) // Runs if promise is resolved
  .catch((error) => console.log("Error:", error)); // Runs if promise is rejected  






// Usecase
// Voting Eligibility Test
// const checkVotingEligibility = (age) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (age >= 18) {
//         resolve(`Age ${age}: You are eligible to vote.`);
//       } else {
//         reject(`Age ${age}: You are not eligible to vote.`);
//       }
//     }, 1000); // Simulate a delay
//   });
// };

// // Generate a random age between 10 and 20
// const randomAge = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

// // Use the promise with the random age
// checkVotingEligibility(randomAge)
//   .then((message) => console.log("Success:", message)) // Runs if eligible
//   .catch((error) => console.log("Error:", error)); // Runs if not eligible








// Normal JS
// function orderFood() {
//     return new Promise((resolve, reject) => {
//         console.log("Order placed. Waiting for confirmation...");

//         setTimeout(() => {
//             const isAvailable = Math.random() > 0.5; // Simulating a 50/50 chance
//             if (isAvailable) {
//                 resolve("Your food is on its way!");
//             } else {
//                 reject("Sorry, your order couldn't be completed.");
//             }
//         }, 2000); // Simulate waiting time
//     });
// }
// // Use the promise
// orderFood()
//     .then((message) => {
//         console.log("Success:", message); // Runs if promise is resolved
//     })
//     .catch((error) => {
//         console.log("Error:", error); // Runs if promise is rejected
//     });
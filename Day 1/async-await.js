// Simulating the exam result scenario with async/await
async function checkExamResults() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const passed = Math.random() > 0.35;
            if (passed) {
                resolve("Congratulations, you passed!");
            } else {
                reject("Sorry, you didn’t pass this time.");
            }
        }, 2000);
    });
}

async function getExamResults() {
    try {
        const result = await checkExamResults();
        console.log(result); // Success
    } catch (error) {
        console.error(error); // Error
    }
}

getExamResults();  








// Usecase : Simulate fetching account balance from the bank server
// const fetchBalance = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const balance = Math.random() > 0.3 ? 1000 : 0; // 70% chance of having balance
//             if (balance > 0) {
//                 resolve(balance); // Resolve with balance if available
//             } else {
//                 reject("Account balance is insufficient."); // Reject if no balance
//             }
//         }, 2000); // Simulating network delay
//     });
// };

// // Async function to handle account balance and withdrawal
// const withdrawMoney = async (amount) => {
//     try {
//         console.log("Checking account balance...");
//         const balance = await fetchBalance(); // Wait for the balance
//         console.log("Account Balance: Rs." + balance);

//         if (balance >= amount) {
//             console.log(`Successfully withdrew Rs.${amount}.`);
//         } else {
//             console.log("Insufficient balance to withdraw this amount.");
//         }
//     } catch (error) {
//         console.log("Error:", error); // Handle rejection (insufficient balance)
//     }
// };

// // Call the withdrawMoney function
// withdrawMoney(500); // Try withdrawing 500  

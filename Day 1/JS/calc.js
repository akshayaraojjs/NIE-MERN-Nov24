// var num1="", num2="", op="";
// function calc(ch){
//     if(ch >= '0' && ch <= '9') {
//         let box = document.getElementById("box").value;
//         box += ch;
//         document.getElementById("box").value = box;
//     }else if(ch == '=') {
//         num2 = document.getElementById("box").value;
//         let expr = num1 + op + num2;
//         let res = eval(expr)
//         num1 = "";
//         num1 = "";
//         op = "";
//         document.getElementById("box").value = res;
//     }else if(ch == 'C') {
//         num1 = "";
//         num1 = "";
//         op = "";
//         document.getElementById("box").value = "";
//     }else { // + - * / 
//         num1 = document.getElementById("box").value;
//         op = ch;
//         document.getElementById("box").value = "";
//     }
// }

// Second Approach using Switch Statements
var num1 = "", num2 = "", op = "";

function calc(ch) {
    switch(ch) {
        case '0': case '1': case '2': case '3': case '4':
        case '5': case '6': case '7': case '8': case '9':
            // Handle numbers
            let box = document.getElementById("box").value;
            box += ch;
            document.getElementById("box").value = box;
            break;

        case '=':
            // Handle equals
            num2 = document.getElementById("box").value;
            let expr = num1 + op + num2;
            let res = eval(expr);
            num1 = "";
            op = "";
            document.getElementById("box").value = res;
            break;

        case 'C':
            // Handle clear
            num1 = "";
            num2 = "";
            op = "";
            document.getElementById("box").value = "";
            break;

        case '+': case '-': case '*': case '/':
            // Handle operators
            num1 = document.getElementById("box").value;
            op = ch;
            document.getElementById("box").value = "";
            break;

        default:
            console.error("Invalid input");
    }
}
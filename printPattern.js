// function printPattern(n) {
//     let rows = (n + 1) / 2;
//     let st = 1;
//     let sp = rows - 1;

//     for (let i = 1; i <= rows; i++) {
//         let ans = "";
//         for (let j = 1; j <= sp; j++) {
//             // console.log(" ");
//             ans += "  ";
//         }

//         for (let j = 1; j <= st; j++) {
//             // console.log("*");
//             ans += j + " ";
//         }

//         st += 2;
//         sp--;
//         console.log(ans);
//     }
// }

// printPattern(9);



// //print pattern2

// function printPattern2(n) {
//     let rows = 2 * n - 1;
//     let st = 1;
//     let sp = n - 1;

//     for (let i = 1; i <= rows; i++) {
//         let ans = "";
//         for (let j = 1; j <= sp; j++) {
//             // console.log(" ");
//             ans += "  ";
//         }

//         for (let j = 1; j <= st; j++) {
//             // console.log("*");
//             ans += j + " ";
//         }

//         if (i < n) {
//             st += 1;
//             sp--;
//         } else {
//             st--;
//             sp++;
//         }

//         console.log(ans);
//     }
// }

// printPattern2(5);




// //print pattern3

// function printPattern3(n) {
//     let rows = 2 * n - 1;
//     let st = 1;
//     // let sp = n - 1;

//     for (let i = 1; i <= rows; i++) {
//         let ans = "";
//         // for (let j = 1; j <= sp; j++) {
//         //     // console.log(" ");
//         //     ans += "  ";
//         // }

//         for (let j = st; j >= 1; j--) {
//             // console.log("*");
//             ans += j + " ";
//         }

//         if (i < n) {
//             st += 1;
//             // sp--;
//         } else {
//             st--;
//             // sp++;
//         }

//         console.log(ans);
//     }
// }

// printPattern3(5);


// //print pattern4

function printPattern4(n) {
    let rows = (n + 1) / 2;
    let st = n;
    let sp = 0;

    for (let i = 1; i <= rows; i++) {
        let ans = "";
        for (let j = 1; j <= sp; j++) {
            // console.log(" ");
            ans += "  ";
        }

        for (let j = 1; j <= st; j++) {
            // console.log("*");
            ans += j + " ";
        }

        st -= 2;
        sp++;

        console.log(ans);
    }
}

printPattern4(9);
console.log("------ Variables ------");


// // Penggunaan variabel var dalam loop
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i); // Output: 5, karena i masih dapat diakses di luar loop

// // Penggunaan variabel var dalam fungsi
// function looping() {
//     for (var j = 0; j < 5; j++) {
//         console.log(j);
//     }
// }
// looping();
// console.log(j); // Output: ReferenceError, karena j hanya dapat diakses dalam fungsi


// // Let
// for (let k = 0; k < 5; k++) {
//     console.log(k);
// }
// console.log(k); // Output: ReferenceError, karena k hanya dapat diakses dalam loop

// for (let l = 0; l < 5; l++) {
//     console.log(l);
// }
// if (true) {
//     let l = 100;
//     console.log("l =", l); // Output: l = 100, karena l di dalam blok if berbeda dari l di luar blok
// }

// const phi = 3.14;
// phi = 3.147; // Error: Assignment to constant variable, karena phi tidak dapat diubah
// console.log(phi); // Output: 3.14, nilai phi tidak berubah

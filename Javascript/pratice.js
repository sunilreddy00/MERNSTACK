    // var birth = prompt("Please input your Birth year")
    // var now = new Date()
    // var age = now.getYear() - birth + 1900

    // if(age<18)
    //     console.log('minor')
    // else if(age>=18 && age<36)
    //     console.log('youth')
    // else console.log('elder')


     //   fetch

    //  fetch('https://api.example.com/data')
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }
    //     return response.json(); // Parse the JSON from the response
    // })
    // .then(data => {
    //     console.log(data); // Handle the data from the response
    // })
    // .catch(error => {
    //     console.error('There has been a problem with your fetch operation:', error);
    // });

    //     HOF

//     const numbers = [1, 2, 3, 4];
// const squaredNumbers = numbers.map(function(number) {
//     return number * number;
// });
// console.log(squaredNumbers)

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5)); // Outputs: 10
const triple = multiplier(3);
console.log(triple(5)); // Outputs: 15


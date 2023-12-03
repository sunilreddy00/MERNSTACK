 
 /*   var birth = prompt("Please input your Birth year")
    var now = new Date()
    var age = now.getYear() - birth +1900

    if(age<18)
        console.log('minor')
    else if(age>=18 && age<36)
        console.log('youth')
    else console.log('elder')


      */

/*
const marks = [100,100,80];
var summ = 0;

function calculateGrade(){
    
    for(let i=0; i<=marks.length;i++){
       
        summ = summ+marks[i];
        var avg = (summ/marks.length);  
    }
    
    if(avg<=34){
        console.log('FAIL');
    }
    else if(avg>=35 && avg<=49){
        console.log('Pass');
    }
    else if(avg>=50 && avg<=59){
        console.log('Second Class');
    }
    else if(avg>=60 && avg<=79){
        console.log('First Class');
    }
    else if(avg>=80 && avg<=100){
        console.log('Distinction');
    }
}

   console.log(calculateGrade(marks)); */

   let x = parseInt(prompt("Please enter your age"))

   console.log(`x=${x}`)

   if(x>=18)
        console.log('Allow him to vote')
    else if(x<18)
        console.log('Still age is needed to become a voter')
    
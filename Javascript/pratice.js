    var birth = prompt("Please input your Birth year")
    var now = new Date()
    var age = now.getYear() - birth + 1900

    if(age<18)
        console.log('minor')
    else if(age>=18 && age<36)
        console.log('youth')
    else console.log('elder')
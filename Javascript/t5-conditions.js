let x = parseInt(prompt(`Enter value for first number`))
let y = parseInt(prompt(`Enter value for second number`))
let z = parseInt(prompt(`Enter value for third number`))

//console.log(`type of x,y,z is ==> ${typeof(x)},${typeof(y)},${typeof(z)}`)

// if(x){
// 	console.log('X has a good value')
// }

// let x=10

/* if (x){
	console.log(`X (${x}) has good value`)
 }
 else{
	console.log(`x (${x})  Greatest!!!!`)
 }

 console.log('I will bw executed')

*/

 console.log(`x=${x}`)
 console.log(`y=${y}`)
 console.log(`z=${z}`)

/* if (x > y && x > z){
	console.log(`x is Greatest!!!`)
 }  
 else{
 	if (y){
     console.log(`Y has good value!!`)
 	}
 	else {
 		if(z){
 			console.log(`z has good value!!!!`)
 		}
 	}
 }  */

/* if (x >= y && x >= z){
	console.log(`x is Greatest!!`)
 }  

 else if (y >= x && y >= z){
     console.log(`Y is Greatest!!`)
 	}
 	
 else {
 	  console.log(`z is Greatest!!`)
 	}
 	  */

/* if(x){
	setTimeout(()=>console.log("x ==> 3 seconds delay"),3000)
}
if(y){
	setTimeout(()=>console.log("y ==> 6 seconds delay"),6000)
}
if(z){
	setTimeout(()=>console.log("z ==> 9 seconds delay"),9000)
} */
/*
if(x >= y && x >= z){
	setTimeout(()=>console.log("x ==> 3 seconds delay"),3000)
}
else if(y > x && y > z){
	setTimeout(()=>console.log("y ==> 6 seconds delay"),6000)
}
else if(z > x && z > y){
	setTimeout(()=>console.log("z ==> 9 seconds delay"),9000)
}
else{
	setTimeout(()=>console.log("All are equal"),12000)
}
*/

switch(x){
	case 1:
	       console.log('one')
	       break;
	case 2:
	       console.log('Two')
	       break;
	case 3:
	       console.log('Three')
	       break;
	case 4:
	       console.log('Four')
	       break;
	case 5:
	       console.log('Five')
	       break;
	case 6:
	       console.log('Six')
	       break;
	default:
	       console.log('out of order')
}




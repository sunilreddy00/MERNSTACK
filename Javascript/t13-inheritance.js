// class vehicle{
// 	constructor(wheels){
// 		this.wheels = wheels
// 	}
// }

// class car extends vehicle{
// 	constructor(wheels,airbags){
// 		super(wheels)
// 		this.airbags = airbags
// 	}
// }
// let v1 = new vehicle(8)
// let c1 = new car(12,6)

// console.log(v1.wheels)
// console.log(c1.airbags)
// console.log(c1.wheels)


// class father {
// 	constructor(bike){
// 		this.bike = bike
// 	}
// details(){
// 	console.log(this)
//   }
// }
// class son extends father{
// 	constructor(bike,car){
// 		super(bike)
// 		this.car = car
// 	}
// 	details(){
// 	console.log(`son property Details ==>  ${this.bike},${this.car}`)
//   }
//   upgrade(new_bike,new_car){
//   	this.bike = new_bike
//   	this.car = new_car
//   }
// }
// let s2 = new son("honda","BMW")
// s2.details()

// s2.upgrade("Classic 350","KIA")
// s2.details()


/*
let ecommerce_data = `[{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},{"id":2,"title":"Mens Casual Premium Slim Fit T-Shirts ","price":22.3,"description":"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.","category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},{"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}},{"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}},{"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}}]`

let ecommerce_data_js_object = JSON.parse(ecommerce_data)

console.log(typeof(ecommerce_data))
console.log(ecommerce_data_js_object.length)
*/

class father {
	constructor(bike){
		this.bike = bike
	}
details(){
	console.log(this)
  }
}
class son extends father{
	constructor(bike,car){
		super(bike)
		this.car = car
	}
	details(){
	console.log(`son property Details ==>  ${this.bike},${this.car}`)
  }
  upgrade(new_bike,new_car){
  	this.bike = new_bike
  	this.car = new_car
  }
}
let s2 = new son("honda","BMW")
s2.details()

s2.upgrade("Classic 350","KIA")
s2.details() 
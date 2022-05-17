


// bài 1
let Student = ["nguyen minh khoi", "15", "bong ro", "the estella"];
console.log(Student);



// bài 2
var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];
console.log(smartPhones.map(smartPhone => smartPhone.price)); 

// bài 3
let foo = (x,y,z) => {
	console.log( x, y, z );
}
foo = () => {
	alert('Hello')
}
foo = (a,b) =>{
	let m = a+b*100
	return m
}

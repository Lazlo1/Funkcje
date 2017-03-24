
function getTriangleArea (a, h) {
		if ( a > 0 && h > 0 ) {
		return a*h/2;
		}
		else if ( a <= 0 && h <= 0 ) {
		}
			console.log('Nieprawidłowe dane');	
	}
console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(0, 15),
	triangle2Area = getTriangleArea(15, 20),
    triangle3Area = getTriangleArea(9, 5);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);

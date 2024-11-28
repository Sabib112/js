var choice = prompt("Welcome to the area calculator \n please enter your choice \n1 area of rectangle \n2 area of triangle \n3 area of circle \n4 area of parelal");
if (choice == '1') {
    var length = prompt("enter the length")
    var width = prompt("enter the width")
    var area = Number(length) * Number(width);
    alert("the area of the rectangle is = " + area)
}
if (choice == '2') {
    var length = prompt("enter the length")
    var base = prompt("enter the base")
    var area = Number(length) * Number(base)/2;
    alert("the area of the triangle is = " + area)
}
if (choice == '3') {
    var radius = prompt("enter the length")
    var area = 3.14 * Number(radius) * Number(radius);
    alert("the area of the circle is = " + area)
}

if (choice == '4') {
    var length = prompt("enter the length")
    var correspondingbase = prompt("enter the correspondingbase")
    var area = Number(length) * Number(correspondingbase);
    alert("the area of the parrelal is = " + area)
}
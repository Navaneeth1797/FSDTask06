//Convert the UML diagram to Typescript class. - use number for double

class Circle {

    constructor() {
        this.radius = 1.0;
        this.color = "red";

    }


    //+circle()

    circle() {

        this.radius = 1.0;
        this.color = "red";

    }

    //+circle ( radius : double )

    circleradius(radius) {

        this.radius = radius;   

    }

    //+circle ( radius : double , color : string   )

    circleradiuscolor(radius , color ) {

        this.radius = radius;
        this.color = color;

    }

    //+getRadius () : double

    getradius() {
        
        return this.radius;

    }

    //+setRadius ( radius :double)

    setradius(radius) {
        
        this.radius = radius;

    }

    //+getcolor () : string

    getcolor() {
        
        return this.color;

    }

    //+setcolor ( color :string)

    setcolor(color) {
        
        this.color = color;

    }

    //+tostring() :string

    tostring() {
        return `Circle - Radius: ${this.radius}, Color: ${this.color}`;

    }

    //+getarea():double

    getarea() {
        
        return 2 * Math.PI * this.radius;

    }


    //+getcircumsference() :double

    getcircumference() {
        
        return 2 * Math.PI * this.radius;

    }

}

let circle = new Circle();

circle.circle();

console.log("Default Radius:", circle.getradius());
console.log("Default Color:", circle.getcolor());


let thecircle = new Circle();

thecircle.circleradiuscolor(3.0, "green");

console.log("GetRadius:", thecircle.getradius());
console.log("GetColor:", thecircle.getcolor());

thecircle.setradius(5.0);
console.log("SetRadius:", thecircle.getradius());
thecircle.setcolor("yellow");
console.log("SetColor:", thecircle.getcolor());

console.log("Area:", thecircle.getarea());

console.log("Circumference:", thecircle.getcircumference());

console.log("String:", thecircle.toString());
 
 








/*Class - Movie
The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/



class Movie {

    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }

}

function getPG(movies) {
    
    return movies.filter(Movie => Movie.rating == "PG");
}

let movies = [

    new Movie("down", "lion", "R"),
    new Movie("dope", "castle", "PG"),
    new Movie("sting", "marley", "PG13"),

];

let Movies = getPG(movies);

console.log(Movies);

//output: [ Movie { title: 'dope', studio: 'castle', rating: 'PG' } ]

let CasinoRoyale = new Movie("Casino Royale", "Eon Production", "PG-13");

console.log(CasinoRoyale);

/*output:Movie {
  title: 'Casino Royale',
  studio: 'Eon Production',       
  rating: 'PG-13'
}*/

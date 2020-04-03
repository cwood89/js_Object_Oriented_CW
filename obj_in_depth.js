//arrays have numeric keys called indexes
/*
Recall that arrays can store many different types of data, not just strings!
Below, create an array called `mixedArray` that contains:

* A number
* A string
* A boolean
* Another array

The order and length of the array are up to you; just be sure to include
at least one of each data type listed above.
*/
const mixedArray = [true, "2", 3, [4, 5]]

/*
Create an object called `menu` that represents the following menu item:

Salted Caramel Ice Cream
2.95
butter, ice cream, salt, sugar

The object should contain the following properties:
* name
* price
* ingredients

Hint: Which data collection can hold all the listed ingredients in order?
*/
const menu = {
  name: "Salted Caramel Ice Cream",
  price: 2.95,
  ingredients: ["butter", "ice cream", "salt", "sugar"]
}

//Write an expression to access the last item in the following array:
const mileTimes = [7.50, 6.25, 10.60, 8.88];
const lastMileTime = mileTimes[3];

//Write an expression to access the value of the population object's brazil property:
const populations = {
  china: 1379000000,
  brazil: 207700000,
  india: 1324000000,
  unitedStates: 323100000
};
const brazilPopulation = populations.brazil; //populations["brazil"]

//Write an expression that outputs how to say hello in Portuguese:
const greetings = {
  hello: {
    english: 'hi',
    french: 'bonjour',
    portuguese: 'oi'
  },
  goodbye: {
    english: 'bye',
    french: 'au revoir',
    portuguese: 'tchau'
  }
};
const helloPortuguese = greetings.hello.portuguese; //greetings["hello"]["portuguese"]

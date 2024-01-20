
    var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!'+'Welcome to Darling Clothing Line');
Categories= ['Shoes', 'Clothes', 'Bags', 'Jewelries'],
index = readlineSync.keyInSelect(Categories, 'Which  category would you like to purchase from?');
const Highheelsprice=10000
const flatsprice=4000
const slippersprice=2000
let cart=[];
function addToCart (shoes,index

    ){let selectedshoe=shoes[index-1]
        cart.push(selectedshoe);
        console.log(selectedshoe);
    }
if (Categories[1]){
    shoes=['High heels' +'-' +Highheelsprice, 'Flats'+'-' +flatsprice, 'slippers'+'-' +slippersprice, ]
    index = readlineSync.keyInSelect(shoes, 'Which  would you add to your cart');
    
    
}
   
console.log( shoes[index]+ 'added');
answer=readlineSync.question('would you like to select another item?',{
    trueValue:['yes','yeah','yep'],
falseValue:['no','nah','nope']});
if (answer===true){
    shoes=['High heels' +'-' +Highheelsprice, 'Flats'+'-' +flatsprice, 'slippers'+'-' +slippersprice, ]
    index = readlineSync.keyInSelect(shoes, 'Which  would you add to your cart');}
    else if(answer===false){
        console.log(selectedshoe);
    }
    answer=readlineSync.question('would you like to select another item?',)
    console.log( shoes[index]+ 'added');





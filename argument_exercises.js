var sum = function(){
	results = 0;
	for (var i = 0; i < arguments.length; i++){
		results += arguments[i];
	}
	return results;
}

// console.log(sum(1,2,3,4,5));

Function.prototype.myBind = function(someObject) {
  var that = this; //this function
  var these_arguments = Array.prototype.slice.call(arguments).slice(1);
  return function() {
    var other_args = Array.prototype.slice.call(arguments);
    total_args = these_arguments.concat(other_args);
    console.log(total_args);
    that.apply(someObject, total_args);
  }
}

function Cat(name){
  this.name = name;
}

Cat.prototype.sayName = function(){
  // console.log(this.name);
  // console.log(arguments);
}

// var cat = new Cat("Earl");
//
// var mySayName = cat.sayName.myBind(cat, 1, 2);
// mySayName(3);
//
// // `times` is the same:
// function times(num, fun) {
//   for (var i = 0; i < num; i++) {
//     fun(); // call is made "function-style"
//   }
// }
//
// var cat = {
//   age: 5,
//
//   age_one_year: function () {
//     this.age += 1;
//   }
// };

// times(10, cat.age_one_year.myBind(cat));
// console.log(cat.age);


function curriedSum(numArgs) {
  var numbers = [];

  var _curriedSum = function(num) {
    if (numbers.length < numArgs) {
      numbers.push(num)
      if (numbers.length < numArgs) {
        return _curriedSum;
      }
      else {
        var total_sum = 0;
        for (var i = 0; i < numbers.length; i++) {
          total_sum += numbers[i];
        }
        return total_sum;
      }
    }
  }
  return _curriedSum;
}


var sum = curriedSum(4);
// console.log(sum);
console.log(sum(5)(30)(20)(1)); // => 56

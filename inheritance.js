Function.prototype.inherits = function(SuperClass) {
  function Surrogate() {};
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();m
};

function MovingObject() {};

MovingObject.prototype.move = function () {
  console.log("I moved");
}

function Ship() {};
Ship.inherits(MovingObject);


new Ship().move();


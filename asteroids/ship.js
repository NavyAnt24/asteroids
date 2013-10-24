(function (AsteroidGame) {

  var Ship = AsteroidGame.Ship = function Ship(position, velocity) {
    // AsteroidGame.MovingObject.call(this, position, velocity, Ship.RADIUS, Ship.COLOR);
    AsteroidGame.MovingObject.call(this, position, velocity, Ship.RADIUS, Ship.COLOR);
  };

  Ship.RADIUS = 15;
  Ship.COLOR = "red";

  Function.prototype.inherits = function(SuperClass) {
    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
  };

  Ship.inherits(AsteroidGame.MovingObject);

  Ship.prototype.power = function(impulse) {
    this.velocity[0] += impulse[0];
    this.velocity[1] += impulse[1];
  }

})(AsteroidGame);
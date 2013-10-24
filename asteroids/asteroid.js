
(function (AsteroidGame) {

  var Asteroid = AsteroidGame.Asteroid = function Asteroid(position, velocity, radius, color) {
    AsteroidGame.MovingObject.call(this, position, velocity, radius, color);
  };

  Asteroid.MAX_RADIUS = 25;
  Asteroid.COLOR = "black";

  Function.prototype.inherits = function(SuperClass) {
    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
  };

  Asteroid.inherits(AsteroidGame.MovingObject);

  var randomAsteroid = Asteroid.randomAsteroid = function(xdim, ydim){
    var randX = Math.random() * xdim;
    var randY = Math.random() * ydim;
    var position = [randX, randY];
    var velocity = randomVec();
    var radius = Asteroid.MAX_RADIUS * Math.random();
    var color = Asteroid.COLOR;
    var new_asteroid = new Asteroid(position, velocity, radius, color)
    console.log(new_asteroid);
    return new_asteroid;
  };

  var randomVec = function() {
    var vecX = Math.random()*2 - 1;
    var vecY = Math.random()*2 - 1;
    return [vecX, vecY];
  };

  Asteroid.prototype.isOffCanvas = function() {
    canvasWidth = AsteroidGame.Game.DIM_X;
    canvasHeight = AsteroidGame.Game.DIM_Y;

    if (this.pos[0] > canvasWidth + this.radius) {
      return true;
    }
    else if (this.pos[0] < 0-this.radius) {
      return true;
    }
    else if (this.pos[1] > canvasHeight + this.radius) {
      return true;
    }
    else if (this.pos[1] < 0 - this.radius){
      return true;
    }
    else {
      return false;
    }
  };


})(AsteroidGame);

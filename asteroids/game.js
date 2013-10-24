(function (AsteroidGame) {

  var Game = AsteroidGame.Game = function Game(ctx) {
    this.ctx = ctx;
    this.asteroids = this.addAsteroids(10);
    // this.ship = new Ship([Game.DIM_X / 2, Game.DIM_Y / 2], [25, 25]);
    this.ship = new AsteroidGame.Ship([250, 250], [25, 25]);
  };

  Game.DIM_X = 500;
  Game.DIM_Y = 500;
  Game.FPS = 30;

  Game.prototype.addAsteroids = function(numAsteroids){
    asteroids = [];
    for (var i = 0; i < numAsteroids; i++) {
      asteroids.push(AsteroidGame.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y));
    }
    return asteroids;
  };

  Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });

    this.ship.draw(ctx);
  };

  Game.prototype.move = function() {
    var currentAsteroids = this.asteroids;
    console.log(currentAsteroids);
    for (var i = 0; i < currentAsteroids.length; i++) {
      currentAsteroids[i].move();
    }
  };

  Game.prototype.step = function() {
    this.move();
    this.draw(this.ctx);
  };

  var interval;
  Game.prototype.start= function() {
    var game = this;
    interval = window.setInterval(function() {
      game.step();
      game.bindKeyHandlers();
      game.checkCollisions();
      game.removeAsteroids();
    }, Game.FPS);
  };

  Game.prototype.removeAsteroids = function() {
    asteroids_copy = this.asteroids.slice();

    for (var i = this.asteroids.length-1; i > 0; i--) {
      if (this.asteroids[i].isOffCanvas() === true) {
        console.log("hello");
        asteroids_copy.splice(i, 1);
      }
    }
    this.asteroids = asteroids_copy;
  }

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i < this.asteroids.length; i++) {
      if (this.ship.isCollidedWith(this.asteroids[i])) {
        game.stop();
      }
    }
  }

  Game.prototype.stop = function() {
    console.log(this.asteroids);
    window.clearInterval(interval);
    window.alert("You collided with an asteroid. Game over!");
  }

  Game.prototype.bindKeyHandlers = function() {
    key('a', function() {
      this.ship.power([-15, 0]);
    });

    key('s', function() {
      this.ship.power([0, 15]);
    });

    key('d', function() {
      this.ship.power([15, 0]);
    });

    key('w', function() {
      this.ship.power([0, -15]);
    });
  }

})(AsteroidGame);
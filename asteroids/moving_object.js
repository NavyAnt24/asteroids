

(function (AsteroidGame) {
  var MovingObject = AsteroidGame.MovingObject = function MovingObject(position, velocity, radius, color) {
    this.pos = position;
    this.vel = velocity;
    this.radius = radius;
    this.color = color;
  }

  MovingObject.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

  MovingObject.prototype.draw = function(ctx) {
      ctx.fillStyle = this.color;
       ctx.beginPath();

       ctx.arc(
         this.pos[0],
         this.pos[1],
         this.radius,
         0,
         2 * Math.PI,
         false
       );

       ctx.fill();
  }

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    distance = Math.sqrt(Math.pow((this.pos[0] - otherObject.pos[0]), 2) + Math.pow((this.pos[1] - otherObject.pos[1]), 2));
    if ((this.radius + otherObject.radius) > distance) {
      return true;
    }
    else {
      return false;
    }
  }



})(AsteroidGame);

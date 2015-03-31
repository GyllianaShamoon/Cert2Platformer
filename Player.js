var Player = function() {

	this.image = document.createElement("img");
	this.x = canvas.width/2;
	this.y = canvas.hiehgt/2;
	this.width = 159;
	this.hiehgt = 163;
	
	this.velocityX = 0;
	this.velocityY = 0;
	
	this.angularVelocity = 0;
	this.rotation = 0;
	
	this.image.src = "hero.png";
	
};

Player.prototype.update = function(deltaTime)
{
	if ( typeof(this.function) === "undefined" )
	this.rotation = 0;

	if (keyboard.isKeyDown(keyboard.KEY_SPACE))
	
	{
		this.roation -= deltaTime;
	}
		else
	{
		this.rotation += deltaTime;
	}	
};

player.prototype.draw = function(context)
{
	context.save();
		context.translate(this.x this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);
	context.restore();
	
	
};
PIXI.utils.sayHello();

var renderer = PIXI.autoDetectRenderer(512,512, {
  transparent: true,
  resolution: 1
});
document.getElementById('display').appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader
  .add("spritesheet", "images/sprite.png")
  /*.add("face", "images/face.png")*/
  .load(setup);

/*var face;*/
var sprite;

function setup() {
  stage.interactive = true;


  var rect = new PIXI.rectange()
  /*face = new PIXI.Sprite(
    PIXI.loader.resources["face"].texture
  );

  face.interactive=true;
  face.scale.set(0.5,0.5); //Scales face to half
  face.anchor.set(0.5,0.5); //Sets Anchor in center
  stage.addChild(face);

face.click = function() {
  face.scale.x -= 0.1;
  face.scale.y -= 0.1;
}*/

  animationloop();
}

function animationloop() {
  requestAnimationFrame(animationloop);

/*
  face.x = renderer.width / 2;
  face.y = renderer.height / 2;

  face.rotation += 0.05;
*/

  renderer.render(stage);
}
//test

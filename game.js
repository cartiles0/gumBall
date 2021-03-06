var config = {
  type:Phaser.AUTO,
  width: 600,
  height: 800,
  physics: {
    default:'arcade',
    arcade: {
      gravity: {y : 0},
      debug: false
    }
  },
  scene: [start, level1, level1done, level2, gameOVer, gameFinished]
};

var game = new Phaser.Game(config);
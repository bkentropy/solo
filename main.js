var game = new Phaser.Game(496, 496, Phaser.AUTO, 'gameDiv');

var text;
var counter = 0;
var lifetoken;

var mainState = {
  preload: function() {
    game.stage.backgroundColor = '#000000';

    game.load.image('cell', 'assets/download.png');
    game.load.image('board', 'assets/download.png');
    game.load.image('life', 'assets/lifetoken.png');

  },

  create: function() {
    this.cell = this.createGrid();

    // Need this functionality on each cell... uhg
    this.board = game.add.sprite(0, 0, 'board');
    this.board.scale.setTo(2.2,2.2);
    this.board.alpha = 0.0;

    this.board.inputEnabled = true;
    // Instead of text I want a red dot.
    text = game.add.text(250, 16, '', { fill: '#000' });
    lifetoken = game.add.sprite()
    this.board.events.onInputDown.add(listener, this);
  },

  update: function() {
    this.lifeGiver();
  },

  lifeGiver: function() {
    // this.grid.events.onInputDown.add(onDown, this);
  },

  createGrid: function() {
    // Create grid group
    this.grid = game.add.group();
    this.grid.inputEnabled = true;

    // Create first column
    game.add.sprite(0,0, 'cell', this.grid).scale.setTo(0.25, 0.25)
    // console.log(game.add.sprite(0,0, 'cell', this.grid).scale.setTo(0.25, 0.25))
    game.add.sprite(0,55, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(0,110, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(0,165, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(0,220, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(0,275, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(0,330, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(0,385, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(0,440, 'cell', this.grid).scale.setTo(0.25, 0.25);

    // Create Second Column
    game.add.sprite(55,0, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(55,55, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(55,110, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(55,165, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(55,220, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(55,275, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(55,330, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(55,385, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(55,440, 'cell', this.grid).scale.setTo(0.25, 0.25);
    
    // Create Third Column
    game.add.sprite(110,0, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(110,55, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(110,110, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(110,165, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(110,220, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(110,275, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(110,330, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(110,385, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(110,440, 'cell', this.grid).scale.setTo(0.25, 0.25);

    // Create Fourth Column
    game.add.sprite(165,0, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(165,55, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(165,110, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(165,165, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(165,220, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(165,275, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(165,330, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(165,385, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(165,440, 'cell', this.grid).scale.setTo(0.25, 0.25);

    // Create Fifth Column
    game.add.sprite(220,0, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(220,55, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(220,110, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(220,165, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(220,220, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(220,275, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(220,330, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(220,385, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(220,440, 'cell', this.grid).scale.setTo(0.25, 0.25);

    // Create Sixth Column
    game.add.sprite(275,0, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(275,55, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(275,110, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(275,165, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(275,220, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(275,275, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(275,330, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(275,385, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(275,440, 'cell', this.grid).scale.setTo(0.25, 0.25);

    // Create Seventh Column
    game.add.sprite(330,0, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(330,55, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(330,110, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(330,165, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(330,220, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(330,275, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(330,330, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(330,385, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(330,440, 'cell', this.grid).scale.setTo(0.25, 0.25);

    // Create Eighth Column
    game.add.sprite(385,0, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(385,55, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(385,110, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(385,165, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(385,220, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(385,275, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(385,330, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(385,385, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(385,440, 'cell', this.grid).scale.setTo(0.25, 0.25);

    // Create Ninth Column
    game.add.sprite(440,0, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(440,55, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(440,110, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(440,165, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(440,220, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(440,275, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(440,330, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(440,385, 'cell', this.grid).scale.setTo(0.25, 0.25);
    game.add.sprite(440,440, 'cell', this.grid).scale.setTo(0.25, 0.25);

    // // Create Fifth Column
    // game.add.sprite(220,0, 'cell', this.grid).scale.setTo(0.25, 0.25);
    // game.add.sprite(220,55, 'cell', this.grid).scale.setTo(0.25, 0.25);
    // game.add.sprite(220,110, 'cell', this.grid).scale.setTo(0.25, 0.25);
    // game.add.sprite(220,165, 'cell', this.grid).scale.setTo(0.25, 0.25);
    // game.add.sprite(220,220, 'cell', this.grid).scale.setTo(0.25, 0.25);
    // game.add.sprite(220,275, 'cell', this.grid).scale.setTo(0.25, 0.25);
    // game.add.sprite(220,330, 'cell', this.grid).scale.setTo(0.25, 0.25);
    // game.add.sprite(220,385, 'cell', this.grid).scale.setTo(0.25, 0.25);
    // game.add.sprite(220,440, 'cell', this.grid).scale.setTo(0.25, 0.25);

  }

}

function listener () {
  counter++;
  text.text = "You clicked " + counter + " times!";
}
// var sauce = new Phaser.Game(400, 400, Phaser.AUTO, 'game-element');

// var extraState = {
//   preload: function() {
//     sauce.load.image('spiral', 'assets/spiral.png');
//   },
//   create: function() {
//     this.spiral = sauce.add.sprite(sauce.world.centerX, sauce.world.centerY, 'spiral');
//     this.spiral.anchor.setTo(0.5); 
//     sauce.stage.backgroundColor = '0xffffff'
//   },
//   update: function() {
//     this.spiral.angle -= 2;
//   }
// }

// sauce.state.add('footer', extraState)
// sauce.state.start('footer');


game.state.add('main', mainState);
game.state.start('main');





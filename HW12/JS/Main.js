

var config = {
    type: Phaser.AUTO,
    width:1000,
    height:1000,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var collectable1;
var collectable2;
var collectable3;
var obstacle;
var platform;
var score = 0;
var lives = 3;
var keys;
var gameover=false;
var ScoreText;
var LivesText;
var TimerText;

var game= new Phaser.Game(config);

function preload(){
    this.load.image('space', './Assets/space.jpg');//preload background 
    this.load.image('collectable1', './Assets/glass.png');//preload collectable img1
    this.load.image('collectable2', './Assets/gold.png');//preload collectable img2
    this.load.image('collectable3', './Assets/star.png');//preload collectable img3
    this.load.image('meteor', './Assets/stone.png');//preload moving obstacle Meteor/dude
    this.load.image('platform', './Assets/platform.png');//preload platform
    this.load.spritesheet('dude', './Assets/dude.png', {
        frameWidth: 32,
        frameHeight: 48
    });

}

function create(){
this.add.image(500,500,'space');

platform= this.physics.add.staticGroup();
platform.create(400, 568, 'platform').setScale(1).refreshBody();
platform.create(200, 234, 'platform').setScale(1).refreshBody();
platform.create(600, 750, 'platform').setScale(1).refreshBody();
platform.create(200, 234, 'platform').setScale(1).refreshBody();
platform.create(100, 900, 'platform').setScale(1).refreshBody();


player = this.physics.add.sprite(100, 450, 'dude');
player.setBounce(0.2);
player.setScale(2);
player.setCollideWorldBounds(true);
    this.anims.create({
        key: 'space',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 0,
            end: 6
        }), 
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [{
            key: 'dude',
            frame: 4
        }],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 5,
            end: 8
        }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', {
            start: 0,
            end: 3
        }),
        frameRate: 10,
        repeat: -1
    });


    collectable1 = this.physics.add.group({
        key: 'collectable1',
        repeat: 2,
        setXY:{
            x:150,
            y:60,
            stepX:150,
            stepY:200
        }
    })
    collectable2 = this.physics.add.group({
        key: 'collectable2d',
        repeat: 2,
        setXY:{
            x:50,
            y:60,
            stepX:100,
            stepY:200
        }
    })
    collectable3 = this.physics.add.group({
        key: 'collectable3',
        repeat: 2,
        setXY:{
            x:150,
            y:600,
            stepX:40,
            stepY:25
        }
    })
    
    keys= this.input.keyboard.createCursorKeys();

    collectable1.children.iterate(function (child) {
        
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });
    collectable2.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.6, 1));

    });
    collectable3.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.2, 0.5));

    });

    

    ScoreText = this.add.text(450, 50, 'score: 0', {
        fontSize: '32px',
        fill: 'white'
        ,border:('dotted','gray')
    });

    TimerText = this.add.text(650,50,'Time: ',{
        fontSize:'30px',
        fill:'lightgreen'
    });
    this.physics.add.collider(player, platform);
    this.physics.add.collider(collectable1, platform);
    this.physics.add.collider(collectable2, platform);
    this.physics.add.collider(collectable3, platform);
    this.physics.add.overlap(player, collectable1, collectable2, collectable3, collectThings1,collectThings2,collectThings3);
}

function update(){
     countdown =timer();
    if(gameover==true){
        return;
    }

    if(keys.space && keys.space.isDown){
        player.anims.play('space',true);
        player.setVelocityY(-110+1);
        }
    else if(keys.left && keys.left.isDown){
        player.anims.play('left',true);
        player.setVelocityX(-110+1);
    }
    else if(keys.right && keys.right.isDown){
        player.anims.play('right',true);
        player.setVelocityX(110+1);
    }
    else{
        player.setVelocityX(0);
        setGravityY();
        TimerText.setText('Time: '+ countdown);
        player.anims.play('turn');
    }
    
}

function collectThings1(){
    collectable1.disableBody(true, true);
    score += 2;
    scoreText.setText('Score: ' + score);
    
    if (collectable1.countActive(true) === 0) {
        collectable1.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

    }


}

function collectThings2(){
    collectable2.disableBody(true, true);
    score += 4;
    scoreText.setText('Score: ' + score);

    if (collectable2.countActive(true) === 0) {
        collectable2.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

    }


}

function collectThings3(){
    collectable3.disableBody(true, true);
    score += 10;
    scoreText.setText('Score: ' + score);

    if (collectable3.countActive(true) === 0) {
        collectable3.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

    }


}

function timer(){
    timeVal=0;
    countdown =timeVal*.01;
    for (var i = 0; i < 0; i++) {
        return(i-.0005)
    }
    console.log('countdown');
    if(countdown==0){
        gameover==true
    }
}

function createCursorKeys()
{
   
    return this.addKeys({
        up: KeyCodes.UP,
        down: KeyCodes.DOWN,
        left: KeyCodes.LEFT,
        right: KeyCodes.RIGHT,
        space: KeyCodes.SPACE,
        shift: KeyCodes.SHIFT
    });
}


function setGravityY()
{
    this.collectable1.gravityY = -100;
    this.collectable1.gravityY = -600;
    this.collectable1.gravityY = 200;
    return this;
}
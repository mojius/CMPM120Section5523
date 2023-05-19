class TammyGame extends Phaser.Scene {
    constructor(){
        super('TammyGame');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('cubes', 'cubes.png')
    }
    create() {
        
        this.graphics = this.add.graphics();
        this.graphics.fillStyle(0x7aff97, 1); //color, opacity
        // Add ellipse with 16 sides
        // Used arbitrary numbers for other arguments of the function
        let x = 450;
        let y = 100;
        let width = 100;
        let height = 100;
        let sides = 16;
        this.graphics.fillEllipse(x, y, width, height, sides);

        this.graphics = this.add.graphics();
        //add shape
        this.graphics.fillStyle(0xff9900, 1);
        this.graphics.fillCircle(200, 300, 100);
        this.graphics.fillRect(400, 500, 100, 50);
        this.graphics.fillEllipse(400, 300, 100, 200, 16);
        

        // add lines
        this.graphics.lineStyle(10, 0xffffff, 0.5);
        this.graphics.lineBetween(100,200,300,400);

        //Gradient rect
        this.graphics.fillGradientStyle(0xff0000, 0xffff00, 0xffff00,0xffff00, 1, 1, 0.1, 0.1);
        this.graphics.fillRect(600,300,100,100);

        //text
        this.textObject = this.add.text(
            10, //x
            500,//y
            "hello!",
            {
                font: "40px Arial",
                color: "brown",
            }
        )

        //image
        this.imageObject = this.add.image(
            300,
            300,
            'cubes',
        )
        this.imageObject.setScale(0.5)
        
        //Tweens
        this.tweens.add({
            targets: this.textObject,
            alpha:-1,
            x:500,
            y:-300,
            duration: 5000,
            ease: 'Linear',
            repeat: -1,
        });

    }
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 1000,
    height: 700,
    backgroundColor: 5991,
    scene: [TammyGame],
}
let game = new Phaser.Game(config);
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(assets.image`dart`, bad_monkey, -100, 0)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    bad_monkey.vy = -300
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    bad_monkey.vy = -300
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    spit = sprites.createProjectileFromSprite(assets.image`spit`, kiwi, 100, 0)
})
let spit: Sprite = null
let dart: Sprite = null
let bad_monkey: Sprite = null
let kiwi: Sprite = null
scene.setBackgroundImage(assets.image`forest`)
kiwi = sprites.create(assets.image`kiwi`, SpriteKind.Player)
kiwi.setPosition(16, 98)
bad_monkey = sprites.create(assets.image`monkey`, SpriteKind.Enemy)
bad_monkey.setPosition(139, 101)
controller.player2.moveSprite(bad_monkey, 100, -100)
controller.player1.moveSprite(kiwi, 0, 100)
game.setGameOverMessage(false, "KO!!!!")
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(bad_monkey, sprites.builtin.forestTiles0)
tiles.placeOnRandomTile(kiwi, sprites.builtin.forestTiles0)
scene.cameraFollowSprite(bad_monkey)
forever(function () {
    if (kiwi.overlapsWith(bad_monkey)) {
        game.gameOver(false)
    }
    kiwi.ay = 500
    bad_monkey.ay = 500
    if (kiwi.isHittingTile(CollisionDirection.Bottom)) {
    	
    }
    controller.player1.moveSprite(kiwi)
    controller.player2.moveSprite(bad_monkey)
    if (true) {
    	
    }
})

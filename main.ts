controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pakke = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . . . 1 . 1 . . . . . . 
        . . 2 2 2 2 2 2 1 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 1 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 1 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 1 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 1 2 2 2 2 2 2 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . 2 2 2 2 2 2 1 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 1 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 1 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 1 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 1 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        `, space_nisse, 200, 0)
    music.pewPew.play()
})
info.onLifeZero(function () {
    music.baDing.play()
    scene.cameraShake(4, 500)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let dragon: Sprite = null
let pakke: Sprite = null
let space_nisse: Sprite = null
space_nisse = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 2 2 2 2 . . 
    . . . . . . . . . 2 2 2 2 2 . . 
    . . . . . . . . 2 2 2 2 3 3 . . 
    . . . . . . . . 2 2 2 3 f 3 . . 
    . . . . . . . . 2 2 3 3 3 3 3 . 
    . . . . . . 1 2 2 2 1 1 1 3 . . 
    . . . . . . . . 1 2 1 1 1 1 . . 
    . . . . 2 2 2 2 2 2 2 2 1 1 . . 
    . . . . 2 2 2 2 2 2 2 2 . 1 . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    2 1 2 2 2 . . . . . 2 2 2 2 2 1 
    2 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
space_nisse.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(space_nisse, 200, 200)
game.onUpdateInterval(500, function () {
    dragon = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 . . . . 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 . . . . 
        . . 2 f f f f 2 2 2 2 2 . . . . 
        . . 2 5 5 f f 2 2 2 2 2 2 2 2 . 
        . 2 2 2 5 f 2 2 2 2 2 2 2 2 2 . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . 2 2 f f f 2 2 2 2 2 2 2 . 
        . . . 5 5 5 f f f f 2 2 2 2 . . 
        . . . f f f 5 f f f f f f f f f 
        . . . f f f f f f f f f f f f f 
        . . . f f f f f . . . f f f f f 
        . . . f f f f f f f f . . . f f 
        . . . . f f f . . f . . . . . . 
        `, SpriteKind.Enemy)
    dragon.setVelocity(-100, 0)
    dragon.setPosition(180, randint(0, 120))
})

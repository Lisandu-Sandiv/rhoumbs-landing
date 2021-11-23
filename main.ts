input.onButtonPressed(Button.AB, function () {
    b = game.createSprite(R.get(LedSpriteProperty.X), R.get(LedSpriteProperty.X))
    for (let index = 0; index < 4; index++) {
        b.change(LedSpriteProperty.Y, 1)
        if (b.isTouching(Roc)) {
            Roc.delete()
        }
        basic.pause(100)
    }
    b.delete()
})
let b: game.LedSprite = null
let Roc: game.LedSprite = null
let R: game.LedSprite = null
R = game.createSprite(2, 0)
Roc = game.createSprite(2, 2)
Roc = game.createSprite(3, 2)
Roc = game.createSprite(4, 1)
Roc = game.createSprite(0, 1)
Roc = game.createSprite(1, 1)
basic.forever(function () {
    basic.pause(1000)
    R.change(LedSpriteProperty.Y, 1)
    basic.pause(2000)
})
basic.forever(function () {
    if (R.isTouching(Roc)) {
        game.gameOver()
    }
})

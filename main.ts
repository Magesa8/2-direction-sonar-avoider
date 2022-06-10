input.onButtonPressed(Button.A, function () {
    startStop()
})
input.onButtonPressed(Button.B, function () {
    startStop()
})
function startStop () {
    moving = !(moving)
    if (moving) {
        basic.showIcon(IconNames.Yes)
    } else {
        cuteBot.stopcar()
        basic.showIcon(IconNames.No)
    }
}
let moving = false
basic.showIcon(IconNames.Chessboard)
moving = false
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
cuteBot.stopcar()
basic.forever(function () {
    while (moving) {
        if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) <= 10) {
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
            cuteBot.moveTime(cuteBot.Direction.backward, 50, 0.25)
            if (Math.randomBoolean()) {
                cuteBot.moveTime(cuteBot.Direction.left, 50, 0.25)
            } else {
                cuteBot.moveTime(cuteBot.Direction.right, 50, 0.25)
            }
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
        } else {
            cuteBot.moveTime(cuteBot.Direction.forward, 50, 0.1)
        }
    }
})

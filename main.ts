controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    screen().drawLine(0, 0, 160, 120, 1)
    screen().drawLine(160, 0, 0, 120, 1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
    screen().fillCircle(0, 0, 20, 3)
    screen().fillCircle(160, 0, 20, 9)
    screen().fillCircle(160, 120, 20, 7)
    screen().fillCircle(0, 120, 20, 5)
})
input.onButtonPressed(Button.A, function () {
    screen().fill(8)
})
input.onButtonPressed(Button.B, function () {
    screen().fill(0)
})

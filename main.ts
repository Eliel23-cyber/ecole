input.onPinPressed(TouchPin.P0, function () {
    servos.P1.setAngle(180)
    servos.P0.setStopOnNeutral(true)
    servos.P0.run(50)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
})

input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(5)
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . . .
        # . . # .
        . # # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # # .
        # . . # .
        # # # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . # # # #
        # . . . .
        . # # # .
        . . . . #
        # # # # .
        `)
})
radio.setGroup(44)
radio.setTransmitPower(7)
basic.showLeds(`
    # # # # .
    # . . . .
    # # # . .
    . . . # .
    # # # # .
    `)

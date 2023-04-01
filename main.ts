function collision (mvx: number, mvy: number) {
    if (led.pointBrightness(plrposx + mvx, plrposy + mvy) > plrbirghtness) {
        edge = 1
    } else if (led.pointBrightness(0 + mvx, plrposy + mvy) < plrbirghtness) {
        edge = 0
    }
}
function plrspawn (plrx: number, plry: number) {
    plrposx = plrx
    plrposy = plry
    led.plotBrightness(plrposx, plrposy, plrbirghtness)
}
function plrmv2 (mvf: number, plraxis: number) {
    if (plraxis == 2) {
        collision(0, mvf)
        if (edge == 0) {
            led.unplot(plrposx, plrposy)
            plrposy = plrposy + mvf
            led.plotBrightness(plrposx, plrposy, plrbirghtness)
        }
    } else if (plraxis == 1) {
        collision(mvf, 0)
        if (edge == 0) {
            led.unplot(plrposx, plrposy)
            plrposx = plrposx + mvf
            led.plotBrightness(plrposx, plrposy, plrbirghtness)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    plrmv(-1, 1)
})
function plrmv (mvf: number, plraxis: number) {
    if (plraxis == 2) {
        collision(0, mvf)
        if (edge == 0) {
            led.unplot(plrposx, plrposy)
            plrposy = plrposy + mvf
            led.plotBrightness(plrposx, plrposy, plrbirghtness)
        }
    } else if (plraxis == 1) {
        collision(mvf, 0)
        if (edge == 0) {
            led.unplot(plrposx, plrposy)
            plrposx = plrposx + mvf
            led.plotBrightness(plrposx, plrposy, plrbirghtness)
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    plrmv(1, 2)
})
input.onButtonPressed(Button.B, function () {
    plrmv(1, 1)
})
input.onGesture(Gesture.Shake, function () {
    invkey = 2
})
function grid () {
    if (plrposx > 4) {
        wordcoord += 1
        Room_spawn(wordcoord, 0, plrposy)
    } else if (plrposx < 0) {
        wordcoord += -1
        Room_spawn(wordcoord, 4, plrposy)
    } else if (plrposy > 4) {
        wordcoord += 10
        Room_spawn(wordcoord, plrposx, 0)
    } else if (plrposy < 0) {
        wordcoord += -10
        Room_spawn(wordcoord, plrposx, 4)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    plrmv(-1, 2)
})
function Room_spawn (wrldcoord: number, plsposx: number, plrposy: number) {
    basic.clearScreen()
    if (wrldcoord == 35) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    } else if (wrldcoord == 44) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
    } else if (wrldcoord == 45) {
        basic.showLeds(`
            # . . . #
            . . . . #
            . . . . .
            . . . . #
            # # . # #
            `)
    } else if (wrldcoord == 46) {
        basic.showLeds(`
            # # # # #
            # . . . #
            . . . . #
            # . . . #
            # # # # #
            `)
    } else if (wrldcoord == 53) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
    } else if (wrldcoord == 54) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (wrldcoord == 55) {
        basic.showLeds(`
            # # . # #
            . . . . .
            . . . . .
            . . . . .
            # # . # #
            `)
    } else if (wrldcoord == 56) {
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (wrldcoord == 57) {
        basic.showLeds(`
            # # # # #
            . . . . #
            . . . . #
            . . . . #
            # # # # #
            `)
    } else if (wrldcoord == 64) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . .
            # . . . #
            # # # # #
            `)
    } else if (wrldcoord == 65) {
        basic.showLeds(`
            # # . # #
            # . . . #
            . . . . .
            # . . . #
            # . . . #
            `)
    } else if (wrldcoord == 66) {
        basic.showLeds(`
            # # # # #
            # . . . #
            . . . . #
            # . . . #
            # # # # #
            `)
    } else if (wrldcoord == 75) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        led.plotBrightness(0, 2, plrbirghtness - 1)
    } else if (wrldcoord == 0) {
        basic.showLeds(`
            # . . # .
            . # . # .
            . . # . .
            # # . . .
            . . . . .
            `)
    } else if (wrldcoord == -1) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . . # . .
            . . . # #
            . . . . .
            `)
    } else if (wrldcoord == -10) {
        basic.showLeds(`
            . . . . .
            # # . . .
            . . # . .
            . . . # .
            . . . # .
            `)
    } else if (wrldcoord == -11) {
        basic.showLeds(`
            . . . . .
            . . . # #
            . . # . .
            . # . # .
            . # . . #
            `)
    } else if (wrldcoord == 69) {
        basic.clearScreen()
        basic.showString("69. nice.")
        start()
    } else if (wrldcoord == -69) {
        basic.clearScreen()
        basic.showString("dayum, dedication!")
        basic.pause(500)
        basic.showString("69. nice.")
        start()
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    plrspawn(plsposx, plrposy)
}
function start () {
    wordcoord = 44
    plrbirghtness = 150
    plrposx = 2
    plrposy = 2
    Room_spawn(wordcoord, plrposx, plrposy)
}
let wordcoord = 0
let invkey = 0
let edge = 0
let plrbirghtness = 0
let plrposy = 0
let plrposx = 0
start()
basic.forever(function () {
    grid()
})

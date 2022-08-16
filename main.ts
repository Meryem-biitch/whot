function genwrld (crntwrld: number) {
    if (crntwrld == 1) {
        Genroom001()
    } else if (crntwrld == 2) {
        Genroom002()
    } else if (crntwrld == 3) {
        Genroom0031()
    }
}
function plrspawn (plrx: number, plry: number) {
    plrposx = plrx
    plrposy = plry
    led.plotBrightness(plrposx, plrposy, plrbirghtness)
}
input.onButtonPressed(Button.A, function () {
    plrmv(-1, 1)
})
function Genroom0032 () {
    crntwrld = 3
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `)
    plrspawn(plrposx, plrposy)
}
function genroom004 () {
    crntwrld = 4
    basic.showLeds(`
        # . . . #
        # . . . .
        # . . . .
        # . . . .
        # . . . #
        `)
    plrspawn(plrposx, plrposy)
}
function Jail () {
    crntwrld = 0
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    plrspawn(2, 2)
}
function plrmv (mvf: number, plraxis: number) {
    if (plraxis == 2) {
        Edge(mvf, 0)
        if (edge == 0) {
            led.unplot(plrposx, plrposy)
            plrposy = plrposy + mvf
            led.plotBrightness(plrposx, plrposy, plrbirghtness)
        } else if (edge == 1) {
        	
        }
    } else if (plraxis == 1) {
        Edge(0, mvf)
        if (edge == 0) {
            led.unplot(plrposx, plrposy)
            plrposx = plrposx + mvf
            led.plotBrightness(plrposx, plrposy, plrbirghtness)
        } else if (edge == 1) {
        	
        }
    }
}
function Genroom002 () {
    crntwrld = 2
    basic.showLeds(`
        # . . . #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `)
    plrspawn(plrposx, plrposy)
    eventtriggx = 3
    eventtriggy = 3
    genchest(3, 3, 1)
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
function genchest (_1x: number, _1y: number, storage: number) {
    led.plotBrightness(_1x, _1y, chestbrightness)
    if (storage == 1) {
        cheststorage = 1
    } else {
        cheststorage = 0
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    plrmv(-1, 2)
})
function Genroom001 () {
    crntwrld = 1
    basic.showLeds(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `)
    plrspawn(2, 2)
}
function start () {
    invkey = 0
    eventtriggx = 0
    eventtriggy = 0
    plrbirghtness = 150
    plrposx = 2
    plrposy = 2
    chestbrightness = 50
    Genroom001()
}
function Genroom0031 () {
    crntwrld = 3
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `)
    plrspawn(plrposx, plrposy)
    eventtriggx = 1
    eventtriggy = 2
    genchest(1, 2, 1)
}
function Edge (mvx: number, mvy: number) {
    if (led.pointBrightness(plrposx + mvx, plrposy + mvy) > plrbirghtness) {
        edge = 1
    } else if (led.pointBrightness(plrposx + mvx, plrposy + mvy) < plrbirghtness) {
        edge = 0
    }
}
let plraxis = 0
let cheststorage = 0
let chestbrightness = 0
let invkey = 0
let eventtriggy = 0
let eventtriggx = 0
let edge = 0
let crntwrld = 0
let plrbirghtness = 0
let plrposy = 0
let plrposx = 0
start()
basic.forever(function () {
    if (crntwrld == 3) {
        if ((plrposx == 2 || plrposx == 3) && plrposy == -1) {
            basic.clearScreen()
            basic.showString("GOOD JOB!")
            basic.pause(1000)
            start()
        } else if ((plrposx == 1 || (plrposx == 2 || plrposx == 3)) && plrposy < -4) {
            Jail()
            basic.pause(8000)
            basic.showString("HAH, rot in jail")
            start()
        }
    }
})
basic.forever(function () {
    if (plrposx > 4 || plrposx < 0) {
        edge = plrposx - 10
        if (edge == -5) {
            plraxis = 2
        } else if (edge == -11) {
            plraxis = 1
        }
        basic.showNumber(plraxis)
        basic.clearScreen()
        genwrld(crntwrld)
    } else if (plrposy > 4 || plrposy < 0) {
        edge = plrposy + 10
        if (edge == 15) {
            plraxis = 4
        } else if (edge == 9) {
            plraxis = 3
        }
        basic.showNumber(plraxis)
        basic.clearScreen()
        genwrld(crntwrld)
    }
})
loops.everyInterval(100, function () {
    if (plrposy == eventtriggy && plrposx == eventtriggx) {
        basic.clearScreen()
        if (crntwrld == 3) {
            basic.showString("KEY1")
            basic.pause(100)
            plrposx = 2
            genwrld(crntwrld)
            invkey = 1
            cheststorage = 0
        } else if (crntwrld == 2) {
            if (invkey == 1) {
                basic.showString("OPEN")
                invkey = 2
            } else {
                basic.showString("LOCKED")
            }
            basic.pause(100)
            plrposx = 2
            genwrld(crntwrld)
        }
    }
})
loops.everyInterval(100, function () {
    if (crntwrld == 1 && plrposx > 4) {
        plrposx = plrposx - 5
        Genroom002()
    } else if (crntwrld == 2 && plrposx < 0) {
        plrposx = plrposx + 5
        Genroom001()
    } else if (crntwrld == 2 && plrposy < 0) {
        if (invkey == 2) {
            plrposy = plrposy + 5
            Genroom0032()
        } else {
            plrposy = plrposy + 5
            Genroom0031()
        }
    } else if (crntwrld == 3 && plrposy > 4) {
        plrposy = plrposy - 5
        Genroom002()
    }
})

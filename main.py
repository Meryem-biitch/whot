def genwrld(crntwrld: number):
    if crntwrld == 1:
        Genroom001()
    elif crntwrld == 2:
        Genroom002()
    elif crntwrld == 3:
        Genroom0031()
def plrspawn(plrx: number, plry: number):
    led.plot_brightness(plrx, plry, plrbirghtness)
def plrmvy(mvf: number):
    global plrposy
    if led.point_brightness(plrposx, plrposy + mvf) > plrbirghtness:
        pass
    else:
        led.unplot(plrposx, plrposy)
        plrposy = plrposy + mvf
        led.plot_brightness(plrposx, plrposy, plrbirghtness)

def on_button_pressed_a():
    plrmvx(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def plrmvx(mvf2: number):
    global plrposx
    if led.point_brightness(plrposx + mvf2, plrposy) > plrbirghtness:
        led.plot_brightness(plrposx, plrposy, plrbirghtness)
    else:
        led.unplot(plrposx, plrposy)
        plrposx = plrposx + mvf2
        led.plot_brightness(plrposx, plrposy, plrbirghtness)
def Genroom0032():
    global crntwrld3
    crntwrld3 = 3
    basic.show_leds("""
        # . . . #
                # . . . #
                # . . . #
                # . . . #
                # . . . #
    """)
    plrspawn(1, 1)
def Genroom002():
    global crntwrld3, eventtriggx, eventtriggy
    crntwrld3 = 2
    basic.show_leds("""
        # . . . #
                . . . . #
                . . . . #
                . . . . #
                # # # # #
    """)
    plrspawn(1, 1)
    eventtriggx = 3
    eventtriggy = 3
    genchest(3, 3, 1)

def on_button_pressed_ab():
    plrmvy(1)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    plrmvx(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global invkey
    invkey = 2
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def genchest(_1x: number, _1y: number, storage: number):
    global cheststorage
    led.plot_brightness(_1x, _1y, chestbrightness)
    if storage == 1:
        cheststorage = 1
    else:
        cheststorage = 0

def on_logo_pressed():
    plrmvy(-1)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def Genroom001():
    global crntwrld3
    crntwrld3 = 1
    basic.show_leds("""
        # # # # #
                # . . . .
                # . . . .
                # . . . .
                # # # # #
    """)
    plrspawn(1, 1)
def genwrld2(crntwrld2: number):
    pass
def Genroom0031():
    global crntwrld3, eventtriggx, eventtriggy
    crntwrld3 = 3
    basic.show_leds("""
        # # # # #
                # . . . #
                # . . . #
                # . . . #
                # . . . #
    """)
    plrspawn(1, 1)
    eventtriggx = 1
    eventtriggy = 2
    genchest(1, 2, 1)
cheststorage = 0
crntwrld3 = 0
chestbrightness = 0
plrposy = 0
plrposx = 0
plrbirghtness = 0
eventtriggy = 0
eventtriggx = 0
invkey = 0
invkey = 0
eventtriggx = 0
eventtriggy = 0
plrbirghtness = 150
plrposx = 2
plrposy = 2
chestbrightness = 50
Genroom001()

def on_every_interval():
    global plrposx, plrposy, invkey, cheststorage
    if crntwrld3 == 1 and plrposx > 4:
        plrposx = plrposx - 5
        Genroom002()
    elif crntwrld3 == 2 and plrposx < 0:
        plrposx = plrposx + 5
        Genroom001()
    elif crntwrld3 == 2 and plrposy < 0:
        if invkey == 2:
            plrposy = plrposy + 5
            Genroom0032()
        else:
            plrposy = plrposy + 5
            Genroom0031()
    elif crntwrld3 == 3 and plrposy > 4:
        plrposy = plrposy - 5
        Genroom002()
    if plrposy == eventtriggy and plrposx == eventtriggx:
        basic.clear_screen()
        if crntwrld3 == 3:
            basic.show_string("KEY1")
            basic.pause(100)
            plrposx = 2
            genwrld(crntwrld3)
            invkey = 1
            cheststorage = 0
        elif crntwrld3 == 2:
            if invkey == 1:
                basic.show_string("OPEN")
                invkey = 2
            else:
                basic.show_string("LOCKED")
            basic.pause(100)
            plrposx = 2
            genwrld(crntwrld3)
    if (plrposx == 2 or plrposx == 3) and plrposy == -1:
        basic.clear_screen()
        basic.show_string("GOOD JOB!")
        genwrld(1)
        plrposx = 2
        plrposy = 2
    elif plrposy < -4:
        basic.clear_screen()
        basic.show_leds("""
            # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
        """)
        plrposx = 2
        plrposy = 2
        plrspawn(1, 1)
        basic.pause(5000)
        basic.show_string("HAH, jail")
        basic.pause(1000)
        genwrld(1)
loops.every_interval(100, on_every_interval)

def my_function():
    pass
cuteBot.track_event(cuteBot.MbPins.LEFT, cuteBot.MbEvents.FIND_LINE, my_function)

basic.show_icon(IconNames.HEART)

def on_forever():
    cuteBot.forward()
    basic.pause(200)
    cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0xff0000)
    cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0x000000)
    cuteBot.motors(100, 40)
    basic.pause(1000)
    cuteBot.color_light(cuteBot.RGBLights.ALL, 0xffffff)
    cuteBot.forward()
    basic.pause(200)
    cuteBot.color_light(cuteBot.RGBLights.RGB_L, 0xff0000)
    cuteBot.color_light(cuteBot.RGBLights.RGB_R, 0x000000)
    cuteBot.motors(40, 100)
    basic.pause(1000)
    cuteBot.color_light(cuteBot.RGBLights.ALL, 0xffffff)
    cuteBot.forward()
    basic.pause(200)
basic.forever(on_forever)

Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
basic.forever(function () {
    if (true) {
    	
    } else {
    	
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.No)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.Off)
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.On)
        basic.pause(5000)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Green, Kitronik_STOPbit.DisplayLights.Off)
        basic.clearScreen()
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.On)
        basic.pause(500)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Yellow, Kitronik_STOPbit.DisplayLights.Off)
        basic.pause(500)
        Kitronik_STOPbit.trafficLightLED(Kitronik_STOPbit.LightColours.Red, Kitronik_STOPbit.DisplayLights.On)
        basic.showIcon(IconNames.No)
    }
})

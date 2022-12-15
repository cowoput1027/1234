basic.forever(function () {
    if (mooncar.LineFollowerSensor() == 0) {
        mooncar.MoonCarGo(mooncar.Direction.direct1, 100)
    } else if (mooncar.LineFollowerSensor() == 1) {
        mooncar.MoonCarGo(mooncar.Direction.direct3, 75)
    } else if (mooncar.LineFollowerSensor() == 2) {
        mooncar.MoonCarGo(mooncar.Direction.direct4, 75)
    } else {
        for (let index = 0; index < 10; index++) {
            mooncar.MoonCarLR(10, -10)
            if (mooncar.LineFollowerSensor() != 3) {
                break;
            }
            basic.pause(100)
        }
        for (let index = 0; index < 20; index++) {
            mooncar.MoonCarLR(-10, 10)
            if (mooncar.LineFollowerSensor() != 3) {
                break;
            }
            basic.pause(100)
        }
    }
})
basic.forever(function () {
    basic.showNumber(mooncar.LineFollowerSensor())
})

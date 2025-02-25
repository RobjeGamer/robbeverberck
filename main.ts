let getal = 0
let als_getal_kleiner_is_dan = 12
basic.forever(function () {
    while (true) {
        basic.showNumber(getal)
        if (als_getal_kleiner_is_dan) {
            getal += 3
        } else {
            basic.showNumber(getal)
        }
    }
})

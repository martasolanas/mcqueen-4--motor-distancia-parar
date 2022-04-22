let DISTANCIA = 0
basic.forever(function () {
    DISTANCIA = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (DISTANCIA > 0 && DISTANCIA <= 10) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
    }
})

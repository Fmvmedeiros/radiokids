radio.onReceivedNumber(function (receivedNumber) {
    freq = receivedNumber
    freq = freq % 2000
    freq = freq + 300
    led.plotBarGraph(
    freq,
    2000
    )
    music.playTone(freq, music.beat(BeatFraction.Whole))
    basic.clearScreen()
})
let freq = 0
radio.setGroup(5)
music.setTempo(208)
basic.forever(function () {
	
})
